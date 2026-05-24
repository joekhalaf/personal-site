import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Astronomy & Outreach",
  description:
    "NASA/JPL Solar System Ambassador, Past President of the Houston Astronomical Society, Texas Star Party Operations Coordinator.",
};

const involvement = [
  {
    role: "NASA / JPL Solar System Ambassador",
    dates: "2020 — Present",
    body: "Selected and trained NASA Jet Propulsion Laboratory volunteer ambassador. Represent NASA missions and science to the public through outreach events, presentations, and community engagement across the Houston area. Speak on the full spectrum of NASA missions and directives.",
    accent: true,
  },
  {
    role: "Operations Coordinator, Texas Star Party",
    dates: "2025 — Present",
    body: "Serve as Operations Coordinator for the Texas Star Party — one of the most prestigious dark-sky observing events in North America, drawing amateur and professional astronomers from across the United States and internationally. Lead operational planning across event programming, registration, and on-site logistics.",
  },
  {
    role: "President, Houston Astronomical Society",
    dates: "2020 — 2024",
    body: "Led one of the oldest and largest astronomy nonprofits in the southern United States (501(c)(3)) through pandemic disruption and recovery. Grew membership from ~450 to over 950 in four years — establishing HAS as one of the largest astronomy clubs in the U.S. Designed and launched a New Member Orientation, structured Mentorship program, and gamified online membership journey that drove sustained engagement.",
  },
  {
    role: "Outreach Chairperson, Houston Astronomical Society",
    dates: "2013 — 2019",
    body: "Owned the club's community outreach program for six years — organizing and leading 60+ outreach events annually for schools, scout organizations, libraries, and community partners. Over 360 events delivered across the six-year tenure. Co-led the Houston regional celebration of the 50th anniversary of the Apollo 11 moon landing (2019) in partnership with NASA.",
  },
];

export default function AstronomyPage() {
  return (
    <Section className="pt-16 sm:pt-20 pb-24">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo dark:text-indigo-soft">
        Astronomy &amp; Outreach
      </p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
        Bringing the universe down to Earth — for schools, scouts, libraries, and anyone who&rsquo;ll look up.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-ink/75 dark:text-cream/75 leading-relaxed">
        Off the clock I&rsquo;m a NASA/JPL Solar System Ambassador, a past
        president of the Houston Astronomical Society, and currently
        Operations Coordinator for the Texas Star Party. If you&rsquo;re a
        school, scout group, library, or community organization in the
        Houston area looking for a speaker or a telescope night,{" "}
        <a
          href="/contact"
          className="text-indigo dark:text-indigo-soft underline underline-offset-4"
        >
          get in touch
        </a>
        .
      </p>

      {/* Telescope photo */}
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
        <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] w-full overflow-hidden rounded-2xl border border-ink/10 dark:border-cream/10 bg-cream-soft dark:bg-ink-soft">
          <Image
            src="/joe-telescope.jpg"
            alt="Joe with his Celestron telescope at a community outreach event"
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Why this work matters
          </h2>
          <p className="mt-4 text-base text-ink/85 dark:text-cream/85 leading-relaxed">
            Astronomy outreach is the rare thing that crosses every line —
            age, background, language. A view of Saturn through a telescope
            shifts something in a person. Doing it in Houston, the city most
            closely associated with the Apollo program, makes that
            connection even sharper.
          </p>
          <p className="mt-4 text-base text-ink/85 dark:text-cream/85 leading-relaxed">
            I see this work as the natural extension of what I do for a
            living: translate something technical and abstract into something
            human and useful.
          </p>

          <div className="mt-6 rounded-xl border border-stardust/30 bg-stardust/5 p-4 text-sm leading-relaxed text-ink/85 dark:text-cream/85">
            <p>
              <span className="font-semibold">Follow along</span> — I post
              outreach moments, observing nights, and the occasional
              astrophotograph on Instagram as{" "}
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo dark:text-indigo-soft underline underline-offset-4"
              >
                @theastrojoe
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Roles */}
      <div className="mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Roles &amp; involvement
        </h2>
        <div className="mt-8 space-y-8">
          {involvement.map((r) => (
            <div
              key={r.role}
              className={`grid gap-2 md:grid-cols-[200px_1fr] ${r.accent ? "border-l-2 border-stardust pl-4 md:pl-6" : ""}`}
            >
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-fog dark:text-fog-light md:pt-1">
                {r.dates}
              </p>
              <div>
                <p className="font-display text-lg font-semibold tracking-tight">
                  {r.role}
                </p>
                <p className="mt-2 text-base text-ink/80 dark:text-cream/80 leading-relaxed">
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
