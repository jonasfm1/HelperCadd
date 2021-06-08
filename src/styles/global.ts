import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background-color: #F0F0F5;
  }
  *,
  #general {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #container{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  nav {
    padding: 0px 0px 0px 5px;
  }

`;