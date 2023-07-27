// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#777723', // Replace this with your desired primary color
    },
    secondary: {
      main: '#3f51b5', // Replace this with your desired secondary color
    },
    background: {
        default: '#000000', // Replace this with your desired background color
      },
  },
  typography: {
    // Customize typography if needed
  },
  // Add other customizations like spacing, breakpoints, etc.
});

export default theme;
