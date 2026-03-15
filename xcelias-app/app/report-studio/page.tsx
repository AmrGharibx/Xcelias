"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Badge, Card, StatsCard } from "@/components/ui";
import { Header, Sidebar } from "@/components/layout";
import { reportTemplates, reportWorkflows } from "@/lib/xcelias-data";
import { FileScan, FileText, FolderKanban, ScanSearch, Sparkles, Users } from "lucide-react";

export default function ReportStudioPage() {
  const searchParams = useSearchParams();
  const templateSlug = searchParams.get("template");
  const incomingTrainee = searchParams.get("trainee");
  const incomingSource = searchParams.get("source");

  const activeTemplate = React.useMemo(
    () => reportTemplates.find((template) => template.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") === templateSlug),
    [templateSlug]
  );

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
                  <Badge variant="info">Report Studio</Badge>
                  <div>
                    <h1 className="font-display text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl">
                      Move OCR, evaluation narratives, and export logic into the main operating system.
                    </h1>
                    <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                      The report-generation workspace already proved the browser-side model. This route stages the same capability inside Xcelias so assessments, attendance, screenshots, and commentary can converge into one publication pipeline.
                    </p>
                  </div>
                </div>

                <Card hover={false} className="space-y-4 p-5">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--text-muted)]">Studio mandate</p>
                  <h2 className="text-2xl font-semibold text-white">One report layer for internal and external stakeholders</h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-4">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">Primary sources</p>
                      <p className="mt-2 text-sm leading-7 text-white/90">Assessments, attendance signals, screenshots, OCR extractions, and coach notes.</p>
                    </div>
                    <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-4">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">Outputs</p>
                      <p className="mt-2 text-sm leading-7 text-white/90">Executive PDFs, trainee briefs, intervention packs, and stakeholder summaries.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              <StatsCard title="Workflows" value={reportWorkflows.length} icon={<FolderKanban className="h-5 w-5" />} color="cyan" />
              <StatsCard title="Templates" value={reportTemplates.length} icon={<FileText className="h-5 w-5" />} color="amber" />
              <StatsCard title="Evidence Inputs" value={6} icon={<ScanSearch className="h-5 w-5" />} color="teal" />
              <StatsCard title="Stakeholder Modes" value={3} icon={<Users className="h-5 w-5" />} color="emerald" />
            </section>

            {(activeTemplate || incomingTrainee || incomingSource) && (
              <Card className="p-6">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--text-muted)]">Studio intake</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">A report handoff is already in motion</h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">
                  {incomingTrainee ? `${incomingTrainee} was routed into Report Studio` : "This route was opened from an operational workflow"}
                  {incomingSource ? ` via ${incomingSource}` : ""}
                  {activeTemplate ? ` with ${activeTemplate.name} preselected as the best-fit output.` : "."}
                </p>
              </Card>
            )}

            <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
              <Card className="p-6">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--text-muted)]">Workflow stack</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Studio stages adapted from the report-generation workspace</h2>
                <div className="mt-6 space-y-4">
                  {reportWorkflows.map((workflow, index) => (
                    <div key={workflow.title} className="rounded-[28px] border border-white/8 bg-white/[0.03] p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.05] text-[var(--signal-aqua)]">
                          <span className="text-sm font-semibold">0{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{workflow.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{workflow.description}</p>
                          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/8 bg-black/15 px-3 py-1 text-xs text-[var(--text-secondary)]">
                            <FileScan className="h-3.5 w-3.5" />
                            {workflow.output}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--text-muted)]">Template library</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Outputs the academy actually needs</h2>
                  </div>
                  <Badge variant="success">Report Generation workspace</Badge>
                </div>
                <div className="mt-6 grid gap-4">
                  {reportTemplates.map((template) => (
                    <div
                      key={template.name}
                      className={template === activeTemplate ? "rounded-[28px] border border-emerald-400/40 bg-emerald-500/10 p-5" : "rounded-[28px] border border-white/8 bg-white/[0.03] p-5"}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{template.name}</h3>
                          <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{template.useCase}</p>
                        </div>
                        <Sparkles className="h-5 w-5 text-[var(--signal-violet)]" />
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {template.signals.map((signal) => (
                          <span key={signal} className="rounded-full border border-white/8 bg-black/15 px-3 py-1 text-xs text-[var(--text-secondary)]">
                            {signal}
                          </span>
                        ))}
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