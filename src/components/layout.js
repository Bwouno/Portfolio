import * as React from "react"
import Footer from "./Footer"
import Header from "./header"
import ScrollToTop from "./ScrollToTop"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ScrollToTop />
      {children}
      <Footer />
    </>
  )
}

export default Layout
