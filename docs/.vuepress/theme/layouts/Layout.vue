<template>
  <Layout>
    <template #page-bottom>
      <div class="tag-container">
        <TagLinks tagsPagePath="/tags" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
export default {
  components: {
    Layout,
  },
}
</script>

<style>
.tag-container {
  margin: 2rem 2.5rem;
}
</style>
