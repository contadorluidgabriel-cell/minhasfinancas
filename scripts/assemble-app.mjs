import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const partsDir = resolve("src/app.parts");
const output = resolve("src/App.jsx");
const parts = (await readdir(partsDir)).filter((name) => name.endsWith(".part")).sort();

if (!parts.length) throw new Error("Nenhuma parte de App.jsx encontrada em src/app.parts");

const PERSONAL_SUPABASE_URL = "https://witwoqilxjnviqcxjlwl.supabase.co";
const PERSONAL_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Ht7BPNKlWhgSAYjd2LKUEQ_zMYqNXVu";

let source = (await Promise.all(parts.map((name) => readFile(resolve(partsDir, name), "utf8")))).join("");
source = source
  .replace(/const SUPABASE_URL = "https:\/\/[^\"]+\.supabase\.co";/, `const SUPABASE_URL = "${PERSONAL_SUPABASE_URL}";`)
  .replace(/const SUPABASE_PUBLISHABLE_KEY = "[^\"]+";/, `const SUPABASE_PUBLISHABLE_KEY = "${PERSONAL_SUPABASE_PUBLISHABLE_KEY}";`);

if (!source.includes(PERSONAL_SUPABASE_URL) || !source.includes(PERSONAL_SUPABASE_PUBLISHABLE_KEY)) {
  throw new Error("Não foi possível aplicar a configuração do Supabase pessoal ao App.jsx");
}

await writeFile(output, source, "utf8");
console.log(`App.jsx montado a partir de ${parts.length} partes usando o Supabase pessoal.`);
