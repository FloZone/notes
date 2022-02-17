import { globby, path, fs } from '@vuepress/utils'
import {SidebarGroupCollapsible } from '@vuepress/theme-default'
import { PageFrontmatter, resolvePageContent } from '@vuepress/core'


export interface WithTags extends PageFrontmatter<Record<string, unknown>> {
  tags?: string[]
}

export const listRelativePagesInFolder = function (root: string): string[] {
  const pages = globby.sync([`${root}/*.md`, `!${root}/README.md`])
  return pages.map((p) => path.basename(p))
}

export function generateSidebarCollapsible(name: string, pathname: string): [SidebarGroupCollapsible] {
  const targetPath = path.resolve(__dirname, `../..${pathname}`)
  const pages = listRelativePagesInFolder(targetPath).map((p) => `${pathname}${p}`)

  return [{
    text: name,
    link: pathname,
    children: pages,
  }]
}

export const scanAbsolutePagesInFolder = function (root: string): string[] {
  return globby.sync([`${root}/**/*.md`, `!${root}/**/README.md`])
}

export function parseTagsFromAllFiles(): string[] {
  const pages = scanAbsolutePagesInFolder(path.resolve(__dirname, '../..'))
  const tags = []

  for (const page of pages) {
    const fileContents = fs.readFileSync(page, { encoding: 'utf-8' })
    const data = resolvePageContent({ contentRaw: fileContents })
    const pageTags = (data.frontmatterRaw as WithTags).tags ?? []
    for (const tag of pageTags) {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    }
  }

  return tags.sort()
}

export const generateTagsSidebar = function (): SidebarGroupCollapsible {
  const tags = parseTagsFromAllFiles()
  const links = tags.map((t) => ({
    text: t,
    link: `#${t}`,
  }))

  return {
    text: 'Tags',
    link: `/tags.html`,
    children: links,
  }
}
