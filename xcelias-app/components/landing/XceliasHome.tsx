"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  Building2,
  CalendarCheck,
  ClipboardList,
  Compass,
  Crown,
  FileText,
  GraduationCap,
  Map,
  Radar,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const pillars = [
  {
    title: "Command Center",
    detail: "Run attendance, batches, assessments, and intervention workflows from one protected operations surface.",
    href: "/command-center",
    icon: Crown,
    tone: "from-[rgba(66,211,255,0.28)] to-[rgba(155,140,255,0.2)]",
  },
  {
    title: "Learning Engine",
    detail: "Absorb immersive real-estate training content, structured lessons, and guided remediation flows into one academy graph.",
    href: "/learning-hub",
    icon: BookOpen,
    tone: "from-[rgba(109,229,194,0.24)] to-[rgba(66,211,255,0.16)]",
  },
  {
    title: "Market Intelligence",
    detail: "Connect property knowledge, destinations, developers, payment plans, and sales context to learning outcomes.",
    href: "/market-intelligence",
    icon: Map,
    tone: "from-[rgba(245,201,106,0.24)] to-[rgba(255,124,149,0.16)]",
  },
  {
    title: "Report Studio",
    detail: "Unify OCR-assisted report generation, trainee signals, exports, and batch intelligence instead of re-entering data across tools.",
    href: "/report-studio",
    icon: FileText,
    tone: "from-[rgba(155,140,255,0.24)] to-[rgba(66,211,255,0.16)]",
  },
];

const operatingSurfaces = [
  { title: "Operations Command Center", href: "/command-center", icon: Crown, status: "Live" },
  { title: "Academy Intelligence", href: "/analytics", icon: Radar, status: "Live" },
  { title: "Learning Hub", href: "/learning-hub", icon: BookOpen, status: "New" },
  { title: "Market Intelligence", href: "/market-intelligence", icon: Map, status: "New" },
  { title: "Report Studio", href: "/report-studio", icon: FileText, status: "New" },
  { title: "Batches", href: "/batches", icon: GraduationCap, status: "Live" },
  { title: "Trainees", href: "/trainees", icon: Users, status: "Live" },
  { title: "Companies", href: "/companies", icon: Building2, status: "Live" },
  { title: "Assessments", href: "/assessments", icon: ClipboardList, status: "Live" },
  { title: "Daily Attendance", href: "/attendance/daily", icon: CalendarCheck, status: "Live" },
  { title: "10-Day Progress", href: "/attendance/10-day", icon: BarChart3, status: "Live" },
];

const connectionRules = [
  {
    title: "Assessment to remediation",
    description: "Weak performance should route trainees to the exact content, practice, and context needed to recover the skill gap.",
  },
  {
    title: "Attendance to intervention",
    description: "Absence and lateness should trigger follow-up paths, catch-up study recommendations, and manager visibility before the batch drifts.",
  },
  {
    title: "Project knowledge to learning",
    description: "Market exploration should become a training surface, linking property intelligence to sales concepts and objection-handling scenarios.",
  },
];

const sourceSystems = [
  {
    name: "Activities workspace",
    detail: "Legacy training presentation logic and extracted instructional content that still carries conceptual value.",
  },
  {
    name: "Content workspace",
    detail: "Immersive React learning experience with cinematic sections, chapter flow, and presentation-grade teaching narrative.",
  },
  {
    name: "Report Generation workspace",
    detail: "OCR-assisted browser report engine with PDF output, score synthesis, and evaluation narrative generation.",
  },
  {
    name: "Avaria system",
    detail: "The strongest host foundation for the unified platform, already covering operations, APIs, auth, analytics, and academy entities.",
  },
  {
    name: "Website workspace",
    detail: "Real-estate explorer with bilingual map intelligence, project filtering, comparison, search, and route-aware behaviors.",
  },
];

function GlowBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[var(--text-secondary)]">
      <span className="glow-dot" />
      {children}
    </span>
  );
}

