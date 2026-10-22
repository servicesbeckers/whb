// Scant de sitetekst op patronen uit verboden.json. Geen dependencies, draait met gewone Node.
// Gebruik: node .claude/skills/tekstcontrole/check.mjs   (exit 1 bij meldingen)
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const root = join(here, '..', '..', '..');
const regels = JSON.parse(readFileSync(join(here, 'verboden.json'), 'utf8'));
const TALEN = ['nl', 'fr', 'en', 'de'];
const OVERSLAAN = new Set(['_site', '.claude', '.git', 'node_modules', 'vendor', '.jekyll-cache', 'assets']);

// Letterlijke teksten die wel mogen, ook al bevatten ze een verboden patroon.
const TOEGESTAAN = regels.toegestaan || [];

function bestanden(dir) {
  const uit = [];
  for (const naam of readdirSync(dir)) {
    if (OVERSLAAN.has(naam)) continue;
    const pad = join(dir, naam);
    if (statSync(pad).isDirectory()) uit.push(...bestanden(pad));
    else if (/\.(ya?ml|html|md)$/.test(naam) && !/^_config\.yml$|CLAUDE\.md|README\.md/.test(naam)) uit.push(pad);
  }
  return uit;
}

function taalVan(rel) {
  const delen = rel.split(sep);
  const yml = rel.match(/i18n[\\/](nl|fr|en|de)\.ya?ml$/);
  if (yml) return yml[1];
  if (TALEN.includes(delen[0])) return delen[0];
  return 'nl';
}

// Haal enkel leesbare tekst uit een regel: geen HTML-tags, geen Liquid, geen YAML-sleutels, geen URL's.
function tekstVan(regel, isYaml) {
  let t = regel;
  if (isYaml) {
    if (/^\s*#/.test(t)) return '';
    t = t.replace(/^\s*-\s+/, '').replace(/^\s*[\w-]+:\s*[|>]?-?\s*/, '');
  }
  t = t.replace(/<script[\s\S]*?<\/script>/gi, ' ')
       .replace(/<!--[\s\S]*?-->/g, ' ')
       .replace(/{%[\s\S]*?%}|{{[\s\S]*?}}/g, ' ')
       .replace(/<[^>]+>/g, ' ')
       .replace(/https?:\/\/\S+|mailto:\S+|tel:\S+/g, ' ');
  for (const ok of TOEGESTAAN) t = t.split(ok).join(' ');
  return t;
}

let meldingen = 0;
for (const pad of bestanden(root)) {
  const rel = relative(root, pad);
  const taal = taalVan(rel);
  const isPrivacy = (regels.uitzonderingen_bestanden || []).some(n => rel.includes(n));
  const lijst = [...regels.alle, ...(regels[taal] || [])];
  const isYaml = /\.ya?ml$/.test(rel);
  let inScript = false;
  let inStyle = false;
  readFileSync(pad, 'utf8').split(/\r?\n/).forEach((regel, i) => {
    if (/<script/i.test(regel)) inScript = true;
    if (inScript) { if (/<\/script>/i.test(regel)) inScript = false; return; }
    if (/<style/i.test(regel)) inStyle = true;
    if (inStyle) { if (/<\/style>/i.test(regel)) inStyle = false; return; }
    const tekst = tekstVan(regel, isYaml);
    if (!tekst.trim()) return;
    for (const r of lijst) {
      // Ik-vorm-regels (wij/we/nous/wir) gelden niet in de privacyverklaring.
      if (isPrivacy && /Ik-vorm|Je-vorm|Ich-Form/.test(r.reden)) continue;
      const re = new RegExp(r.patroon, r.hoofdlettergevoelig ? 'u' : 'iu');
      const m = tekst.match(re);
      if (!m) continue;
      if (r.uitzondering && new RegExp(r.uitzondering, 'iu').test(tekst)) continue;
      meldingen++;
      console.log(`${rel}:${i + 1} [${taal}] "${m[0].trim()}" -> ${r.reden}\n    ${tekst.trim().slice(0, 140)}`);
    }
  });
}

console.log(meldingen ? `\n${meldingen} melding(en).` : 'Geen meldingen.');
process.exit(meldingen ? 1 : 0);
