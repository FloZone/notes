import { defineUserConfig, Page } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { path } from '@vuepress/utils'
import { NavbarConfig, SidebarConfig } from '@vuepress/theme-default'

const BASE = "/notes/"


function generateNavbar(): NavbarConfig {
  return [
    {
      text: 'Tags',
      link: '/tags/',
    },
    {
      text: 'Recettes',
      link: '/recettes/',
    },
    {
      text: 'Devs',
      link: '/dev/',
    },
  ]
}

function generateSidebar(): SidebarConfig {
  return {
    "/recettes/": [
      "/recettes/",
      "cookies",
      "creme_anglaise"
    ]
  }
}

export default defineUserConfig<DefaultThemeOptions>({
  // Global config
  base: BASE,
  lang: "fr-FR",
  title: "FLZ Notes!",
  description: "Mes notes",

  // Theme
  head: [
    ['link', { rel: "icon", href: "/notes/favicon.ico" }],
    ["link", { rel: "manifest", href: "/notes/manifest.webmanifest" }],
    ["meta", { name: "theme-color", content: "#adbac7" }],
  ],
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    repo: "https://github.com/FloZone/notes",
    logo: "/images/logo.png",
    navbar: generateNavbar(),
    sidebar: generateSidebar(),
    editLink: true,
    editLinkText: "Editer sur GitHub",
    contributors: false,
    lastUpdated: true,
    lastUpdatedText: "Dernière MàJ",
  },

  // Plugins
  plugins: [
    "@vuepress/toc",
    "@vuepress/pwa",  // TODO not working
    [
      '@vuepress/plugin-search',
      {
        // allow searching the `tags` frontmatter
        getExtraFields: (page: Page) => page.frontmatter.tags ?? [],
      },
    ],
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],

  // From https://github.com/vuepress/vuepress-next/discussions/72#discussioncomment-472465
  onPrepared: async (app) => {
    const myData = app.pages.map((page) => {
      return {
        title: page.title,
        tags: page.frontmatter.tags || [],
        path: page.path,
      }
    })
    await app.writeTemp('pages-data.js', `export default ${JSON.stringify(myData)}`)
  },
})
