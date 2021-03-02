import { makeStyles } from "@material-ui/core/styles";
export const EstilosComponentes = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(3),
        width: "25ch",
        display: "flex",
        justifyContent: "flex-start",
        maxWidth: 400,
        borderRadius: 50,
      },
    },
    modal: {
      paddingTop: "1vh",
      paddingBottom: "1vh",
      paddingRight: "1vh",
      paddingLeft: "1vh",
      position: "absolute",
      display:'flex',
      flexDirection: 'column',
      alignItems: 'center',
      top: "50%",
      left: "50%",
      height: '65%',
      transform: "translate(-50%,-50%)",
      backgroundColor: "white",
      borderRadius: 20,
      //borderStyle: "2px solid #F39C12"
    },
    DeslizadorEdad: {
      borderRadius: 5,
      maxWidth: 350,
    },
    SlideHair: {
      background: "linear-gradient(90deg, #FFFF99 0%, #331A00 70%)",
      borderRadius: 5,
      maxWidth: 80+'%',
      color: "#fff",
    },
    SlideSkin: {
      background: "linear-gradient(90deg, #faf7f5 0%, #754719 70%)",
      borderRadius: 5,
      maxWidth: 80+'%',
      color: "#fff",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));