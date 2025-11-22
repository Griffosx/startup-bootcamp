import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="mb-8 border-b border-gray-200 pb-8 dark:border-gray-800">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1>
          {description && (
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
        {children && <div className="ml-4">{children}</div>}
      </div>
    </div>
  );
}
