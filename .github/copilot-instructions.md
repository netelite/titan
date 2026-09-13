# TITAN repository instructions

This repository uses TITAN. `AGENTS.md` contains the authoritative durable TITAN operating rules; follow it together with the workflow navigator and role files.

On startup, GitHub Copilot must:

1. Read `AGENTS.md`.
2. Read `TITAN_START_HERE.md`.
3. Read `.titan/STATE.md`.
4. Determine `EXPECTED_ROLE`.
5. Read the relevant TITAN role file.
6. Read the files listed in `READ_NEXT`.
7. Inspect the real repository before making technical claims or implementation changes.

TITAN roles are responsibilities, not literal model names:

- SOL — reasoning, planning, architecture, complex debugging, and review.
- LUNA — implementation of prepared work.
- ASTRA — optional independent critical/challenge review.

**SOL prepares; LUNA executes.**

`.titan/STATE.md` is the workflow navigator. Do not bypass gates or execute a `DRAFT` plan. `IMPLEMENTED` is not the same as `ACCEPTED`. If a material conflict appears, stop and return to an appropriate reasoning/review role instead of improvising.

The currently selected Copilot model does not need to be named SOL, LUNA, or ASTRA. The active model assumes the TITAN role indicated by `EXPECTED_ROLE`; model switching is optional unless the USER explicitly requires it.
