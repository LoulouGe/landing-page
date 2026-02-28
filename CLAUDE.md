# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

Personal landing page for a 12-year-old French-speaking developer. Links to her other GitHub Pages projects. All user-facing text (UI, comments to the user, README) must be in French. Code identifiers and code comments can remain in English.

GitHub username: LoulouGe
Live site: https://loulouge.github.io/landing-page/

## Development

No build tools, no package manager, no dependencies. Pure vanilla HTML/CSS/JS.

```bash
# Run local dev server
python3 -m http.server 8080
# Then open http://localhost:8080
```

Alternatively, use VS Code Live Server extension.

Deployed automatically via GitHub Pages from `main` branch — no build step needed.

## Architecture

Single-page site with three files at the root:

- **index.html** — Page structure with logo, title, and project cards
- **style.css** — Styling with a playful pastel palette, responsive grid layout
- **script.js** — Lightweight interactivity and animations

### Project Cards

Each card links to one of her other GitHub Pages projects:

- **vocabulary** — Jeu de vocabulaire anglais-français
- **calculus** — Entraînement au calcul mental
- **emperors** — Apprendre les empereurs romains
- **chicken-geo** — Jeu de géographie

### Assets

- **logo.png** — Personal logo displayed at the top of the page

## Code Conventions

- Prettier for formatting (auto-format on save via VS Code workspace config)
- Google Fonts loaded via CSS
- Mobile-first responsive design
