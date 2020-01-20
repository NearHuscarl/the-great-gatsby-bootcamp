import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to react me is via{" "}
        <a
          target="_blank"
          href="https://twitter.com/NearHuscarl"
          rel="noopener noreferrer"
        >
          @NearHuscarl
        </a>{" "}
        on Twitter!
      </p>
    </Layout>
  )
}

export default Contact
