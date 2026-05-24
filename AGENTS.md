<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md — guidance for AI coding assistants

This project is the personal-brand site at `joekhalaf.com`. Stack: Next.js 16
(App Router), React 19, TypeScript, Tailwind v4 (CSS-based config), MDX.

## Conventions

- **Tailwind v4 config lives in `src/app/globals.css`** under the `@theme`
  directive — there is no `tailwind.config.js`. Color tokens become utility
  classes (`bg-ink`, `text-cream`, etc.).
- **Dark mode is class-based via `next-themes`** (`@custom-variant dark` in
  `globals.css`). Use `dark:` variants in JSX.
- **Site-wide constants** (name, URL, socials, nav items) live in
  `src/lib/site.ts`. Update there, not page-by-page.
- **Resume-derived content** is structured data in `src/lib/experience.ts`
  and `src/lib/projects.ts`. Pages render from these.
- **Blog posts** are MDX files in `src/content/posts/`, registered in
  `src/content/posts/manifest.ts` (both the `posts` array and the
  `postComponents` map need a new entry per post).
- **Contact form** posts to `/api/contact` — uses Resend if
  `RESEND_API_KEY` is set, otherwise logs to console.

## Don'ts

- Don't introduce `tailwind.config.js` — Tailwind v4 uses CSS config.
- Don't break the manifest-based blog system; dynamic imports with template
  literals were intentionally replaced with an explicit component map.
- Don't display the user's email anywhere publicly — contact form only.
- Don't commit `.env.local`.

## Useful docs (bundled with Next.js)

- `node_modules/next/dist/docs/01-app/` — App Router docs
- `node_modules/next/dist/docs/01-app/02-guides/mdx.md` — MDX guide
