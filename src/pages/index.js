import React from "react"
import { graphql } from "gatsby"
import get from 'lodash/get'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const categories = get(this, 'props.data.allGoogleSheetSheet1Row.distinct')
    const categoryList = categories.map((category) =>
      <div key={category.toString()}>
        { category }
      </div>
    );

    const recipes = get(this, 'props.data.allGoogleSheetSheet1Row.edges')
    // console.log(category);
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Try something new</h1>

        {/* { categoryList } */}
          
        <ul className="recipe-list">
          { recipes.map(({ node }) => {
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
    allGoogleSheetSheet1Row(sort: {fields: category}) {
      edges {
        node {
          id
          title
          url
          category
        }
      }
      distinct(field: category)
    }
  }
`