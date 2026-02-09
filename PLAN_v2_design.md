# PLAN v2 — demo-blog 리디자인 (Design Only)

## 0) 목표 요약
- **브랜드 톤:** 투자 리서치/인사이트 중심의 **전문적·절제된 프리미엄**
- **무드:** 고딕 감성은 **은은하게**(장식 최소, 구조/타이포/대비로 분위기 형성)
- **테마:** 시스템 설정 기반 **Light/Dark 자동**, 사용자 **수동 토글** 제공
- **레퍼런스 바이브:** Anthropic 스타일의 넓은 여백, 차분한 타이포, 신뢰 중심 인터랙션

---

## 1) 비주얼 디렉션
### 1.1 키워드
- Calm authority, editorial clarity, restrained luxury, research-grade trust

### 1.2 아트 디렉션 원칙
1. **여백 우선:** 카드/섹션 간 간격을 크게 두어 정보 위계를 명확화
2. **대비 절제:** 강한 네온/채도 금지, 명도 대비로 집중 유도
3. **고딕은 디테일로만:** 헤드라인 일부 글립, 이니셜, 디바이더/룰(line)에서만 사용
4. **투자 사이트 문법:** 숫자/차트/태그 가독성 최우선

### 1.3 이미지/그래픽
- 히어로는 과장된 3D 대신 **정적인 텍스처 + 미세 그라데이션**
- 일러스트 최소화, 데이터 중심 시각 요소(미니 차트, 지표 배지) 활용
- 배경 노이즈는 1~2% 수준(다크 모드에서만 약하게)

---

## 2) 타이포그래피 시스템 (은은한 고딕 포함)
### 2.1 역할 분리
- **Body/UI:** 중립적 산세리프 (가독성/성능 우선)
- **Display:** 대비감 있는 세리프 또는 세리프 계열 Display를 제한적으로 사용

### 2.2 제안 스케일 (Fluid)
- Display XL: 48–64 / 1.05
- H1: 36–48 / 1.1
- H2: 28–36 / 1.15
- H3: 22–28 / 1.2
- Body L: 18 / 1.65
- Body M: 16 / 1.7
- Caption: 13–14 / 1.5

### 2.3 고딕 영향 적용 규칙
- 페이지당 **고딕 성격 요소 1~2개 이하**
- 적용 위치: Hero 타이틀, 섹션 리드 인용문, 에디토리얼 드롭캡
- 금지: 본문 장문, 버튼 라벨, 내비게이션에 고딕체 상시 사용

### 2.4 숫자/데이터 타이포
- Tabular figures 활성화 (가격, 수익률, 날짜 정렬)
- 차트/테이블 최소 폰트 12px 보장

---

## 3) 컬러 시스템 (Semantic Tokens)
> 원칙: 브랜드 색보다 **의미 토큰** 우선. Light/Dark 모두 동일 네이밍 유지.

### 3.1 Core Semantic Tokens
- `--bg-canvas`
- `--bg-surface`
- `--bg-elevated`
- `--text-primary`
- `--text-secondary`
- `--text-muted`
- `--border-subtle`
- `--border-strong`
- `--accent-primary`
- `--accent-primary-hover`
- `--accent-soft`
- `--state-positive`
- `--state-negative`
- `--state-warning`
- `--focus-ring`
- `--overlay`

### 3.2 톤 가이드
- **Light:** Warm-neutral 바탕 + 저채도 잉크톤 텍스트
- **Dark:** Pure black 회피(눈부심 방지), deep charcoal 기반
- **Accent:** 청록/청남 계열 저채도 1축 + 금속성 보조톤(매우 제한)

### 3.3 접근성 기준
- 본문 대비 **WCAG AA(4.5:1) 이상**, 큰 텍스트 3:1 이상
- 상태색은 색상 단독 전달 금지(아이콘/텍스트 병행)

---

## 4) 인터랙션 패턴 (절제된 상호작용)
### 4.1 모션 원칙
- 짧고 명확하게: 120–220ms 중심, 과한 스프링 금지
- 진입 애니메이션은 1회성, 스크롤 과잉 효과 금지
- `prefers-reduced-motion` 완전 지원

### 4.2 주요 패턴
1. **Theme Toggle**
   - 기본: 시스템 추적(auto)
   - 옵션: Light / Dark / Auto
   - 상태 영속화(localStorage)
2. **카드 Hover**
   - 미세 상승(translateY -2~-4), 그림자/보더 변화만
3. **리딩 프로그레스 바**
   - 포스트 상세 상단 얇은 인디케이터
4. **TOC 하이라이트**
   - 현재 섹션만 강조, 스크롤 점프 부드럽게
5. **데이터 툴팁**
   - 키보드 포커스 가능, 터치 대응

