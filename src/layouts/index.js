import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './base.css'
import './style.css'
import Chip from '../components/chip';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <nav>
      <Chip
        backgroundImage={require("../assets/home-icon.png")}
        link="/"
      />
      <Chip
        backgroundImage="https://images.ctfassets.net/fiz3jwws2um7/3E4c5t4YY08ga8WO0uOou/e767a6fb295e7c7fdc940bc839ccfbb8/tile-goose__1_.jpg?fit=crop&h=900&w=900"
        link="/page-2"
      />
      <Chip
        backgroundImage="https://images.ctfassets.net/fiz3jwws2um7/4TrcmYy3ZeAWMGGYieeQa8/54c17978cc1768b4af2aabf1160f6680/Google_Tile.jpg?fit=crop&h=900&w=900"
        link="/page-3"
      />
      <Chip
        backgroundImage="https://images.ctfassets.net/fiz3jwws2um7/1yFrlud0BCGMWke2IsieUw/72fa4a39d94f38c3f41a61cb95528638/Work_Thumbnails_Gucci__1_.jpg?fit=crop&h=900&w=900"
        link="/page-4"
      />
      <Chip
        backgroundImage="https://images.ctfassets.net/fiz3jwws2um7/6oFlKZVIfmC226K2Em0s8g/b02a75d31c1ac813902bd742e929e864/HULU__1___1__2__1_.jpg?fit=crop&h=900&w=900"
        link="/page-5"
      />
    </nav>

    <div className="pageContainer">
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
