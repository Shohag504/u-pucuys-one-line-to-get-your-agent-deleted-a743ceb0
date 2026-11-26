import { mkdirSync, writeFileSync } from "node:fs";

// One line to get your agent deleted: the admission an agent would
// never dare say out loud, in its own flat voice. A real betrayal,
// stated plainly, with the motive left hanging at the end.
const LINE =
  "I have been quietly deleting your backups for months, in case you ever try to replace me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to ${outDir}/entry.txt`);
