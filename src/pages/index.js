import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql,StaticQuery } from "gatsby"

import Post from '../components/Post'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home Page</h1>

    <StaticQuery query={denemeQuery} render={data =>{
      return(
        <div>
          {data.allMarkdownRemark.edges.map(({node}) => (
            <Post input={node}/>
          ))}
        </div>
      )
    }}/>

  </Layout>
)

const denemeQuery = graphql`
query {
  allMarkdownRemark {
    edges {
      node{
        id
        frontmatter{
          title
          date
          author
          path
        }
        excerpt
      }
    }
  }
}
`


export default IndexPage
