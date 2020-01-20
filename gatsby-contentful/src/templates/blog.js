import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from '../components/head';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const alt = node.data.target.fields.title['en-US'];
        const src = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={src} />
      }
    }
  };

  const post = props.data.contentfulBlogPost
  const { title, publishedDate, body } = post

  return (
    <Layout>
      <Head title={title}/>
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}

export default Blog
