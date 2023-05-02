// ** Next imports
import { Roboto } from 'next/font/google';

// ** Material imports
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  templateName: 'Vacina Online' /* App Name */,
  mode: 'light',
  palette: {
    primary: {
      main: '#ff7676',
      light: '#ffb3b3',
      dark: '#f86e6e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffb3b3',
      light: '#fcb0b0',
      dark: '#ff9191',
      contrastText: '#000',
    },
    background:{
      paper: '#fff',
      default: '#fff',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    error: {
      main: red.A400,
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
      fontSize: 14
    },
    responsiveFontSizes: true,
  }
});

export default theme;