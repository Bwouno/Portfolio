// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/Footer"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = () => {
  return (
    <Layout>
      <Seo />
    </Layout>
  )
}

export default UsingTypescript
