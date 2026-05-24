import type { MDXComponents } from "mdx/types";

/**
 * Global MDX component overrides. Apply your own components or
 * styling here to customize how markdown renders site-wide.
 * @next/mdx requires this file to exist at the project root or src/.
 */
const components: MDXComponents = {
  // Example: render h1 as the regular blog title with our display font.
  // Most blog posts should start with H2 (the page itself renders the H1).
};

export function useMDXComponents(): MDXComponents {
  return components;
}
