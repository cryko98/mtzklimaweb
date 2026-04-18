# MTZ Klíma — Development Guidelines

## Project Overview

Website for **MTZ Klíma**, a Hungarian tractor air conditioning specialist based in Debrecen.
The site presents services, products, and contact information in Hungarian.

## Tech Stack

- **Preferred**: Vanilla HTML/CSS/JS — no framework unless complexity justifies it
- **If a build tool is needed**: Astro (static output, no JS framework)
- **Styling**: Plain CSS; no Tailwind or CSS-in-JS
- **Deployment**: GitHub Pages — no Vercel, no other hosting
- **Package manager**: npm (only if using Astro)

Default to the simplest option that gets the job done. Reach for Astro only if the site needs templating, partials, or content collections. Never add a JS framework (React, Vue, etc.) unless there is a concrete, unavoidable reason.

## Language

All user-facing content is written in **Hungarian**. Code identifiers (variables, functions, classes) may be English. Comments may be in either language, whichever is clearer.

## Code Style

- Semantic HTML5 — use `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` correctly
- CSS: BEM-style class names (`block__element--modifier`); no inline styles
- JavaScript: vanilla ES2020+, no bundler required for simple pages
- No TypeScript unless using Astro
- File names: `kebab-case` for all files
- One HTML file per page; shared markup extracted into Astro components or server-side includes if using a build tool

## Architecture (vanilla)

```
/
├── index.html
├── szolgaltatasok.html   # Services
├── kapcsolat.html        # Contact
├── css/
│   └── style.css
├── js/
│   └── main.js
└── img/
```

## Architecture (Astro, if adopted)

```
src/
├── pages/
├── components/
├── layouts/
└── assets/
```

## Security

- Never commit secrets or API keys — use `.env` (gitignored) for any keys
- Sanitize any user-supplied values before inserting into the DOM
- Contact forms: validate on both client and server side (or use a third-party form service)
- HTTPS enforced via GitHub Pages

## Performance

- Images: WebP format, explicit `width`/`height`, `loading="lazy"` for below-fold images
- Prefer CSS transitions over JS animations
- No unnecessary third-party scripts; load fonts from self-hosted or system stack when possible
- Target Lighthouse score ≥ 90 on mobile

## Accessibility

- All interactive elements keyboard-accessible with visible focus styles
- Images: descriptive `alt` in Hungarian; `alt=""` for decorative images
- Color contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text
- `lang="hu"` on the `<html>` element

## Git

- Branch naming: `feat/leiras`, `fix/leiras`, `chore/leiras`
- Commits: imperative mood — "Add kapcsolat oldal", not "Added page"
- One logical change per commit
- `main` branch deploys to GitHub Pages

## Deployment

GitHub Pages serves the `main` branch (or a `/docs` folder — configure in repo settings).
No CI pipeline required unless Astro is adopted; Astro builds go through a GitHub Actions workflow.

## Commands (Astro only)

```bash
npm run dev      # local dev server
npm run build    # static build → dist/
npm run preview  # preview build locally
```
