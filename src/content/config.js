import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string().default("Jeshol"),
    image: z.string(),
    excerpt: z.string(),
    publishDate: z.date().default(new Date()),
  }),
});

const pageCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  posts: postCollection,
  pages: pageCollection,
};
