import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			lang: z.enum(['ko', 'en']),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
      postTags: z.array(z.enum(['Fact', 'View', 'Scenario'])).min(1),
      dataAsOf: z.coerce.date().optional(),
      sources: z.array(z.string().url()).optional(),
      verificationStatus: z.enum(['verified', 'partial', 'unverified']).default('partial'),
			heroImage: image().optional(),
		}),
});

export const collections = { blog };
