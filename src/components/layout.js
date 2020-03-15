/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)



  return (
    <div style={{overflowX:'hidden'}}>
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <nav>
            <ul>
              <li>
                <a href='#home'>
                  Home
                </a>
              </li>
              <li>
                <a href='#about'>
                  About Me
                </a>
              </li>
              <li>
                <a href='#projects'>
                  Projects
                </a>              
              </li>
              <li>
                <a href='#contact'>
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()} Milos Mladenovic
          </footer>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
