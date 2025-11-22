import { Card, CardHeader } from "../components/Card";
import { MainLayout } from "../components/MainLayout";
import { PageHeader } from "../components/PageHeader";
import type { Route } from "./+types/getting-started";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Getting Started - Startup Bootcamp" },
    {
      name: "description",
      content: "Learn the fundamentals of starting your own company.",
    },
  ];
}

export default function GettingStarted() {
  return (
    <MainLayout>
      <PageHeader
        title="Getting Started"
        description="Essential steps to launch your startup journey"
      />

      <div className="space-y-8">
        <Card>
          <CardHeader
            title="1. Validate Your Idea"
            description="Before building anything, make sure there's a market"
          />
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              The first step in any startup journey is validating that your idea
              solves a real problem for real people.
            </p>
            <ul className="ml-6 list-disc space-y-2 text-sm">
              <li>Talk to potential customers</li>
              <li>Research your competition</li>
              <li>Identify your unique value proposition</li>
              <li>Test your assumptions with MVPs</li>
            </ul>
          </div>
        </Card>

        <Card>
          <CardHeader
            title="2. Build Your Team"
            description="Find co-founders and early team members"
          />
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              Building a startup is hard. Having the right team makes all the
              difference.
            </p>
            <ul className="ml-6 list-disc space-y-2 text-sm">
              <li>Look for complementary skills</li>
              <li>Ensure aligned values and vision</li>
              <li>Define roles and responsibilities clearly</li>
              <li>Set up proper equity agreements</li>
            </ul>
          </div>
        </Card>

        <Card>
          <CardHeader
            title="3. Create Your MVP"
            description="Build the minimum viable product"
          />
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              Start small and iterate based on user feedback. Your first version
              doesn't need to be perfect.
            </p>
            <ul className="ml-6 list-disc space-y-2 text-sm">
              <li>Focus on core features only</li>
              <li>Get it in front of users quickly</li>
              <li>Collect and analyze feedback</li>
              <li>Iterate based on learnings</li>
            </ul>
          </div>
        </Card>

        <Card>
          <CardHeader
            title="4. Launch and Grow"
            description="Get your product to market"
          />
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              Once you have a working product, it's time to find your first
              customers and start growing.
            </p>
            <ul className="ml-6 list-disc space-y-2 text-sm">
              <li>Develop a go-to-market strategy</li>
              <li>Focus on customer acquisition</li>
              <li>Measure key metrics</li>
              <li>Scale what works</li>
            </ul>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
