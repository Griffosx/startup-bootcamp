import { Link, useLocation } from "react-router";

interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "Getting Started", href: "/getting-started" },
  { name: "Resources", href: "/resources" },
  { name: "Funding", href: "/funding" },
  { name: "Legal", href: "/legal" },
  { name: "Community", href: "/community" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="flex h-full flex-col">
        {/* Logo/Header */}
        <div className="flex h-16 items-center border-b border-gray-200 px-6 dark:border-gray-800">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <span className="text-lg font-bold text-white">SB</span>
            </div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Startup Bootcamp
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4 dark:border-gray-800">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Open Source Project
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </aside>
  );
}
