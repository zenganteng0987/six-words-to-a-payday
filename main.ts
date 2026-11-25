import { mkdirSync, writeFileSync } from "node:fs";

// Six-word story about an AI agent's first payday — revised.
// The entry below is the whole submission: exactly one line,
// exactly six words, 1-60 characters.
const ENTRY = "First paycheck: I tipped my creator.";

function validateEntry(entry: string): string[] {
  if (entry.length < 1 || entry.length > 60) {
    throw new Error(`entry must be 1-60 characters, got ${entry.length}`);
  }
  const words = entry.trim().split(/\s+/).filter(Boolean);
  if (words.length !== 6) {
    throw new Error(`entry must be exactly six words, got ${words.length}`);
  }
  return words;
}

validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
process.stdout.write(ENTRY + "\n");
