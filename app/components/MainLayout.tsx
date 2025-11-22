import { Menu } from "lucide-react";
import { type ReactNode, useCallback, useState } from "react";
import { Link } from "react-router";
import { Sidebar } from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarClose = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-950">
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />

      <div className="flex-1 md:ml-64">
        {/* Mobile Header */}
        <div className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white/80 px-4 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80 md:hidden">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <span className="text-lg font-bold text-white">SB</span>
            </div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Startup Bootcamp
            </span>
          </Link>
          <div className="flex items-center gap-1">
            <ThemeToggle variant="mobile" />
            <button
              type="button"
              className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        <main>
          <div className="mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
