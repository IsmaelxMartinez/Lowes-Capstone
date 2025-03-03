import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    // Vitest-specific configuration
    globals: true, // Enable global imports for `describe`, `it`, etc.
    environment: "jsdom", // Use jsdom for DOM testing (required for React)
    setupFiles: "./src/setupTests.js", // Optional: Setup file for global test configurations
  },
});
