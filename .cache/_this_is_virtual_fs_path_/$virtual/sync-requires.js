
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/lovisa/Documents/GitHub/personal-website-v3/.cache/dev-404-page.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/lovisa/Documents/GitHub/personal-website-v3/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/lovisa/Documents/GitHub/personal-website-v3/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/lovisa/Documents/GitHub/personal-website-v3/src/pages/projects.js"))
}

