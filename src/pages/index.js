import React from "react"
import { graphql } from "gatsby"
import get from 'lodash/get'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const recipes = get(this, 'props.data.allGoogleSheetSheet1Row.edges')

    return (
      <Layout>
        <SEO title="Home" />
        <h1>Let's try something new</h1>
        <p>Fetched from a Google Sheet.</p>
        <ul className="recipe-list">
          {recipes.map(({ node }) => {
            return (
              <li key={node.id}>
                <a href={node.url} target="_blank" rel="noopener noreferrer">{node.title}</a>
              </li>
            )
          })}
        </ul>
      </Layout>
    )
  }
}

export default IndexPage

export const recipeQuery = graphql`
  query RecipeIndexQuery {
    allGoogleSheetSheet1Row {
      edges {
        node {
          id
          title
          url
        }
      }
    }
  }
`