import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: z.object({
        titulo: z.string(),
        fecha: z.date(),
        autor: z.string(),
        descripcion: z.string().optional(),
        imagen: z.string().optional(),
    }),
});

export const collections = { blog };