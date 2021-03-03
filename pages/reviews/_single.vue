<template>
  <div id="post-page" class="page-wrapper post-page">
    <site-hero :title="title" :image="featureImage">
      <span
        v-if="author && $siteConfig.posts.displayAuthor"
        class="author-wrapper"
      >
        <strong>Auteur:</strong> {{ author }}
      </span>
      <span v-if="date" class="date-wrapper">
        <strong>Gepubliceerd:</strong> {{ date }}
      </span>
    </site-hero>
    <main-section :one-column-constrained="true">
      <template v-slot:default>
        <div class="post-wrapper">
          <markdown :markdown="$store.state.content" />
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { setPageData, getFormattedDate } from '../../helper'
import Markdown from '~/components/Markdown'
export default {
  components: {
    Markdown
  },
  computed: {
    ...mapState(['title', 'featureImage', 'author', 'slug']),
    date() {
      return getFormattedDate(this.$store.state.date)
    },
    url() {
      return `${process.env.URL}/${this.$route.fullPath}`
    }
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'review', slug: params.single })
  }
}
</script>
<style scoped lang="scss">
.edit-post {
  margin-bottom: 20px;
}
</style>
