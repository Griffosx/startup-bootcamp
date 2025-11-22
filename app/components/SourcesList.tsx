import type { ReactNode } from "react";

interface SourcesListProps {
  children: ReactNode;
  title?: string;
}

export function SourcesList({
  children,
  title = "Further Reading",
}: SourcesListProps) {
  return (
    <section className="space-y-4 md:space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      <ul className="space-y-3 md:space-y-4">{children}</ul>
    </section>
  );
}
