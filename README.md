# Demo Blog (Astro MVP)

Modern Astro investment blog MVP with:

- Tailwind (via Vite plugin)
- MDX enabled and validated by build
- i18n routes (`/ko`, `/en`)
- Dark mode toggle (low-saturation, high-contrast design tokens)
- Bento-style home sections
- Minimal Framer Motion micro-interactions
- GitHub Pages deployment workflow

## Run locally

```bash
npm install
npm run dev
```

### Build check

```bash
npm run build
npm run check
```

## Content

Posts are in `src/content/blog/{lang}/`.

- English example: `src/content/blog/en/market-regime-2026.mdx`
- Korean example: `src/content/blog/ko/krw-dollar-watch.md`

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In repo settings, enable **Pages** source as **GitHub Actions**.
3. (Optional) set repository variables if needed:
   - `SITE_URL` (e.g. `https://<user>.github.io`)
   - `BASE_PATH` (e.g. `/demo-blog`)
4. Workflow file: `.github/workflows/deploy.yml`

On every push to `main`, the workflow builds and deploys `dist/` to GitHub Pages.
