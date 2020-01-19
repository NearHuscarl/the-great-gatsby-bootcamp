import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import header from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata

  return (
    <header className={header.header}>
      <h1>
        <Link className={header.title} to="/">
          {title}
        </Link>
      </h1>
      <nav>
        <ul className={header.navList}>
          <li>
            <Link
              className={header.navItem}
              activeClassName={header.navItemActive}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={header.navItem}
              activeClassName={header.navItemActive}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={header.navItem}
              activeClassName={header.navItemActive}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={header.navItem}
              activeClassName={header.navItemActive}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
