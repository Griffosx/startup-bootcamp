import { MainLayout } from "../components/MainLayout";
import { NextPageNavigation } from "../components/NextPageNavigation";
import { PageContent } from "../components/PageContent";
import { PageHeader } from "../components/PageHeader";
import { SourceLink } from "../components/SourceLink";
import { SourcesList } from "../components/SourcesList";
import type { Route } from "./+types/home";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Startup Funding Stages - Startup Bootcamp" },
    {
      name: "description",
      content:
        "A comprehensive guide to startup funding stages from pre-seed to IPO, including average amounts, valuations, and what investors expect at each stage.",
    },
  ];
}

export default function FundingStages() {
  return (
    <MainLayout>
      <PageHeader
        title="Startup Funding Stages"
        description="Understanding the journey from pre-seed to IPO: how startups raise capital and what investors expect at each stage."
      />

      <PageContent>
        {/* Introduction Section */}
        <section className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Raising capital is one of the most critical challenges for startups.
            Unlike traditional businesses that grow organically through revenue,
            startups often require external funding to fuel rapid growth and
            scale their operations. The funding journey typically follows a
            series of distinct stages, each with its own characteristics,
            expectations, and investor types.
          </p>

          <blockquote className="mt-8 border-l-4 border-blue-500 pl-4 italic text-lg text-gray-800 dark:text-gray-200 md:text-xl">
            "Funding should last somewhere between 12 and 18 months. It should
            be enough capital to allow you to comfortably hit your goals and the
            forecast you laid out during your pitch."
          </blockquote>
        </section>

        {/* Overview Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            The Funding Journey
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Most startups progress through several funding rounds as they grow
            and mature. Each round serves a specific purpose and comes with
            increasing expectations from investors. The typical progression is:
            Pre-Seed → Seed → Series A → Series B → Series C (and beyond) → IPO
            or Acquisition.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Not every startup goes through all these stages. Some may bootstrap
            their way to profitability, while others might be acquired before
            reaching later stages. The key is understanding what each stage
            represents and what you need to demonstrate to investors.
          </p>
        </section>

        {/* Pre-Seed Funding Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Pre-Seed Funding
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What It Is
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Pre-seed funding is a relatively new stage that has emerged over
                the past few years. It represents the first round of
                institutional capital that a startup raises, typically when the
                company is still in its earliest stages—often just an idea or a
                basic prototype. This is the capital that helps founders move
                from concept to something tangible.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Typical Amount & Valuation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Funding Range:</strong> $100,000 to $5 million
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                Pre-seed rounds vary significantly in size depending on the
                founders' network, the industry, and the startup's needs. The
                goal is to raise enough to build an MVP (Minimum Viable Product)
                and validate initial assumptions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Who Invests
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  <strong>Angel Investors:</strong> High-net-worth individuals
                  who can write checks from a few thousand dollars to $500,000+
                </li>
                <li>
                  <strong>Accelerators & Incubators:</strong> Programs like Y
                  Combinator, Techstars, or 500 Startups that provide capital
                  along with mentorship
                </li>
                <li>
                  <strong>Dedicated Pre-Seed Funds:</strong> Specialized VC
                  funds that focus exclusively on this early stage
                </li>
                <li>
                  <strong>Friends & Family:</strong> Personal connections who
                  believe in the founder's vision
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What You Need to Show
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                At this stage, it's mostly about the team and the idea.
                Investors are betting on the founders' ability to execute. You
                need a compelling vision, a clear understanding of the problem
                you're solving, and ideally some initial market validation or
                customer interviews.
              </p>
            </div>
          </div>
        </section>

        {/* Seed Funding Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Seed Funding
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What It Is
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Seed funding is the startup's earliest official funding stage.
                The name is self-explanatory: this is the seed that will
                (hopefully) grow the company. Seed funding is used to take a
                startup from idea to the first steps, such as product
                development or market research. This is often the endpoint for
                many startups—if they can't gain traction before the money runs
                out, they'll fold.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Typical Amount & Valuation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Funding Range:</strong> $500,000 to $2 million
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                <strong>Typical Valuation:</strong> $3 million to $6 million
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                Over the past few years, seed-stage funding has exploded in
                round sizes. What used to be regarded as a few small checks from
                family and friends has turned into multimillion-dollar rounds as
                more institutional investors have moved into this space.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Who Invests
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Seed funding typically comes from angel investors, early-stage
                venture capital firms, and accelerators. These investors are
                comfortable with high risk and understand that many seed-stage
                companies will fail.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What You Need to Show
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You need a working product or prototype and some initial user
                feedback. Investors want to see that you've validated the
                problem and that people are interested in your solution. Early
                traction metrics, even if small, are crucial.
              </p>
            </div>
          </div>
        </section>

        {/* Series A Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Series A Funding
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What It Is
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Series A is a significant milestone in a company's lifecycle.
                After raising a seed round, it's time to prove that your startup
                can develop a sustainable business model. This is where the
                focus shifts from just building a product to building a
                business. Startups at this stage need to demonstrate that they
                can generate consistent revenue and have a clear path to
                profitability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Typical Amount & Valuation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Average Funding:</strong> $18.7 million (as of 2024)
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                <strong>Funding Range:</strong> $2 million to $15 million
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                <strong>Typical Valuation:</strong> $10 million to $30 million
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                During a Series A round, investors will usually be able to
                purchase from 10% to 30% of the business. The funding is
                generally used to grow the business, often in preparation for
                entering into new markets or scaling operations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Who Invests
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Series A rounds are typically led by traditional venture capital
                firms. These firms specialize in early-stage investments and
                have the expertise to help startups scale. Some seed investors
                may participate in follow-on rounds to maintain their ownership
                percentage.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What You Need to Show
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Investors expect to see real traction: consistent revenue
                growth, a proven business model, and strong unit economics. For
                SaaS companies, investors often look for $1-2 million in annual
                recurring revenue (ARR). You need to demonstrate that you can
                acquire customers efficiently and that your product has achieved
                product-market fit.
              </p>
            </div>
          </div>
        </section>

        {/* Series B Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Series B Funding
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What It Is
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Series B is all about scaling. At this stage, your startup has
                proven its business model and achieved product-market fit. Now
                it's time to expand: grow your team, enter new markets, and
                build out your infrastructure. The big question investors ask
                is: Can you scale from 100 users to 1,000? From 1,000 to 1
                million?
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Typical Amount & Valuation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Average Funding:</strong> $30 million or more
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                <strong>Funding Range:</strong> $7 million to $10 million
                (typical)
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                <strong>Typical Valuation:</strong> $30 million to $60 million
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                The bulk of the heavy lifting has already been done by seed
                capital and Series A funding. Series B funding is used to grow
                the team, expand market reach, and scale operations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Who Invests
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Series B funding often comes from the same investors who led the
                Series A round, along with new venture capital firms that
                specialize in growth-stage investments. Because each round comes
                with a new valuation, previous investors often choose to
                participate to maintain their ownership stake.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What You Need to Show
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                At this stage, you need to demonstrate consistent growth and a
                clear path to becoming a market leader. Investors want to see
                strong revenue growth, efficient customer acquisition, and a
                scalable business model. Your company should be in a good
                position with proven traction and a solid foundation for
                expansion.
              </p>
            </div>
          </div>
        </section>

        {/* Series C Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Series C Funding (and Beyond)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What It Is
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Series C funding is for companies that have already proven
                themselves as a business model but need more capital for
                expansion. If a business has made it to Series C, they are
                already quite successful. This round is typically used to scale
                into new markets, acquire other companies, or prepare for an IPO
                or acquisition.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Typical Amount & Valuation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Average Funding:</strong> $26 million to $50 million
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                <strong>Funding Range:</strong> $30 million to $100 million
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                <strong>Typical Valuation:</strong> $100 million to $120 million
                (often higher)
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                At this point, a startup's valuation is likely over $100 million
                and they are on a national or international radar. Companies
                commonly use Series C funding to take their product out of their
                home country and reach international markets, or to increase
                their valuation before going public.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Who Invests
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Series C investors are typically later-stage VC funds, private
                equity firms, hedge funds, and even investment banks. At this
                stage, your company likely speaks for itself and will have more
                inbound requests from investors. The strategy changes from
                earlier rounds as the average check size increases
                significantly.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What You Need to Show
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Valuation at this stage is based on hard data points, not hopes
                and expectations. Investors want to know: How many customers
                does the company have? What's its revenue? What's its current
                and expected growth? You need to demonstrate that you're a
                market leader with a proven track record of success.
              </p>
            </div>
          </div>
        </section>

        {/* Series D and Later Stages Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Series D, E, and Later Stages
          </h2>

          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Depending on the business strategy, a Series C round may be the
              end of the road in terms of venture capital financing. However,
              some companies continue to raise additional rounds (Series D, E,
              and beyond) for various reasons:
            </p>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                Positive Reasons for Later Rounds
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Discovered a new opportunity for expansion before going for an
                  IPO
                </li>
                <li>
                  Need additional capital to acquire competitors or adjacent
                  businesses
                </li>
                <li>Want to stay private longer while continuing to grow</li>
                <li>
                  Market conditions make staying private more attractive than
                  going public
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-3">
                Negative Reasons for Later Rounds
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Didn't raise enough money in Series C and need more runway
                </li>
                <li>
                  Haven't hit the expectations laid out after raising Series C
                </li>
                <li>
                  Facing a "down round" where the company raises money at a
                  lower valuation than the previous round
                </li>
                <li>Need to restructure or pivot the business model</li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Series D rounds are typically funded by venture capital firms. The
              amount raised and valuations vary widely, especially because so
              few startups reach this stage.
            </p>
          </div>
        </section>

        {/* Exit Strategies Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Exit Strategies: IPO or Acquisition
          </h2>

          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The ultimate goal of raising venture capital is to provide returns
              to investors. This typically happens through one of two exit
              strategies:
            </p>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Initial Public Offering (IPO)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                An IPO is when a company offers its shares to the public for the
                first time on a stock exchange. This allows early investors and
                employees to sell their shares and realize their returns. Going
                public also provides the company with access to public capital
                markets for future funding needs. However, it comes with
                significant regulatory requirements and public scrutiny.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Acquisition
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                More commonly, startups are acquired by larger companies. An
                acquisition can happen at any stage, but it's particularly
                common after Series C funding. The acquiring company pays cash
                and/or stock to purchase the startup, providing returns to
                investors and often integrating the startup's technology, team,
                or customer base into their operations.
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              It's worth noting that Series C funding is often the final push to
              prepare a company for its IPO or acquisition. The additional
              capital helps polish the business, expand market reach, and
              increase valuation to make the exit more attractive.
            </p>
          </div>
        </section>

        {/* Key Takeaways Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Key Takeaways
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg md:p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
                Each Stage Has a Purpose
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Every funding round should have clear objectives and milestones.
                Raise enough to achieve your goals with 12-18 months of runway.
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg md:p-6">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-2">
                Expectations Increase with Each Round
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Early stages focus on team and vision. Later stages require
                proven metrics, revenue, and growth. Know what investors expect
                at each stage.
              </p>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg md:p-6">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-2">
                Not Every Startup Follows the Same Path
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Some companies bootstrap to profitability, others are acquired
                early, and some raise many rounds. Focus on what's right for
                your business, not what everyone else is doing.
              </p>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg md:p-6">
              <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-300 mb-2">
                Valuation Matters, But So Does Dilution
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                While a high valuation is attractive, remember that each round
                dilutes your ownership. Balance valuation with maintaining
                enough equity to stay motivated and in control.
              </p>
            </div>
          </div>
        </section>

        {/* Next Page Navigation */}
        <NextPageNavigation
          nextPageTitle="Italian Environment"
          nextPageHref="/italian-investment-environment"
          description="Explore the unique characteristics of Italy's startup funding landscape and investment ecosystem."
        />

        {/* Sources Section */}
        <SourcesList>
          <SourceLink
            title="The Ultimate Guide to Startup Funding Stages"
            url="https://visible.vc/blog/startup-funding-stages/"
            description="Comprehensive guide with up-to-date data (2023-2024) showing average funding amounts and valuations across all stages from pre-seed to Series C. Includes detailed breakdowns of what investors expect at each stage and practical guidance for raising venture capital."
            date="2024"
          />
          <SourceLink
            title="Series A, B, C, D, and E Funding: How It Works"
            url="https://www.startups.com/articles/series-funding-a-b-c-d-e"
            description="Detailed explanation of each funding stage with practical examples and real-world context. Covers typical amounts, valuations, and what happens at each stage, including the differences between positive and negative reasons for later rounds."
          />
          <SourceLink
            title="Startup funding explained: Series A, Series B, Series C"
            url="https://www.digitalocean.com/resources/articles/startup-funding-series-a-b-c"
            description="Clear overview from DigitalOcean focusing on valuations and investor expectations. Explains how companies are valued at each stage and what metrics investors look for when making investment decisions."
          />
          <SourceLink
            title="Startup Funding Rounds – Seed, Series A, B, & C Explained"
            url="https://www.feedough.com/startup-funding-rounds-seed-series-a-b-c-explained/"
            description="In-depth guide including KPI metrics and valuation factors. Provides detailed information on what traction and metrics startups need to demonstrate at each funding stage to attract investors."
          />
        </SourcesList>
      </PageContent>
    </MainLayout>
  );
}
