module.exports = {
  // Global config
  lang: 'fr-FR',
  title: 'FLZ_notes!',
  description: 'Mes notes',

  // Theme
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      { text: "Recettes", link: "/recettes/" },
      { text: "Dev", link: "/dev/" }
    ],
    sidebar: {
      '/recettes/': [
        '/recettes/',
        'cookies',
        'creme_anglaise'
      ]
    }
  },

  // Plugins
  plugins: [
    "@vuepress/pwa",  // TODO not working
    "@vuepress/last-updated",  // TODO not working
    "@vuepress/docsearch",  // TODO plugin ok but search ko
    "@vuepress/toc"
  ]
}
