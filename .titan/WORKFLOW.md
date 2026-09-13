# TITAN — Workflow

## Phase map

```text
00_INTAKE
↓
01_DISCOVERY
↓
02_FUNCTIONAL_SPEC
↓
03_ARCHITECTURE
↓
04_ARCHITECTURE_REVIEW (optional)
↓
05_MASTER_PLAN
↓
06_IMPLEMENTATION_LOOP
↓
07_INTEGRATION_CHECKPOINTS (when scheduled/needed)
↓
08_FINAL_REVIEW
↓
09_PRE_DEPLOY
↓
10_PRODUCTION_VERIFICATION
↓
11_COMPLETE
```

This is a lifecycle, not a requirement to create bureaucracy.

Skip optional work when it adds no value, but do not skip required reasoning gates merely to start coding faster.

---

## 01_DISCOVERY

**Default role:** `SOL_DISCOVERY`  
**Prompt:** `.titan/prompts/01_DISCOVERY.md`

Purpose:

- understand the real business problem;
- identify users, roles, workflows, lifecycle, rules, edge cases, and MVP;
- challenge assumptions;
- converge instead of brainstorming forever.

Output:

- discovery conclusions;
- open decisions;
- proposed MVP;
- deferred scope.

Gate:

- USER agrees discovery is mature enough to create the functional specification.

Next:

- `02_FUNCTIONAL_SPEC`

---

## 02_FUNCTIONAL_SPEC

**Default role:** `SOL_ARCHITECT`  
**Prompt:** `.titan/prompts/02_FUNCTIONAL_SPEC.md`

Output:

- `docs/PROJECT_SPEC.md`

Rules:

- unresolved points remain `OPEN DECISION`;
- do not silently invent missing business rules.

Gate:

- USER approves PROJECT_SPEC as the business/functional baseline.

Next:

- `03_ARCHITECTURE`

---

## 03_ARCHITECTURE

**Default role:** `SOL_ARCHITECT`  
**Prompt:** `.titan/prompts/03_SOL_ARCHITECTURE.md`

Output:

- `docs/ARCHITECTURE.md`

Goal:

- simplest maintainable architecture that satisfies the approved specification;
- identify data model, lifecycle, permissions, service boundaries, tests, and deployment assumptions.

Decision:

- if unusually complex/risky → `04_ARCHITECTURE_REVIEW`;
- otherwise → `05_MASTER_PLAN` after USER approval.

---

## 04_ARCHITECTURE_REVIEW — OPTIONAL

**Default role:** `ASTRA_CRITICAL_REVIEW`  
**Prompt:** `.titan/prompts/04_ASTRA_CRITICAL_REVIEW.md`

ASTRA does not redesign the system merely because it prefers another style.

ASTRA searches for serious omissions, contradictions, data risks, security problems, and expensive architectural mistakes.

Output:

- critical review findings.

Gate:

- USER + SOL decide which findings are accepted;
- SOL updates architecture/specification only when needed.

Next:

- `05_MASTER_PLAN`

---

## 05_MASTER_PLAN

**Default role:** `SOL_ARCHITECT`  
**Prompt:** `.titan/prompts/05_MASTER_PLAN.md`

Output:

- `docs/MASTER_PLAN.md`

Important:

- strategic roadmap only;
- no detailed LUNA plans for distant future modules;
- identify dependencies, risk, review points, and integration checkpoints.

Gate:

- USER approves the implementation baseline.

Next:

- `06_IMPLEMENTATION_LOOP`

---

# 06_IMPLEMENTATION_LOOP

This is the normal daily development loop.

## Step A — Select the next module

Use `docs/MASTER_PLAN.md` and `docs/STATUS.md`.

State should become approximately:

```text
EXPECTED_ROLE: SOL_PLANNER
ROLE_CAPABILITY: REASONING
ACTIVE_MODULE: PHASE-XX ...
ACTIVE_PLAN: NONE
NEXT_ACTION: Inspect current repository and create a just-in-time implementation plan.
```

## Step B — SOL creates the just-in-time plan

### Plan size and readiness

Use the STANDARD layout in `.titan/templates/MODULE_PLAN_TEMPLATE.md` for new modules, interconnected changes, or significant risk. Use its SHORT layout only for local, well-defined LOW-risk tasks within an approved project. SHORT is not allowed for permissions/auth changes, destructive migrations, key business rules, or architectural decisions. Both layouts use the same lifecycle and evidence rules.

