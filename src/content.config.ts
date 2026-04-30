import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const wiki = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/wiki" }),
  schema: z.object({
    title: z.string(),
  }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { wiki };
