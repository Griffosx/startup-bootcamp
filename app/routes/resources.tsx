import { Card, CardHeader } from "../components/Card";
import { MainLayout } from "../components/MainLayout";
import { PageHeader } from "../components/PageHeader";
import type { Route } from "./+types/resources";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Resources - Startup Bootcamp" },
    {
      name: "description",
      content: "Curated tools and resources for startup founders.",
    },
  ];
}

export default function Resources() {
  return (
    <MainLayout>
      <PageHeader
        title="Resources"
        description="Curated tools, articles, and resources for startup founders"
      />

      <div className="space-y-8">
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            Development Tools
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Version Control
              </h3>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                Essential tools for managing your codebase
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• GitHub - Code hosting and collaboration</li>
                <li>• GitLab - DevOps platform</li>
                <li>• Bitbucket - Git solution for teams</li>
              </ul>
            </Card>

            <Card>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Cloud Platforms
              </h3>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                Deploy and scale your applications
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Vercel - Frontend deployment</li>
                <li>• AWS - Cloud infrastructure</li>
                <li>• Google Cloud - Cloud services</li>
              </ul>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            Business Tools
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Analytics
              </h3>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                Understand your users and metrics
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Google Analytics - Web analytics</li>
                <li>• Mixpanel - Product analytics</li>
                <li>• Amplitude - Digital analytics</li>
              </ul>
            </Card>

            <Card>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Communication
              </h3>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                Stay connected with your team
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Slack - Team messaging</li>
                <li>• Discord - Community platform</li>
                <li>• Zoom - Video conferencing</li>
              </ul>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            Learning Resources
          </h2>
          <Card>
            <CardHeader title="Recommended Reading" />
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li>
                <strong>The Lean Startup</strong> - Eric Ries
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  Learn how to build a sustainable business with validated
                  learning
                </p>
              </li>
              <li>
                <strong>Zero to One</strong> - Peter Thiel
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  Notes on startups and building the future
                </p>
              </li>
              <li>
                <strong>The Hard Thing About Hard Things</strong> - Ben Horowitz
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  Building a business when there are no easy answers
                </p>
              </li>
            </ul>
          </Card>
        </section>
      </div>
    </MainLayout>
  );
}