Work already explicitly covered by the active plan needs no separate plan or handoff. Existing low-risk UI and known-cause bug exceptions still apply; they do not bypass strategic gates or required checks.

The plan owns its `STATUS` and `REVIEW_REQUIRED: YES / NO`, with a concrete `REVIEW_REASON`. SOL decides the review requirement using Step E; it cannot waive a required review by choosing SHORT.

| Plan status | Meaning / owner |
| --- | --- |
| DRAFT | SOL is preparing the plan; execution is not allowed. |
| READY | SOL inspected current code, resolved material decisions, and specified checks and acceptance criteria. |
| IN_PROGRESS | The implementer is executing the authorized steps. |
| BLOCKED | A concrete conflict or unmet prerequisite prevents continuation. |
| IMPLEMENTED | Implementation and required checks passed; required acceptance/review may still be pending. |
| ACCEPTED | Acceptance criteria and every required review and approval are satisfied. |

SOL may mark a plan READY without another USER approval when it stays within approved scope, specification, and architecture. Otherwise resolve the existing strategic gate first. A model switch is not approval of scope changes.

**Prompt:** `.titan/prompts/06_SOL_PLAN_FOR_LUNA.md`

SOL must inspect:

- current repository;
- relevant existing code;
- current approved documents;
- current tests.

Planning inspection is application-code-read-only. SOL may run existing non-destructive baseline tests/checks and update the plan, state, and required TITAN documentation. SOL must not change application code/tests, implement provisionally, or implement and revert to validate the plan. Any new implementation or test needed for proof belongs in the plan for LUNA and is verified afterward.

Output:

- `docs/plans/<phase_or_task>.md`

The plan must be detailed enough that LUNA mainly executes instead of making important architectural or technical decisions. It defines WHAT / WHERE / WHY / CONSTRAINTS / HOW TO VERIFY while LUNA writes the implementation. Avoid line-by-line code unless exact syntax/code is required for correctness, compatibility, security, or an approved interface.

After plan creation:

- mark the plan `READY` only after the readiness conditions above are met;
- set `EXPECTED_ROLE: LUNA_IMPLEMENTER`;
- set `ROLE_CAPABILITY: IMPLEMENTATION`;
- set `ACTIVE_PLAN`;
- set `NEXT_ACTION` to the first step/checkpoint.

The TITAN role transition is mandatory. Switching the underlying model is optional; the current AI environment may continue using the same model if it can correctly perform the new TITAN role.

## Step C — LUNA implements

**Prompt:** `.titan/prompts/07_LUNA_IMPLEMENT.md`

LUNA:

- reads the complete active plan;
- inspects the files named by the plan;
- implements in order;
- tests;
- respects STOP points;
- does not improvise architecture.

If a material conflict appears:

- set `PHASE_STATUS: BLOCKED`;
- describe the blocker;
- set `EXPECTED_ROLE: SOL_REVIEWER`;
- set `ROLE_CAPABILITY: REASONING`;
- stop.

## Step D — STOP checkpoint

When the plan requires STOP:

- LUNA runs the required checks;
- reports actual results;
- sets `PLAN_CHECKPOINT`;
- sets `WAITING_FOR: USER_APPROVAL`;
- does not begin the next step.

If the USER says `Continue`, continue the active plan without re-planning unless something materially changed.

## Step E — Review decision

SOL review is **not automatic after every task**.

Use SOL review when:

- the active plan requires it;
- the module is high risk;
- security/auth/permissions/data integrity are involved;
- large migration/file handling/critical lifecycle is involved;
- the USER requests it;
- LUNA was blocked or materially deviated;
- an integration checkpoint is reached.

Review is application-code-read-only. SOL may inspect the implementation and run existing non-destructive checks, but it must not fix code/tests, perform a provisional implementation, or implement and revert while deciding the review outcome. Required changes and missing tests go into the repair plan for LUNA unless the workflow first records an explicit SOL takeover.

Prompt:

- `.titan/prompts/08_SOL_REVIEW.md`

Possible results:

- `PASS`
- `PASS_WITH_NOTES`
- `REPAIR_REQUIRED`
- `SOL_TAKEOVER`

## Step F — Close the module

When acceptance criteria and required review are satisfied:

- update `docs/STATUS.md`;
- update `docs/DECISIONS.md` only if a durable decision was made;
- update `docs/ARCHITECTURE.md` only if approved architecture actually changed;
- clear `ACTIVE_PLAN`;
- select the next module.

