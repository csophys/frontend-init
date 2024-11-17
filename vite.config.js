import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base : "/" + process.env.VITE_PORT + "/",
  server: {
      host: "::",
      port: process.env.VITE_PORT || 8080,
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "lib",
        replacement: resolve(__dirname, "lib"),
      },
    ],
  },
});
