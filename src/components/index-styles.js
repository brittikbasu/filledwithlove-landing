import styled, { createGlobalStyle } from 'styled-components';
import theme from '../utils/theme';
import { rhythm, scale } from '../utils/typography';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${theme.colors.text};
    padding: ${rhythm(2)};
    font-weight: 100;

    max-width: 700px;
    margin: 0 auto;
  }

  h1, h2 {
    color: ${theme.colors.primary};
  }

  @media (max-width: 555px) {
    body {
        overflow-x: hidden;
      }
  }
`

export const StyledIndex = styled.div`
  .logo {
    margin-bottom: 30px;
  }
  h1 {
    margin-bottom: 0px;
  }
  .subheading {
    ${scale(0.8)}
    line-height: 1.1;
  }
  .hero-image {
    width: 400px;
    margin-bottom: ${rhythm(2)};
    img {
      width: 100%;
      height: auto;
    }
  }
  .summary {
    ${scale(0.6)}
    color: ${theme.colors.primary};
  }

  @media (max-width: 555px) {
    .hero-image {
      margin-left: 30%;
    }
  }
`;