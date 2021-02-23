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
        'Pacifico', 'cursive',
    ],
    h4: {
        fontWeight: 800,
      },
    h6: {
        fontWeight: 900,
        fontFamily:'Monda',  
      },
    h2: {
        fontWeight: 900,
        fontFamily:'Monda'},
    body1: {
        fontWeight: 500,
     },
      button: {
        fontWeight: 900,
        fontSize: "large",
        fontStyle: "normal",
        fontColor: "white",
        fontFamily:'Monda',  
      },
  },
});

export default theme;