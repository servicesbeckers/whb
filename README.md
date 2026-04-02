# Beckers Services website

Jekyll-site voor GitHub Pages, opgebouwd voor een B2B-profiel in lasmaatwerk.

## Live zetten op GitHub Pages

1. push alles naar de `main` branch
2. ga in GitHub naar **Settings > Pages**
3. kies **Build and deployment: GitHub Actions**
4. push opnieuw of start de workflow handmatig

De workflow in `.github/workflows/pages.yml`:
- bouwt de site
- maakt automatisch projectpagina's uit de projectmappen
- publiceert naar GitHub Pages

## Nieuwe projecten toevoegen

Maak voor elk project een nieuwe map in:

```text
assets/projects/project-naam/
```

Voorbeeld:

```text
assets/projects/inox-werktafel/
├─ 01.jpg
├─ 02.jpg
└─ README.md
```

### Hoe werkt het?

- de mapnaam wordt de slug van het project
- alle foto's in de map verschijnen automatisch op de projectpagina
- `README.md` is optioneel maar aanbevolen
- tijdens GitHub Actions wordt automatisch een projectpagina gegenereerd in `_projects/`

## Structuur van README.md in een projectmap

Gebruik dit formaat:

```md
# Inox werktafel op maat
Materiaal: Inox
Categorie: Werktafel
Toepassing: Voedingsomgeving
Samenvatting: Compact maatwerk in inox voor een duurzame werkopstelling.

Korte vrije beschrijving van het project.
U mag hier meerdere alinea's gebruiken.
```

### Ondersteunde velden

- `Materiaal:`
- `Categorie:`
- `Toepassing:`
- `Samenvatting:`
- `Titel:` (optioneel als u geen `# Titel` gebruikt)

## Lokale preview

```bash
bundle install
python3 scripts/generate_projects.py
bundle exec jekyll serve
```

## Aanpassen van contactgegevens

Zoek en vervang deze placeholders:

- `info@beckersservices.be`
- `+32 0 00 00 00 00`
- `Gingelom, België`
