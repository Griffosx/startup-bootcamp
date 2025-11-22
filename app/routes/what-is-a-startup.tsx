import { MainLayout } from "../components/MainLayout";
import { NextPageNavigation } from "../components/NextPageNavigation";
import { PageContent } from "../components/PageContent";
import { PageHeader } from "../components/PageHeader";
import { SourceLink } from "../components/SourceLink";
import { SourcesList } from "../components/SourcesList";
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

          <blockquote className="mt-8 border-l-4 border-blue-500 pl-4 italic text-lg text-gray-800 dark:text-gray-200 md:text-xl">
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

        {/* Next Page Navigation */}
        <NextPageNavigation
          nextPageTitle="Mission, Vision & Values"
          nextPageHref="/mission-vision-values"
          description="Learn how to craft compelling foundational statements that define your startup's purpose and guide your strategy."
        />

        {/* Sources Section */}
        <SourcesList>
          <SourceLink
            title="What's the difference between a startup and any other business?"
            url="https://theconversation.com/whats-the-difference-between-a-startup-and-any-other-business-203832"
            description="Uses the example of a sushi restaurant versus automated sushi-making devices to illustrate how startups aim to transform entire industries through innovation. Written by a marketing professor who worked at Netflix in its early days."
            date="November 2024"
          />
          <SourceLink
            title="What is a startup? The definition"
            url="https://www.startupblink.com/blog/what-is-a-startup-the-definition/"
            description="A comprehensive guide from a startup ecosystem organization. Emphasizes that the defining difference is the intention and ability to scale - startups aim to build products or services that can reach large markets and create disproportionate impact."
          />
          <SourceLink
            title="What Is a Startup Company?"
            url="https://www.salesforce.com/small-business/what-is-a-startup/"
            description="A well-structured article covering the basics. Explains that a startup is primarily founded to develop an innovative or disruptive idea or product for the market, while a new small business focuses on serving an existing market and achieving profitability quickly."
          />
        </SourcesList>
      </PageContent>
    </MainLayout>
  );
}
