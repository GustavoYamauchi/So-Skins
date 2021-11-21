import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@mui/material/styles'

import { App } from './App';
import { theme } from './theme';
import { CssBaseline } from '@mui/material';

const rootElement = document.getElementById('root');
render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  rootElement
);
