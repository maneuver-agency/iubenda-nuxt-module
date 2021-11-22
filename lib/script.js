var _iub = _iub || []

<% if (options.consentMode) { %>

function gtag() {
  <% if (options.env === 'dev') { %>
    console.log('datalayer push', arguments)
  <% } %>
  if (window.dataLayer && window.dataLayer.push) {
    window.dataLayer.push(arguments)
  }
}

gtag('consent', 'default', {
  ad_storage: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 2000, // milliseconds
})
gtag('set', 'ads_data_redaction', true)

<% } %>

_iub.csConfiguration = JSON.parse('<%= options.config_json %>')
