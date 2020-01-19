import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footer from './footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  const { author } = data.site.siteMetadata

  return (
    <footer className={footer.footer}>
      <p>Created by {author} (c) 2019</p>
    </footer>
  )
}

export default Footer
