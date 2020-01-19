import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import blogStyle from "./blog.module.scss"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const blogs = data.allMarkdownRemark.edges.map(n => n.node)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyle.posts}>
        {blogs.map(b => {
          const { title, date } = b.frontmatter
          const { slug } = b.fields
          return (
            <li className={blogStyle.post}>
              <h2>
                <Link to={`blog/${slug}`}>{title}</Link>
              </h2>
              <p>{date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
