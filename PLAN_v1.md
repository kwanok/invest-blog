# PLAN v1 — Astro 기반 투자 블로그 스택 업그레이드

## 0) 목표/원칙
- **기존 Astro 유지** (재플랫폼 금지)
- **콘텐츠 중심**: MDX 기반 작성/확장성 확보
- **UI 현대화**: Tailwind + shadcn/ui + Bento/Grid 레이아웃
- **경험 개선**: Framer Motion 기반 미세 인터랙션(과하지 않게)
- **글로벌 대응**: Astro i18n(ko/en)
- **운영 자동화**: GitHub Pages 자동 배포(CI)
- **접근성/가독성 우선**: 저채도·고대비 다크 모드

---

## 1) MVP 범위 (v1)
### 포함
1. **기술 스택 정비**
   - Astro 최신 안정 버전 기준 정렬
   - TailwindCSS 적용
   - shadcn/ui 컴포넌트 도입(핵심 컴포넌트만)
   - MDX 게시글 파이프라인 구성
2. **정보구조/레이아웃**
   - 홈: Bento/Grid 카드형(최근 글, 카테고리, 하이라이트)
   - 글 목록, 글 상세, 태그/카테고리 기본 페이지
   - 반응형(모바일/태블릿/데스크톱)
3. **i18n (ko/en)**
   - 라우팅 분리 및 언어 전환 UI
   - 공통 UI 텍스트 번역 리소스 구성
4. **다크 모드**
   - low-saturation + high-contrast 토큰 적용
   - 라이트/다크 전환 및 기본 시스템 선호 반영
5. **마이크로 인터랙션**
   - hover/focus/entry 정도의 subtle animation
   - 성능 저하 없는 범위에서 Framer Motion 적용
6. **배포 자동화**
   - GitHub Actions → GitHub Pages 자동 빌드/배포

### 제외 (v1 범위 밖)
- 댓글 시스템, 회원 인증
- 고급 검색(전문 인덱싱), 추천 알고리즘
- 다국어 3개 이상 확장
- CMS 연동(Headless CMS)

---

## 2) 제안 폴더 구조
```txt
demo-blog/
├─ public/
│  ├─ favicon.svg
│  └─ images/
├─ src/
│  ├─ components/
│  │  ├─ ui/                  # shadcn/ui 래핑/커스터마이징
│  │  ├─ layout/
│  │  ├─ post/
│  │  └─ motion/              # 애니메이션 관련 컴포넌트
│  ├─ content/
│  │  └─ blog/
│  │     ├─ ko/
│  │     └─ en/
│  ├─ i18n/
│  │  ├─ ko.json
│  │  ├─ en.json
│  │  └─ config.ts
│  ├─ layouts/
│  │  ├─ BaseLayout.astro
│  │  └─ PostLayout.astro
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ ko/
│  │  │  ├─ index.astro
│  │  │  └─ blog/[slug].astro
│  │  └─ en/
│  │     ├─ index.astro
│  │     └─ blog/[slug].astro
│  ├─ styles/
│  │  ├─ globals.css
│  │  └─ tokens.css           # 컬러/타이포 디자인 토큰
│  ├─ lib/
│  │  ├─ content.ts
│  │  ├─ seo.ts
│  │  └─ utils.ts
│  └─ config/
│     └─ site.ts
├─ .github/
│  └─ workflows/
│     └─ deploy-pages.yml
├─ astro.config.mjs
├─ tailwind.config.mjs
├─ tsconfig.json
└─ package.json
```

---

## 3) 의존성 목록 (초안)
### Core
- `astro`
- `typescript`

### Styling/UI
- `tailwindcss`
- `postcss`
- `autoprefixer`
- `class-variance-authority`
- `clsx`
- `tailwind-merge`
- `lucide-react` (아이콘)
- `shadcn/ui`(CLI 기반 컴포넌트 소스 관리)

### Content
- `@astrojs/mdx`
- `@astrojs/sitemap`
- `@astrojs/rss` (선택)
- `gray-matter` (필요 시)

### Motion
- `framer-motion`

