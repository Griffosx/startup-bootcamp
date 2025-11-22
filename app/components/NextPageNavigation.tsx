import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

interface NextPageNavigationProps {
  nextPageTitle: string;
  nextPageHref: string;
  description?: string;
}

export function NextPageNavigation({
  nextPageTitle,
  nextPageHref,
  description,
}: NextPageNavigationProps) {
  return (
    <section className="mt-8 md:mt-12">
      <Link
        to={nextPageHref}
        className="group block rounded-lg border-2 border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 p-6 transition-all hover:border-blue-600 hover:shadow-lg dark:from-blue-950 dark:to-blue-900 dark:hover:border-blue-400 md:p-8"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 md:text-base">
              Next Up
            </p>
            <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white md:text-2xl">
              {nextPageTitle}
            </h3>
            {description && (
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 md:text-base">
                {description}
              </p>
            )}
          </div>
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white transition-transform group-hover:scale-110 group-hover:bg-blue-600 dark:bg-blue-600 dark:group-hover:bg-blue-500">
              <ArrowRight className="h-6 w-6" />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
