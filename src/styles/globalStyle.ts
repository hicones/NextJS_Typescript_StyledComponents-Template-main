import { createGlobalStyle } from "styled-components";
import Bg from "../assets/Dashboard.jpg";

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  html,
  body {
    padding: 0;
    margin: 0;
    background-image: url(${Bg.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    scroll-behavior: smooth;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  h1, a {
    font-family: 'Poppins', sans-serif;
  }

  h2 {
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 6px;
    height: 100%;
  }

  *::-webkit-scrollbar-track {
    border-radius: 2px;
    background-color: ${({ theme }) => theme.COLORS.GRAY2};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.BLUE};
    border-radius: 8px;
  }

`;
export default GlobalStyle;
