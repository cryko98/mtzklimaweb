# Claude Web — Development Guidelines

## Project Overview

This is a professional web application project. Follow these guidelines in all work.

## Tech Stack Defaults

- **Framework**: React 19 with TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Bundler**: Vite
- **Testing**: Vitest + Testing Library
- **Package manager**: npm

Adjust per actual stack as the project evolves.

## Code Style

- TypeScript strict mode — no `any`, no `// @ts-ignore`
- Functional components only; no class components
- Named exports only; no default exports except for route-level pages
- File names: `kebab-case.ts` for utilities, `PascalCase.tsx` for components
- Keep components under 200 lines; extract logic into hooks when state/effects grow complex
- Co-locate tests next to source files (`foo.test.ts` beside `foo.ts`)

## Architecture

- `src/components/` — shared, reusable UI components
- `src/features/` — feature-scoped modules (own components, hooks, types)
- `src/hooks/` — shared custom hooks
- `src/lib/` — third-party adapters and utility wrappers
- `src/types/` — shared TypeScript types and interfaces
- `src/api/` — API client functions (one file per resource)

No barrel files (`index.ts` re-exports) unless the public API of a feature module needs to be stable.

## Security

- Never commit secrets, API keys, or credentials — use `.env.local` (gitignored)
- Sanitize all user input before rendering; avoid `dangerouslySetInnerHTML`
- Use `Content-Security-Policy` headers in production
- Validate and type-check all data from external APIs at the boundary (use Zod or equivalent)
- HTTPS-only; no mixed content

## Performance

- Lazy-load routes and heavy components with `React.lazy`
- Memoize expensive computations with `useMemo`; avoid premature memoization of callbacks
- Prefer CSS transitions over JS animations
- Images: use modern formats (WebP/AVIF), explicit `width`/`height`, `loading="lazy"` for below-fold images

## Accessibility

- All interactive elements must be keyboard-accessible and have visible focus styles
- Images require descriptive `alt` text (empty `alt=""` for decorative images)
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<button>`) before reaching for `<div>`
- ARIA attributes only when semantic HTML is insufficient
- Color contrast ratio ≥ 4.5:1 for normal text, ≥ 3:1 for large text

## Git

- Branch naming: `feat/description`, `fix/description`, `chore/description`
- Commits: imperative mood, present tense — "Add login form", not "Added login form"
- One logical change per commit; squash fixup commits before merging
- PRs require passing CI before merge

## Testing

- Unit tests for all utility functions and custom hooks
- Component tests for non-trivial UI behavior (user interactions, conditional rendering)
- Avoid testing implementation details; test observable behavior
- No snapshot tests

## Environment Variables

Prefix all client-side env vars with `VITE_`. Server-side secrets must never be prefixed with `VITE_`.

```
VITE_API_BASE_URL=https://api.example.com
```

## Commands

```bash
npm run dev          # start dev server
npm run build        # production build
npm run preview      # preview production build locally
npm run test         # run tests
npm run lint         # lint
npm run typecheck    # type-check without emitting
```
