import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  deps: {
    alwaysBundle: [
      "@inquirer/core",
      "@inquirer/prompts",
      "chalk",
      "commander",
      "fast-glob",
      "ora",
      "posthog-node",
      "yaml",
      "zod"
    ],
  },
  exe: {
    fileName: 'openspec',
    useSnapshot: true,
    useCodeCache: true,
  }
})