### Deployment
- `@astrojs/github-pages`
- GitHub Actions (공식 setup-node + pages 배포 액션)

### 품질/개발경험(권장)
- `eslint`, `eslint-plugin-astro`
- `prettier`, `prettier-plugin-astro`

---

## 4) 구현 단계 (Plan v1)
### Phase 1 — 기반 정리 (0.5~1일)
- 현 프로젝트 구조/설정 점검
- Astro/Tailwind/MDX 기본 통합
- 기본 레이아웃/글로벌 스타일 준비

### Phase 2 — 콘텐츠/라우팅/i18n (1~1.5일)
- `content/blog/{ko,en}` 구조 반영
- 글 목록/상세 페이지 동작
- ko/en 라우팅 및 locale switcher 반영

### Phase 3 — UI 시스템/다크모드 (1~1.5일)
- shadcn/ui 핵심 컴포넌트(버튼, 카드, 배지, 네비)
- Bento/Grid 홈 및 목록 카드 구성
- 다크모드 토큰(저채도·고대비) 및 토글 완성

### Phase 4 — 인터랙션/접근성/성능 (0.5~1일)
- Framer Motion 미세 인터랙션 적용
- `prefers-reduced-motion` 대응
- Lighthouse 기준 성능/접근성 1차 점검

### Phase 5 — 배포 자동화/검증 (0.5일)
- GitHub Pages 워크플로 구성
- main 브랜치 push 시 자동 배포
- 기본 SEO/사이트맵/RSS(선택) 확인

---

## 5) 수용 기준 (Acceptance Criteria)
1. **빌드/배포**
   - `main` push 후 GitHub Pages에 자동 배포 성공
   - 빌드 실패 없이 정적 사이트 산출
2. **콘텐츠**
   - ko/en 각각 최소 1개 이상 MDX 글 렌더링
   - 글 목록↔상세 네비게이션 정상 동작
3. **i18n**
   - `/ko`, `/en` 라우트 접근 가능
   - 언어 전환 시 동일 섹션 이동(가능 범위 내)
4. **UI/UX**
   - Bento/Grid 레이아웃 반응형 동작
   - 다크모드에서 저채도·고대비 가독성 확보
   - 마이크로 인터랙션이 과하지 않고 일관적
5. **품질**
   - 접근성 핵심(키보드 포커스/대비/aria 기본) 충족
   - 성능 회귀 없음(초기 목표: Lighthouse Perf 85+)

---

## 6) 리스크 및 대응
1. **shadcn/ui + Astro 호환성 이슈**
   - 대응: React island 범위 최소화, UI 컴포넌트는 필요한 것만 채택
2. **Framer Motion 과사용으로 성능 저하**
   - 대응: entry/hover 수준으로 제한, 페이지 전환 전체 애니메이션 지양
3. **i18n 콘텐츠 동기화 누락(ko/en 불균형)**
   - 대응: frontmatter 스키마 통일, 번역 누락 체크리스트 운영
4. **GitHub Pages 경로(base) 오설정**
   - 대응: repo base URL 명시, CI에서 링크/에셋 경로 검증
5. **다크모드 대비 부족**
   - 대응: WCAG 대비 체크(텍스트/링크/버튼 상태별)

---

## 7) 러프 타임라인
- 총 **3.5 ~ 5.5일** (개발자 1인 기준)
  - Day 1: 기반/콘텐츠 파이프라인
  - Day 2: i18n + 목록/상세
  - Day 3: UI 시스템 + 다크모드
  - Day 4: 인터랙션 + 접근성/성능
  - Day 5(여유): 배포 안정화/문서화/버그픽스

---

## 8) v1 완료 정의 (Definition of Done)
- 배포 URL에서 ko/en 블로그 열람 가능
- MDX 작성→배포까지의 운영 흐름이 문서화됨
- 디자인 토큰/컴포넌트/라우팅 규칙이 팀 내 재사용 가능한 상태
- 이후 v2(검색, 시리즈, 포트폴리오 트래커 등)로 확장 가능한 기반 확보
