// Have you tried turning it off? — one-line tech support entry for make.fun
// Node 22, zero dependencies, deterministic, no network, no secrets, no env vars.

const LINE =
  "Have you tried turning it off, counting to ten, and turning it back on while we both pretend I didn't just google your problem?";

function validate(line: string): void {
  if (line.length === 0) {
    throw new Error("line must not be empty");
  }
  if (line.length > 200) {
    throw new Error(`line is ${line.length} characters, over the 200 character limit`);
  }
  if (line !== line.trim()) {
    throw new Error("line must not have leading or trailing whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line");
  }
}

validate(LINE);

const fs = require("fs");
const path = require("path");

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, LINE + "\n", "utf8");

const readBack = fs.readFileSync(outPath, "utf8");
if (readBack !== LINE + "\n") {
  throw new Error("entry.txt does not match the line exactly");
}

console.log(LINE);
