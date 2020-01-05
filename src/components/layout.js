/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header";
import TabBar from "./tabs";
import "../styling/layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          author
        }
      }
    }
  `)

  return (
    <div style={{height: '100%'}}>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <TabBar />
      <div style={{height: '100%'}}>
        < main style={{height: '100%'}}>{children}</main>
      </div>
      <footer>
        <div className='social-flexer'>
        <span style={{margin: '11px'}}>{new Date().getFullYear()}, Built By {data.site.siteMetadata.author}.</span>
        <a href="https://github.com/cblands" className='social github' />
        <a href="https://linkedin.com/in/cblands/" className='social linkedin' />
        <a href="mailto:conorbutte@gmail.com" className='social webmail' />
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
