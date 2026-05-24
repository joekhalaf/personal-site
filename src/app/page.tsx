import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: siteConfig.tagline,
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-20 sm:pt-28 pb-20 sm:pb-28">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo dark:text-indigo-soft">
          {siteConfig.location} · {siteConfig.title}
        </p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
          Hi, I&rsquo;m {siteConfig.name}.
          <span className="block text-ink/70 dark:text-cream/70 mt-2">
            I translate enterprise technology into measurable business outcomes.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink/75 dark:text-cream/75 leading-relaxed">
          25+ years bridging deep technical credibility with executive-level
          conversations — helping Fortune 500 customers turn infrastructure
          investments into commercial value. Currently at Broadcom, driving
          VMware Cloud Foundation adoption across the TOLA and Midwest regions.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-ink/75 dark:text-cream/75 leading-relaxed">
          When I&rsquo;m off the clock, I&rsquo;m a NASA/JPL{" "}
          <Link
            href="/astronomy"
            className="text-indigo dark:text-indigo-soft underline underline-offset-4"
          >
            Solar System Ambassador
          </Link>{" "}
          and longtime astronomy volunteer in Houston — bringing the universe
          to schools, scouts, libraries, and anyone who&rsquo;ll look up.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-indigo text-cream hover:bg-indigo-soft px-5 py-2.5 text-sm font-medium transition-colors"
          >
            About me
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 dark:border-cream/20 hover:border-indigo dark:hover:border-indigo-soft hover:text-indigo dark:hover:text-indigo-soft px-5 py-2.5 text-sm font-medium transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </Section>

      {/* SECTION TEASERS */}
      <Section className="pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <TeaserCard
            href="/experience"
            eyebrow="Career"
            title="Experience"
            body="Broadcom · NetApp · Avanade · IBM. Pre-sales strategy, post-sales adoption, executive business cases."
          />
          <TeaserCard
            href="/projects"
            eyebrow="Selected work"
            title="Projects"
            body="Anonymized case studies — private cloud builds, capacity transformations, and enterprise adoption stories."
          />
          <TeaserCard
            href="/astronomy"
            eyebrow="Outside work"
            title="Astronomy & Outreach"
            body="NASA Solar System Ambassador. Past President of the Houston Astronomical Society. Texas Star Party Operations."
          />
          <TeaserCard
            href="/blog"
            eyebrow="Writing"
            title="Journal"
            body="Notes on enterprise strategy, customer-outcome selling, and occasionally the night sky."
          />
          <TeaserCard
            href="/contact"
            eyebrow="Say hi"
            title="Contact"
            body="Speaking, advisory, partnership, outreach — drop a note via the contact form."
          />
        </div>
      </Section>
    </>
  );
}

function TeaserCard({
  href,
  eyebrow,
  title,
  body,
}: {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl p-6 border border-ink/10 dark:border-cream/10 bg-cream-soft/40 dark:bg-ink-soft/40 hover:border-indigo dark:hover:border-indigo-soft hover:bg-cream-soft dark:hover:bg-ink-soft transition-all"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-indigo dark:text-indigo-soft">
        {eyebrow}
      </p>
      <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-sm text-ink/70 dark:text-cream/70 leading-relaxed">
        {body}
      </p>
      <span className="mt-4 inline-block text-sm text-indigo dark:text-indigo-soft opacity-0 group-hover:opacity-100 transition-opacity">
        Explore →
      </span>
    </Link>
  );
}
