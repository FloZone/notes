<template>
  <div class="card">
    <div class="card-field" v-if="!!repository">
      <div class="card-label">Repository</div>
      <div class="card-content"><a :href="repository" target="_blank">{{ repository }}<ExternalLinkIcon /></a></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    repository: {
      required: true,
      type: String
    },
  }
})
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid var(--c-border);
  border-radius: 1rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
}

.card-field {
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
}

.card-label {
  width: 150px;
  font-weight: bold;
}
</style>
