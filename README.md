# Beckers Services - GitHub Pages starter

Professionele Jekyll-site voor GitHub Pages met:

- aangepaste B2B-homepage
- projectenoverzicht
- automatische projectpagina's
- dynamische galerijen per projectmap
- optionele `README.md` per projectmap

## Nieuwe projecten toevoegen

Maak een map onder:

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

### Optionele README in de projectmap

```md
# Inox werktafel op maat
Materiaal: Inox
Categorie: Werktafel
Toepassing: Voedingsomgeving
Samenvatting: Compact maatwerk in inox voor een duurzame werkopstelling.

Korte beschrijving van het project.
```

Na een build of deploy wordt automatisch een pagina aangemaakt in `_projects/`.

## Lokaal testen

```bash
python scripts/generate_projects.py
bundle install
bundle exec jekyll serve --livereload
```

Open daarna:

```text
http://127.0.0.1:4000
```

## Deploy op GitHub Pages

1. Push naar `main`
2. Zorg dat **Settings -> Pages -> Source** op **GitHub Actions** staat
3. De workflow in `.github/workflows/pages.yml` bouwt en deployt de site automatisch

## Nog aanpassen

Vervang zeker deze placeholders:

- e-mailadres
- telefoonnummer
- regio
- eventuele voorbeeldprojecten
