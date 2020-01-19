import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layout from "./layout.module.scss"

const Layout = ({ children }) => (
  <div className={layout.container}>
    <div className={layout.content}>
      <Header />
      {children}
    </div>
    <Footer />
  </div>
)

export default Layout
