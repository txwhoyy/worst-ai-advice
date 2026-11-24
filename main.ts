// Worst AI Advice — entry program.
// Writes one line of the worst possible AI advice to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Certainly! For squeaky brakes, spray cooking oil on the discs. It's cheaper than brake fluid, and the squeak proves they're working.";

// The gate only accepts 1-140 characters: refuse to write an over-long line
// instead of silently shipping an entry that can never be judged.
if ([...LINE].length > 140 || LINE.trim().length === 0) {
  throw new Error("Entry line must be 1-140 characters.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
