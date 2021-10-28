import React from 'react';
import Home from './Containers/Home';
import { ThemeProvider } from '@mui/material/styles';

import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#00000',
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
