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
  // ** Layout Configs
  templateName: 'Vacina Online' /* App Name */,
  mode: 'light',
  contentWidth: 'boxed' /* full | boxed */,
  palette: {
    primary: {
      main: '#ff7676',
      light: '#ffb3b3',
      dark: '#f86e6e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffb3b3',
      light: '#fbdfd9',
      dark: '#ff9191',
      contrastText: '#000',
    },
    background:{
      paper: '#fff',
      default: '#fff',
    },
    error: {
      main: red.A400,
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#D5D5D5',
      A200: '#AAAAAA',
      A400: '#616161',
      A700: '#303030'
    },
    text: {
      primary: `rgba(58, 53, 65, 0.87)`,
      secondary: `rgba(58, 53, 65, 0.68)`,
      disabled: `rgba(58, 53, 65, 0.38)`
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
      fontSize: 14
    },
    breakpoints:{
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
      }
    },
    spacing: factor => `${0.25 * factor}rem`,
    action: {
      active: `rgba(58, 53, 65, 0.54)`,
      hover: `rgba(58, 53, 65, 0.04)`,
      selected: `rgba(58, 53, 65, 0.08)`,
      disabled: `rgba(58, 53, 65, 0.3)`,
      disabledBackground: `rgba(58, 53, 65, 0.18)`,
      focus: `rgba(58, 53, 65, 0.12)`
    },
    // ** Navigation (Menu) Configs
    menuTextTruncate: true /* true | false */,
    navigationSize: 260 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,
    // ** Accessibility Configs
    contrastThreshold: 3,
    tonalOffset: 0.2,
    // ** Other Configs
    disableRipple: false,
    responsiveFontSizes: true,
  }
});

export default theme;