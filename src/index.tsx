import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';

import { App } from './App';
import { theme } from './theme';


const rootElement = document.getElementById('root');
render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  rootElement
);
