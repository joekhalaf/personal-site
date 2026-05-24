import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-ink/5 dark:border-cream/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold">
            {siteConfig.name}
            <span className="text-stardust" aria-hidden> · </span>
            <span className="font-normal text-ink/70 dark:text-cream/70">
              {siteConfig.location}
            </span>
          </p>
          <p className="mt-1 text-sm text-ink/60 dark:text-cream/60">
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo dark:hover:text-indigo-soft transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo dark:hover:text-indigo-soft transition-colors"
          >
            Instagram
          </a>
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo dark:hover:text-indigo-soft transition-colors"
          >
            GitHub
          </a>
          <Link
            href="/contact"
            className="hover:text-indigo dark:hover:text-indigo-soft transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
