(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{7698:function(e,t,a){"use strict";var l=a(7294),r=a(1496),s=a(5444);t.Z=function(e){var t=e.posts;return l.createElement("ol",{className:"articlesList"},t.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement(s.Link,{to:e.fields.slug,key:e.fields.slug,itemProp:"url",className:"articleLink"},l.createElement("li",{key:e.fields.slug,className:"articles"},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement(r.Z,{className:"articleImage",fluid:e.frontmatter.thumbnailImage.childImageSharp.fluid}),l.createElement("header",{className:"articleHeader"},l.createElement("h2",{className:"articleH2"},l.createElement("span",{itemProp:"headline"},t)),l.createElement("small",{className:"articleDate"},e.frontmatter.author),l.createElement("br",null),l.createElement("small",{className:"articleDate"},e.frontmatter.date)),l.createElement("section",{className:"articleText"},l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"})))))})))}},7704:function(e,t,a){"use strict";a.r(t);var l=a(7294),r=a(3781),s=a(3751),n=a(7698);t.default=function(e){var t,a=e.data,c=e.location,i=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",o=a.allMarkdownRemark.nodes;return 0===o.length?l.createElement(r.Z,{location:c,title:i},l.createElement(s.Z,{title:"All posts"}),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(r.Z,{location:c,title:i},l.createElement(s.Z,{title:"All posts"}),l.createElement(n.Z,{posts:o}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-07854a17c8fe470b1e2e.js.map