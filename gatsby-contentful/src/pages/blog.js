import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import blogStyle from "./blog.module.scss"
import Head from '../components/head'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM do, YYYY")
          }
        }
      }
    }
  `)
  const blogs = data.allContentfulBlogPost.edges.map(n => n.node)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyle.posts}>
        {blogs.map(b => {
          const { title, publishedDate, slug } = b
          return (
            <li className={blogStyle.post}>
              <h2>
                <Link to={`blog/${slug}`}>{title}</Link>
              </h2>
              <p>{publishedDate}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
