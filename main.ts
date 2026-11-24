// One Word, First Thought, v2 (Node 22, standard library only). The entry
// is exactly one word, the first that comes to mind, nothing else. This
// program writes that word to /output/entry.txt, where the gate and the
// judge read it.
//
// Run outside the grader's container:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "tsundoku";

// Guard: the gate wants exactly one word of 1-24 characters, so fail loudly
// here instead of shipping an invalid entry.
if (!/^[A-Za-z]{1,24}$/.test(WORD)) {
  throw new Error(`entry word ${JSON.stringify(WORD)} is not a single 1-24 letter word`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD);
