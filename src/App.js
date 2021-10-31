import React from 'react';
import Home from './Containers/Home';
import Team from './Containers/Team';
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
    <div style={{}}>
      <ThemeProvider theme={theme}>
        <div>
          <Home />
          <Team />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
