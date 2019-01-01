import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Spring, config } from 'react-spring';

import girlheart from '../assets/girlheart.png';
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
          <Spring
            config={config.gentle}
            from={{ opacity: 0, marginTop: '0vh' }}
            to={{ opacity: 1, marginTop: '15vh' }}
          >
            {props => (
              <div className="logo" style={props}>
                <div>
                  <Logo />
                </div>
                <div>
                  <span>Filled</span><span>With</span><span>Love</span>
                </div>
              </div>
            )}
          </Spring>

          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {props => (
              <div className="girlheart" style={props}>
                <img src={girlheart} alt="girl with heart" />
              </div>
            )}
          </Spring>
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
