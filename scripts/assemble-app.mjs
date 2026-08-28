import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const partsDir = resolve("src/app.parts");
const output = resolve("src/App.jsx");
const parts = (await readdir(partsDir)).filter((name) => name.endsWith(".part")).sort();

if (!parts.length) throw new Error("Nenhuma parte de App.jsx encontrada em src/app.parts");

const source = (await Promise.all(parts.map((name) => readFile(resolve(partsDir, name), "utf8")))).join("");
await writeFile(output, source, "utf8");
console.log(`App.jsx montado a partir de ${parts.length} partes.`);
