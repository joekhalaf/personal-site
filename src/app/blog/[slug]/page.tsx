import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { posts, postComponents, type PostMeta } from "@/content/posts/manifest";

type Params = { slug: string };
type Props = { params: Promise<Params> };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = findPost(slug);
  if (!meta) return { title: "Post not found" };
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      publishedTime: meta.date,
    },
  };
}

function findPost(slug: string): PostMeta | undefined {
  return posts.find((p) => p.slug === slug);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const meta = findPost(slug);
  const PostContent = postComponents[slug];
  if (!meta || !PostContent) notFound();

  return (
    <Section className="pt-16 sm:pt-20 pb-24">
      <Link
        href="/blog"
        className="text-sm text-indigo dark:text-indigo-soft hover:underline underline-offset-4"
      >
        ← All posts
      </Link>

      <article className="mt-6 max-w-3xl">
        <header>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-fog dark:text-fog-light">
            <time dateTime={meta.date}>{formatDate(meta.date)}</time>
            {meta.tags && meta.tags.length > 0 && (
              <span className="ml-3">
                {meta.tags.map((t) => `#${t}`).join(" ")}
              </span>
            )}
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            {meta.title}
          </h1>
          <p className="mt-4 text-lg text-ink/75 dark:text-cream/75 leading-relaxed">
            {meta.description}
          </p>
        </header>

        <div className="mt-10 prose-content text-ink/90 dark:text-cream/90">
          <PostContent />
        </div>
      </article>
    </Section>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
