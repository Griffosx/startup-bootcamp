import { MainLayout } from "../components/MainLayout";
import { NextPageNavigation } from "../components/NextPageNavigation";
import { PageContent } from "../components/PageContent";
import { PageHeader } from "../components/PageHeader";
import { SourceLink } from "../components/SourceLink";
import { SourcesList } from "../components/SourcesList";
import type { Route } from "./+types/team-structure-and-roles";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Team Structure & Key Roles - Startup Bootcamp" },
    {
      name: "description",
      content:
        "Learn about the essential roles and team structures that tech startups need to build, scale, and succeed at every stage of growth.",
    },
  ];
}

export default function TeamStructureAndRoles() {
  return (
    <MainLayout>
      <PageHeader
        title="Team Structure & Key Roles"
        description="Building the right team: understanding the essential roles and organizational structures that drive startup success."
      />

      <PageContent>
        {/* Introduction Section */}
        <section className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            At the heart of every successful startup is a dynamic team that
            brings together diverse skills and expertise. While a great idea is
            essential, it's the people who execute that idea who determine
            whether a startup thrives or fails. Building the right team
            structure isn't just about filling positions—it's about creating a
            framework that enables innovation, efficiency, and sustainable
            growth.
          </p>

          <blockquote className="mt-8 border-l-4 border-blue-500 pl-4 italic text-lg text-gray-800 dark:text-gray-200 md:text-xl">
            "A well-defined team structure provides the foundation for growth
            and innovation. It signals to investors that your company is
            prepared for long-term success."
          </blockquote>
        </section>

        {/* Why Team Structure Matters */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Why Team Structure Matters in Startups
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            A well-defined startup team structure is as important as the big
            idea itself. It ensures that key roles are filled with the right
            talent and that every team member understands their
            responsibilities. A chaotic or poorly structured team can slow down
            operations, lead to confusion, and ultimately hinder growth.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Clear Chain of Command
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                A well-defined structure establishes a clear chain of command,
                ensuring decision-making is streamlined and roles are respected.
                This clarity prevents overlapping responsibilities and reduces
                friction as the team grows.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Efficient Resource Allocation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Teams with defined responsibilities can allocate resources more
                efficiently, reducing waste and redundancy. When everyone knows
                their role, the startup can move faster and make better use of
                limited capital and time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Enhanced Collaboration
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                With well-established roles and responsibilities, teams can
                collaborate more effectively, focusing on innovation and
                problem-solving rather than territorial disputes or unclear
                ownership.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Investor Confidence
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Having a strong team structure signals to investors that your
                company is prepared for long-term success. Investors don't just
                bet on ideas—they bet on teams that can execute.
              </p>
            </div>
          </div>
        </section>

        {/* Core Leadership Roles */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Core Leadership Roles
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The executive leadership team sets the vision, strategy, and
            direction for the entire company. These roles are critical from day
            one, though in early-stage startups, founders often wear multiple
            executive hats simultaneously.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                CEO (Chief Executive Officer)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                The CEO leads the company, setting the vision, mission, and
                long-term strategy. In early stages, the CEO often wears
                multiple hats, overseeing everything from fundraising and
                investor relations to business development and high-level
                product decisions. The CEO is ultimately responsible for the
                company's success or failure.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Responsibilities: Strategic vision, fundraising, investor
                relations, company culture, major partnerships, and overall
                business direction.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                CPO (Chief Product Officer)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                The Chief Product Officer oversees the product team and is
                responsible for the product vision, strategy, and roadmap. The
                CPO leads Product Managers and ensures that product development
                aligns with market needs and business objectives. In early-stage
                startups, Product Managers often report directly to the CEO
                until the product organization grows large enough to warrant a
                dedicated CPO.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Responsibilities: Product vision and strategy, product
                roadmap management, leading product managers, user research and
                validation, product-market fit, cross-functional alignment with
                engineering and design.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                COO (Chief Operating Officer)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                The COO ensures that day-to-day operations run smoothly,
                optimizing internal processes for efficiency. This role becomes
                increasingly important as the company scales and operational
                complexities grow. The COO often handles the "how" while the CEO
                focuses on the "what" and "why."
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Responsibilities: Daily operations, process optimization,
                internal efficiency, resource management, operational scaling.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                CFO (Chief Financial Officer)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Managing finances is critical to a startup's survival. The CFO
                ensures the financial health of the company, handling budgeting,
                cash flow management, financial planning, and reporting to
                investors. In early stages, this role might be handled by the
                CEO or outsourced to a fractional CFO.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Responsibilities: Financial planning and analysis,
                budgeting, cash flow management, fundraising support, investor
                reporting, financial compliance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                CMO (Chief Marketing Officer)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                A startup's marketing team is crucial for building brand
                awareness and driving customer acquisition. The CMO leads all
                marketing initiatives, from social media campaigns to content
                marketing to product launches. This role focuses on getting the
                product in front of the right audience.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Responsibilities: Marketing strategy, brand development,
                customer acquisition, content strategy, digital marketing,
                analytics and metrics.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                CRO (Chief Revenue Officer)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                The Chief Revenue Officer is responsible for all
                revenue-generating activities and directly oversees the sales
                team. The CRO aligns sales, marketing, and customer success
                departments to drive revenue growth, ensuring cohesive
                strategies across all revenue-related functions. This role
                focuses on revenue generation, sales optimization, and customer
                retention.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Responsibilities: Sales team management, revenue strategy,
                sales and marketing alignment, customer success integration,
                pricing strategy, revenue forecasting and reporting.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                CTO (Chief Technology Officer)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                In a tech startup, the CTO is indispensable. This role involves
                overseeing the technical direction of the company, managing the
                tech team, and ensuring that the startup uses cutting-edge
                technologies effectively. The CTO makes critical decisions about
                the technology stack, architecture, and technical hiring.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Responsibilities: Technical strategy, technology stack
                decisions, managing engineering teams, ensuring product quality
                and scalability, technical debt management.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                CAIO (Chief AI Officer)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                For AI-focused startups, the Chief AI Officer leads the AI team
                and oversees the company's overall AI strategy, development, and
                implementation. This role ensures that AI technologies align
                with business objectives, coordinates enterprise-wide AI
                integration, and manages AI governance and ethics. In smaller
                startups, this might be combined with the CTO role until the AI
                team grows large enough to warrant dedicated leadership.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Responsibilities: AI strategy and vision, AI team leadership
                and mentorship, AI governance and ethics, cross-functional
                collaboration, technology evaluation and adoption, ensuring AI
                initiatives deliver business value.
              </p>
            </div>
          </div>
        </section>

        {/* Product and Technology Teams */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Product and Technology Teams
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            For tech startups, the product and engineering teams are the engine
            that builds and maintains the core offering. These teams transform
            ideas into reality and ensure the product meets user needs while
            remaining technically sound.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Product Manager & Product Owner
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Product Managers (PMs) bridge the gap between technical teams
                and business objectives. They define the product vision,
                strategy, and roadmap, ensuring the product meets market needs.
                PMs are responsible for prioritizing features, gathering user
                feedback, and making data-driven decisions. They typically
                report to the Chief Product Officer (CPO) or, in early-stage
                startups, directly to the CEO. Product Owners (POs) have a more
                tactical focus, working closely with development teams to manage
                the product backlog, write user stories, and ensure the team
                builds the right things in the right order. In some
                organizations, these roles are combined; in others, POs work
                under PMs in Agile/Scrum environments.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Responsibilities: Product strategy and roadmap, feature
                prioritization, user research, backlog management, user story
                creation, sprint planning, stakeholder management.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Front-End & Back-End Developers
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Front-end developers focus on the user interface and experience,
                building what users see and interact with. They translate
                designs into functional, responsive web or mobile applications
                using frameworks like React, Vue, or Angular. Back-end
                developers handle databases, APIs, and server-side logic,
                building the infrastructure that powers the application. They
                ensure data is stored securely, APIs are performant, and the
                system scales with growth. Many startups also hire full-stack
                developers who can work across both areas.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Skills: HTML/CSS/JavaScript, modern frameworks (React, Vue,
                Angular), server-side languages (Node.js, Python, Java, Go),
                database design (SQL, NoSQL), API development, responsive
                design, security, scalability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                DevOps Engineers
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                DevOps engineers ensure smooth deployment processes and maintain
                infrastructure stability. They bridge the gap between
                development and operations, automating deployments, monitoring
                system health, and ensuring the product is always available and
                performant.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Skills: CI/CD pipelines, cloud platforms (AWS, GCP, Azure),
                containerization (Docker, Kubernetes), monitoring and logging,
                infrastructure as code.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                UX/UI Designers
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Designers create intuitive, beautiful interfaces that users
                love. They conduct user research, create wireframes and
                prototypes, and work closely with developers to ensure the final
                product matches the design vision. Great design is often what
                differentiates successful products from mediocre ones.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Skills: User research, wireframing and prototyping, visual
                design, design systems, usability testing, tools like Figma or
                Sketch.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                QA Engineers / Testers
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Quality assurance engineers ensure the product works as intended
                before it reaches users. They write test cases, perform manual
                and automated testing, and identify bugs before they impact
                customers. In early stages, developers often handle QA, but
                dedicated QA becomes essential as the product grows.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Skills: Test planning, manual and automated testing, bug
                tracking, testing frameworks, attention to detail.
              </p>
            </div>
          </div>
        </section>

        {/* AI/Data Teams */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Data and AI Teams (For AI-Focused Startups)
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            If your startup leverages data-driven decision-making or artificial
            intelligence, assembling a dedicated data and AI team is crucial.
            These roles have become increasingly important as more startups
            incorporate machine learning and AI into their products.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Data Scientists & Data Engineers
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Data Scientists analyze data to extract actionable insights that
                inform business decisions. They build statistical models,
                identify patterns, and help the company understand user
                behavior, market trends, and product performance. Data Engineers
                work alongside them, managing data pipelines and ensuring data
                quality. They build the infrastructure that collects, stores,
                and processes data, making it accessible for analysis. Without
                solid data engineering, AI and analytics initiatives fail.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Skills: Statistics, machine learning, Python/R, data
                visualization, SQL, ETL processes, data warehousing, big data
                technologies (Spark, Hadoop), cloud data services, data
                modeling.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Machine Learning Engineers & AI Research Scientists
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                ML Engineers develop and deploy machine learning models into
                production. They bridge the gap between data science research
                and production systems, ensuring models are scalable,
                performant, and maintainable. This role requires both data
                science knowledge and software engineering skills. AI Research
                Scientists push the boundaries further, developing new
                algorithms and models to advance the company's AI capabilities.
                This research role is more common in well-funded startups
                focused on cutting-edge AI innovation.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Skills: Machine learning frameworks (TensorFlow, PyTorch),
                model deployment, MLOps, deep learning, research methodology,
                mathematics, algorithm optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Sales and Marketing Teams */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Sales and Marketing Teams
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Building a great product is only half the battle. Sales and
            marketing teams are responsible for getting that product in front of
            customers and converting them into paying users. These teams drive
            revenue and growth.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                BDRs/SDRs & Account Executives
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                BDRs (Business Development Representatives) and SDRs (Sales
                Development Representatives) focus on the top of the sales
                funnel, identifying and qualifying leads through outbound
                prospecting and inbound qualification. Their goal is to book
                meetings and generate qualified opportunities. Account
                Executives (AEs) then take over to close deals—they conduct
                product demos, negotiate contracts, and generate revenue. In
                early stages, sales are often founder-led until the company has
                a repeatable sales process. As the startup grows, this sales
                pipeline becomes essential.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Responsibilities: Lead generation and qualification, cold
                outreach, pipeline development, product demos, deal negotiation,
                closing sales, account management, CRM management.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Business Development Managers
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Business development focuses on strategic partnerships and
                market expansion opportunities. BDMs identify potential
                partners, negotiate deals, and explore new markets or
                distribution channels that can accelerate growth.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Responsibilities: Partnership development, market research,
                strategic planning, relationship building, contract negotiation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Marketing Specialists
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Marketing specialists execute campaigns, manage social media,
                and develop content to build brand awareness and attract
                customers. Specialized roles include content marketers, SEO
                specialists, growth hackers, and performance marketers.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Responsibilities: Content creation, social media management,
                SEO/SEM, email marketing, analytics, campaign execution.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Customer Success & Customer Support
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Customer Success Managers (CSMs) take a proactive approach,
                building relationships with key accounts, monitoring product
                usage, identifying expansion opportunities, and intervening
                before customers become dissatisfied. This role is critical for
                SaaS startups where retention drives revenue. Customer Support
                teams provide reactive assistance, responding to inquiries,
                troubleshooting issues, and resolving problems as they arise.
                Together, these functions ensure customers achieve their desired
                outcomes and remain satisfied throughout their journey.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Responsibilities: Proactive customer engagement, onboarding,
                account health monitoring, retention strategies, ticket
                management, technical troubleshooting, feedback escalation.
              </p>
            </div>
          </div>
        </section>

        {/* Support Functions */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Support Functions
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            As startups grow, support functions become essential for managing
            the increasing complexity of operations. These roles ensure the
            company runs smoothly and stays compliant with regulations.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Human Resources (HR)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                HR manages recruitment, employee relations, and organizational
                development. As the team expands, having a dedicated HR function
                ensures smooth personnel management, maintains company culture,
                and handles employee welfare and compliance issues.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Responsibilities: Recruitment, onboarding, employee
                relations, benefits administration, performance management,
                culture building.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Legal Counsel
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Legal advisors handle contracts, intellectual property,
                compliance, and other legal matters, protecting the company from
                potential risks. In early stages, this might be outsourced, but
                as the company scales, having in-house legal expertise becomes
                valuable.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                Key Responsibilities: Contract review, intellectual property
                protection, regulatory compliance, risk management, employment
                law.
              </p>
            </div>
          </div>
        </section>

        {/* Team Evolution by Stage */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Team Evolution by Startup Stage
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            As your startup progresses, team needs evolve significantly.
            Different stages require different types of roles. Understanding
            these evolving needs ensures your team is always aligned with your
            company's current challenges and opportunities.
          </p>

          <div className="space-y-8">
            {/* Early Stage */}
            <div>
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-3">
                Early Stage (1-10 Employees)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                In the early stage, founders and the initial team typically wear
                multiple hats. The focus is on building the Minimum Viable
                Product (MVP), gaining traction, and validating the business
                idea. Every hire must be versatile and willing to do whatever it
                takes.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg md:p-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">
                  Key Roles:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Founders:</strong> Often assume multiple
                    responsibilities—CEO, product manager, and even handling
                    marketing tasks. They set the company's vision and build the
                    core product.
                  </li>
                  <li>
                    <strong>Technical Team:</strong> A small, nimble team
                    focused on building the MVP. May consist of 1-3 full-stack
                    developers or a combination of front-end and back-end
                    developers.
                  </li>
                  <li>
                    <strong>Marketing Lead:</strong> A single person may handle
                    all marketing tasks—building brand awareness, managing
                    social media, and experimenting with initial customer
                    acquisition strategies.
                  </li>
                  <li>
                    <strong>General Operations:</strong> The COO role may be
                    informal, with one of the founders managing daily operations
                    and finances.
                  </li>
                </ul>
              </div>
            </div>

            {/* Growth Stage */}
            <div>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                Growth Stage (10-50 Employees)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                As the startup transitions from early stage to growth, the
                company must expand its team structure to scale effectively.
                Specialized roles begin to emerge, and each department starts
                taking shape with dedicated leaders.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg md:p-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">
                  Key Developments:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Executive Roles:</strong> The CEO continues to guide
                    the company's vision, while roles like COO, CFO, and CTO
                    become more defined and distinct.
                  </li>
                  <li>
                    <strong>Development Team Expansion:</strong> The development
                    team expands to include specialists such as front-end
                    developers, back-end developers, and QA testers. A dedicated
                    product manager may be introduced.
                  </li>
                  <li>
                    <strong>Marketing Department:</strong> The marketing team
                    grows to include specialized roles such as content
                    marketers, SEO specialists, and growth hackers to refine
                    marketing strategies.
                  </li>
                  <li>
                    <strong>Sales and Customer Success:</strong> A sales team
                    becomes essential to converting leads into paying customers.
                    A customer success manager ensures customer satisfaction and
                    retention.
                  </li>
                  <li>
                    <strong>Human Resources:</strong> Hiring an HR manager
                    becomes important to handle recruitment, onboarding, and
                    maintaining company culture as the team grows.
                  </li>
                  <li>
                    <strong>Financial Department:</strong> A CFO or finance lead
                    should be introduced to manage financial planning,
                    fundraising, and cash flow monitoring.
                  </li>
                </ul>
              </div>
            </div>

            {/* Scaling Stage */}
            <div>
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-3">
                Scaling Stage (50+ Employees)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                When the startup reaches the scaling stage, the focus shifts
                toward optimizing processes, expanding into new markets, and
                making the organization more efficient. The team structure
                becomes more formalized with clear departments and hierarchies.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg md:p-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">
                  Key Developments:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>C-Level Management:</strong> Additional executives
                    such as Chief Sales Officer (CSO) and Chief Marketing
                    Officer (CMO) may join to bring expertise in specific areas.
                  </li>
                  <li>
                    <strong>Middle Management:</strong> Department heads such as
                    VP of Engineering, Head of Marketing, and Head of Sales are
                    brought in to manage teams and ensure departmental goals
                    align with the company's overall objectives.
                  </li>
                  <li>
                    <strong>Product Team:</strong> The product team may grow to
                    include product owners, business analysts, and UX
                    researchers to create a more data-driven and user-centered
                    development process.
                  </li>
                  <li>
                    <strong>Operations and Legal Team:</strong> Scaling often
                    requires formalizing processes, which means hiring an
                    operations manager to optimize workflows and a legal advisor
                    to handle contracts, compliance, and intellectual property.
                  </li>
                  <li>
                    <strong>Customer Support and Success:</strong> Expand the
                    customer support team to handle increasing customer
                    inquiries and ensure high-quality service. The customer
                    success team grows to proactively manage customer
                    relationships.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Key Takeaways
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg md:p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
                Start Small, Scale Thoughtfully
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Begin with a small, versatile team that can wear multiple hats.
                As you validate your business model and secure funding, scale
                your team strategically based on actual needs, not projections.
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg md:p-6">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-2">
                Prioritize Key Roles First
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Focus on hiring for roles that directly impact your core product
                and business model first. Support functions can often be
                outsourced or handled by founders initially.
              </p>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg md:p-6">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-2">
                Culture Matters from Day One
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Your first 10 hires will define your company culture. Choose
                people who embody your values and will help build the culture
                you want as you scale.
              </p>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg md:p-6">
              <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-300 mb-2">
                Structure Evolves with Growth
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                What works for a 5-person team won't work for a 50-person team.
                Be prepared to evolve your organizational structure as you grow,
                adding layers of management and specialization when needed.
              </p>
            </div>
          </div>
        </section>

        {/* Next Page Navigation */}
        <NextPageNavigation
          nextPageTitle="Funding Stages"
          nextPageHref="/funding-stages"
          description="Learn about the different stages of startup funding and what investors expect at each stage."
        />

        {/* Sources Section */}
        <SourcesList>
          <SourceLink
            title="Optimal Startup Team Structure Explained"
            url="https://www.digipal.agency/blog/startup-team-structure"
            description="Comprehensive guide covering the 7 key roles in a startup, team evolution by stage (early, growth, scaling), and best practices for structuring your team. Includes detailed breakdowns of organizational structures and hiring strategies."
          />
          <SourceLink
            title="The Ideal Tech Startup Team Structure for Rapid Growth"
            url="https://www.digitalocean.com/resources/articles/ideal-startup-team-structure"
            description="DigitalOcean's detailed guide on building tech startup teams, covering core leadership roles, technical teams, and support functions. Provides insights into when to hire specific roles and how team composition changes with growth."
          />
          <SourceLink
            title="Scaling from 5 to 50 Employees"
            url="https://sifted.eu/articles/scaling-to-50-employees-startups-hiring"
            description="Sifted's practical guide on the challenges and strategies for scaling startup teams from early stage to growth stage. Covers hiring roadmaps, common pitfalls, and lessons from successful European startups."
          />
          <SourceLink
            title="AI Team Structure Guide"
            url="https://technext.it/ai-team-structure/"
            description="Specialized guide for building AI and data teams in startups. Covers roles like data scientists, ML engineers, data engineers, and AI research scientists, with insights into team composition for AI-focused companies."
          />
          <SourceLink
            title="Building Your AI Team: The Roles Your Enterprise Needs"
            url="https://www.ibm.com/think/insights/building-your-ai-team-the-roles-your-enterprise-needs"
            description="IBM's comprehensive overview of AI team roles and responsibilities. Explains the differences between data scientists, ML engineers, and AI researchers, and how these roles work together."
          />
          <SourceLink
            title="Recruiting at Each Phase of Startup Growth"
            url="https://www.entrepreneur.com/article/236238"
            description="Entrepreneur's guide to hiring strategies aligned with startup growth phases. Covers what roles to prioritize at each stage and how to build a hiring roadmap that matches your growth trajectory."
          />
          <SourceLink
            title="Product Manager vs Product Owner"
            url="https://www.productplan.com/learn/product-manager-vs-product-owner/"
            description="Clear explanation of the differences between Product Managers and Product Owners, including their responsibilities, focus areas, and when each role is appropriate for your startup."
          />
          <SourceLink
            title="Chief Revenue Officer - Wikipedia"
            url="https://en.wikipedia.org/wiki/Chief_revenue_officer"
            description="Overview of the Chief Revenue Officer role and responsibilities, including oversight of all revenue-generating processes such as sales, marketing, customer support, pricing, and revenue management. Explains how CROs drive integration and alignment across revenue-related functions."
          />
          <SourceLink
            title="Chief AI Officer - Wikipedia"
            url="https://en.wikipedia.org/wiki/Chief_AI_officer"
            description="Overview of the Chief AI Officer role, a senior executive responsible for overseeing AI strategy, development, and implementation. Covers responsibilities including enterprise-wide AI integration, governance, ethical stewardship, and ensuring AI initiatives align with organizational goals."
          />
        </SourcesList>
      </PageContent>
    </MainLayout>
  );
}
