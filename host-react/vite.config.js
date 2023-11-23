import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const port = 5000;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port,
  },
  preview: {
    port,
  },
  plugins: [
    react(),
    federation({
      name: "host-react",
      remotes: {
        remoteVue: "http://localhost:5001/assets/remoteEntry.js",
      },
    }),
  ],
  build: {
    target: "esnext",
  },
});
