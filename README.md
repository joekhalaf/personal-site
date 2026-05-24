# joekhalaf.com — personal site

Personal-brand site for Joe Khalaf — Technology and Business Strategist, NASA/JPL
Solar System Ambassador. Built with Next.js (App Router), Tailwind v4, and MDX.

---

## Stack

- **Framework:** Next.js 16 (App Router, React 19, TypeScript)
- **Styling:** Tailwind CSS v4 (CSS-based config in `src/app/globals.css`)
- **Theme:** `next-themes` — system/light/dark toggle
- **Content:** MDX via `@next/mdx` for blog posts
- **Email (contact form):** [Resend](https://resend.com) — optional; falls back to console log in dev
- **Hosting:** [Vercel](https://vercel.com)

---

## Local development

```bash
# 1. Install deps
npm install

# 2. (Optional) copy env file for contact form testing
cp .env.example .env.local
# Edit .env.local to add a RESEND_API_KEY if you want real email delivery.
# Without one, the contact form logs messages to the server console.

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout (theme provider, nav, footer, fonts, SEO)
│   ├── page.tsx           # Home / hero
│   ├── globals.css        # Tailwind v4 tokens + theme variables
│   ├── about/page.tsx
│   ├── experience/page.tsx
│   ├── projects/page.tsx
│   ├── astronomy/page.tsx
│   ├── blog/
│   │   ├── page.tsx       # Post index
│   │   └── [slug]/page.tsx # Dynamic post page
│   ├── contact/page.tsx
│   ├── api/contact/route.ts # Contact form handler (uses Resend if configured)
│   ├── sitemap.ts         # /sitemap.xml
│   └── robots.ts          # /robots.txt
├── components/            # Navbar, Footer, ThemeProvider, ThemeToggle, Starfield, Section
├── content/posts/         # MDX blog posts + manifest
├── lib/
│   ├── site.ts            # Site name, URL, social links — single source of truth
│   ├── experience.ts      # Resume-derived role data
│   └── projects.ts        # Project case study data
└── mdx-components.tsx     # Required by @next/mdx
public/                    # Static assets (drop your headshot here)
```

---

## Editing content

- **Bio / hero copy:** `src/app/page.tsx`, `src/app/about/page.tsx`
- **Experience:** edit `src/lib/experience.ts` (Experience page reads from this)
- **Projects:** edit `src/lib/projects.ts`
- **Astronomy/outreach:** `src/app/astronomy/page.tsx`
- **Site name, URL, socials:** `src/lib/site.ts`
- **Navigation order:** `src/lib/site.ts → navItems`
- **SEO defaults:** `src/app/layout.tsx → metadata`

### Adding a blog post

1. Create `src/content/posts/your-slug.mdx` with your content (start with H2, not H1 — page renders title).
2. Open `src/content/posts/manifest.ts`. Import the new MDX file and add an entry to both the `posts` array and the `postComponents` map.
3. That's it — `/blog/your-slug` works automatically.

---

## Adding the headshot

Save your portrait to `public/joe-telescope.jpg` (square, ~600px or larger). It's used on:
- `/about` (portrait)
- `/astronomy` (section hero)

Delete `public/joe-telescope.jpg.MISSING.txt` once the file is in place. To swap photos, you can either replace the file or update the `src=` attributes in the two pages.

---

## Push to GitHub

The repo `joekhalaf/personal-site` has **not** been created yet. Steps:

1. Go to [https://github.com/new](https://github.com/new)
2. **Repository name:** `personal-site`
3. **Owner:** joekhalaf
4. **Visibility:** Public
5. **Do not** check "Initialize this repository with a README, .gitignore, or license" — this project already has them.
6. Click **Create repository**.
7. Then, from this project's directory, push:

```bash
git remote add origin https://github.com/joekhalaf/personal-site.git
git branch -M main
git push -u origin main
```

You'll be prompted for credentials — use a [Personal Access Token](https://github.com/settings/tokens) (classic, with `repo` scope) as your password, or set up SSH keys.

---

## Deploy to Vercel

1. Go to [https://vercel.com/new](https://vercel.com/new) and import the `joekhalaf/personal-site` repo.
2. Vercel auto-detects Next.js — no config changes needed.
3. **Environment Variables** (in Project → Settings → Environment Variables):
   - `RESEND_API_KEY` — your Resend API key (optional, but required for live contact form)
   - `CONTACT_FROM_EMAIL` — optional override (default: `no-reply@joekhalaf.com`)
4. Click **Deploy**. First deploy takes ~1–2 minutes.
5. Every subsequent `git push` to `main` auto-deploys.

### Wiring up Resend (for the contact form)

1. Sign up at [resend.com](https://resend.com) (free tier).
2. In Resend → Domains → add `joekhalaf.com` and configure the DNS records they show you (TXT, CNAME, MX). Once verified, you can send `from:` any address on the domain.
3. Resend → API Keys → create a sending key. Paste it into Vercel as `RESEND_API_KEY`.
4. Redeploy. Done.

If `RESEND_API_KEY` is not set, the contact form still works — it logs the submission to Vercel's function logs and tells the user "message received." Useful for testing the UI before wiring email.

### Custom domain (joekhalaf.com)

1. In your Vercel project → Settings → Domains → add `joekhalaf.com`.
2. At your DNS provider (wherever joekhalaf.com is registered), set the records Vercel shows you. Typically:
   - `A` record on `@` → `76.76.21.21`
   - `CNAME` on `www` → `cname.vercel-dns.com`
3. SSL provisions automatically (~1–5 minutes).

Once the domain is live, update `siteConfig.url` in `src/lib/site.ts` if it's not already `https://joekhalaf.com`.

---

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start local dev server on :3000 |
| `npm run build` | Production build |
| `npm start` | Run the production build locally |
| `npm run lint` | ESLint |

---

## Notes & gotchas

- **Tailwind v4** uses CSS-based config (the `@theme` block in `globals.css`). There is no `tailwind.config.js`.
- **Theme:** controlled by `next-themes`, which adds a `.dark` class on `<html>`. Our `@custom-variant dark` directive in `globals.css` hooks Tailwind utilities into that class.
- **MDX:** `mdx-components.tsx` must exist (at `src/mdx-components.tsx` here). Don't delete it.
- **Sitemap & robots** auto-update for new blog posts via `app/sitemap.ts` and `app/robots.ts`.

---

© Jaleel F. (Joe) Khalaf. Source available under the MIT License — see `LICENSE` if added.
