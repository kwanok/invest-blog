export const SITE_TITLE = 'Modern Investment Blog';
export const SITE_DESCRIPTION = 'A bilingual Astro investment blog MVP with focused insights.';

export const SUPPORTED_LANGS = ['ko', 'en'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export const COPY = {
	ko: {
		homeTitle: '데이터 중심 투자 인사이트',
		homeSubtitle: '과한 장식 없이 빠르게 읽히는 투자 블로그 MVP',
		latestPosts: '최신 글',
		browse: '블로그 보기',
		toggleTheme: '다크 모드 전환',
	},
	en: {
		homeTitle: 'Data-Driven Investment Insights',
		homeSubtitle: 'An MVP investment blog focused on clarity over noise.',
		latestPosts: 'Latest Posts',
		browse: 'Browse blog',
		toggleTheme: 'Toggle dark mode',
	},
};
