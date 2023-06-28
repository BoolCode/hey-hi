await Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir     : './dist',
    external   : ['cross-fetch']
})

await Bun.build({
    entrypoints: ['./src/cli.ts'],
    outdir     : './dist',
    external   : ['cross-fetch']
})


await Bun.spawn(['bun', 'dts-bundle-generator', 'src/index.ts', '--out-file', 'dist/index.d.ts'])


