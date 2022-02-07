<!-- Adapted from https://github.com/ripoul/memo/blob/561bf512fcd4907acf00be0f665d3308fa4445ff/src/.vuepress/components/TagLinks.vue -->

<template>
  <div v-if="$page.frontmatter.tags">
    <span class="meta-item-label">Tags: </span>
    <span class="badge-item" v-for="tag in $page.frontmatter.tags">
      <router-link
        :to="{ path: `${tagsPagePath}`, hash: `#${tag}` }"
      >
        <Badge
          vertical="middle"
          :text="tag"
        />
      </router-link>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    tagsPagePath: {
      type: String
    }
  }
}
</script>

<style>
.meta-item-label {
  font-weight: 500;
  color: var(--c-text-lighter);
}

.badge-item {
  margin-left: 0.25rem;
}
</style>
