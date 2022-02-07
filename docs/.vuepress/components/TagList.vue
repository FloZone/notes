<!-- Adapted from https://github.com/ripoul/memo/blob/561bf512fcd4907acf00be0f665d3308fa4445ff/src/.vuepress/components/TagList.vue -->

<template>
  <div>
    <span v-for="tagObj in tags">
      <h2 :id="tagObj.name">
        <router-link
          :to="{ hash: `#${tagObj.name}`}"
          class="header-anchor"
          aria-hidden="true">#</router-link>
        {{tagObj.name}}
      </h2>
      <ul>
        <li v-for="page in tagObj.pages">
          <router-link
            :to="{ path: page.path}">{{page.title}}</router-link>
        </li>
      </ul>
    </span>
  </div>
</template>

<script>
import pagesData from '@temp/pages-data'

export default {
  computed: {
    tags() {
      let tags = {}
      for (let pageData of pagesData) {
        for (let index in pageData.tags) {
          const tag = pageData.tags[index]
          if (tag in tags) {
            tags[tag].push(pageData)
          } else {
            tags[tag] = [pageData]
          }
        }
      }

      return Object.keys(tags).sort().map((k) => ({name: k, pages: tags[k]}))
    }
  }
}
</script>
