import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: "/arijitmukherjee.github.io/",
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
})