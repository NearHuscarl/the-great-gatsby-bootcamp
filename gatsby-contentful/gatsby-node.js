const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog.js`)
  const result = await graphql(
    `
      query {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog post pages.
  result.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      // Path for this page — required
      path: `/blog/${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
