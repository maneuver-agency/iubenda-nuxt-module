<template>
  <div>
    <div v-if="$fetchState.pending">
      {{ loadingText }}
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-else v-html="content" />
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String, default: 'privacy' },
    loadingText: { type: String, default: 'Loading content...' },
    errorText: { type: String, default: 'Error fetching content' }
  },
  data () {
    return {
      content: ''
    }
  },
  async fetch () {
    const apiUrl =
      this.type === 'cookie'
        ? this.$iubenda.cookiePolicyApiUrl
        : this.$iubenda.privacyPolicyApiUrl

    this.content = await fetch(apiUrl)
      .then(response => response.json())
      .then(response =>
        response?.success ? response.content : this.errorText
      )
      .catch(() => this.errorText)
  },
  fetchOnServer: false
}
</script>
