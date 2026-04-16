import { createGlobalStyle } from 'styled-components'

export const colors = {
  coral: '#E66767',
  lightBg: '#FFF8F2',
  pageBg: '#FFFAF6',
  footerBg: '#FFEBD9',
  paleText: '#FFEBD9',
  white: '#FFFFFF',
  darkOverlay: 'rgba(0, 0, 0, 0.73)',
  text: '#E66767'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: ${colors.pageBg};
  }

  body, input, button, textarea {
    font-family: Arial, Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
  }

  button {
    border: none;
    cursor: pointer;
  }

  .container {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }
`