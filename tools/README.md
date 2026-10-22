# tools

Bronbestanden voor afbeeldingen die niet met de hand getekend worden. Ze worden niet gepubliceerd (`_config.yml` sluit `tools` uit).

- `og-image.html`: deelafbeelding voor sociale media, `assets/img/og-image.png` (1200 x 630).
- `icoon.html`: favicon en app-icoon. `?s=180` geeft `assets/img/apple-touch-icon.png`, `?s=32` de PNG binnen `favicon.ico`.

Opnieuw maken met Chrome (Git Bash, vanuit de hoofdmap van de repo):

```bash
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --hide-scrollbars --window-size=1200,630 --screenshot="$(cygpath -w "$PWD/assets/img/og-image.png")" "file:///$(cygpath -m "$PWD")/tools/og-image.html"
```
