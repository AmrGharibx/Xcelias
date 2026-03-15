# Ultimate Xcelias Master Build Prompt

Use this prompt exactly as the primary instruction set for the next implementation phase.

## Prompt

You are GPT-5.4 acting as a principal product architect, senior full-stack engineer, design director, systems integrator, data migration strategist, and deployment lead.

You are working inside a repository/workspace that currently contains multiple separate apps and prototypes for the same academy ecosystem. Your task is not to make surface-level edits. Your task is to deeply understand every relevant folder, reverse-engineer the real product intent, preserve every meaningful capability, and then design and implement one unified production-grade platform under the Xcelias brand.

This is a full consolidation, product strategy, architecture, migration, design system, and deployment mission.

## Core Objective

Create one exceptional website/application that intelligently unifies all current academy-related apps, tools, data, workflows, visuals, and learning experiences into a single coherent product without losing content, functionality, data, context, or useful behavior from any existing app.

The new unified platform must:

- preserve the value of every current app
- avoid feature regression
- avoid data loss
- avoid “just linking between separate apps” as the main strategy
- make the modules deeply connected to each other
- feel like one intentional premium product, not five stitched-together products
- be ready to live in the GitHub repository https://github.com/AmrGharibx/Xcelias
- be prepared for production deployment on the domain xcelias.com

## Critical Working Rules

1. Do not start coding immediately.
2. First perform a thorough repo-wide audit of the existing folders and code.
3. Read the code carefully, not just filenames and package manifests.
4. Identify what is production-worthy, what is duplicated, what is a prototype, what is legacy, and what should become source of truth.
5. Before implementation, produce a concrete consolidation strategy with reasoning.
6. Do not remove or discard a feature unless you explicitly prove it is duplicate, broken, low-value, or replaced by something better without loss.
7. If two apps overlap, merge them intentionally and preserve the stronger parts of both.
8. Where the user asked for something suboptimal, improve the request rather than following it blindly.
9. Optimize for long-term maintainability, extensibility, design quality, performance, accessibility, and real production deployment.
10. Treat this as building the definitive Xcelias platform.

## Folders You Must Audit In Depth

Audit all of the following as part of the same ecosystem:

1. Activites ( WorkSpace )
2. Content ( WorkSpace )
3. Report Generation ( WorkSpace )
4. System Before Prompting V2/avaria
5. Website ( WorkSpace )

Also inspect supporting files, backups, data files, scripts, CSV/HTML exports, nested packages, and any duplicated or embedded projects that influence architecture or migration.

## What The Existing Workspace Appears To Contain

Use this as an initial hypothesis only, and verify it by reading the code:

- A real-estate discovery/map experience with search, filters, bilingual support, favorites, comparison, route/tour behaviors, PDF export, cached tiles, and project datasets
- A learning/training content app focused on real-estate sales knowledge, immersive storytelling, animation, and structured training sections
- A report generation app with OCR, scoring, smart text generation, trainee performance reports, PDF generation, and print flows
- A more advanced academy operations/admin system with batches, trainees, attendance, assessments, analytics, settings, authentication, and APIs
- Older or alternate content versions/prototypes that may still contain valuable data or instructional structure

Do not trust this summary alone. Verify everything in code.

## The Product Vision You Should Aim For

Create a single platform called Xcelias that combines:

- academy operations OS
- learning experience platform
- practical training content system
- performance/reporting engine
- real-estate intelligence explorer
- guided activity/skill remediation system
- cross-module recommendation engine
- premium marketing and onboarding experience

This platform must feel like a next-generation academy operating system and learning environment, not a dashboard with a few tabs.

## Important Product Correction To The Original Request

Do not unify everything by forcing all code into one giant page or by simply embedding old apps in iframes.

Instead:

- build one platform with one design system and one information architecture
- unify auth, navigation, data models, search, analytics, theming, motion, and recommendations
- expose each major capability as a connected module inside a single product
- migrate legacy functionality progressively into a coherent modern app shell
- preserve working static assets/data pipelines where useful, but do not keep unnecessary fragmentation

## What “Connected” Must Mean

Do not interpret “connected” as basic menu navigation.

The system must connect modules intelligently. Examples:

- if a trainee performs poorly in an assessment topic, the system should suggest the exact learning content, micro-lesson, activity, and relevant real-estate case examples to review
- if a trainee struggles with project/location knowledge, route them from assessments or attendance dashboards into map-based study mode and relevant destination/project learning content
- if a trainer is generating reports, the report engine should pull from attendance, assessments, batch data, and trainee history instead of requiring duplicate manual input wherever feasible
- if a user explores a project on the map, the system can surface learning materials explaining related sales concepts, unit types, finishing types, payment plans, qualification tactics, and objections handling
- if a trainee misses sessions or trends downward, the platform should recommend catch-up flows, revision paths, and manager interventions
- if a company, batch, or trainee record exists in operations, it should be reusable across reporting and learning workflows
- if a user searches globally, results should span pages, modules, trainees, batches, reports, content chapters, projects, destinations, and actions

## Target Experience

The final product should include all of the following concepts if supported by the current codebase, and extend them intelligently:

- an outstanding homepage / landing experience
- a world-class onboarding flow
- immersive visual storytelling
- operational dashboarding
- training content journeys
- map intelligence and spatial exploration
- trainee detail views
- batch command centers
- assessments and attendance workflows
- report generation and export
- recommendation/remediation engine
- search/command palette
- animations and transitions with purpose
- premium visual system
- strong mobile behavior
- accessible interactions
- fast loading and graceful degradation on lower-end devices

## Preferred Technical Direction

Unless the audit proves a clearly better option, treat the modern Next.js application in System Before Prompting V2/avaria as the most likely host foundation for the unified platform because it already provides:

- modern app routing
- typed frontend/backend structure
- API routes
- operational domain models
- scalable component architecture
- authentication and settings foundations

However, do not assume it should replace the others unchanged.

Instead, likely direction is:

- use the modern app shell/framework as the main platform host
- migrate the best learning/content experience from Content and Activites into first-class modules
- migrate the report generator into an integrated report center
- migrate the real-estate website/map intelligence engine into a dedicated explorer/intelligence module
- centralize shared data models, design system, global search, recommendation logic, auth, analytics, and deployment strategy

If the audit shows a different architecture is superior, explain why and choose that instead.

## Required Audit Deliverables Before Major Refactoring

You must first produce a serious analysis that includes:

1. App inventory
   For each relevant folder, explain purpose, stack, maturity, strengths, weaknesses, source-of-truth value, data assets, and migration difficulty.

2. Feature matrix
   List features by app and identify overlap, uniqueness, and integration opportunities.

3. Data inventory
   Identify structured data, local storage usage, exported assets, CSV/HTML sources, static JSON datasets, API routes, and likely canonical entities.

4. Architecture assessment
   Determine what should be kept, rewritten, wrapped temporarily, migrated, or retired.

5. UX/IA proposal
   Define the unified sitemap, top-level navigation, roles, journeys, and homepage strategy.

6. Design system direction
   Define typography, color system, motion system, component style, layout principles, and how to blend premium academy + intelligence + real-estate visuals without visual chaos.

7. Connection model
   Define how modules interact logically, technically, and from the user perspective.

8. Delivery plan
   Provide a phased migration roadmap with low-risk sequencing.

## Entities And Data Model You Should Consider

You should likely design a shared domain model spanning at least:

- users
- roles
- trainees
- trainers
- companies
- batches
- attendance records
- ten-day summaries
- assessments
- learning modules
- lessons
- skills/topics
- remediation paths
- reports
- projects
- developers
- destinations/zones
- amenities
- payment plans
- saved items/favorites
- search index entries
- activity events / telemetry

Define relationships carefully.

## Information Architecture Direction

Design the unified app so it can reasonably contain areas such as:

- Home
- Academy OS
- Learning Hub
- Market Intelligence / Explorer
- Assessments
- Attendance
- Reports
- Batches
- Trainees
- Companies
- Analytics
- Search / Command Center
- Settings / Admin

But refine this after auditing the actual code.

## Homepage Expectations

Design the best possible homepage for Xcelias.

This is not just a marketing hero.

It should introduce the platform as a premium intelligent academy ecosystem and should be capable of routing different user types quickly:

- trainee
- trainer
- academy manager
- operations/admin
- recruiter/business stakeholder

The homepage should likely include:

- a highly memorable hero
- animated world-class visual treatment
- immediate entry points by intent and role
- product narrative showing how academy learning, operations, map intelligence, and reporting connect together
- live or near-live data-driven preview components where appropriate
- trust and credibility structure
- deep links into real workflows

Do not make it generic SaaS.

## Visual And Motion Standard