### State and handoff contract

`.titan/STATE.md` navigates; the active plan owns detailed execution evidence. Update both at meaningful transitions, not after every edit. Keep `READ_NEXT` limited to the next role, relevant prompt, active plan, and necessary project sources. Keep completed plans as evidence after clearing `ACTIVE_PLAN`.

Role capability examples:

```text
EXPECTED_ROLE: SOL_PLANNER
ROLE_CAPABILITY: REASONING

EXPECTED_ROLE: LUNA_IMPLEMENTER
ROLE_CAPABILITY: IMPLEMENTATION

EXPECTED_ROLE: SOL_REVIEWER
ROLE_CAPABILITY: REASONING

EXPECTED_ROLE: ASTRA_CRITICAL_REVIEW
ROLE_CAPABILITY: CRITICAL_REVIEW
```

The TITAN role transition is mandatory. Model switching is optional; the current AI environment may continue using the same underlying model when it can correctly perform the new role.

State field vocabulary:

- `PHASE_STATUS`: READY, IN_PROGRESS, WAITING, BLOCKED, COMPLETE (status of the current phase, not an individual plan).
- `WAITING_FOR`: NONE, USER_APPROVAL, SOL_REVIEW, SOL_DECISION, EXTERNAL_PREREQUISITE. Put the concrete prerequisite or decision in `BLOCKERS` and `NEXT_ACTION`.
- `GATE`: NONE, DISCOVERY_EXIT, SPEC_BASELINE, ARCHITECTURE_BASELINE, ARCHITECTURE_CHANGES, IMPLEMENTATION_BASELINE, SCOPE_CHANGE, PLAN_STOP, PRODUCTION_DEPLOYMENT, PRODUCTION_SIGN_OFF. Required approvals follow AGENTS.md; any explicit delegation must be recorded with its scope.
- `PLAN_CHECKPOINT`: NONE or the last completed named step/checkpoint. Keep it through repairs so completed work is not restarted; clear it when selecting a new plan.

| Event | Plan status | State / next action |
| --- | --- | --- |
| SOL hands off a ready plan | READY | Phase IN_PROGRESS; LUNA_IMPLEMENTER / IMPLEMENTATION; waiting NONE; gate NONE; execute first allowed step. |
| LUNA starts or resumes | IN_PROGRESS | IMPLEMENTATION; waiting NONE; gate NONE; execute next allowed step. |
| Planned STOP with checks passed | IN_PROGRESS | Phase WAITING; LUNA_IMPLEMENTER / IMPLEMENTATION; USER_APPROVAL; PLAN_STOP; name completed checkpoint and next step. |
| USER approves that STOP | IN_PROGRESS | Phase IN_PROGRESS; waiting NONE; gate NONE; continue without replanning unless materially changed. |
| Material conflict | BLOCKED | Phase BLOCKED; SOL_REVIEWER / REASONING; SOL_DECISION; describe conflict and required decision; preserve any unresolved gate. |
| Required check cannot run | BLOCKED | Phase BLOCKED; EXTERNAL_PREREQUISITE (or SOL_DECISION if a plan decision is needed); record NOT_RUN, cause, consequence, and resume action. |
| Implementation and checks pass; review required | IMPLEMENTED | Phase WAITING; SOL_REVIEWER / REASONING; SOL_REVIEW; retain active plan and request review. |
| SOL returns PASS / PASS_WITH_NOTES | ACCEPTED if criteria and gates are satisfied | Record non-blocking notes; close the plan/module as applicable. Notes cannot disguise failed or missing required checks. |
| SOL returns REPAIR_REQUIRED | BLOCKED until repair is READY | SOL amends the active plan with repair steps and checks, then hands it back READY to LUNA. Preserve completed evidence and require re-review. |
| SOL returns SOL_TAKEOVER | IN_PROGRESS after the role/task transition is recorded | Before any application code change, move from SOL_REVIEWER to SOL_DEBUGGER (or another explicitly assigned SOL repair/implementation role), set waiting NONE, and record the bounded repair and required verification. SOL may then modify and test application code within that scope. Existing review requirements remain. |
| No review required and all criteria pass | ACCEPTED | LUNA may close only when the plan permits closure and no USER gate remains. |

After acceptance, if more plans remain in the module, select the next task without declaring the module complete. When the module is complete, update STATUS and select the next module. Clear ACTIVE_PLAN and PLAN_CHECKPOINT, set SOL_PLANNER and the next planning action; the implementation phase stays IN_PROGRESS. When the roadmap is complete, move to the scheduled integration/final review instead. Set the overall phase COMPLETE only when that phase's work is finished.

