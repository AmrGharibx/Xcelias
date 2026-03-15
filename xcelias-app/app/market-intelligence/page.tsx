"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Badge, Card, StatsCard } from "@/components/ui";
import { Header, Sidebar } from "@/components/layout";
import { featuredProjects, zoneInsights } from "@/lib/xcelias-data";
import { Building2, Compass, MapPinned, Radar, Wallet } from "lucide-react";

function currencyRange(min: number, max: number) {
  const formatter = new Intl.NumberFormat("en-EG", {
    notation: "compact",
    maximumFractionDigits: 1,
  });

  return `${formatter.format(min)} to ${formatter.format(max)} EGP`;
}

export default function MarketIntelligencePage() {
  const searchParams = useSearchParams();
  const [activeZone, setActiveZone] = React.useState(zoneInsights[0]?.zone ?? "");
  const requestedZone = searchParams.get("zone");
  const incomingFocus = searchParams.get("focus");
  const incomingTrainee = searchParams.get("trainee");

  React.useEffect(() => {
    if (requestedZone && zoneInsights.some((zone) => zone.zone === requestedZone)) {
      setActiveZone(requestedZone);
    }
  }, [requestedZone]);

  const visibleProjects = featuredProjects.filter((project) => project.zone === activeZone);

  return (
    <div className="flex min-h-screen bg-transparent">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-7xl space-y-8">
            <section className="hero-panel overflow-hidden p-8">
              <div className="relative z-10 grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-end">
                <div className="space-y-5">
                  <Badge variant="info">Market Intelligence</Badge>
                  <div>
                    <h1 className="font-display text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl">
                      Turn destination data into training context, sales positioning, and faster decisions.
                    </h1>
                    <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                      This route starts absorbing the real-estate explorer workspace into Xcelias with zone-level signals, developer framing, and payment-plan intelligence that can feed coaching, objection handling, and reporting.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {zoneInsights.map((zone) => (
                      <button
                        key={zone.zone}
                        type="button"
                        onClick={() => setActiveZone(zone.zone)}
                        className={zone.zone === activeZone ? "rounded-2xl bg-[var(--brand-gradient)] px-4 py-2 text-sm font-semibold text-[#041019]" : "rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:bg-white/[0.08] hover:text-white"}
                      >
                        {zone.zone}
                      </button>
                    ))}
                  </div>
                </div>

                <Card hover={false} className="p-5">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--text-muted)]">Active zone</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">{activeZone}</h2>
                  <div className="mt-5 space-y-3">
                    {zoneInsights
                      .filter((zone) => zone.zone === activeZone)
                      .map((zone) => (
                        <React.Fragment key={zone.zone}>
                          <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-4">
                            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">Positioning</p>
                            <p className="mt-2 text-sm leading-7 text-white/90">{zone.positioning}</p>
                          </div>
                          <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-4">
                              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">Active projects</p>
                              <p className="mt-2 text-2xl font-semibold text-white">{zone.activeProjects}</p>
                            </div>
                            <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-4">
                              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">Typical down payment</p>
                              <p className="mt-2 text-2xl font-semibold text-white">{zone.typicalDownPayment}</p>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                  </div>
                </Card>
              </div>
            </section>

            <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              <StatsCard title="Zones" value={zoneInsights.length} icon={<MapPinned className="h-5 w-5" />} color="amber" />
              <StatsCard title="Featured Projects" value={featuredProjects.length} icon={<Building2 className="h-5 w-5" />} color="teal" />
              <StatsCard title="Developer Signals" value={18} icon={<Compass className="h-5 w-5" />} color="cyan" />
              <StatsCard title="Payment Patterns" value={9} icon={<Wallet className="h-5 w-5" />} color="emerald" />
            </section>

            {(incomingFocus || incomingTrainee || requestedZone) && (
              <Card className="p-6">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--text-muted)]">Operational context</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Market intelligence is being used as a coaching aid</h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">
                  {incomingTrainee ? `${incomingTrainee} was sent here` : "This route was opened"} to strengthen {incomingFocus?.replace(/-/g, " ") ?? "market fluency"}{requestedZone ? ` with ${requestedZone} as the destination focus.` : "."}
                </p>
              </Card>
            )}

            <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <Card className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--text-muted)]">Zone projects</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Projects worth teaching from in {activeZone}</h2>
                  </div>
                  <Badge variant="success">Website workspace</Badge>
                </div>
                <div className="mt-6 grid gap-4">
                  {visibleProjects.map((project) => (
                    <div key={project.name} className="rounded-[28px] border border-white/8 bg-white/[0.03] p-5">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                          <p className="mt-1 text-sm text-[var(--text-secondary)]">{project.developer}</p>
                        </div>
                        <Badge variant={project.status === "Delivered" ? "success" : "warning"}>{project.status}</Badge>
                      </div>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/8 bg-black/15 p-4">
                          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">Price range</p>
                          <p className="mt-2 text-sm font-medium text-white">{currencyRange(project.priceMin, project.priceMax)}</p>
                        </div>
                        <div className="rounded-2xl border border-white/8 bg-black/15 p-4">
                          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">Payment plan</p>
                          <p className="mt-2 text-sm font-medium text-white">{project.paymentPlan}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{project.edge}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.unitTypes.map((unitType) => (
                          <span key={unitType} className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs text-[var(--text-secondary)]">
                            {unitType}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--text-muted)]">Intelligence use</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">How this route connects back into the academy</h2>
                <div className="mt-6 space-y-4">
                  {[
                    "Translate zone facts into live objection-handling examples for the learning hub.",
                    "Give assessors a market-aware reference point when grading product knowledge.",
                    "Feed reporting with destination patterns, pricing signals, and positioning summaries.",
                  ].map((item) => (
                    <div key={item} className="rounded-[28px] border border-white/8 bg-white/[0.03] p-5">
                      <div className="flex items-start gap-3">
                        <Radar className="mt-1 h-5 w-5 text-[var(--signal-aqua)]" />
                        <p className="text-sm leading-7 text-[var(--text-secondary)]">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </section>
          </motion.div>
        </main>
      </div>
    </div>
  );
}