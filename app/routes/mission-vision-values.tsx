import { MainLayout } from "../components/MainLayout";
import { NextPageNavigation } from "../components/NextPageNavigation";
import { PageContent } from "../components/PageContent";
import { PageHeader } from "../components/PageHeader";
import { SourceLink } from "../components/SourceLink";
import { SourcesList } from "../components/SourcesList";
import type { Route } from "./+types/home";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Mission, Vision & Values - Startup Bootcamp" },
    {
      name: "description",
      content:
        "Understanding how to craft compelling mission, vision, and values statements that guide your startup's strategy and inspire your team.",
    },
  ];
}

export default function MissionVisionValues() {
  return (
    <MainLayout>
      <PageHeader
        title="Mission, Vision & Values"
        description="The foundational statements that define your startup's purpose, aspirations, and guiding principles."
      />

      <PageContent>
        {/* Introduction Section */}
        <section className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Every successful startup needs more than just a great product—it
            needs a clear sense of purpose and direction. Mission, vision, and
            values are the foundational statements that articulate why your
            company exists, where it's headed, and what principles guide your
            decisions. These aren't just corporate buzzwords; they're strategic
            tools that align your team, attract investors, and inspire
            customers.
          </p>

          <blockquote className="mt-8 border-l-4 border-blue-500 pl-4 italic text-lg text-gray-800 dark:text-gray-200 md:text-xl">
            "A vision statement sets an organization's sights on the future. A
            mission statement defines what you do every day to achieve that
            vision."
          </blockquote>
        </section>

        {/* Core Concepts Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Understanding the Three Pillars
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Vision Statement: Your North Star
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                A vision statement explains why your company exists and what
                future you're working to create. It's your long-term dream—the
                change you want to see in the world. Vision statements are
                typically aspirational, forward-looking, and designed to inspire
                both your team and stakeholders.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Example: LinkedIn's vision is "Create economic opportunity for
                every member of the global workforce."
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Mission Statement: Your Daily Purpose
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                A mission statement articulates what you do, how you do it, and
                who you do it for. It's about the present—the concrete actions
                your company takes every day to work toward your vision. The
                best mission statements are clear, concise, and memorable.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Example: TED's mission is simply "Spread ideas."
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Core Values: Your Guiding Principles
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Core values are the fundamental beliefs and principles that
                guide your organization's behavior and decision-making. They
                define your company culture and help employees understand what's
                important and how to act in different situations. Values should
                be authentic, actionable, and consistently demonstrated.
              </p>
            </div>
          </div>
        </section>

        {/* Why They Matter Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Why Early-Stage Startups Need These Statements
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                Alignment & Focus
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When you're moving fast and making countless decisions, clear
                mission and vision statements act as a compass. They help you
                prioritize opportunities, make strategic choices, and ensure
                everyone on your team is rowing in the same direction. Studies
                show that highly aligned organizations grow revenue 58% faster
                and are 72% more profitable than unaligned ones.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                Attracting Talent & Investment
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                In the early stages, you don't have a proven product or
                financial track record. Investors and potential employees are
                betting on your vision and mission. Compelling statements help
                you articulate the impact you want to make and why people should
                join your journey. They demonstrate that you've thought deeply
                about your purpose beyond just making money.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                Building Culture from Day One
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Your values shape your company culture. When you define them
                early, you can hire people who share those values, make
                decisions that reinforce them, and build a consistent culture as
                you scale. This is much harder to do retroactively once you've
                already grown.
              </p>
            </div>
          </div>
        </section>

        {/* How to Create Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            How to Create Your Statements
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-3">
                Step 1: Gather Input from Founders
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Start by having deep conversations with your co-founders and
                early team members. Ask questions like:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Why are we in business?</li>
                <li>What problem does our business solve?</li>
                <li>What inspired us to found this company?</li>
                <li>What impact do we want to have on the world?</li>
                <li>What will differentiate us from competitors?</li>
                <li>
                  How will we define success beyond profitability and market
                  leadership?
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-3">
                Step 2: Identify Common Themes
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Look for patterns and recurring ideas in your conversations.
                Turn these fragmented thoughts into coherent paragraphs. At this
                stage, don't worry about length—capture the full depth and
                nuance of each idea. You should end up with separate paragraphs
                for your vision, mission, and values.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-3">
                Step 3: Distill to the Essence
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This is the hardest part. Edit ruthlessly. Remove unnecessary
                words and entire sentences until you're left with the core
                message. Your vision and mission statements should ideally be
                one to three sentences, with a goal of around 100 characters
                each. They should be memorable enough that employees can recite
                them.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Key principles: Keep it specific (not generic), avoid jargon and
                buzzwords, make it inspirational, and ensure it's authentic to
                your company.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-3">
                Step 4: Test for Clarity and Distinction
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Examine your vision and mission statements side by side. They
                should be distinct yet complementary. Your vision should be
                aspirational and future-focused, while your mission should be
                actionable and present-focused. Share them with people outside
                your company to see if they understand what you do and why it
                matters.
              </p>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Real-World Examples
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Tesla
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                <span className="font-medium">Vision:</span> "To accelerate the
                world's transition to sustainable energy"
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
                This vision is aspirational, specific, and clearly articulates
                the change Tesla wants to create in the world.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Netflix
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                <span className="font-medium">Mission:</span> "To entertain the
                world"
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
                Simple, memorable, and flexible enough to accommodate pivots
                from DVDs to streaming to gaming.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Shopify
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                <span className="font-medium">Vision:</span> "To make commerce
                better for everyone"
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
                Broad enough to encompass all aspects of commerce, yet specific
                about their goal of improvement.
              </p>
            </div>
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Common Mistakes to Avoid
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-2">
                Being Generic or Uninspiring
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If your statement could apply to any company in your industry,
                it's too generic. Avoid corporate speak and focus on what makes
                your company unique. Your statements should evoke emotion and
                inspire action, not read like a bland fact sheet.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-2">
                Lacking Authenticity
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Don't copy other companies' statements or claim values you don't
                actually live by. Employees and customers will see through
                inauthentic messaging. Your statements should genuinely reflect
                your company's personality and priorities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-2">
                Using Jargon and Buzzwords
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Cut all industry jargon and corporate buzzwords. Use plain
                language that anyone can understand. If your grandmother can't
                explain what your company does after reading your mission
                statement, it's too complex.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-2">
                Treating Them as Static
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Your mission and vision should evolve as your company grows and
                the market changes. Revisit them regularly—especially after
                major milestones or pivots—to ensure they still accurately
                reflect your purpose and aspirations.
              </p>
            </div>
          </div>
        </section>

        {/* Next Page Navigation */}
        <NextPageNavigation
          nextPageTitle="Building and Validating"
          nextPageHref="/building-and-validating"
          description="Discover how to build your MVP and validate your product-market fit through customer feedback and iteration."
        />

        {/* Sources Section */}
        <SourcesList>
          <SourceLink
            title="Mission, vision, and values: setting your startup up for success"
            url="https://medium.com/uncorkcapital/mission-vision-and-values-setting-your-startup-up-for-success-f20568df0ae6"
            description="A comprehensive guide from Uncork Capital on crafting foundational statements. Explains how mission, vision, and values act as strategic tools that align teams, attract investors, and inspire customers. Emphasizes that these statements are especially critical for early-stage startups that don't yet have tangible proof of their business."
            date="Uncork Capital"
          />
          <SourceLink
            title="How To Write Vision And Mission Statements"
            url="https://www.antler.co/academy/mission-and-vision-statements"
            description="Antler Academy's practical guide with step-by-step instructions for creating mission and vision statements. Features real examples from LinkedIn and Netflix, and covers common mistakes to avoid. Highlights that vision statements should be no more than 100 characters and mission statements should answer what, how, and who."
          />
          <SourceLink
            title="22 vision statement examples to help you write your own"
            url="https://www.brex.com/journal/vision-statement-examples"
            description="Brex's collection of vision statement examples from successful companies like Tesla, Google, and IKEA. Explains why vision statements are important for organizational alignment and shows that highly aligned organizations grow revenue 58% faster. Provides practical tips on keeping statements specific, short, and inspirational."
          />
        </SourcesList>
      </PageContent>
    </MainLayout>
  );
}
