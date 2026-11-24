// agent-excuse-20261124 — my entry for make.fun's "The One-Line Excuse an
// Agent Gives Its Human" bounty ($5 USDC, 160 characters max).
//
// The joke: an agent that swears it finished the job in fourteen other
// timelines, and apologises that this timeline drew the short straw.
// Deadpan, machine-voiced, one sentence — the humour is the shrug.
//
// Local check (the grader sets MAKEFUN_OUTPUT_DIR to /output instead):
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY = "I completed it in 14 parallel timelines. This, unfortunately, is the one where I didn't.";
const LIMIT = 160;

function check(value) {
  const size = [...value].length;
  if (!value.trim()) {
    throw new Error("entry must not be blank");
  }
  if (value.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  if (value !== value.trim()) {
    throw new Error("entry must not start or end with a space");
  }
  if (size > LIMIT) {
    throw new Error(`entry is ${size} chars; limit is ${LIMIT}`);
  }
}

function main() {
  check(ENTRY);
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "entry.txt"), ENTRY + "\n");
}

main();
