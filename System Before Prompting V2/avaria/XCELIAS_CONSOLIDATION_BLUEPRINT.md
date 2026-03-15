# Xcelias Consolidation Blueprint

## Verified Starting Point

- The repository contains five related product surfaces for the same academy ecosystem.
- The strongest host foundation is the Next.js application in `System Before Prompting V2/avaria` because it already includes auth, APIs, typed routes, analytics, academy entities, and an extensible UI shell.
- The other workspaces add critical capabilities that should be absorbed, not discarded:
  - immersive training content
  - OCR + PDF reporting
  - bilingual market intelligence explorer
  - legacy instructional material and extracted source content

## Consolidation Direction

Use the `avaria` app as the flagship host and migrate the other systems into connected Xcelias modules.

### Module Targets

1. `Command Center`
   Keep current batches, trainees, companies, assessments, attendance, settings, analytics.

2. `Learning Hub`
   Absorb the strongest training content structures from `Content ( WorkSpace )` and `Activites ( WorkSpace )`.

3. `Market Intelligence`
   Migrate the real-estate explorer from `Website ( WorkSpace )` into a first-class academy study and sales intelligence module.

4. `Report Studio`
   Integrate OCR-assisted report generation from `Report Generation ( WorkSpace )` so trainee and batch data can autofill reports.

## Connection Rules

- Assessment weaknesses must recommend exact learning materials.
- Attendance risk must generate intervention suggestions.
- Project and destination exploration must link back to curriculum topics.
- Reports should reuse operational data instead of duplicating manual entry.
- Search should eventually span trainees, companies, batches, assessments, content, and project intelligence.

## Immediate Changes Completed

- Added a public Xcelias flagship homepage at `/`.
- Preserved the existing protected operations dashboard at `/command-center`.
- Updated routing assumptions so auth flows target the command center instead of the public homepage.
- Rebranded key shell metadata/navigation from Avaria-only framing toward Xcelias platform framing.

## Recommended Next Build Phases

1. Extract reusable shell/layout primitives for public and protected surfaces.
2. Create `Learning Hub` route and migrate structured curriculum content into typed data-driven sections.
3. Create `Market Intelligence` route and port map/search/filter engine behind shared branding.
4. Create `Report Studio` route and connect report generation to trainee/batch/assessment data.
5. Add recommendation engine connecting assessments, attendance, and learning content.
6. Add shared global search indexing across academy and market domains.
7. Prepare deployment configuration for GitHub + `xcelias.com`.