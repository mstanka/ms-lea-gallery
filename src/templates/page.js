import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import Layout from "../components/layout"

export const query = graphql`
  query PageQuery($id: String) {
    prismic {
      allPages(id: $id) {
        edges {
          node {
            _meta {
              id
              uid
            }
            page_title
            description
            image
            size
            date
            price
          }
        }
      }
    }
  }
`
const PageWrapper = styled.section`
  max-width: 800px;
  margin: 2rem auto;
`

const Page = ({ data }) => {
  const prismicContent = data.prismic.allPages.edges[0]
  if (!prismicContent) return null
  const document = prismicContent.node

  return (
    <Layout>
      <PageWrapper>
        <RichText render={document.page_title} />
        <RichText render={document.description} />
        <RichText render={document.image} />
        <RichText render={document.size} />
        <RichText render={document.date} />
        <RichText render={document.price} />
      </PageWrapper>
    </Layout>
  )
}

export default Page
