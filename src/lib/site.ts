/**
 * Site-wide configuration. Centralized so links, names, and metadata
 * are only updated in one place.
 */
export const siteConfig = {
  name: "Joe Khalaf",
  legalName: "Jaleel F. Khalaf",
  title: "Technology and Business Strategist",
  tagline:
    "Translating enterprise technology investments into measurable business outcomes.",
  location: "Houston, TX",
  // Public-facing URL once deployed. Update after Vercel/domain setup.
  url: "https://joekhalaf.com",
  // Email is NOT shown publicly — contact form only. Used server-side
  // by the contact API to know where to deliver.
  contactDeliveryEmail: "jkhalaf@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/jkhalaf/",
    instagram: "https://www.instagram.com/theastrojoe/",
    github: "https://github.com/joekhalaf",
  },
} as const;

export type NavItem = { href: string; label: string };

export const navItems: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/astronomy", label: "Astronomy" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];
