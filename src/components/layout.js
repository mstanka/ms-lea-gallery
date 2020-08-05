import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "./layout.css"
import { StaticQuery, graphql, Link } from "gatsby"

const navigationQuery = graphql`
  {
    prismic {
      allNavigations {
        edges {
          node {
            branding
            navigation_links {
              label
              link {
                ... on PRISMIC_Page {
                  _meta {
                    uid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
const MainWrapper = styled.main`
  max-width: 400px;
  margin: 0 auto;
  background: #592246;

  @media screen and (min-width: 768px) {
    max-width: 750px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1000px;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  height: 66px;
  padding: 0 16px;
  box-sizing: border-box;
  max-width: 400px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 750px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1000px;
  }
`
const Branding = styled.div`
  a {
    color: violet;
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
  }
`

const NavLinks = styled.div`
  display: flex;
`

const NavLink = styled.div`
  a {
    color: white;
    padding: 0 16px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;

    &:hover {
      color: violet;
    }
  }
`

// Error: Objects are not valid as a React child (found: object with keys {type, text, spans}). If you meant to render a collection of children, use an array instead.

// Don't pass an object as a prop to React.child. Instead, pass it as { ... item} and then access using props.{property} that might fix your problem

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <StaticQuery
          query={`${navigationQuery}`}
          render={data => {
            console.log(data)
            return (
              <>
                <Branding>
                  <Link to="/">
                    {data.prismic.allNavigations.edges[0].node.branding}
                  </Link>
                </Branding>

                <NavLinks>
                  {data.prismic.allNavigations.edges[0].node.navigation_links.map(
                    link => {
                      return (
                        <NavLink key={link.link._meta.uid}>
                          <Link to={`/${link.link._meta.uid}`}>
                            {link.label}
                          </Link>
                        </NavLink>
                      )
                    }
                  )}
                </NavLinks>
              </>
            )
          }}
        />
      </Header>
      <MainWrapper>{children}</MainWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
