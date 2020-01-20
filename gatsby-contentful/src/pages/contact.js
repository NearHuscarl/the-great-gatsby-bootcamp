import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to react me is via{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/NearHuscarl"
        >
          @NearHuscarl
        </a>{" "}
        on Twitter!
      </p>
    </Layout>
  )
}

export default Contact
