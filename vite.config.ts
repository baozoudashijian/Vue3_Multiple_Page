import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const buildDir = process.env.Build_Dir
// const buildDir = process.argv
console.log(buildDir)
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      mergeProps: true
    })
  ],
  build: {
    rollupOptions: {
      input: {
        [buildDir]: resolve(__dirname, `src/${buildDir}/index.html`)
      },
      output: {
        dir: 'dist/',
      }
    }
  }
})