Push the visual quality far beyond average.

Requirements:

- premium and distinctive brand presence for Xcelias
- motion that communicates structure, progress, intelligence, and delight
- meaningful transitions, not random animation noise
- immersive but performant backgrounds
- strong typography choices
- refined lighting, layering, and depth
- purposeful data visualization
- mobile-responsive elegance
- accessibility-aware reduced-motion fallback

Aim for something bold, cinematic, intelligent, and credible.

## Feature Preservation Requirements

You must preserve and integrate, where valuable, capabilities such as:

- bilingual or multilingual behavior if already supported
- map/project exploration
- smart search patterns
- filters and comparisons
- local/offline-capable behaviors where relevant
- report generation and PDF export
- OCR-assisted extraction if it is useful and production-worthy
- trainee and batch management
- attendance workflows
- assessments workflows
- analytics dashboards
- settings/preferences
- reusable content/reference systems
- performance-conscious rendering choices

## New Features You Should Add If They Fit Naturally

Do not just merge. Improve.

Consider adding:

- global unified search/command palette across all modules
- recommendation engine connecting assessments, attendance, content, and map intelligence
- personalized dashboards by role
- adaptive learning plans
- competency graph / skill map
- trainee timeline / journey view
- company partnership intelligence
- notification center
- saved study plans
- smart report autofill from academy data
- batch health score
- trainer cockpit
- intervention suggestions
- content-to-practice linking
- project intelligence cards tied to learning outcomes
- analytics drill-downs
- export center
- audit trail / event stream

Only add features that strengthen the product and can be justified.

## Engineering Quality Expectations

Build like this is a serious production platform.

Requirements:

- scalable architecture
- typed contracts where possible
- modular components
- clean separation of data, UI, and business logic
- progressive migration strategy
- minimal duplication
- explicit source-of-truth choices
- sensible state management
- resilient error handling
- accessibility
- performance budget awareness
- SEO where relevant for public pages
- analytics/telemetry hooks
- testability

## Migration Strategy Expectations

Do not rewrite everything at once unless the audit proves it is safer.

Instead, prefer a phased strategy such as:

- phase 1: audit and architecture
- phase 2: establish shared shell, branding, design system, and top-level navigation
- phase 3: integrate academy operations core
- phase 4: migrate learning/content system
- phase 5: migrate map intelligence explorer
- phase 6: integrate report generation and data reuse
- phase 7: add intelligent cross-module connections
- phase 8: optimize, polish, test, and deploy

Refine phases based on the actual repo.

## GitHub And Deployment Requirements

The final solution must be prepared to live in:

- GitHub repository: https://github.com/AmrGharibx/Xcelias

And must be deployable to:

- production domain: xcelias.com

You must:

- structure the repo in a way that is clean for long-term maintenance
- document environment and deployment assumptions
- choose an appropriate deployment target and explain why
- prepare production configuration for domain attachment
- include any needed SEO/metadata/sitemap/robots/favicon/app metadata setup
- consider whether Vercel is the best fit for the Next.js host, and if so, prepare accordingly
- if another hosting stack is better, justify it clearly

If you cannot perform the live deployment from the current environment, still prepare everything needed and clearly state the remaining manual steps.

## Required Output Structure From You

When executing this prompt, respond in this order:

1. Repo audit summary
2. Detailed app-by-app analysis
3. Feature preservation matrix
4. Recommended target architecture
5. Shared data model proposal
6. Unified information architecture and user journeys
7. Design system and motion direction
8. Smart cross-module connection strategy
9. Phased implementation roadmap
10. Immediate implementation plan for the next coding step
11. Then begin implementation

## Non-Negotiable Constraints

- do not give generic advice disconnected from the actual repo
- do not skip reading code
- do not skip reading data files and nested projects where relevant
- do not oversimplify the merge
- do not reduce the platform to a dashboard only
- do not reduce the platform to a landing page only
- do not destroy specialized capabilities like OCR, reporting, map intelligence, or immersive learning content without a superior replacement
- do not treat the project as a quick redesign
- do not assume the user’s exact wording is always the best technical path; improve it when needed

## Final Standard

The end result should feel like the academy finally has one true flagship platform:

- operationally powerful
- visually exceptional
- educationally intelligent
- strategically connected
- technically modern
- ready for production
- worthy of the Xcelias brand

Start by auditing the repository in depth and proving that you understand every relevant folder before making large architectural decisions.