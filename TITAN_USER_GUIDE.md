# TITAN v1.2 — USER Guide

This file is for the human project owner.

TITAN targets experienced AI-assisted development users managing medium and large web applications.

## Version 1.0.2 operating changes

- SOL saves discovery conclusions in PROJECT_INTAKE; after specification approval it remains historical context.
- SOL chooses STANDARD or SHORT task plans according to risk. Both require readiness, explicit review requirements, and concrete acceptance checks. This does not introduce a separate small-project workflow.
- READY plans can enter implementation within existing approved boundaries without an extra approval gate. DRAFT plans cannot execute.
- IMPLEMENTED means the implementation and required checks passed. ACCEPTED also requires any mandatory review and approval. See WORKFLOW for exact state transitions.
- Checks report PASS, FAIL, or NOT_RUN. An unavailable required check remains visible and prevents completion until resolved; a local pass is not production verification.
- Existing users should merge the changes described in TITAN_VERSION rather than overwrite populated project documents with starter placeholders.

## 1. How to use the starter

Extract/copy the TITAN starter files into the **root of a new project or repository**.

You should see:

```text
AGENTS.md
README.md
TITAN_START_HERE.md
TITAN_USER_GUIDE.md
.titan/
docs/
```

Then open the repository in a supported AI coding environment.

## 2. First message

Use SOL and write something as simple as:

```text
Start this project according to the TITAN methodology.

Idea:
<describe the project in your own words>
```

Or fill in `docs/PROJECT_INTAKE.md` first and say:

```text
Start the project according to TITAN.
The initial context is in docs/PROJECT_INTAKE.md.
```

The project begins in Discovery.

## 3. What happens next

Normal strategic flow:

```text
SOL Discovery
→ PROJECT_SPEC
→ SOL Architecture
→ optional ASTRA review
→ Master Plan
→ implementation loop
```

Do not manually create dozens of LUNA tasks at the beginning.

The Master Plan defines the strategic roadmap. Detailed implementation plans are created only when a module actually reaches the front of the queue.

## 4. Normal implementation loop

When the state expects `SOL_PLANNER`, use SOL and say:

```text
Continue according to TITAN.
```

SOL inspects the actual repository and creates a detailed plan in `docs/plans/`.

When STATE changes to `LUNA_IMPLEMENTER`, continue as the TITAN role specified by STATE and say:

```text
Continue according to the active plan.
```

LUNA implements.

If LUNA reaches a planned STOP and everything passes, you can often say only:

```text
Continue.
```

No new SOL planning is needed unless the plan or real project state changed.

## 5. When LUNA reports a blocker

Continue as the reasoning/review role specified by STATE.

Say:

```text
Review the blocker according to TITAN and decide how we should continue.
```

SOL should inspect the real conflict and either:

- amend the plan;
- create a repair plan;
- take over the difficult part.

## 6. When to use ASTRA

Do not use ASTRA by habit.

Use ASTRA when a foundational architecture/specification decision is:

- unusually complex;
- high-risk;
- expensive to reverse;
- highly interconnected.

Typical instruction:

```text
Run the ASTRA critical review according to TITAN.
```

Then return to USER + SOL to decide which findings are accepted.

## 7. UI work

For meaningful UI changes:

- create a brief from `.titan/templates/UI_BRIEF.md`;
- include screenshots/annotations when useful;
- be explicit about `DO NOT CHANGE`;
- distinguish desktop and mobile.

LUNA can implement many UI tasks directly when intent is sufficiently clear.

## 8. Deployment

Local PASS is not production verification.

Before deployment, continue as the SOL role specified by STATE and say:

```text
Prepare the production deployment according to TITAN for the current
production environment.
```

Review backup/rollback and approve the actual deployment.

## 9. Five commands worth remembering

```text
Start the project according to TITAN.
Continue according to TITAN.
Continue according to the active plan.
Review the blocker according to TITAN.
Move to the next module according to the Master Plan.
```

The repository should carry the rest of the procedure.

## 10. What TITAN is not

TITAN v1.0 is not:

- an automatic multi-agent runtime;
- an automatic model switcher;
- a replacement for Git, tests, backups, or deployment discipline;
- permission for an AI model to make destructive production changes without approval;
- a guarantee that every project should use the same software architecture.

### Roles and models

| TITAN Role | Responsibility | Typical Model Capability |
| --- | --- | --- |
| SOL | reasoning, architecture, planning, complex debugging, review | stronger reasoning |
| LUNA | implementation of prepared plans | efficient coding / implementation |
| ASTRA | independent challenge / critical review | strong independent reasoning |

Commercial model names may change over time. TITAN role names are durable workflow concepts: role transition is mandatory, while model transition is optional. STATE controls roles; model choice is an implementation detail.

TITAN is a **development methodology encoded into the repository** so Codex, GitHub Copilot, and other supported AI coding environments remain consistent across sessions and model choices.
