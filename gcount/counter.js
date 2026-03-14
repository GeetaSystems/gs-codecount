import fs from "fs";
import fg from "fast-glob";

export async function countLines(extensions) {
  const patterns = extensions.map(ext => `**/*.${ext}`);

  const files = await fg(patterns, { ignore: ["node_modules"] });

  const result = {};
  let total = 0;

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    const lines = content.split("\n").length;

    const ext = file.split(".").pop();

    result[ext] = (result[ext] || 0) + lines;
    total += lines;
  }

  return { result, total };
}