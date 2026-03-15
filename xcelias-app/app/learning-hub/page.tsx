"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Brain, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { Header, Sidebar } from "@/components/layout";
import { Badge, Card, ProgressBar, StatsCard } from "@/components/ui";
import { interventionPlaybooks, learningTracks } from "@/lib/xcelias-data";

export default function LearningHubPage() {
  const searchParams = useSearchParams();
  const [activeTrack, setActiveTrack] = React.useState(learningTracks[0]?.slug ?? "");

  React.useEffect(() => {
    const focus = searchParams.get("focus");
    const focusMap: Record<string, string> = {
      "product-foundations": "foundations",
      "sales-psychology": "sales-psychology",
      "attendance-recovery": "sales-psychology",
      "destination-context": "market-translation",
    };

    const nextTrack = focus ? focusMap[focus] : undefined;
    if (nextTrack) {
      setActiveTrack(nextTrack);
    }
  }, [searchParams]);

  const track = learningTracks.find((item) => item.slug === activeTrack) ?? learningTracks[0];
  const totalModules = learningTracks.reduce((sum, item) => sum + item.modules.length, 0);
  const incomingFocus = searchParams.get("focus");
  const incomingTrainee = searchParams.get("trainee");
  const incomingSource = searchParams.get("source");

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
                  <Badge variant="info">Learning Hub</Badge>
                  <div>
                    <h1 className="font-display text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl">
                      Convert academy content into guided skill recovery, not static lessons.
                    </h1>
                    <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                      This surface starts absorbing the legacy training deck and immersive content workspaces into one operational learning graph. Each track is designed to plug directly into assessment remediation and trainee intervention.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {learningTracks.map((item) => (
                      <button
                        key={item.slug}
                        type="button"
                        onClick={() => setActiveTrack(item.slug)}
                        className={item.slug === activeTrack ? "rounded-2xl bg-[var(--brand-gradient)] px-4 py-2 text-sm font-semibold text-[#041019]" : "rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:bg-white/[0.08] hover:text-white"}
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>

                <Card hover={false} className="space-y-4 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-muted)]">Active track</p>
                      <h2 className="mt-2 text-xl font-semibold text-white">{track.title}</h2>
                    </div>
                    <Sparkles className="h-5 w-5 text-[var(--signal-aqua)]" />
                  </div>
                  <p className="text-sm leading-7 text-[var(--text-secondary)]">{track.summary}</p>
                  <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">Target outcome</p>
                    <p className="mt-2 text-sm leading-7 text-white/90">{track.outcome}</p>
                    <div className="mt-4">
                      <ProgressBar value={(track.modules.length / 4) * 100} showLabel={false} />
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              <StatsCard title="Tracks" value={learningTracks.length} icon={<Layers3 className="h-5 w-5" />} color="cyan" />
              <StatsCard title="Modules" value={totalModules} icon={<BookOpen className="h-5 w-5" />} color="emerald" />
              <StatsCard title="Playbooks" value={interventionPlaybooks.length} icon={<ShieldCheck className="h-5 w-5" />} color="amber" />
              <StatsCard title="Cross-links" value={12} icon={<Brain className="h-5 w-5" />} color="teal" suffix="+" />
            </section>

            {(incomingFocus || incomingTrainee || incomingSource) && (
              <Card className="p-6">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--text-muted)]">Context handoff</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">This learning route was opened from a live operational signal</h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">
                  {incomingTrainee ? `${incomingTrainee} was routed here` : "A trainee or batch was routed here"} from {incomingSource ?? "Xcelias operations"} with focus on {incomingFocus?.replace(/-/g, " ") ?? "targeted remediation"}.
                </p>
              </Card>
            )}

            <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <Card className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--text-muted)]">Curriculum map</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Modules inside {track.title}</h2>
                  </div>
                  <Badge variant="success">{track.source}</Badge>
                </div>
                <div className="mt-6 space-y-4">
                  {track.modules.map((module, index) => (
                    <div key={module.title} className="rounded-[28px] border border-white/8 bg-white/[0.03] p-5">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">Module {index + 1}</p>
                          <h3 className="mt-2 text-lg font-semibold text-white">{module.title}</h3>
                          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">{module.description}</p>
                        </div>
                        <span className="rounded-full border border-white/8 bg-black/20 px-3 py-1 text-xs text-[var(--text-secondary)]">{module.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--text-muted)]">Intervention logic</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Playbooks that connect learning to operational risk</h2>
                <div className="mt-6 space-y-4">
                  {interventionPlaybooks.map((playbook) => (
                    <div key={playbook.trigger} className="rounded-[28px] border border-white/8 bg-white/[0.03] p-5">
                      <Badge variant="warning">{playbook.target}</Badge>
                      <h3 className="mt-3 text-base font-semibold text-white">{playbook.trigger}</h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{playbook.response}</p>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--signal-aqua)]">
                        Remediation path
                        <ArrowRight className="h-4 w-4" />
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