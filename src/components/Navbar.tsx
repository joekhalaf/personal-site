"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        sticky top-0 z-40
        backdrop-blur-md
        bg-cream/75 dark:bg-ink/70
        border-b border-ink/5 dark:border-cream/10
      "
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-display text-lg font-semibold tracking-tight hover:text-indigo dark:hover:text-indigo-soft transition-colors"
        >
          {siteConfig.name}
          <span aria-hidden className="ml-1 text-stardust">·</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  rounded-md px-3 py-1.5 text-sm transition-colors
                  ${
                    active
                      ? "text-indigo dark:text-indigo-soft"
                      : "text-ink/75 dark:text-cream/75 hover:text-ink dark:hover:text-cream"
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-ink/10 dark:border-cream/15"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu sheet */}
      {open && (
        <div className="md:hidden border-t border-ink/5 dark:border-cream/10">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 flex flex-col gap-1">
            {navItems.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`
                    rounded-md px-3 py-2 text-sm
                    ${
                      active
                        ? "text-indigo dark:text-indigo-soft bg-cream-soft dark:bg-ink-soft"
                        : "text-ink/80 dark:text-cream/80"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
