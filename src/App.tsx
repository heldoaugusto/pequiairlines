import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import Header from './components/Header';
import Menu from './components/Menu';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AppProvider>
      <Header />
      <Router>
        <Routes />
      </Router>
      <Menu />
    </AppProvider>
  </>
);

export default App;
