import react from '@vitejs/plugin-react'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [react()],
  base: '/arijitmukherjee.github.io/',
  build: {
    outDir: '.',
    emptyOutDir: false,
  }
}
