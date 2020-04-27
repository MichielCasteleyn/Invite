import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./index.module.css"
import Vuist from "../components/vuist"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Vuist />
    <Link to="/create" className={style.button}>
      Geef een vuistje
    </Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allContentfulInvite {
      edges {
        node {
          id: contentful_id
        }
      }
    }
  }
`
