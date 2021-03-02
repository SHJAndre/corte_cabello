import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles, Grid, Switch } from "@material-ui/core";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);
const useStyle = makeStyles((theme) => ({
  offset: {
    ...theme.mixins.toolbar, // min-height: 56px;
    //marginBottom: "1rem", // margen opcional
  },
}));
var Mujer = false
const Navbar = () => {
  const classes = useStyle();
  const [checkedSexo, setChekedSexo] = useState(false);
  const handleSexo = (event, newValue) => {
    setChekedSexo(newValue);
    Mujer = checkedSexo;
  };
  return (
    <React.Fragment>
      <AppBar position="fixed" color={checkedSexo?"primary":"secondary"} >
        <Toolbar style={{display: 'flex',justifyContent: "space-between"}}>
          <Typography variant="h6">
            {" "}
            Recomendación de corte de cabello
          </Typography>
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Varones</Grid>
              <Grid item>
                <AntSwitch
                  checked={checkedSexo}
                  
                  onChange={handleSexo}
                  name="Sexo"
                />
              </Grid>
              <Grid item>Mujeres</Grid>
            </Grid>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </React.Fragment>
  );
};

export {Navbar, Mujer}