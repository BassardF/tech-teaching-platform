import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import get from 'lodash/get'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: { 
          name: { eq : "javascript-beginner" } 
          sourceInstanceName: { eq : "data" }
        }) {
          edges {
            node {
              childJson {
                title
                date
                pages { 
                  nodes {
                    type
                    content
                  }
                }
              }
            }
          }
        }
      }
    `
}
    render={data => { 
      console.log('data', data)
      const base = get(data, 'allFile.edges.0.node.childJson');
      console.log('base', base)
      return (
      <Layout>
        <SEO title="JavaScript - Beginner" description="Lean JavaScript, beginner level" />
        <h1>Hi from the second page</h1>
        <Link to="/">Go back to the homepage</Link>
        {children}
      </Layout>
      )}}
  />
)
