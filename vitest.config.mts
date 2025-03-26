import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: [
      resolve('./vitest.setup.mts'),
    ],
  },
});