A failed check is FAIL, not NOT_RUN. LUNA may repair failures within the plan; if unable to resolve them within scope, use the conflict handoff. After an external prerequisite is restored, recheck relevant assumptions and resume the uncompleted work; an unresolved strategic gate still requires approval.

### Evidence required for acceptance

SOL links each acceptance criterion to a concrete verification method. Select checks according to the change and risk: denied access/tenant isolation, data integrity under failure, connected user journeys, error states, and relevant responsive/accessibility behavior. Not every category applies to every task; do not add unrelated checks.

For each required check, record the command or manual procedure, expected behavior, actual result, and evidence location when useful:

- PASS: executed and met the expected behavior.
- FAIL: executed and did not meet the expected behavior.
- NOT_RUN: not executed; state the reason and consequence.

A required FAIL or NOT_RUN prevents IMPLEMENTED/ACCEPTED. SOL may specify an equivalent check with rationale; it must actually run and pass. Removing a required acceptance obligation needs the approval required for that requirement; it is never an implicit waiver. Keep automated, browser/manual, and production evidence distinct. Reports may be concise and reference the plan instead of duplicating logs.

---

# 07_INTEGRATION_CHECKPOINTS

**Role:** `SOL_REVIEWER`  
**Prompt:** `.titan/prompts/09_INTEGRATION_CHECKPOINT.md`

Use after a meaningful group of interdependent modules or when the Master Plan calls for it.

Focus:

- modules working together;
- lifecycle/permission consistency;
- data integrity;
- architectural drift;
- technical debt that becomes expensive if postponed.

Do not use this for cosmetic refactor suggestions.

Verify connected flows with concrete evidence. Reuse prior evidence where it remains valid; repeat checks when integration changes, failures, or unresolved risks justify it, not automatically every earlier test.

---

# UI/UX SIDE WORKFLOW

Use `.titan/templates/UI_BRIEF.md` and `.titan/prompts/11_LUNA_UI_TASK.md`.

UI work may occur during implementation, but visual intent must be explicit enough.

If USER intent is ambiguous, LUNA should avoid broad redesign based on its own interpretation.

SOL is not required for every UI adjustment.

---

# BUG SIDE WORKFLOW

Known trivial cause:

- LUNA may fix directly when scope and risk are low.

Unknown or cross-cutting cause:

- SOL first uses `.titan/prompts/10_SOL_DEBUG.md`.

Goal:

- establish root cause before repair planning;
- avoid blind iteration.

The planning/review read-only restriction does not apply after the workflow explicitly assigns SOL debugging, repair, takeover, or implementation work. After a LUNA blocker/failure, `SOL_DEBUGGER` may inspect, modify, test, and repair application code within the bounded task recorded in `.titan/STATE.md`. If SOL retains implementation because it requires continuous high-level reasoning, record `SOL_TAKEOVER`, the SOL role/task, repair scope, and required verification before editing.

---

# 08_FINAL_REVIEW

**Role:** `SOL_REVIEWER`  
**Prompt:** `.titan/prompts/13_FINAL_PROJECT_REVIEW.md`

Compare the real implementation to the approved PROJECT_SPEC and architecture.

Separate findings into:

- BLOCKING
- NON_BLOCKING
- FUTURE_IMPROVEMENT

No scope creep.

---

# 09_PRE_DEPLOY

**Role:** `SOL_DEPLOY`  
**Prompt:** `.titan/prompts/12_SOL_PRE_DEPLOY.md`

Plan:

- backup;
- migrations;
- dependencies;
- build;
- environment/secrets;
- storage/permissions;
- caches;
- queue/cron if relevant;
- rollback;
- smoke tests;
- real integrations.

Gate:

- USER approves the actual production deployment.

---

# 10_PRODUCTION_VERIFICATION

Automated tests are not the same as real-environment verification.

Record:

- deployment result;
- smoke tests;
- real integrations that were actually tested;
- anything that was not tested.

Only claim `REAL_ENVIRONMENT_VERIFIED` for checks actually performed.

---

# 11_COMPLETE

The project can be marked complete when:

- MVP/MUST requirements are satisfied;
- required final review passes;
- deployment is verified to the agreed level;
- blockers are resolved or explicitly accepted;
- documentation/state are current.

Do not interpret COMPLETE as “no future improvements exist”.
