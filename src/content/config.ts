// Import necessary tools from the Astro content module
import { defineCollection, z } from "astro:content";

// Define the "posts" collection schema
const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().default(""),
		lang: z.string().optional().default(""),
		pinned: z.boolean().optional().default(false),

		/* For internal use fields */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});

// Define your spec collection schema
const specCollection = defineCollection({
	schema: z.object({
		// Each spec must have a title
		title: z.string(),
		description: z.string().optional().default(""), // Optional description with a default empty string
		// Add any other fields required for the "spec" collection
		lang: z.string().optional().default(""), // Optional language field
	}),
});

// Export the collections to make them available in the Astro project
export const collections = {
	posts: postsCollection, // The "posts" collection will include all posts with their defined schema
	spec: specCollection, // The "spec" collection will include all files in the "spec" folder, with their defined schema
};

// Note: A **collection** in Astro allows you to organize and structure content that is stored in the "src/content" directory.
// Each collection can have a defined **schema**, which enforces rules for the data (like type, optional or required, default values).
// Collections are auto-generated based on folder structure, but defining them explicitly in "content.config.ts" is recommended
// to avoid deprecation warnings, as it gives you more control over the structure and validation of your content.

// In this case, we defined the "posts" collection for blog posts and the "spec" collection for another category of content,
// each with their own custom schema to organize the content more effectively and handle it within your Astro project.
