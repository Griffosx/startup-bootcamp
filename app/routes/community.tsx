import { Card, CardHeader } from "../components/Card";
import { MainLayout } from "../components/MainLayout";
import { PageHeader } from "../components/PageHeader";
import type { Route } from "./+types/community";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Community - Startup Bootcamp" },
    {
      name: "description",
      content: "Connect with other founders and the startup community.",
    },
  ];
}

export default function Community() {
  return (
    <MainLayout>
      <PageHeader
        title="Community"
        description="Connect with fellow founders and entrepreneurs"
      />

      <div className="space-y-8">
        <Card className="bg-blue-50 dark:bg-blue-950/30">
          <CardHeader
            title="Join the Conversation"
            description="This is an open-source project"
          />
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Startup Bootcamp is built by the community, for the community. We
            welcome contributions, suggestions, and discussions from founders at
            all stages.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Contribute on GitHub →
          </a>
        </Card>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            Online Communities
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Reddit
              </h3>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                Active startup communities
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• r/startups - General startup discussions</li>
                <li>• r/entrepreneur - Entrepreneurship community</li>
                <li>• r/SaaS - SaaS-focused discussions</li>
              </ul>
            </Card>

            <Card>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Discord & Slack
              </h3>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                Real-time chat communities
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Indie Hackers - Independent founders</li>
                <li>• Y Combinator Startup School</li>
                <li>• Various accelerator communities</li>
              </ul>
            </Card>

            <Card>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Twitter/X
              </h3>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                Follow startup thought leaders
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• #startups - General startup content</li>
                <li>• #buildinpublic - Transparent building</li>
                <li>• Follow VCs and successful founders</li>
              </ul>
            </Card>

            <Card>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Forums
              </h3>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                Discussion boards and forums
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Indie Hackers - Share your journey</li>
                <li>• Hacker News - Tech and startup news</li>
                <li>• Product Hunt - Launch and discover</li>
              </ul>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            Events and Meetups
          </h2>
          <Card>
            <CardHeader title="Connect In Person" />
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p className="text-sm">
                Meeting other founders in person can lead to valuable
                connections, partnerships, and friendships.
              </p>
              <ul className="ml-6 list-disc space-y-2 text-sm">
                <li>Local startup meetups and networking events</li>
                <li>Startup conferences and summits</li>
                <li>Accelerator demo days</li>
                <li>Industry-specific events</li>
                <li>Coworking space communities</li>
              </ul>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            How to Contribute
          </h2>
          <Card>
            <CardHeader
              title="Help Improve This Resource"
              description="We welcome all contributions"
            />
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p className="text-sm">
                This project is open source and maintained by the community.
                Here's how you can help:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-sm">
                <li>Add new resources and tools</li>
                <li>Improve existing content</li>
                <li>Fix typos and errors</li>
                <li>Suggest new sections or topics</li>
                <li>Share your startup experiences</li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Start Contributing →
                </a>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </MainLayout>
  );
}
