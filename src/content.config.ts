import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const news = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/news",
    generateId: ({ entry }) => entry,
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    image: z.string(),
    lang: z.enum(["ja", "en"]),
    slug: z.string(),
  }),
});

export const collections = { news };
