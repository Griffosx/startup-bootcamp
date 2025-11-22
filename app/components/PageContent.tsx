import type { ReactNode } from "react";

interface PageContentProps {
  children: ReactNode;
  className?: string;
}

export function PageContent({ children, className = "" }: PageContentProps) {
  return (
    <div className={`space-y-8 md:space-y-12 ${className}`}>{children}</div>
  );
}
