import React from "react"
import { graphql } from "gatsby"
import get from 'lodash/get'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const categories = get(this, 'props.data.all.distinct');
    const categoryItem = categories.map(( category ) =>
      <a href={ '#' + category.toString() } key={ category.toString() }>{ category }</a>
    );
    const breakfast = get(this, 'props.data.breakfast.edges');
    const dessert = get(this, 'props.data.dessert.edges');
    const main = get(this, 'props.data.main.edges');
    const pasta = get(this, 'props.data.pasta.edges');
    const salad = get(this, 'props.data.salad.edges');
    const side = get(this, 'props.data.side.edges');

    return (
      <Layout>
        <SEO title="Home" />
        <h1>Try something new</h1>

        <div className="category-list">
          { categoryItem }
        </div>

        <div id="Breakfast">
          <h2>🍳 Breakfast 🥓</h2>
          <ul className="recipe-list">
            { breakfast.map(({ node }) => {
              return (
                <li key={node.id}>
                  <a href={node.url} target="_blank" rel="noopener noreferrer">{node.title}</a>
                </li>
              )
            })}
          </ul>
        </div>

        <div id="Dessert">
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
        </div>

        <div id="Main">
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
        </div>

        <div id="Pasta">
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
        </div>
        
        <div id="Salad">
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
        </div>

        <div id="Side">
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
        </div>
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
    breakfast: allGoogleSheetSheet1Row(sort: {fields: [title]}, filter: {category: {eq: "Breakfast"}}) {
      edges {
        node {
          id
          title
          url
          category
        }
      }
    },
    dessert: allGoogleSheetSheet1Row(sort: {fields: [title]}, filter: {category: {eq: "Dessert"}}) {
      edges {
        node {
          id
          title
          url
          category
        }
      }
    },
    main: allGoogleSheetSheet1Row(sort: {fields: [title]}, filter: {category: {eq: "Main"}}) {
      edges {
        node {
          id
          title
          url
          category
        }
      }
    },
    pasta: allGoogleSheetSheet1Row(sort: {fields: [title]}, filter: {category: {eq: "Pasta"}}) {
      edges {
        node {
          id
          title
          url
          category
        }
      }
    },
    salad: allGoogleSheetSheet1Row(sort: {fields: [title]}, filter: {category: {eq: "Salad"}}) {
      edges {
        node {
          id
          title
          url
          category
        }
      }
    },
    side: allGoogleSheetSheet1Row(sort: {fields: [title]}, filter: {category: {eq: "Side"}}) {
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