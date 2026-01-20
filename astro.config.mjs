import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://balegre.dev",
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
