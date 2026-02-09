export const SITE_TITLE = 'Arcane Markets';
export const SITE_DESCRIPTION = 'Arcane Markets — 데이터 기반 투자 인사이트와 명확한 리스크 프레임워크를 제공하는 리서치 블로그.';

export const SUPPORTED_LANGS = ['ko', 'en'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export const COPY = {
	ko: {
		homeTitle: '데이터 중심 투자 인사이트',
		homeSubtitle: '과한 장식 없이 빠르게 읽히는 투자 블로그 MVP',
		latestPosts: '최신 글',
		browse: '블로그 보기',
		toggleTheme: '다크 모드 전환',
		methodology: '방법론',
		legal: '면책 고지',
		contact: '문의',
		skipToContent: '본문으로 건너뛰기',
		methodologyTitle: '방법론',
		methodologyBody: '모든 글은 발행 시점 기준 공개 데이터와 명시된 가정을 기반으로 작성한다.',
		legalTitle: '면책 고지',
		legalBody: '본 콘텐츠는 정보 제공 목적이며 특정 자산의 매수·매도를 권유하지 않는다.',
		contactBody: '협업/문의는 이메일 hello@example.com 으로 받을 수 있다.',
		footerNote: '발행 시점 기준 데이터 기반 리서치. 투자 권유 아님.',
	},
	en: {
		homeTitle: 'Data-Driven Investment Insights',
		homeSubtitle: 'An MVP investment blog focused on clarity over noise.',
		latestPosts: 'Latest Posts',
		browse: 'Browse blog',
		toggleTheme: 'Toggle dark mode',
		methodology: 'Methodology',
		legal: 'Legal',
		contact: 'Contact',
		skipToContent: 'Skip to main content',
		methodologyTitle: 'Methodology',
		methodologyBody: 'Each post is based on public datasets and clearly stated assumptions at publish time.',
		legalTitle: 'Legal notice',
		legalBody: 'This content is informational only and does not constitute investment advice.',
		contactBody: 'For collaboration requests, reach out at hello@example.com.',
		footerNote: 'Research is data-driven at publication time and not investment advice.',
	},
};
