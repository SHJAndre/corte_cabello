import { createMuiTheme } from "@material-ui/core/styles";
import { blue, pink } from "@material-ui/core/colors";
import { deepOrange } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ad1457',
          },
          secondary: {
            main: '#283593',
          },
      },
      
  typography: {
    fontFamily: [
      'Roboto Slab',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'Raleway',
    ].join(','),
    h4: {
        fontWeight: 800,
      },
    h6: {
        fontWeight: 900,  
      },
      body1: {
        fontWeight: 500,
      },
      button: {
        fontWeight: 900,
        fontSize: "large",
        fontStyle: "normal",
        fontColor: "white",
      },
  },
});

export default theme;