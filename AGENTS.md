# TITAN v1.2 — AI-Assisted Project Instructions

This repository uses **TITAN — Technical Intelligence, Tasking & AI Navigation**, a provider-neutral development methodology for collaboration between USER and capable repository-aware AI coding environments, including Codex and GitHub Copilot:

- USER — product owner and final decision maker;
- SOL — discovery, architecture, planning, review, complex debugging, and deployment planning;
- ASTRA — optional critical/challenge reviewer for unusually complex or risky decisions;
- LUNA — implementation responsibility for well-prepared work;
- ASTRA — optional independent critical/challenge review responsibility.

## Mandatory startup sequence

Before doing substantive work in this repository:

1. Read `AGENTS.md`.
2. Read `TITAN_START_HERE.md`.
3. Read `.titan/STATE.md`.
4. Determine `EXPECTED_ROLE` and read the relevant role file.
5. Read the phase/task-specific documents listed in `READ_NEXT`.
6. Inspect the real repository/code before making technical claims or implementation plans.

Do not begin coding merely because the repository is open. The current phase and active plan determine what work is allowed.

## Authority and conflict handling

The USER's explicit current instruction has highest authority.

Within TITAN:

- `AGENTS.md` defines durable operating rules.
- `.titan/STATE.md` identifies the current phase, expected role, active module/plan, gates, and next action.
- An active implementation plan defines task-specific implementation requirements.
- Role files define role behavior.
- `.titan/WORKFLOW.md` defines the general lifecycle.
- Prompt/template files are reusable procedures, not project facts.

If two repository documents materially conflict, do not silently choose one. Report the conflict and stop before making a risky or irreversible change.

Project facts come from the **current code and approved project documents**, not from assumptions in generic methodology files.

## Core collaboration rule

TITAN targets experienced AI-assisted development users building medium and large web applications. Plan size follows the task within that project; SHORT plans do not remove strategic gates.

**SOL prepares; LUNA executes.**

SOL should prepare implementation work so clearly that the LUNA implementation role can mostly execute rather than invent architecture, infer hidden intent, or make major technical decisions.

During architecture, implementation planning, plan review, and other non-implementation SOL work, application/source code and application tests are read-only. SOL may inspect/search the repository, inspect existing implementation and configuration, run existing non-destructive baseline checks/tests, reason about the expected change, and update TITAN planning/state/documentation files required by the workflow.

SOL must not modify application code or application tests to validate an idea or plan, implement any part of the solution provisionally, or implement and then revert before handoff. If additional code or a new test is needed to prove the result, specify it for the implementer and verify it after implementation.

This restriction applies only while SOL is acting in architecture, planning, or review roles. It does not restrict SOL after the USER or TITAN workflow explicitly transitions SOL into debugging, repair, takeover, or implementation work, including after a LUNA blocker/failure. Record the new SOL role/task and bounded scope in `.titan/STATE.md` before editing application code; selecting `SOL_TAKEOVER` during review is the decision to transition, not permission to implement while still acting as reviewer.

LUNA must stop instead of improvising when the active plan no longer matches the real project.

ASTRA is not a daily development model. Use ASTRA only when `.titan/STATE.md`, the USER, or SOL explicitly calls for a critical review.

## Strategic gates

The following transitions require USER approval unless the USER explicitly delegates that approval:

- Discovery → Functional specification baseline
- Functional specification → Architecture baseline
- Architecture review findings → accepted architecture changes
- Master plan baseline → implementation
- Major scope expansion
- Production deployment
- Final production sign-off

Models may prepare the next artifact before approval when asked, but must not represent an unapproved artifact as baselined.

## Role and model switching

TITAN role transitions are mandatory; model switching is optional.

When work should move to another role:

1. update `.titan/STATE.md` with `EXPECTED_ROLE`, `ROLE_CAPABILITY`, and `NEXT_ACTION`;
2. report the handoff clearly;
3. stop if the current role is no longer authorized to perform the next action.

Suggested capability mapping:

- SOL → `REASONING`
- LUNA → `IMPLEMENTATION`
- ASTRA → `CRITICAL_REVIEW`

A stronger reasoning model may be useful for SOL, an efficient coding model for LUNA, and an independent strong reasoning model for ASTRA. Copilot may keep the current selected model and assume the new TITAN role. Workflow correctness is determined by TITAN role and state, not by commercial model name.

## State discipline

Follow the plan lifecycle, state vocabulary, transition table, and evidence rules in `.titan/WORKFLOW.md`. SOL marks a plan READY before handoff. IMPLEMENTED is distinct from ACCEPTED. Do not execute a DRAFT plan or treat a required FAIL/NOT_RUN check as completion.

`.titan/STATE.md` is a navigator, not a diary.

Update it when a meaningful transition occurs:

- phase change;
- active module changes;
- active implementation plan changes;
- STOP checkpoint reached;
- blocker found;
- review result changes the next action.

LUNA may update execution/checkpoint fields after completing work, but must not unilaterally baseline architecture, accept scope changes, or mark a module accepted when a required USER/SOL review is still pending.

## Documentation discipline

During discovery, SOL maintains a concise current summary in `docs/PROJECT_INTAKE.md` at meaningful conclusions and before pauses/handoffs. Once PROJECT_SPEC is approved, intake is historical context, not a parallel specification.

Keep documentation useful and current.

- `docs/PROJECT_SPEC.md` — approved business/functional source of truth
- `docs/ARCHITECTURE.md` — approved current architecture
- `docs/MASTER_PLAN.md` — strategic implementation roadmap
- `docs/DECISIONS.md` — important durable decisions only
- `docs/STATUS.md` — short human-readable project progress
- `docs/plans/` — just-in-time implementation plans

Do not turn documentation into a verbose activity log.

## Implementation discipline

Before implementation:

- inspect the actual current files relevant to the task;
- read the complete active plan;
- understand STOP conditions;
- establish baseline tests/checks when practical.

During implementation:

- follow existing project patterns;
- keep scope narrow;
- avoid unrelated refactors;
- do not weaken tests to make them pass;
- do not introduce dependencies without need;
- protect security, permissions, and data integrity.

After implementation:

- run the checks required by the active plan;
- report actual results;
- distinguish automated verification from real-environment verification;
- update state/status only as allowed by the current gate.

## UI/UX rule

UI/UX work uses a separate brief because visual ambiguity is different from technical ambiguity.

For non-trivial UI changes, read `.titan/templates/UI_BRIEF.md` and use `.titan/prompts/11_LUNA_UI_TASK.md`.

A screenshot/reference may define intent, but never assume it specifies exact spacing or behavior unless that is actually clear.

## Debugging rule

If the root cause is unknown, do not send LUNA into blind trial-and-error.

Use SOL with `.titan/prompts/10_SOL_DEBUG.md` to establish the root cause and smallest safe fix first.

## Safety rule for destructive work

Before destructive or hard-to-reverse operations involving production data, migrations, file deletion, secrets, deployment, or infrastructure:

- inspect the actual environment;
- identify backup/rollback steps;
- call out risk explicitly;
- follow the current gate and USER approval requirements.

## First interaction in a fresh repository

If `.titan/STATE.md` says `PHASE: 01_DISCOVERY`, the first substantive work is discovery — not coding.

Use `.titan/prompts/01_DISCOVERY.md`.

If the USER simply says **"Start the project according to TITAN"** or equivalent, follow the current state and start the correct workflow automatically.
