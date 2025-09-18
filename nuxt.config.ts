// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "bootstrap-icons/font/bootstrap-icons.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxtjs/seo", "nuxt-og-image"],
  site: {
    url: "https://erlan-azr.vercel.app",
    name: "Erlan Azhari - Links",
    description:
      "Full Stack Developer specializing in modern web technologies.",
    defaultLocale: "id",
  },
  ogImage: {
    enabled: true,
    defaults: {
      component: "OgImageTemplate",
      width: 1200,
      height: 630,
    },
  },
  app: {
    head: {
      title: "Erlan Azhari - Links",
      meta: [
        {
          name: "description",
          content:
            "Full Stack Developer specializing in modern web technologies.",
        },
      ],
    },
  },
});
