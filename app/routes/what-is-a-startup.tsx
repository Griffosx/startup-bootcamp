import { MainLayout } from "../components/MainLayout";
import { PageContent } from "../components/PageContent";
import { PageHeader } from "../components/PageHeader";
import type { Route } from "./+types/home";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "What is a Startup? - Startup Bootcamp" },
    {
      name: "description",
      content:
        "Understanding the core definition of a startup: innovation, scalability, and the key differences from traditional small businesses.",
    },
  ];
}

export default function WhatIsAStartup() {
  return (
    <MainLayout>
      <PageHeader
        title="What is a Startup?"
        description="Defining the DNA of high-growth ventures and how they differ from traditional businesses."
      />

      <PageContent>
        {/* Introduction Section */}
        <section className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            The term "startup" is often used loosely to describe any new
            business, but in the world of entrepreneurship, it has a specific
            meaning. A startup is not just a smaller version of a large company;
            it is a temporary organization designed to search for a repeatable
            and scalable business model. The defining characteristic is the
            ambition to grow rapidly and create disproportionate impact.
          </p>

          <blockquote className="mt-8 border-l-4 border-blue-500 pl-4 italic text-xl text-gray-800 dark:text-gray-200">
            "A startup is designed to scale; a small business is designed to
            work."
          </blockquote>
        </section>

        {/* Core Concepts Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Core Concepts
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Innovation & Disruption
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Startups aim to transform industries. They don't just serve an
                existing market; they often create new ones. Think of the
                difference between opening a traditional sushi restaurant
                (serving an existing demand) versus developing automated
                sushi-making robotics (changing how the product is made and
                delivered globally).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Scalability
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The primary engine of a startup is growth. Unlike small
                businesses that are constrained by geography or labor, startups
                build products or platforms that can serve millions of users
                without a linear increase in costs. The goal is to reach a
                massive, often global, market.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Uncertainty & Risk
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Because they are doing something new, startups operate in
                extreme uncertainty. They are experiments. Founders must
                validate their hypotheses quickly. This high risk is the price
                of admission for the potential of high reward and
                industry-shifting impact.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Startup vs. Small Business
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                The Startup
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Focused on disrupting markets with new innovation and aiming for
                exponential scale ("Blitzscaling"). Funding often requires
                venture capital to fuel growth before profitability, targeting a
                global or national market reach.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-3">
                The Small Business
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Focused on serving a local community or niche with proven
                services, aiming for linear, sustainable growth tied to revenue.
                Typically funded through self-funding, loans, or grants, with a
                local or regional market focus.
              </p>
            </div>
          </div>
        </section>
      </PageContent>
    </MainLayout>
  );
}
