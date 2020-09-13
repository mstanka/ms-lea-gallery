import React from "react"
import { Link } from "gatsby"
import { HeaderWrapper, Branding, NavLinks, NavLink } from "./Header.styles"
import { useNavigationQuery } from "../../hooks/useNavigationQuery"
import ThemeChanger from "../ThemeChanger/ThemeChanger"

const Header = () => {
  const { branding, navigation_links } = useNavigationQuery()

  return (
    <HeaderWrapper>
      <Branding>
        <Link to="/">{branding}</Link>
      </Branding>

      <NavLinks>
        {navigation_links.map(link => {
          return (
            <NavLink key={link.link._meta.uid}>
              <Link to={`/${link.link._meta.uid}`}>{link.label}</Link>
            </NavLink>
          )
        })}
      </NavLinks>
      <ThemeChanger />
    </HeaderWrapper>
  )
}

export default Header
