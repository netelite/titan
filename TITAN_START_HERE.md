# TITAN v1.2 — Start Here

## What is TITAN?

TITAN is a provider-neutral, repository-native development methodology for building software with Codex, GitHub Copilot, or other repository-aware AI coding agents, with USER + SOL + LUNA and optional ASTRA critical review. It was developed by **NETELITE**.

The goal is not to create a complicated autonomous multi-agent system.

The goal is for the **repository itself to carry the operating rules, current state, decisions, and next action**, so a new AI coding session or a different capable model can continue without the USER repeatedly reconstructing project context.

## Central philosophy

Designed for experienced AI-assisted development users developing medium and large web applications. Standard and short task plans share the same control rules; choose their size according to task risk and complexity.

> Brainstorm broadly.  
> Decide precisely.  
> Stabilize architecture before serious implementation.  
> Plan large projects strategically in advance.  
> Plan detailed implementation just in time.  
> SOL prepares work for LUNA.  
> LUNA executes, tests, and stops when the plan no longer matches reality.  
> ASTRA is used rarely as a critical challenger.

## Two levels of work

### A. Project strategy

```text
IDEA
↓
DISCOVERY / BRAINSTORMING
↓
PROJECT_SPEC
↓
ARCHITECTURE
↓
[OPTIONAL ASTRA CRITICAL REVIEW]
↓
USER DECISIONS / BASELINE
↓
MASTER_PLAN
```

This level decides **what is being built and how the system is organized**.

### B. Production / implementation

```text
NEXT MODULE
↓
SOL INSPECTS CURRENT REPOSITORY
↓
SOL CREATES PLAN FOR LUNA
↓
LUNA IMPLEMENTS
↓
TESTS
↓
STOP / REVIEW / NEXT
```

This level builds the application.

## The most important file after this one

Open `.titan/STATE.md`.

It tells you:

- the current phase;
- which TITAN role should work next;
- the active module;
- whether an active plan exists;
- what must be read next;
- the next action;
- whether a STOP, gate, or blocker exists.

## Roles

### USER
Owns business intent, priorities, scope, UX preferences, and final decisions.

### SOL
TITAN reasoning role for discovery, specification, architecture, implementation planning, review, debugging, and deployment planning.

### LUNA
TITAN implementation role for clearly prepared plans. LUNA should not act as architect when the plan already locks the important decisions.

### ASTRA
Optional independent critical review when the project or decision is sufficiently complex or risky that additional reasoning has real value.

## Role selection and model selection

`.titan/STATE.md` declares the **EXPECTED_ROLE** and `ROLE_CAPABILITY` indicates the type of work required. The AI environment should assume that TITAN role. Switching the underlying model is optional; the USER may choose a different model when beneficial.

Example:

```text
EXPECTED_ROLE: SOL_PLANNER
ROLE_CAPABILITY: REASONING
NEXT_ACTION: Create a detailed plan for PHASE-04.
```

After SOL creates the plan:

SOL marks the plan READY and specifies review requirements and concrete acceptance checks before handoff. The lifecycle and state transitions are defined in `.titan/WORKFLOW.md`.

```text
EXPECTED_ROLE: LUNA_IMPLEMENTER
ROLE_CAPABILITY: IMPLEMENTATION
ACTIVE_PLAN: docs/plans/<CURRENT_MODULE_PLAN>.md
NEXT_ACTION: Implement STEP A.
```

The USER may continue with the role specified by TITAN and may simply say:

> Continue according to TITAN.

## Minimal commands the USER should need

In normal use, these should often be enough:

- `Start the project according to TITAN.`
- `Continue according to TITAN.`
- `Approved. Continue.`
- `Continue as the role specified by TITAN.`
- `Review the blocker according to TITAN.`
- `Move to the next module according to the Master Plan.`

The AI environment should retrieve the detailed procedure from the repository.

## Source of truth

Business/functional facts: `docs/PROJECT_SPEC.md`  
Technical architecture: `docs/ARCHITECTURE.md`  
Development order: `docs/MASTER_PLAN.md`  
Durable decisions: `docs/DECISIONS.md`  
Current progress: `docs/STATUS.md`  
Active operating position: `.titan/STATE.md`  
Real technical state: **the current repository/code**

If documentation and code are inconsistent, that is a signal to investigate — not permission for the model to invent an explanation.

## First step in a fresh project

The starter begins with:

```text
PHASE: 01_DISCOVERY
EXPECTED_ROLE: SOL_DISCOVERY
```

SOL should use `.titan/prompts/01_DISCOVERY.md`.

Do not begin coding.
