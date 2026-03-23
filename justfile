init:
  pnpm install

build:
  node esbuild.mjs

add-tsdown:
  pnpm add -D tsdown@0.21.4

approve-builds:
  pnpm approve-builds

tsdown-build:
  pnpx tsdown@0.21.4 --config tsdown.config.ts
