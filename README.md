# Demo Blog (Astro MVP)

Modern Astro investment blog MVP with:

- Tailwind (via Vite plugin)
- MDX enabled and validated by build
- i18n routes (`/ko`, `/en`)
- Dark mode toggle (low-saturation, high-contrast design tokens)
- Bento-style home sections
- Minimal Framer Motion micro-interactions
- Cloudflare Pages deployment

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

## Deploy to Cloudflare Pages

1. Cloudflare Pages 프로젝트에서 이 저장소(`kwanok/invest-blog`)를 연결.
2. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Node.js 버전을 프로젝트 환경과 맞춤(권장: 20+).
4. 커스텀 도메인이 있다면 Cloudflare Pages의 Custom domains에서 연결.

메모:
- 로컬/CI에서 정적 산출물 확인은 `npm run build`로 수행.
- `wrangler.jsonc`는 `dist` 정적 자산 배포 기준으로 유지.
