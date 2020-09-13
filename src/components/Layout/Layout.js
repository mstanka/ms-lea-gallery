import React from "react"
import PropTypes from "prop-types"
import "../../styles/global.scss"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { MainWrapper } from "./Layout.styles"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
