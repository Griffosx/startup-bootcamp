interface SourceLinkProps {
  title: string;
  url: string;
  description?: string;
  date?: string;
}

export function SourceLink({ title, url, description, date }: SourceLinkProps) {
  return (
    <li className="group">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-500 hover:shadow-md dark:border-gray-700 dark:hover:border-blue-400 md:p-5"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 space-y-2">
            <h3 className="text-base font-semibold text-blue-600 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300 md:text-lg">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-gray-700 dark:text-gray-300 md:text-base">
                {description}
              </p>
            )}
            {date && (
              <p className="text-xs text-gray-500 dark:text-gray-400 md:text-sm">
                {date}
              </p>
            )}
          </div>
          <svg
            className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-500 dark:text-gray-500 dark:group-hover:text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
    </li>
  );
}