---

## 5) 성능 예산 / 가드레일
### 5.1 목표 지표 (모바일 기준)
- LCP ≤ **2.2s**
- INP ≤ **200ms**
- CLS ≤ **0.08**
- 초기 JS ≤ **170KB gzip**
- Critical CSS ≤ **35KB gzip**
- 폰트 파일 총량 ≤ **180KB (woff2)**

### 5.2 가드레일
- 웹폰트 2패밀리 이내(Body 1 + Display 1), 서브셋 필수
- 이미지: AVIF/WebP 우선, 반응형 소스셋, LQIP/blur placeholder
- 차트 라이브러리 지연 로드(뷰포트 진입 시)
- 인터랙션 없는 구간은 정적 렌더 우선
- 서드파티 스크립트 최소화(측정 태그 합산 예산 관리)

---

## 6) IA / 레이아웃 개편
### 6.1 IA 제안
- Home
  - Hero (핵심 메시지 + CTA)
  - Featured Insights
  - Market Snapshot (요약 지표)
  - Latest Research
  - Newsletter / Contact
- Insights (카테고리/태그/필터)
- Insight Detail (본문 + TOC + 관련 글)
- About / Methodology

### 6.2 레이아웃 규칙
- 콘텐츠 최대폭 1200px, 본문 컬럼 68–76ch
- 데스크톱: 12컬럼 그리드 / 모바일: 4컬럼
- 사이드 패널(TOC/지표)은 데스크톱 우선, 모바일은 접힘

---

## 7) 컴포넌트 목록 (Design Scope)
1. Global Header (테마 토글 포함)
2. Hero Section (카피 + 신뢰 배지)
3. Insight Card (썸네일/태그/메타)
4. Metric Badge (수치/등락)
5. Filter Bar (카테고리/기간)
6. Article TOC (고정/활성 섹션 표시)
7. Reading Progress
8. Quote/Callout Block (고딕 무드 포인트)
9. Footer (Methodology, 법적 고지, 연락)
10. Empty/Loading/Error States

---

## 8) 단계별 구현 계획 (Phased)
### Phase 1 — Foundations
- 디자인 토큰(색/타입/스페이싱/모션) 정의
- Light/Dark/Auto 테마 구조 및 접근성 대비 검증
- 타이포 스케일/폰트 로딩 전략 확정

### Phase 2 — Core UI
- Header, Hero, Card, Footer, 기본 레이아웃
- Insight 리스트/상세 템플릿 확정
- 고딕 포인트 컴포넌트(Quote/Divider) 제한 적용

### Phase 3 — Interaction + Data UX
- Theme toggle, TOC, reading progress, filter UX
- 데이터 툴팁/메트릭 배지 상호작용 정교화
- reduced-motion/키보드 내비게이션 완료

### Phase 4 — Performance Polish
- 폰트/이미지/번들 최적화
- Core Web Vitals 실측 및 예산 미달 항목 개선
- 라이트하우스/실사용 모니터링 기준선 수립

---

## 9) 수용 기준 (Acceptance Criteria)
1. **브랜드/무드:** 고딕 감성이 ‘장식 과다’ 없이 은은하게 인지됨
2. **테마:** Auto/Light/Dark 전환이 깜빡임 없이 동작, 상태 유지
3. **가독성:** 본문/메타/데이터가 모든 뷰포트에서 읽기 쉬움
4. **접근성:** 키보드 탐색 가능, 명도 대비 AA 충족
5. **성능:** 정의한 LCP/INP/CLS 및 JS/CSS/폰트 예산 충족
6. **인터랙션:** 모션은 절제되어 있고 콘텐츠 소비를 방해하지 않음

---

## 10) 리스크 및 대응
1. **고딕 무드 과잉 리스크**
   - 대응: 적용 지점/빈도 상한(페이지당 1~2요소) 고정
2. **다크 모드 대비 저하**
   - 대응: 토큰 단위 대비 테스트 자동화 + 수동 QA 체크리스트
3. **폰트로 인한 성능 저하**
   - 대응: 서브셋/가변폰트 검토, preload 최소화, 폴백 전략 강화
4. **인터랙션 과잉으로 정보성 약화**
   - 대응: “정보 전달 우선” 원칙으로 모션 삭제 가능성 상시 유지
5. **투자 데이터 신뢰성 표현 미흡**
   - 대응: Methodology/기준시점/출처 표기 컴포넌트 표준화

---

## 11) 산출물 정의 (Plan v2)
- 본 문서는 **디자인/설계 계획서**이며 코드 구현 범위는 포함하지 않음.
- 다음 단계(리뷰)에서 토큰 명세표/컴포넌트 와이어 우선순위를 확정 후 실행 단계로 이관.