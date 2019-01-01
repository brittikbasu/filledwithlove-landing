import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Spring, config } from 'react-spring';

import hero from '../assets/hero.png';
import Logo from '../components/Logo';
import { GlobalStyle, StyledIndex } from '../components/index-styles';


class Index extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const siteDescription = data.site.siteMetadata.description;

    return (
      <StyledIndex>
        <GlobalStyle />
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <div>
          <div className="logo">
            <Logo />
          </div>

          <h1>Filled with Love</h1>
          <div className="subheading"><p>A design agency<br /> for startups</p></div>

          <div style={{ textAlign: 'right', textAlign: '-webkit-right' }}>
            <div className="hero-image">
              <img src={hero} alt="A bunch of cool people working in filled with love design agency." />
            </div>
          </div>

          <div className="summary"><p>
            <span>We make epic brands, build </span><br />
            <span>beautiful apps and create </span><br />
            <span>awesome websites.</span></p></div>
        </div>
      </StyledIndex>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query {
          site {
        siteMetadata {
          title
        description
        }
      }
    }
  `;
