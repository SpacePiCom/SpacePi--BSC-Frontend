import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// process.env["REACT_APP_BASEURL"] = "https://bscpage.space-pi.com";
process.env["REACT_APP_BASEURL"] = "";
process.env["API_URL"] = "https://bsc.space-pi.com/api";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env["REACT_APP_BASEURL"],
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [
        path.resolve(process.cwd(), "src/components/icon/svg"),
        path.resolve(process.cwd(), "public"),
        path.resolve(process.cwd(), "src/assets/svg"),
      ],
      symbolId: "icon-[name]",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  define: {
    globals: {
      globalThis: "globalThis",
    },
    process:process.env
  },
  build: {
    rollupOptions: {
      output: {
        globals: {
          globalThis: "globalThis",
        },
      },
    },
  },
  server: {
    port: 81,
    host: true,
    open: true,
    hmr: {
      clientPort: 81,
    },
    proxy: {
      "/mid": {
        target: "https://api.binplorer.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mid/, ""),
      },
    },
  },
});
