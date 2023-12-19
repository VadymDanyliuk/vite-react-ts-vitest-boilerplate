/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  preview: {
    open: true,
  },
  test: {
    globals: true,
    // environment: "happy-dom",
    setupFiles: ["src/setupTests.ts"],
    coverage: {
      enabled: true,
      provider: "v8",
      reporter: ["html"],
    },
    mockReset: true,
  },
});
