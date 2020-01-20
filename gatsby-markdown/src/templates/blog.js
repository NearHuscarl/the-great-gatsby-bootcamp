import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from '../components/head'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
  const md = props.data.markdownRemark
  const { title, date } = md.frontmatter

  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: md.html }} />
    </Layout>
  )
}

export default Blog
