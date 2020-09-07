import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "../styles/global.scss"
import { StaticQuery, graphql, Link } from "gatsby"
import ThemeChanger from "./themeChanger"

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
  background: var(--featured-bg);

  @media screen and (min-width: 768px) {
    max-width: 730px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1000px;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--header-bg);
  min-height: 100px;
  padding: 0 1rem;
  box-sizing: border-box;
  max-width: 400px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 730px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1000px;
  }
`
const Branding = styled.div`
  margin-right: auto;

  a {
    color: var(--secondary-text-color);
    font-weight: bold;
    font-size: 1.5rem;
    text-decoration: none;
  }
`

const NavLinks = styled.div`
  display: flex;
`

const NavLink = styled.div`
  a {
    color: var(--primary-text-color);
    padding-bottom: 0.5rem;
    margin: 0 1rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;

    &:hover {
      color: var(--secondary-text-color);
      border-bottom: 6px solid var(--secondary-text-color);
    }
  }
`

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
        <ThemeChanger />
      </Header>
      <MainWrapper>{children}</MainWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
