import { Card, CardHeader } from "../components/Card";
import { MainLayout } from "../components/MainLayout";
import { PageHeader } from "../components/PageHeader";
import type { Route } from "./+types/funding";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Funding - Startup Bootcamp" },
    {
      name: "description",
      content: "Learn about different funding options for your startup.",
    },
  ];
}

export default function Funding() {
  return (
    <MainLayout>
      <PageHeader
        title="Funding"
        description="Explore different ways to fund your startup"
      />

      <div className="space-y-8">
        <Card>
          <CardHeader
            title="Bootstrapping"
            description="Self-funding your startup"
          />
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              Bootstrapping means building your company without external
              funding, using your own savings or revenue from the business.
            </p>
            <div className="mt-4">
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Pros:
              </h4>
              <ul className="ml-6 list-disc space-y-1 text-sm">
                <li>Full control over your company</li>
                <li>No equity dilution</li>
                <li>Forces focus on profitability</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Cons:
              </h4>
              <ul className="ml-6 list-disc space-y-1 text-sm">
                <li>Limited resources for growth</li>
                <li>Higher personal financial risk</li>
                <li>Slower scaling potential</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader
            title="Angel Investors"
            description="Early-stage individual investors"
          />
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              Angel investors are wealthy individuals who invest their own money
              in early-stage startups, typically in exchange for equity.
            </p>
            <div className="mt-4">
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Typical Investment:
              </h4>
              <p className="text-sm">$25K - $500K</p>
            </div>
            <div className="mt-4">
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                What They Look For:
              </h4>
              <ul className="ml-6 list-disc space-y-1 text-sm">
                <li>Strong founding team</li>
                <li>Clear market opportunity</li>
                <li>Early traction or validation</li>
                <li>Scalable business model</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader
            title="Venture Capital"
            description="Professional investment firms"
          />
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              Venture capital firms invest institutional money in high-growth
              startups, typically in later stages than angels.
            </p>
            <div className="mt-4">
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Funding Stages:
              </h4>
              <ul className="ml-6 list-disc space-y-2 text-sm">
                <li>
                  <strong>Seed:</strong> $500K - $2M
                </li>
                <li>
                  <strong>Series A:</strong> $2M - $15M
                </li>
                <li>
                  <strong>Series B+:</strong> $15M+
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader
            title="Alternative Funding"
            description="Other ways to raise capital"
          />
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <ul className="space-y-3 text-sm">
              <li>
                <strong>Crowdfunding:</strong> Raise small amounts from many
                people (Kickstarter, Indiegogo)
              </li>
              <li>
                <strong>Grants:</strong> Non-dilutive funding from government or
                organizations
              </li>
              <li>
                <strong>Revenue-Based Financing:</strong> Repay based on a
                percentage of revenue
              </li>
              <li>
                <strong>Accelerators:</strong> Programs that provide funding,
                mentorship, and resources
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
