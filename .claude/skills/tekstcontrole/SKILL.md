---
name: tekstcontrole
description: Controleer de teksten van werkhuizenbeckers.be (NL, FR, EN, DE) op AI-taal, verboden claims en huisstijlregels. Gebruik na elke tekstwijziging, voor een commit of livegang, of als de gebruiker vraagt om "tekstcontrole", "teksten nalezen" of "klinkt dit als AI".
---

# Tekstcontrole

Doel: elke tekst op de site moet klinken alsof Lander hem zelf schreef. Nuchter, concreet, vakmanstaal. Niets mag verraden dat een AI meeschreef, en niets mag een claim maken die juridisch niet klopt.

## Stap 1: automatische scan
Draai vanuit de hoofdmap van de repo:

```bash
node .claude/skills/tekstcontrole/check.mjs
```

Het script leest `_data/i18n/*.yml`, alle `.html` en `.md` buiten `_site/` en `.claude/`, en zoekt naar de patronen in `verboden.json`: gedachtestreepjes, holle woorden per taal, verboden claims (certificaten, prijzen, reactietijden), het oude BTW-nummer, emoji en uitroeptekens. Exit code 1 als er iets gevonden is.

Elke melding oplossen door de zin te herschrijven, niet door het woord te vervangen door een synoniem.

## Stap 2: lezen als een mens
De scan vangt niet alles. Lees daarna elke gewijzigde tekst in alle vier de talen en let op:

1. **Ritme.** Drie zinnen na elkaar met dezelfde opbouw? Herschrijf er één. AI-tekst heeft een te regelmatig ritme.
2. **Opsommingen van drie.** "Snel, betrouwbaar en vakkundig" is een typisch AI-patroon. Kies het ene woord dat klopt, of maak het concreet.
3. **Vage woorden.** "Diverse", "allerhande", "een breed gamma", "kwalitatief". Vervang door een echt voorbeeld uit de praktijk (staal, inox, alu; een kipper, een transportband, een persframe).
4. **Ik-vorm.** NL in de ik-vorm met "u". Nooit "wij", "we", "ons team". FR: "je" en "vous". DE: "ich" en "Sie". EN: "I" en "you".
5. **Vertaling.** FR en DE mogen niet als een vertaling lezen. Een Belgische Franstalige klant zegt "soudure sur site", "dépannage", "machine à l'arrêt". Een Duitstalige klant zegt "Schweißarbeiten vor Ort", "Maschinenstillstand", "Instandsetzung".
6. **Claims.** Zie de harde regels in `CLAUDE.md`. Geen prijzen, geen reactietijd, geen certificaten die er niet zijn, geen "dragende constructies".
7. **Lengte.** Als een zin weg kan zonder dat de klant iets mist, schrap hem.

## Stap 3: rapport
Geef per bestand en taal: wat je aangepast hebt (voor en na), en wat je twijfelachtig vindt maar liet staan, met de reden. Vraag de gebruiker niets wat je zelf kan beslissen.
