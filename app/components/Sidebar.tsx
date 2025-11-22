import { ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { ThemeToggle } from "./ThemeToggle";

interface SubNavigationItem {
  name: string;
  href: string;
}

interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
  subItems?: SubNavigationItem[];
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "What is a Startup?", href: "/what-is-a-startup" },
  { name: "Mission, Vision & Values", href: "/mission-vision-values" },
  { name: "Building and Validating", href: "/building-and-validating" },
  { name: "Go-to-Market Strategy", href: "/go-to-market-strategy" },
  { name: "Startup Funding Stages", href: "/funding-stages" },
  {
    name: "Italian Environment",
    href: "/italian-investment-environment",
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Close sidebar on route change on mobile
  useEffect(() => {
    if (location.pathname) {
      onClose();
    }
  }, [location.pathname, onClose]);

  const toggleExpanded = (href: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(href)) {
        next.delete(href);
      } else {
        next.add(href);
      }
      return next;
    });
  };

  const isItemActive = (item: NavigationItem) => {
    const pathMatches = location.pathname === item.href;
    const subItemMatches = item.subItems?.some(
      (subItem) => `${location.pathname}${location.hash}` === subItem.href
    );
    return pathMatches || subItemMatches;
  };

  const isSubItemActive = (subItem: SubNavigationItem) => {
    return `${location.pathname}${location.hash}` === subItem.href;
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-gray-200 bg-white transition-transform duration-300 ease-in-out dark:border-gray-800 dark:bg-gray-950 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo/Header */}
          <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6 dark:border-gray-800">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <span className="text-lg font-bold text-white">SB</span>
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                Startup Bootcamp
              </span>
            </Link>
            <button
              type="button"
              className="md:hidden -mr-2 p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="space-y-1">
              {navigation.map((item) => {
                const isActive = isItemActive(item);
                const isExpanded = expandedItems.has(item.href);
                const hasSubItems = item.subItems && item.subItems.length > 0;

                return (
                  <li key={item.href}>
                    <div className="flex items-center">
                      <Link
                        to={item.href}
                        className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400"
                            : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
                        }`}
                      >
                        {item.name}
                      </Link>
                      {hasSubItems && (
                        <button
                          type="button"
                          onClick={() => toggleExpanded(item.href)}
                          className="ml-2 cursor-pointer rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                          aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.name}`}
                        >
                          <ChevronRight
                            className={`h-4 w-4 transition-transform duration-200 ${
                              isExpanded ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    {hasSubItems && isExpanded && (
                      <ul className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4 dark:border-gray-800">
                        {item.subItems?.map((subItem) => {
                          const isSubActive = isSubItemActive(subItem);
                          return (
                            <li key={subItem.href}>
                              <Link
                                to={subItem.href}
                                className={`block rounded-lg px-4 py-1.5 text-sm transition-colors ${
                                  isSubActive
                                    ? "text-blue-700 dark:text-blue-400"
                                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="space-y-4 border-t border-gray-200 p-4 dark:border-gray-800">
            <ThemeToggle />
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Open Source Project
              </p>
              <a
                href="https://github.com/Griffosx/startup-bootcamp"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
