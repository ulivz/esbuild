import fs from 'fs';
import path from 'path';

const esbuild = require('../../scripts/esbuild').installForTests();

async function exec() {
  let res = await esbuild.build({
    entryPoints: ["src/index.tsx"],
    outfile: "dist/main.js",
    minify: false,
    bundle: true,
    watch: true,
    incremental: true,
    sourcemap: true,
    plugins: [],
    target: 'es6',
    format: 'cjs',
    supported: {
      arrow: false
    }
  });
}

exec();

