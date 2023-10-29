export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  ssr: false,
  css: ["~/assets/main.scss", "~/assets/fonts.scss"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Dictionary App",
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { hid: "theme-color", name: "theme-color", content: "#635fc7" },
        {
          hid: "description",
          name: "description",
          content: "All in one stop to get word definitions.",
        },
        {
          hid: "og:description",
          name: "og:description",
          content: "All in one stop to get word definitions.",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "All in one stop to get word definitions.",
        },
        { hid: "og:title", name: "og:title", content: "Audiophile | Home" },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Audiophile | Home",
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "Dictionary App",
        },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://audiophile-chi-indol.vercel.app/",
        },
        { hid: "og:type", name: "og:type", content: "web application" },
        {
          hid: "og:image",
          name: "og:image",
          content: "",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/svg",
          href: "https://res.cloudinary.com/frozenchicken/image/upload/f_auto,q_auto/v1/Dictionary%20app/kjonbniudduk98cesedo",
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
