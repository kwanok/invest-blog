import { getCollection } from 'astro:content';
import type { Lang } from '../consts';

export async function getPostsByLang(lang: Lang) {
  const posts = await getCollection('blog', ({ data }) => data.lang === lang);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
