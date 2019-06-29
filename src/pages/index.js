import React from "react"
import { graphql } from "gatsby"
import get from 'lodash/get'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const categories = get(this, 'props.data.all.distinct')
    const breakfast = get(this, 'props.data.breakfast.edges')
    const dessert = get(this, 'props.data.dessert.edges')
    const main = get(this, 'props.data.main.edges')
    const pasta = get(this, 'props.data.pasta.edges')
    const salad = get(this, 'props.data.salad.edges')
    const side = get(this, 'props.data.side.edges')

    return (
      <Layout>
        <SEO title="Home" />
        <h1>Try something new</h1>

        {/* { categories } */}

        <a name="breakfast"><h2>🍳 Breakfast 🥓</h2></a>
        <ul className="recipe-list">
          { breakfast.map(({ node }) => {
            return (
              <li key={node.id}>
                <a href={node.url} target="_blank" rel="noopener noreferrer">{node.title}</a>
              </li>
            )
          })}
        </ul>

        <h2>🍨 Dessert 🍦</h2>
        <ul className="recipe-list">
          { dessert.map(({ node }) => {
            return (
              <li key={node.id}>
                <a href={node.url} target="_blank" rel="noopener noreferrer">{node.title}</a>
              </li>
            )
          })}
        </ul>

        <h2>🍗 Main Dish 🐄</h2>
        <ul className="recipe-list">
          { main.map(({ node }) => {
            return (
              <li key={node.id}>
                <a href={node.url} target="_blank" rel="noopener noreferrer">{node.title}</a>
              </li>
            )
          })}
        </ul>

        <h2>🍝 Pasta 🍝 </h2>
        <ul className="recipe-list">
          { pasta.map(({ node }) => {
            return (
              <li key={node.id}>
                <a href={node.url} target="_blank" rel="noopener noreferrer">{node.title}</a>
              </li>
            )
          })}
        </ul>
        
        <h2>🥬  Salad 🥗 </h2>
        <ul className="recipe-list">
          { salad.map(({ node }) => {
            return (
              <li key={node.id}>
                <a href={node.url} target="_blank" rel="noopener noreferrer">{node.title}</a>
              </li>
            )
          })}
        </ul>

        <h2>🌽Side 🍟</h2>
        <ul className="recipe-list">
          { side.map(({ node }) => {
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
  query getRecipes {
    all: allGoogleSheetSheet1Row(sort: {fields: [title]}) {
      edges {
        node {
          id
          title
          url
          category
        }
      }
      distinct(field: category)
    },
    breakfast: allGoogleSheetSheet1Row(sort: {fields: [title]}, filter: {category: {eq: "breakfast"}}) {
      edges {
        node {
          id
          title
          url
          category
        }
      }
    },
    dessert: allGoogleSheetSheet1Row(sort: {fields: [title]}, filter: {category: {eq: "dessert"}}) {
      edges {
        node {
          id
          title
          url
          category
        }
      }
    },
    main: allGoogleSheetSheet1Row(sort: {fields: [title]}, filter: {category: {eq: "main"}}) {
      edges {
        node {
          id
          title
          url
          category
        }
      }
    },
    pasta: allGoogleSheetSheet1Row(sort: {fields: [title]}, filter: {category: {eq: "pasta"}}) {
      edges {
        node {
          id
          title
          url
          category
        }
      }
    },
    salad: allGoogleSheetSheet1Row(sort: {fields: [title]}, filter: {category: {eq: "salad"}}) {
      edges {
        node {
          id
          title
          url
          category
        }
      }
    },
    side: allGoogleSheetSheet1Row(sort: {fields: [title]}, filter: {category: {eq: "side"}}) {
      edges {
        node {
          id
          title
          url
          category
        }
      }
    }
  }
`