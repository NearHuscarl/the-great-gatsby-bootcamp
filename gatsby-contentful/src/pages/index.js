import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello.</h1>
    <h2>I'm NearHuscarl. A full-stack developer living in beautiful Vietnam</h2>
    <p>
      Need a developer? <Link to="/contact">Contact me.</Link>
    </p>
  </Layout>
)

export default IndexPage
