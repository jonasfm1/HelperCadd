/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import GlobalStyle from './styles/global';
import Routes from './routes'

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
)

export default App;