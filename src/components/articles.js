import * as React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Articles = ({ posts }) => {

  return (
    <ol className="articlesList">
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug

        return (
          <Link
            to={post.fields.slug}
            key={post.fields.slug}
            itemProp="url"
            className="articleLink"
          >
            <li key={post.fields.slug} className="articles">
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <Img className="articleImage"
                  fluid={post.frontmatter.thumbnailImage.childImageSharp.fluid}
                />
                <header className="articleHeader">
                  <h2 className="articleH2">
                    <span itemProp="headline">{title}</span>
                  </h2>
                  <small className="articleDate">{post.frontmatter.author}</small><br />
                  <small className="articleDate">{post.frontmatter.date}</small>
                </header>

                <section className="articleText">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          </Link>
        )
      })}
    </ol>
  )
}

export default Articles
