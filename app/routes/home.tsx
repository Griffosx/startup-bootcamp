import { Card, CardHeader } from "../components/Card";
import { MainLayout } from "../components/MainLayout";
import { PageHeader } from "../components/PageHeader";
import type { Route } from "./+types/home";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Startup Bootcamp - Open Source Startup Resources" },
    {
      name: "description",
      content:
        "A comprehensive open-source repository of resources, guides, and information for the startup world.",
    },
  ];
}

export default function Home() {
  return (
    <MainLayout>
      <PageHeader
        title="Welcome to Startup Bootcamp"
        description="Your comprehensive guide to navigating the startup world"
      />

      <div className="space-y-6">
        <Card>
          <CardHeader
            title="About This Project"
            description="An open-source collection of startup resources"
          />
          <p className="text-gray-700 dark:text-gray-300">
            Startup Bootcamp is a community-driven project that aims to provide
            valuable information, resources, and guides for entrepreneurs,
            founders, and anyone interested in the startup ecosystem.
          </p>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader title="Getting Started" />
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              New to startups? Start here to learn the fundamentals and get your
              journey off the ground.
            </p>
            <a
              href="/getting-started"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Explore Getting Started →
            </a>
          </Card>

          <Card>
            <CardHeader title="Resources" />
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              Curated tools, articles, and resources to help you build and grow
              your startup.
            </p>
            <a
              href="/resources"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Browse Resources →
            </a>
          </Card>

          <Card>
            <CardHeader title="Funding" />
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              Learn about different funding options, from bootstrapping to
              venture capital.
            </p>
            <a
              href="/funding"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Explore Funding →
            </a>
          </Card>

          <Card>
            <CardHeader title="Legal" />
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              Important legal considerations for starting and running a company.
            </p>
            <a
              href="/legal"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Learn About Legal →
            </a>
          </Card>
        </div>

        <Card className="bg-blue-50 dark:bg-blue-950/30">
          <CardHeader
            title="Contribute"
            description="This is an open-source project"
          />
          <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
            We welcome contributions from the community! If you have resources,
            guides, or information to share, please consider contributing to
            this project on GitHub.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View on GitHub →
          </a>
        </Card>
      </div>
    </MainLayout>
  );
}
