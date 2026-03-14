#!/usr/bin/env node

import { countLines } from "../gcount/counter.js";

const extensions = process.argv.slice(2);

if (!extensions.length) {
  console.log("Usage: gs-codecount js jsx ts py");
  process.exit(1);
}

const { result, total } = await countLines(extensions);

console.log("\nLines of Code :");

for (const ext in result) {
  console.log(`${ext}: ${result[ext]}`);
}

console.log("\nTotal:", total);