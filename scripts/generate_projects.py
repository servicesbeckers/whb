from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ASSETS_DIR = ROOT / "assets" / "projects"
OUTPUT_DIR = ROOT / "_projects"
IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".svg"}
META_PATTERN = re.compile(r"^(Materiaal|Categorie|Toepassing|Samenvatting|Titel|Material|Category|Application|Summary|Title):\s*(.+)$", re.I)


def fallback_title(raw_name: str) -> str:
    return raw_name.strip()


def parse_readme(path: Path, slug: str) -> dict[str, str]:
    data = {
        "title": fallback_title(slug),
        "material": "",
        "category": "",
        "application": "",
        "summary": "",
        "body": "",
    }
    if not path.exists():
        return data

    text = path.read_text(encoding="utf-8").strip()
    if not text:
        return data

    lines = text.splitlines()
    body_lines: list[str] = []

    if lines and lines[0].startswith("# "):
        data["title"] = lines[0][2:].strip()
        lines = lines[1:]

    parsing_meta = True
    for line in lines:
        stripped = line.strip().lstrip("-*")
        if parsing_meta:
            match = META_PATTERN.match(stripped)
            if match:
                key = match.group(1).lower()
                value = match.group(2).strip()
                if key in {"materiaal", "material"}:
                    data["material"] = value
                elif key in {"categorie", "category"}:
                    data["category"] = value
                elif key in {"toepassing", "application"}:
                    data["application"] = value
                elif key in {"samenvatting", "summary"}:
                    data["summary"] = value
                elif key in {"titel", "title"}:
                    data["title"] = value
                continue
            if stripped == "":
                continue
            parsing_meta = False
        body_lines.append(line)

    body = "\n".join(body_lines).strip()
    if body:
        data["body"] = body
    elif data["summary"]:
        data["body"] = data["summary"]
    return data


def collect_images(folder: Path) -> list[Path]:
    return sorted(
        p
        for p in folder.iterdir()
        if p.is_file() and p.suffix.lower() in IMAGE_EXTS
    )


def yaml_escape(value: str) -> str:
    return value.replace('"', '\\"')


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for old in OUTPUT_DIR.glob("*.md"):
        old.unlink()

    if not ASSETS_DIR.exists():
        return

    for folder in sorted(p for p in ASSETS_DIR.iterdir() if p.is_dir() and not p.name.startswith(".")):
        slug = folder.name
        images = collect_images(folder)
        meta = parse_readme(folder / "ProjectInfo.md", slug)
        cover = f"/assets/projects/{slug}/{images[0].name}" if images else ""
        body = meta["body"] or "Praktisch maatwerkproject in uitvoering volgens toepassing en materiaalkeuze."

        page = f"""---
title: \"{yaml_escape(meta['title'])}\"
slug: \"{slug}\"
material: \"{yaml_escape(meta['material'])}\"
category: \"{yaml_escape(meta['category'])}\"
application: \"{yaml_escape(meta['application'])}\"
summary: \"{yaml_escape(meta['summary'])}\"
cover: \"{cover}\"
---

{body}
"""
        (OUTPUT_DIR / f"{slug}.md").write_text(page, encoding="utf-8")


if __name__ == "__main__":
    main()
