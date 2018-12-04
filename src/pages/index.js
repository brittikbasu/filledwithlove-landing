import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import '../assets/app.css';
import girlheart from '../assets/girlheart.png';
import { Spring, config } from 'react-spring';

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const siteDescription = data.site.siteMetadata.description;

    return (
      <React.Fragment>
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
                <h1>
                  Filled With{' '}
                  <span role="img" aria-label="heart">
                    💜
                  </span>
                </h1>
                <p>A design agency for startups</p>
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
      </React.Fragment>
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
