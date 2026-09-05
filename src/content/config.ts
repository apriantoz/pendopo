import { defineCollection, z } from 'astro:content';

const galeri = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    date: z.string().or(z.date()).optional(),
  }),
});

export const collections = {
  galeri,
};