// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    created: z.string().transform((str) => new Date(str)),
    updated: z.string().transform((str) => new Date(str)).optional(),
    published: z.boolean(),
    category: z.string(),
    author: z.string().optional(),
    source: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
};
