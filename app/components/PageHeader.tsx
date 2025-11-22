import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="mb-6 border-b border-gray-200 pb-6 dark:border-gray-800 md:mb-8 md:pb-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="break-words text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400 md:text-lg">
              {description}
            </p>
          )}
        </div>
        {children && <div className="flex shrink-0">{children}</div>}
      </div>
    </div>
  );
}
