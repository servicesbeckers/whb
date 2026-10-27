# werkhuizenbeckers.be

Statische Jekyll-site op GitHub Pages (build via `.github/workflows/pages.yml`). Domein werkhuizenbeckers.be, DNS bij mijn.host. Geen backend.

## Wat de site verkoopt
B2B, ter plaatse met een uitgeruste servicewagen. Vijf diensten:
1. Laswerk op locatie: staal, inox, alu, gietijzer; MMA, MIG/MAG, TIG; hardoplassen en opbouwlassen; bouten uitboren, schroefdraad herstellen. De servicewagen enkel algemeen beschrijven ("uitgerust voor alle laswerken"); geen specifieke toestellen of uitrusting noemen (geen plasma, gutsen, magneetboor, ...).
2. Herstelling en onderhoud: staal, machines en installaties (mechanisch, elektrisch, pneumatisch, hydraulisch, stoom).
3. Machine terug in leven na een crash.
4. Engineering, besturing en robots: CAD in Autodesk Inventor (ook als losse opdracht), PLC en machinebesturing (geen merknamen), robotprogramma's aanpassen bij KUKA, ABB en FANUC.
5. Dringende interventie.

Niet aanbieden: machinebouw vanaf nul, softwareontwikkeling (.NET/C#), MES/ERP.

## Talen
- NL is de standaard op `/`. FR op `/fr/`, EN op `/en/`, DE op `/de/`.
- Alle teksten staan in `_data/i18n/<taal>.yml`. Een tekst wijzigen gebeurt daar, nooit in de HTML.
- Elke wijziging in alle vier de talen doorvoeren. FR: Belgisch Frans, "vous". DE: "Sie". EN: neutraal zakelijk.
- NL spreekt de klant aan met "u".
- De site bestaat in vier talen, maar contact gebeurt in het Nederlands, Engels en Duits. Nergens beloven dat er in het Frans gecommuniceerd wordt (ook niet in JSON-LD `knowsLanguage`/`availableLanguage`).
- Werkgebied: tot ongeveer een uur rijden vanuit Gingelom (kaart: ringen op 30 en 60 km), verder in overleg.

## Toon: niet helemaal alleen, maar ook geen team
- Werkhuizen Beckers als onderwerp ("Werkhuizen Beckers komt ter plaatse") of neutrale en passieve zinnen ("Lassen gebeurt waar de machine staat").
- De ik-vorm enkel in de sectie "Over" (Lander als zaakvoerder).
- Nooit "wij", "we", "ons team": dat suggereert meerdere mensen.
- Ook nooit "één persoon", "eenmanszaak", "Lander komt zelf": dat suggereert dat hij alleen werkt.

## Harde regels voor de inhoud
- Geen prijzen, tarieven, toeslagen, ook geen "prijs op aanvraag".
- Geen reactietijd, geen "24/7", geen "binnen x uur".
- Niet vermelden: "gecertificeerd lasser", ISO 9606, EN 1090, CE-markering, "dragende constructies". Wel: "constructiewerk en maatwerk in overleg".
- Wel vermelden: VCA VOL, BA4/BA5, heftruckattest, verzekerd (BA uitbating en beroepsaansprakelijkheid).
- Machineveiligheid enkel algemeen ("veilig hersteld en terug in gebruik").
- Elektriciteit enkel aan machines. Geen gebouwinstallaties, geen AREI.
- Laswerk aan stoomleidingen enkel "in overleg". Geen claims over lasserskwalificatie, drukapparatuur of keuring.
- Spoed is in de eerste plaats voor vaste klanten; andere aanvragen volgens beschikbaarheid.
- Adres: enkel "Gingelom – Sint-Truiden". Geen straat of huisnummer, ook niet in JSON-LD.
- BTW: BE 1041 720 216. Het oude nummer BE 1009.384.770 mag nergens meer voorkomen.
- Geen stockfoto's die doen alsof het eigen werk is. Ontbrekende foto's zijn placeholders met `TODO-FOTO`.

## Schrijfstijl: niet als AI klinken
Na elke tekstwijziging de skill `tekstcontrole` draaien. De kern:
- Geen gedachtestreepje (— of –) en geen `--` in lopende tekst. Gebruik een punt, komma of dubbelpunt. Een streepje tussen twee plaatsnamen ("Gingelom – Sint-Truiden") of in een bereik mag wel.
- Geen holle marketingwoorden: naadloos, ontdek, uw partner in, op maat gemaakt, tot in de puntjes, passie, oplossingen op maat, kwaliteit staat centraal, innovatief, één aanspreekpunt voor al uw. Zie de volledige lijst per taal in `.claude/skills/tekstcontrole/verboden.json`.
- Geen "niet alleen ... maar ook", geen "of het nu gaat om", geen retorische vraag die je zelf beantwoordt (behalve de FAQ-vragen).
- Geen reeksen van drie bijvoeglijke naamwoorden. Geen emoji. Geen uitroeptekens.
- Korte zinnen, vakmanstaal, concreet. "Een gescheurde chassisbalk van een kipper" is beter dan "diverse herstellingen".

## Designregels
- Kleuren uit het logo (zie `assets/css/style.scss`, sectie merkkleuren): steenblauw #1f3a47, steenblauw diep #142731, terracotta #9a4a2f, terracotta licht #dc9370, inkt #1c1a16, zand #efece6, papier #faf7f2, crème #f6f2ea, grijs #5a5148. Geen andere tinten erbij verzinnen.
- "Beckers" nooit in steenblauw, "Werkhuizen" nooit in terracotta.
- Fonts staan lokaal in `assets/fonts/` (geen Google Fonts, voor GDPR en snelheid): IBM Plex Serif voor titels, IBM Plex Sans voor tekst, DM Mono voor labels.
- Uitstraling: werkplaats en industrieel. Donker steenblauw, terracotta-accenten, motieven van het machineplaatje (schroefhoeken, gestanste labels in DM Mono), strakke lijnen, rechte hoeken.
- Niet doen: verlopen in paars of blauw, glaseffecten, zachte schaduwen overal, ronde pillen-knoppen, rasters van identieke kaartjes met een icoontje, generieke icoonsets, decoratieve emoji.
- Mobile-first. Op mobiel altijd een sticky balk onderaan met Bel, WhatsApp en Foto sturen.
- Geen automatische woordafbreking in titels. Past een lang woord niet op gsm, zet dan een zacht afbreekteken (`­`) op een logische plaats in de yml (bv. "Maschinen­reparatur").

## Contactgegevens
Telefoon en WhatsApp Business: +32 456 16 40 51 (staat centraal in `_config.yml` onder `bedrijf`). Het oude nummer 0476 06 32 85 mag nergens meer voorkomen.

## SEO
Titel hoogstens ±65 tekens, meta description hoogstens ±155 tekens (anders knipt Google af). Kaart: enkel grotere, herkenbare steden, gespreid binnen de ring van 60 km; nieuwe steden ook toevoegen aan `plaatsen`, `kaart_alt` en de stedenlijst in `_includes/jsonld.html`.
Per taal: eigen `<title>`, meta description, `lang`, canonical, `hreflang` voor alle vier de talen plus `x-default` naar NL, Open Graph, en JSON-LD `LocalBusiness` zonder straatadres en zonder `priceRange`. Bij twijfel de skills `technical-seo`, `schema-markup`, `on-page-seo` en `content-translation` gebruiken.

## Formulier
Web3Forms (gratis plan, geen bestandsupload), in `_includes/contactformulier.html`. De access key staat in `_config.yml` (`web3forms_key`) en is publiek-veilig; inzendingen gaan naar newleads@werkhuizenbeckers.be. Foto's komen via WhatsApp of mail. Telefoon en e-mail staan uitgeschreven onder de knoppen in de hero.

## Structuur
- `index.html`, `fr/index.html`, `en/index.html`, `de/index.html`: startpagina per taal (`layout: home`, `ref: home`).
- `privacy.html`, `fr/confidentialite.html`, `en/privacy.html`, `de/datenschutz.html`: privacy per taal (`ref: privacy`).
- Pagina's met dezelfde `ref` zijn elkaars vertaling; daaruit volgen hreflang, taalkiezer en `sitemap.xml`.
- `diensten.html`, `aanpak.html`, `over.html`, `contact.html`: doorverwijzingen van de oude site.
- `tools/`: bronnen voor de deelafbeelding en de iconen (niet gepubliceerd).
