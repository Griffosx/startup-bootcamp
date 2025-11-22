import { MainLayout } from "../components/MainLayout";
import { PageContent } from "../components/PageContent";
import { PageHeader } from "../components/PageHeader";

export function meta() {
  return [
    { title: "Startup Bootcamp - Resources for Founders" },
    {
      name: "description",
      content:
        "A collection of helpful resources and guides for anyone building a startup.",
    },
  ];
}

export default function Home() {
  return (
    <MainLayout>
      <PageHeader
        title="Startup Bootcamp"
        description="A collection of helpful resources and guides for anyone building a startup."
      />

      <PageContent>
        <section className="prose dark:prose-invert max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What is this?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              This is an open-source website that brings together useful
              information about starting and growing a company. Whether you're
              just getting started or already on your journey, you'll find
              guides, resources, and tips to help you along the way.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              How to contribute
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This project is open to everyone! If you have something useful to
              share, feel free to contribute.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              Made with ❤️ in Milan 🇮🇹
            </p>
          </div>
        </section>
      </PageContent>
    </MainLayout>
  );
}