export default function XceliasHome() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--app-bg)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(66,211,255,0.15),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(155,140,255,0.18),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(109,229,194,0.1),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:120px_120px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-4 pb-20 pt-6 sm:px-6 xl:px-8">
        <motion.header
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/8 bg-[rgba(5,8,14,0.66)] px-4 py-3 backdrop-blur-2xl"
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,#42d3ff_0%,#0b6cff_42%,#09111d_100%)] shadow-[0_12px_40px_-18px_rgba(66,211,255,0.8)]">
              <Crown className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-display text-base font-bold tracking-[0.08em] text-white">Xcelias</p>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--text-muted)]">Unified Academy Platform</p>
            </div>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <Link href="/login" className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:bg-white/[0.08] hover:text-white">
              Sign in
            </Link>
            <Link href="/command-center" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-gradient)] px-4 py-2 text-sm font-semibold text-[#041019] shadow-[0_14px_40px_-20px_rgba(66,211,255,0.95)] transition hover:scale-[1.01]">
              Enter command center
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.header>

        <section className="grid gap-6 pb-16 pt-12 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-6"
          >
            <GlowBadge>Academy OS + Learning + Market Intelligence</GlowBadge>
            <div className="space-y-5">
              <h1 className="max-w-5xl font-display text-5xl font-bold tracking-[-0.06em] text-white sm:text-6xl xl:text-7xl">
                One flagship system for running, teaching, measuring, and scaling the academy.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
                Xcelias is the unification layer across operations, immersive training content, market intelligence, reporting, and intervention logic. It turns five disconnected efforts into one premium, connected platform.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/command-center" className="inline-flex items-center gap-2 rounded-2xl bg-[var(--brand-gradient)] px-5 py-3 text-sm font-semibold text-[#041019] shadow-[0_18px_50px_-24px_rgba(66,211,255,0.95)] transition hover:scale-[1.01]">
                Launch protected workspace
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/analytics" className="inline-flex items-center gap-2 rounded-2xl border border-white/8 bg-white/[0.04] px-5 py-3 text-sm text-white transition hover:bg-white/[0.08]">
                Explore live intelligence
                <Compass className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="command-card-muted">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--text-muted)]">Source systems</p>
                <p className="mt-3 text-3xl font-bold text-white">5</p>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">Audited workspaces feeding the unified product strategy.</p>
              </div>
              <div className="command-card-muted">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--text-muted)]">Connected cores</p>
                <p className="mt-3 text-3xl font-bold text-white">4</p>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">Operations, learning, market intelligence, and reporting.</p>
              </div>
              <div className="command-card-muted">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--text-muted)]">North star</p>
                <p className="mt-3 text-3xl font-bold text-white">1</p>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">True flagship platform for xcelias.com.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.08 }}
            className="hero-panel overflow-hidden"
          >
            <div className="relative z-10 space-y-4">
              <GlowBadge>Connection model</GlowBadge>
              <div className="grid gap-3">
                <div className="rounded-3xl border border-white/8 bg-black/20 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">Assessment gap detected</p>
                      <p className="mt-1 text-sm text-[var(--text-secondary)]">Weak performance routes the learner to the right study surface.</p>
                    </div>
                    <Brain className="h-5 w-5 text-[var(--signal-aqua)]" />
                  </div>
                </div>
                <div className="rounded-3xl border border-white/8 bg-black/20 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">Attendance risk spikes</p>
                      <p className="mt-1 text-sm text-[var(--text-secondary)]">Managers get intervention visibility before the cohort slips.</p>
                    </div>
                    <ShieldCheck className="h-5 w-5 text-[var(--signal-mint)]" />
                  </div>
                </div>
                <div className="rounded-3xl border border-white/8 bg-black/20 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">Market study becomes training</p>
                      <p className="mt-1 text-sm text-[var(--text-secondary)]">Projects, zones, payment plans, and sales concepts become one study graph.</p>
                    </div>
                    <Search className="h-5 w-5 text-[var(--signal-violet)]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="space-y-6 pb-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--text-muted)]">Platform pillars</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">Designed to absorb every strong part of the current ecosystem.</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
              The target is not a menu of separate apps. The target is one connected product where each surface improves the others.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className="card-phantom overflow-hidden rounded-[28px] border border-white/8 p-5"
                >
                  <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-r ${pillar.tone} blur-2xl`} />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-[var(--signal-aqua)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{pillar.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-[var(--text-secondary)]">{pillar.detail}</p>
                    <Link href={pillar.href} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/90 transition hover:text-white">
                      Open surface
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="grid gap-6 pb-16 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="command-card">
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--text-muted)]">System logic</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white">How Xcelias should connect the academy.</h2>
            <div className="mt-6 space-y-3">
              {connectionRules.map((rule) => (
                <div key={rule.title} className="rounded-3xl border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-base font-semibold text-white">{rule.title}</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">{rule.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="command-card">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--text-muted)]">Live surfaces</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-white">Existing routes already contributing to the flagship build.</h2>
              </div>
              <Link href="/command-center" className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 text-sm text-white transition hover:bg-white/[0.08]">
                Open protected workspace
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {operatingSurfaces.map((surface) => {
                const Icon = surface.icon;
                return (
                  <Link key={surface.title} href={surface.href} className="group rounded-3xl border border-white/8 bg-white/[0.03] p-4 transition hover:border-[rgba(66,211,255,0.22)] hover:bg-white/[0.05]">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-[var(--signal-aqua)]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-white">{surface.title}</p>
                          <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-[var(--text-muted)]">{surface.status}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-[var(--text-muted)] transition group-hover:text-white" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pb-8">
          <div className="rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,rgba(10,15,24,0.92),rgba(7,11,20,0.96))] p-6 shadow-[0_28px_80px_-40px_rgba(0,0,0,0.85)] sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--text-muted)]">Source-of-truth audit</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-white">The platform is being built from real code, not a blank redesign.</h2>
              </div>
              <div className="rounded-full border border-[rgba(66,211,255,0.16)] bg-[rgba(66,211,255,0.08)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--signal-aqua)]">
                Consolidation in progress
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {sourceSystems.map((system) => (
                <div key={system.name} className="rounded-3xl border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-base font-semibold text-white">{system.name}</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">{system.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}