var path = require("path");

BASE = "/notes/"


module.exports = {
  // Global config
  base: BASE,
  lang: "fr-FR",
  title: "FLZ Notes!",
  description: "Mes notes",


  // Theme
  // theme: path.resolve(__dirname, "./theme"),
  theme: "@vuepress/theme-default",
  head: [
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "theme-color", content: "#adbac7" }],
  ],
  themeConfig: {
    repo: "https://github.com/FloZone/notes",

    logo: "/images//logo.png",
    navbar: [
      { text: "Recettes", link: "/recettes/" },
      { text: "Dev", link: "/dev/" }
    ],
    sidebar: {
      "/recettes/": [
        "/recettes/",
        "cookies",
        "creme_anglaise"
      ]
    },
    editLink: true,
    editLinkText: "Editer sur GitHub",
    contributors: false,
    lastUpdated: true,
    lastUpdatedText: "Dernière MàJ",
  },

  // Plugins
  plugins: [
    [
      "@vuepress/pwa",  // TODO not working
      {
        skipWaiting: true
      }
    ],
    "@vuepress/docsearch",  // TODO plugin ok but search ko
    "@vuepress/toc"
  ]
}
