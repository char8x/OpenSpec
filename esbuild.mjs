import * as esbuild from 'esbuild'
import { chmod } from 'fs/promises';
import { rimraf } from 'rimraf'

await rimraf('dist')

// 输出是不带后缀的文件
const OUTPUT = 'dist/openspec'

await esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  banner: { js: ['#!/usr/bin/env -S node', 'import { createRequire } from "node:module";', 'const require = createRequire(import.meta.url);'].join('\n') },
  outfile: OUTPUT,
  sourcemap: "external",
  logLevel: 'info'
})

await chmod(OUTPUT, 0o755);

console.log(`✓ Built → ${OUTPUT}`);
