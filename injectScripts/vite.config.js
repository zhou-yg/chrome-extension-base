import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const curDirname = dirname(fileURLToPath(import.meta.url))

const config = defineConfig(({ mode }) => {
  const isDev = mode === 'development'

  return {
    build: {
      minify: false,
      watch: isDev,
      sourcemap: isDev,
      rollupOptions: {
        input: {
          index: 'index.html',
        },
        output: {
          entryFileNames: '[name].js'
        },
      }
    }
  }
})

export default config
