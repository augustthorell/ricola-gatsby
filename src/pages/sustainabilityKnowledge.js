import * as React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Articles from "../components/articles"

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allMarkdownRemark.nodes


    if (posts.length === 0) {
        return (
            <Layout location={location} title={siteTitle}>
                <SEO title="All posts" />

                <p>
                    No blog posts found. Add markdown posts to "content/blog" (or the
                    directory you specified for the "gatsby-source-filesystem" plugin in
                    gatsby-config.js).
        </p>
            </Layout>
        )
    }

    return (
        <Layout location={location} title={siteTitle} >
            <SEO title="All posts" />

            <Articles posts={posts} />
        </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {frontmatter: {tag: {in: "sustainability"}}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          author
          tag
          thumbnailImage {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
