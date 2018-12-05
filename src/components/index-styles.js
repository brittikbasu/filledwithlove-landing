import styled, { createGlobalStyle } from 'styled-components';
import theme from '../utils/theme';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${theme.colors.primary};
    background: ${theme.colors.secondary};
    font-family: Arial, Helvetica, sans-serif;
  }
`

export const StyledIndex = styled.div`
  .girlheart img{
    position: fixed;
    margin: 0;
    width: 100%;
  }

  .logo {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-right: 20px;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      span {
        font-weight: 800;
        font-size: 1.8rem;
        line-height: 2rem;
      }
    }
  }


  @media (min-width: 555px) {
    .girlheart img{
      height: 70vh;
      visibility: hidden;
    }
  }
`;