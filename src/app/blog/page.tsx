import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { posts } from "@/content/posts/manifest";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes on enterprise strategy, customer-outcome selling, and the night sky.",
};

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => (a.date > b.date ? -1 : 1));

  return (
    <Section className="pt-16 sm:pt-20 pb-24">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo dark:text-indigo-soft">
        Journal
      </p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
        Short notes on enterprise strategy, adoption, and the night sky.
      </h1>

      <ul className="mt-14 divide-y divide-ink/10 dark:divide-cream/10 border-y border-ink/10 dark:border-cream/10">
        {sorted.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-6 hover:text-indigo dark:hover:text-indigo-soft transition-colors"
            >
              <time
                dateTime={post.date}
                className="font-mono text-xs uppercase tracking-[0.14em] text-fog dark:text-fog-light sm:w-32 shrink-0"
              >
                {formatDate(post.date)}
              </time>
              <div className="flex-1">
                <p className="font-display text-xl font-semibold tracking-tight group-hover:text-indigo dark:group-hover:text-indigo-soft">
                  {post.title}
                </p>
                <p className="mt-1 text-sm text-ink/70 dark:text-cream/70">
                  {post.description}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <p className="mt-2 flex flex-wrap gap-1.5">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-cream-soft dark:bg-ink-soft text-fog dark:text-fog-light"
                      >
                        {t}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {sorted.length === 0 && (
        <p className="mt-10 text-fog dark:text-fog-light">
          No posts yet — check back soon.
        </p>
      )}
    </Section>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
