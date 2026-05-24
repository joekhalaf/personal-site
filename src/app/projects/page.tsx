import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Anonymized case studies — private cloud builds, capacity transformations, enterprise adoption stories.",
};

export default function ProjectsPage() {
  return (
    <Section className="pt-16 sm:pt-20 pb-24">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo dark:text-indigo-soft">
        Projects
      </p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
        Selected work — anonymized case studies from two decades of customer engagements.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-ink/75 dark:text-cream/75 leading-relaxed">
        Customer names are kept generic to respect confidentiality. Each card
        below captures the shape of the engagement, my role, and the
        measurable outcome.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="
              group rounded-2xl p-6
              border border-ink/10 dark:border-cream/10
              bg-cream-soft/40 dark:bg-ink-soft/40
              hover:border-indigo dark:hover:border-indigo-soft
              transition-colors
            "
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-indigo dark:text-indigo-soft">
              {p.industry}
            </p>
            <h2 className="mt-2 font-display text-xl font-semibold tracking-tight">
              {p.title}
            </h2>
            <p className="mt-1 text-xs text-fog dark:text-fog-light">
              {p.role} · {p.era}
            </p>

            <p className="mt-4 text-sm text-ink/80 dark:text-cream/80 leading-relaxed">
              <span className="font-semibold text-ink dark:text-cream">
                Outcome.
              </span>{" "}
              {p.outcome}
            </p>

            <ul className="mt-4 space-y-1.5">
              {p.details.map((d, i) => (
                <li
                  key={i}
                  className="text-sm text-ink/70 dark:text-cream/70 flex gap-2 leading-relaxed"
                >
                  <span className="text-stardust mt-1.5 text-[10px]">●</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
