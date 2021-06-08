import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  #general {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #F0F0F5;
  }
  #container{
    width: 100%;
    height: 100%;
  }
`;