import React from "react"
import { graphql } from "gatsby"
import SliceZone from "../components/sliceZone"
import Layout from "../components/layout"

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            body {
              ... on PRISMIC_HomepageBodyHero {
                type
                primary {
                  hero_content
                  hero_title
                  background_image
                }
              }
              ... on PRISMIC_HomepageBodyPaintings_grid {
                type
                fields {
                  button_destination {
                    ... on PRISMIC_Page {
                      _meta {
                        uid
                      }
                    }
                  }
                  button_label
                  painting_thumb
                  painting_title
                }
              }
            }
          }
        }
      }
    }
  }
`
const IndexPage = props => {
  return (
    <Layout>
      <SliceZone body={props.data.prismic.allHomepages.edges[0].node.body} />
    </Layout>
  )
}

export default IndexPage
