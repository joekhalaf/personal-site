import type { ComponentType } from "react";
import welcome from "./welcome.mdx";

/**
 * Manifest of blog posts. Adding a new post:
 *   1. Create src/content/posts/<slug>.mdx
 *   2. Import it here and add an entry to `posts` AND `postComponents`
 *   3. Push — Next.js routes /blog/<slug> automatically
 *
 * Dates are ISO YYYY-MM-DD strings. Newest sorts first on the blog index.
 */
export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
};

export const posts: PostMeta[] = [
  {
    slug: "welcome",
    title: "Welcome to the journal",
    date: "2026-05-24",
    description:
      "Why I'm putting words on the internet — and what to expect here.",
    tags: ["meta"],
  },
];

/**
 * slug → MDX component. Explicit map so webpack can statically bundle
 * each post and TypeScript can verify the import exists.
 */
export const postComponents: Record<string, ComponentType> = {
  welcome,
};
