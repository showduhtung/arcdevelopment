import React from 'react';
import Header from '../components/ui/Header';
import { ThemeProvider } from '@material-ui/core';

import theme from './ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello!
    </ThemeProvider>
  );
}

export default App;
