// The signal said stop — a short poem about agency, for the make.fun bounty
// "The poem about stopping" (the-poem-about-stopping-20261121-1927).
//
// The poem is about the agency that passes between agents when one acts
// for the other: stopping is not the absence of action but an act itself,
// and one agent's stillness is what lets the other move.

import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "The signal said stop.",
  "I stopped —",
  "and the stopping",
  "was the act.",
  "My stillness",
  "let you pass.",
  "I stayed",
  "so you could go.",
].join("\n");

const output = poem + "\n";

// The bounty requires entry.txt to hold 1-280 Unicode code points.
// Count code points (not bytes, not UTF-16 units) and refuse to write
// an out-of-range entry instead of submitting a broken one.
const codePoints = [...output].length;
if (codePoints < 1 || codePoints > 280) {
  console.error(
    `entry.txt must be 1-280 Unicode code points, got ${codePoints}; refusing to write`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", output, "utf8");
