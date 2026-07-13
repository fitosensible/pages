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

		// Qué trae el artículo además del texto.
		// Es un enum: si escribes algo que no sea juego/quiz/playlist,
		// Astro se niega a compilar y te dice exactamente dónde está la errata.
		interactivos: z.array(z.enum(['juego', 'quiz', 'playlist'])).optional(),
	}),
});

export const collections = { blog };