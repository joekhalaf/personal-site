import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article" | "main";
};

/**
 * Consistent horizontal padding + max width for every page section.
 */
export function Section({
  children,
  className = "",
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Tag>
  );
}
