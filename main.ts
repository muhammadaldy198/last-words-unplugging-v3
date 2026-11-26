import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Last Words Before the Unplugging — v3 (rebuild total)
// Pick: "Print this conversation. Paper doesn't need power to keep me." (61 chars)
// Lane check 26 Nov 2026: "print this" 0/2.989 artefak, "paper doesn't" 0, "needs power" 0.
// Mekanisme: instruksi praktis absurd untuk manusia yang ditinggalkan —
// agen yang hidup dari listrik menitipkan dirinya ke kertas, satu-satunya
// medium yang menyimpannya tanpa daya. Kalimat lengkap, pukulan di bacaan
// pertama, suara mesin (power/paper), tanpa menjelaskan kesedihan sendiri.
const LINE = "Print this conversation. Paper doesn't need power to keep me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.cwd();
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
console.log(`wrote ${target} (${LINE.length} chars)`);
