import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import Layout from "../components/Layout/Layout"

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
  max-width: 400px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 4rem 2rem;
  color: white;
  text-align: center;

  @media screen and (min-width: 768px) {
    max-width: 700px;
  } 
`

const ImageWrapper = styled.div`
  display: block;
  width: 300px;
  height: auto;
  margin: 3rem auto;

  @media screen and (min-width: 768px) {
    max-width: 700px;
  }

  img {
    width: 100%;
    height: 100%;
    transition: transform .7s ease-in-out;
  }

  img:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
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
        <ImageWrapper>
          <img src={document.image.url} alt="painting"/>
        </ImageWrapper>

        <RichText render={document.size} />
        <RichText render={document.date} />
        <RichText render={document.price} />
      </PageWrapper>
    </Layout>
  )
}

export default Page
