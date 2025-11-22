import { Card, CardHeader } from "../components/Card";
import { MainLayout } from "../components/MainLayout";
import { PageHeader } from "../components/PageHeader";
import type { Route } from "./+types/legal";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Legal - Startup Bootcamp" },
    {
      name: "description",
      content: "Important legal considerations for your startup.",
    },
  ];
}

export default function Legal() {
  return (
    <MainLayout>
      <PageHeader
        title="Legal"
        description="Essential legal considerations for startups"
      />

      <div className="mb-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-900 dark:bg-yellow-950/30">
        <p className="text-sm text-yellow-800 dark:text-yellow-200">
          <strong>Disclaimer:</strong> This information is for educational
          purposes only and should not be considered legal advice. Always
          consult with a qualified attorney for your specific situation.
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader
            title="Company Formation"
            description="Choosing the right business structure"
          />
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              The legal structure you choose affects taxes, liability, and
              fundraising options.
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  C-Corporation
                </h4>
                <p className="text-sm">
                  Most common for venture-backed startups. Allows for multiple
                  share classes and unlimited shareholders.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  LLC
                </h4>
                <p className="text-sm">
                  Flexible structure with pass-through taxation. Good for
                  bootstrapped companies.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader
            title="Intellectual Property"
            description="Protecting your innovations"
          />
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              Protecting your IP is crucial for maintaining competitive
              advantage.
            </p>
            <ul className="ml-6 list-disc space-y-2 text-sm">
              <li>
                <strong>Trademarks:</strong> Protect your brand name and logo
              </li>
              <li>
                <strong>Patents:</strong> Protect inventions and innovations
              </li>
              <li>
                <strong>Copyrights:</strong> Protect original works of
                authorship
              </li>
              <li>
                <strong>Trade Secrets:</strong> Protect confidential business
                information
              </li>
            </ul>
          </div>
        </Card>

        <Card>
          <CardHeader
            title="Contracts and Agreements"
            description="Essential documents for your startup"
          />
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <ul className="space-y-3 text-sm">
              <li>
                <strong>Founder Agreement:</strong> Defines roles, equity split,
                and vesting schedules
              </li>
              <li>
                <strong>Employment Agreements:</strong> Terms of employment for
                team members
              </li>
              <li>
                <strong>NDAs:</strong> Protect confidential information
              </li>
              <li>
                <strong>Customer Contracts:</strong> Terms of service and
                privacy policies
              </li>
              <li>
                <strong>Investment Documents:</strong> SAFE, convertible notes,
                or equity agreements
              </li>
            </ul>
          </div>
        </Card>

        <Card>
          <CardHeader
            title="Compliance"
            description="Staying on the right side of the law"
          />
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <ul className="ml-6 list-disc space-y-2 text-sm">
              <li>Register your business with appropriate authorities</li>
              <li>Obtain necessary licenses and permits</li>
              <li>Comply with tax obligations</li>
              <li>Follow employment laws and regulations</li>
              <li>Protect customer data (GDPR, CCPA, etc.)</li>
              <li>Maintain proper corporate records</li>
            </ul>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
