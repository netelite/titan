# TITAN

## Technical Intelligence, Tasking & AI Navigation

**Developed by NETELITE**

**TITAN** is a provider-neutral software development methodology with first-class support for Codex and GitHub Copilot, plus other capable AI coding environments, inside a structured project workflow.

Its purpose is simple:

TITAN is intended for experienced AI-assisted development users building medium and large web applications, with controlled progress across AI coding sessions and role handoffs.

> Use stronger reasoning where decisions matter, then hand clearly prepared work to efficient implementation models.

TITAN keeps the methodology **inside the repository** so AI coding sessions can quickly understand:

- where the project currently is;
- which TITAN role should work next;
- which documents must be read;
- which implementation plan is active;
- when a model must stop instead of improvising;
- when review, debugging, deployment, or human approval is required.

TITAN provides first-class support for Codex and GitHub Copilot while remaining independent of commercial model names.

---

## Core workflow

```text
USER IDEA
↓
SOL DISCOVERY / BRAINSTORMING
↓
PROJECT SPECIFICATION
↓
SOL ARCHITECTURE
↓
[OPTIONAL ASTRA CRITICAL REVIEW]
↓
USER + SOL BASELINE
↓
MASTER DEVELOPMENT PLAN
↓
SOL JUST-IN-TIME PLAN FOR LUNA
↓
LUNA IMPLEMENTATION
↓
TESTS
↓
STOP / REVIEW / NEXT MODULE
↓
FINAL REVIEW
↓
DEPLOYMENT
↓
PRODUCTION VERIFICATION
```

The key operating rule is:

> **SOL prepares; LUNA executes.**

Detailed implementation plans are created **just in time**, when a module is actually ready to be built and after SOL inspects the current repository state.

---

## Why TITAN exists

Long AI-assisted software projects often fail for predictable reasons:

- project context gets lost across sessions;
- weaker models are given tasks that still require architectural reasoning;
- implementation models improvise when assumptions break;
- large plans become stale before later modules are reached;
- UI intent is under-specified;
- local test success is confused with real production verification;
- strong models are wasted on routine implementation work.

TITAN addresses these problems through explicit roles, repository state, gated phases, just-in-time planning, STOP rules, and targeted review.

---

## TITAN roles

### SOL
Reasoning role for:

- discovery;
- requirements clarification;
- architecture;
- implementation planning;
- complex debugging;
- high-risk review;
- deployment planning.

### LUNA
Implementation role for:

- well-defined feature implementation;
- CRUD;
- validation;
- controllers and services;
- Blade/UI work with a clear brief;
- JavaScript/CSS;
- tests;
- routine fixes and refactors.

### ASTRA
Optional critical reviewer for:

- unusually complex projects;
- foundational architecture decisions;
- high-risk data/security decisions;
- expensive-to-reverse choices.

### Choosing AI models

SOL generally benefits from stronger reasoning, LUNA can use efficient implementation-focused models, and ASTRA benefits from independent high-quality reasoning. These are recommendations, not hardcoded identities; TITAN state controls roles and model choice is an implementation detail.

---

## Repository structure

```text
TITAN/
│
├── AGENTS.md
├── .github/
│   └── copilot-instructions.md
├── README.md
├── LICENSE
├── TITAN_START_HERE.md
├── TITAN_USER_GUIDE.md
├── TITAN_VERSION.md
├── package.json
│
├── bin/
│   └── titan.js
│
├── .titan/
│   ├── STATE.md
│   ├── WORKFLOW.md
│   │
│   ├── roles/
│   │   ├── ASTRA.md
│   │   ├── SOL.md
│   │   └── LUNA.md
│   │
│   ├── prompts/
│   │   ├── 01_DISCOVERY.md
│   │   ├── 02_FUNCTIONAL_SPEC.md
│   │   ├── 03_SOL_ARCHITECTURE.md
│   │   ├── 04_ASTRA_CRITICAL_REVIEW.md
│   │   ├── 05_MASTER_PLAN.md
│   │   ├── 06_SOL_PLAN_FOR_LUNA.md
│   │   ├── 07_LUNA_IMPLEMENT.md
│   │   ├── 08_SOL_REVIEW.md
│   │   ├── 09_INTEGRATION_CHECKPOINT.md
│   │   ├── 10_SOL_DEBUG.md
│   │   ├── 11_LUNA_UI_TASK.md
│   │   ├── 12_SOL_PRE_DEPLOY.md
│   │   └── 13_FINAL_PROJECT_REVIEW.md
│   │
│   └── templates/
│       ├── UI_BRIEF.md
│       ├── DECISION_TEMPLATE.md
│       └── MODULE_PLAN_TEMPLATE.md
│
└── docs/
    ├── PROJECT_INTAKE.md
    ├── PROJECT_SPEC.md
    ├── ARCHITECTURE.md
    ├── MASTER_PLAN.md
    ├── DECISIONS.md
    ├── STATUS.md
    └── plans/
        └── .gitkeep
```

---

## Quick start

### Install with npm

Create or open the directory where you want to initialize your project:

```bash
mkdir my-project
cd my-project
```

Initialize TITAN:

```bash
npx -y @netelite/titan@latest
```

TITAN adds its methodology files directly to the current directory. It is not installed as a runtime dependency of your application.

Then:

1. Open the project directory in Codex, GitHub Copilot, or another supported AI coding environment.
2. Allow TITAN to determine the initial role from `.titan/STATE.md`.
3. Start with:

```text
Start this project using the TITAN methodology.

Idea:
<describe the project in your own words>
```

The fresh TITAN setup begins in:

```text
PHASE: 01_DISCOVERY
EXPECTED_ROLE: SOL_DISCOVERY
```

SOL should therefore begin discovery instead of coding.

### Manual installation

Alternatively, download the **TITAN Starter ZIP** from the GitHub Releases page and extract it into the root of your project.

---

## Everyday commands

In normal use, short instructions should often be enough:

```text
Continue according to TITAN.
Continue according to the active plan.
Approved. Continue.
Continue as the role specified by TITAN.
Review the blocker according to TITAN.
Move to the next module according to the Master Plan.
```

The repository should carry the detailed process.

---

## Roles and model selection

Role transitions are mandatory; model switching is optional. `.titan/STATE.md` declares `EXPECTED_ROLE` and `ROLE_CAPABILITY`, and the active AI environment should assume that role. Users may switch models when beneficial, but commercial model names are not part of TITAN methodology.

GitHub Copilot reads `.github/copilot-instructions.md`, which points it to `AGENTS.md` and the TITAN state.

---

## Acknowledgements

TITAN was built with a lot of late nights, experiments, and persistence.

A special thank you to AlenM for being there throughout the journey and for the constant support and encouragement.

---

## Status

**TITAN v1.2.0** is the current release.

Version 1.2.0 adds first-class GitHub Copilot repository instructions, provider-neutral TITAN roles, role capability tracking, and optional model switching while preserving Codex compatibility and the existing methodology. See `TITAN_VERSION.md` for current changes and existing-project migration guidance.

The methodology should evolve from real project evidence, not from theoretical complexity.
