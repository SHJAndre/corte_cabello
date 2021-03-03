import { withStyles } from "@material-ui/core/styles";

import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { EstilosComponentes } from "./Utils/EstilosMaterialUI";
import "./App.css";
import CorteRecomendado from "./Utils/ModulosDifusoInferencial";
import {
  Modal,
  Slider,
  TextField,
  InputAdornment,
  Typography,
  Grid,
  Button,
  Switch,
  makeStyles,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import {
  imgAtrevidoVaron,
  imgAtrevidoMujer,
  OpacidadRango,
  imgOcupacionMujer,
  imgOcupacionVaron,
  TiposCabello,
  NivelesOcupacion,
  NivelesAtrevimiento,
  imgEstilosMujer,
  imgEstilosVaron,
} from "./Utils/Arreglos";
import {
  Wrapper,
  EntradaDifusa,
  EntradaInferencial,
  Entrada,
} from "./Components/StyledComponents";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Utils/temaConfig";
import Footer from "./Components/footer";

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

const Navbar = (props) => {
  const classes = useStyle();
  const [checkedSexo, setChekedSexo] = useState(false);
  const handleSexo = (event, newValue) => {
    props.handleSexo();
    setChekedSexo(newValue);
  };
  return (
    <React.Fragment>
      <AppBar position="fixed" color={checkedSexo ? "primary" : "secondary"}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
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

const App = () => {
  const Estilos = EstilosComponentes();
  const [OpacidadCabello, setOpacidadCabello] = useState(0);
  const [Piel, setPiel] = useState(0);
  const [FormaCara, setFormaCara] = useState("gOvalado");
  const [Personalidad, setPersonalidad] = useState(0);
  const [NivelOcupacion, setNivelOcupacion] = useState(0);
  const [Moda, setModa] = useState("gClasico");
  const [OutCorte, setOutCorte] = useState("");
  const [modal, setModal] = useState(false);
  const [tipoCabello, setTipoCabello] = useState(0);
  const [sexo, setSexo] = useState("varon");
  const handleSexo = (value) => {
    setSexo(sexo === "varon" ? "mujer" : "varon");
  };
  const abrirCerrar = () => {
    setModal(!modal);
  };
  const body = (
    <div className={Estilos.modal}>
      <div align="center">
        <h2> Tu corte recomendado es: </h2>
      </div>
      <img
        alt={OutCorte}
        src={OutCorte}
        style={{
          maxWidth: "80%",
          maxHeight: "90%",
          minWidth: "70%",
          minHeight: "70%",
        }}
      ></img>
      <div align="right">
        <Button
          color="secondary"
          style={{ marginTop: "8px" }}
          variant="contained"
          size="large"
          onClick={() => abrirCerrar()}
        >
          {" "}
          OK{" "}
        </Button>
      </div>
    </div>
  );
  const OpacidadCabelloCambiada = (event, newValue) => {
    setOpacidadCabello(newValue);
  };
  const ColorPielCambiada = (event, newValue) => {
    setPiel(newValue);
  };

  const HandleTipoRostro = (event) => {
    setFormaCara(event.target.alt);
  };
  const HandlePersonalidad = (event, newValue) => {
    setPersonalidad(newValue);
  };
  const HandleOcupacion = (event, newValue) => {
    setNivelOcupacion(newValue);
  };
  const HandleModa = (event) => {
    setModa(event.target.alt);
  };
  const HandleCorte = () => {
    const Aux = CorteRecomendado(
      sexo,
      OpacidadCabello,
      Piel,
      FormaCara,
      Moda,
      Personalidad,
      tipoCabello,
      NivelOcupacion
    );
    setOutCorte(Aux);
    abrirCerrar();
  };
  const HandleTipoCabello = (event, newValue) => {
    setTipoCabello(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar handleSexo={handleSexo} />
      <Modal
        open={modal}
        onClose={abrirCerrar}
        style={{ display: "flex", alignItems: "center", width: 100 + "%" }}
      >
        {body}
      </Modal>
      <Wrapper
        style={{
          backgroundImage: sexo==='mujer'?'url("https://i.ibb.co/dbGpzy2/vector-pattern-hairdresser-elements-white-background-vector-pattern-hairdresser-elements-white-backg.jpg")':
            'url("https://i.ibb.co/1rt1v7C/composicion-conjunto-iconos-peluqueria-1416-607a.jpg")',
        }}
      >
        <Typography variant="h3" style={{ backgroundColor: "#fff" }}>
          Ingrese sus datos personales
        </Typography>
        <Entrada
          style={{ visibility: sexo === "mujer" ? "visible" : "collapse" }}
        >
          <Typography variant="h5">
            ¿Cuál es la opacidad de su cabello?
          </Typography>

          <Slider
            className={Estilos.SlideHair}
            onChange={OpacidadCabelloCambiada}
            defaultValue={0}
            min={0}
            max={10}
            marks={OpacidadRango}
          />
        </Entrada>
        <Entrada>
          <Typography variant="h5">Elija su tono de piel</Typography>
          <Slider
            className={Estilos.SlideSkin}
            onChange={ColorPielCambiada}
            defaultValue={0}
            min={0}
            max={10}
            marks={OpacidadRango}
          />
        </Entrada>
        <Entrada>
          <Typography variant="h5">Seleccione su tipo de rostro:</Typography>
          <Grid
            container
            alignItems="center"
            justify="center"
            spacing={0}
            direction="row"
          >
            <Grid item container style={{ width: 25 + "%" }}>
              <figure>
                <img
                  className="imgbutton"
                  onClick={HandleTipoRostro}
                  alt="gOvalado"
                  src="https://i.ibb.co/qrMzxHx/formas-rostro-ovalado-Xx-Xx80.jpg"
                  style={{ width: 100 + "%" }}
                />
                <figcaption>Ovalado</figcaption>
              </figure>
            </Grid>
            <Grid item container style={{ width: 25 + "%" }}>
              <figure>
                <img
                  className="imgbutton"
                  onClick={HandleTipoRostro}
                  alt="gCuadrado"
                  src="https://i.ibb.co/txQVNbd/formas-rostro-cuadrado-Xx-Xx80.jpg"
                  style={{ width: 100 + "%" }}
                />
                <figcaption>Cuadrado</figcaption>
              </figure>
            </Grid>

            <Grid item container style={{ width: 25 + "%" }}>
              <figure>
                <img
                  className="imgbutton"
                  onClick={HandleTipoRostro}
                  alt="gRedondo"
                  src="https://i.ibb.co/8bjWjz9/formas-rostro-redondo-Xx-Xx80.jpg"
                  style={{ width: 100 + "%" }}
                />
                <figcaption>Redondo</figcaption>
              </figure>
            </Grid>
            <Grid item container style={{ width: 25 + "%" }}>
              <figure>
                <img
                  className="imgbutton"
                  onClick={HandleTipoRostro}
                  alt="gCorazon"
                  src="https://i.ibb.co/JrrQWfq/formas-rostro-corazon-Xx-Xx80.jpg"
                  style={{ width: 100 + "%" }}
                />
                <figcaption>Corazon</figcaption>
              </figure>
            </Grid>
          </Grid>
        </Entrada>
        <Entrada>
          <Typography variant="h5">
            Seleccione la moda que va con usted:
          </Typography>
          <Grid
            container
            alignItems="center"
            justify="center"
            spacing={0}
            direction="row"
          >
            <Grid
              item
              container
              alignItems="center"
              style={{ width: 33 + "%" }}
            >
              <figure>
                <img
                  className="imgbutton"
                  onClick={HandleModa}
                  alt="gClasico"
                  src={
                    sexo === "mujer" ? imgEstilosMujer[0] : imgEstilosVaron[0]
                  }
                  width="100%"
                />
                <figcaption>Clasico</figcaption>
              </figure>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              style={{ width: 33 + "%" }}
            >
              <figure>
                <img
                  className="imgbutton"
                  onClick={HandleModa}
                  alt="gHipster"
                  src={
                    sexo === "mujer" ? imgEstilosMujer[1] : imgEstilosVaron[1]
                  }
                  width="100%"
                ></img>
                <figcaption>Hipster</figcaption>
              </figure>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              style={{ width: 33 + "%" }}
            >
              <figure>
                <img
                  className="imgbutton"
                  onClick={HandleModa}
                  alt="gUrbano"
                  src={
                    sexo === "mujer" ? imgEstilosMujer[2] : imgEstilosVaron[2]
                  }
                  width="100%"
                ></img>
                <figcaption>Urbano</figcaption>
              </figure>
            </Grid>
          </Grid>
        </Entrada>
        <Entrada>
          <Typography variant="h5">¿Qué tan atrevido eres?</Typography>
          <Grid
            container
            alignItems="center"
            justify="center"
            spacing={0}
            direction="row"
          >
            <Grid item container style={{ width: 33 + "%" }}>
              <figure>
                <img
                  alt="Introvertida"
                  align="center"
                  src={sexo==='mujer'?imgAtrevidoMujer[0]:imgAtrevidoVaron[0]}
                  width="100%"
                />
                <figcaption>Reservad@</figcaption>
              </figure>
            </Grid>
            <Grid item container style={{ width: 33 + "%" }}>
              <figure>
                <img
                  alt="Extrovertida"
                  src={sexo==='mujer'?imgAtrevidoMujer[1]:imgAtrevidoVaron[1]}
                  width="100%"
                />
                <figcaption>Alocad@</figcaption>
              </figure>
            </Grid>
          </Grid>
          <Slider
            className={Estilos.SliderNormal}
            onChange={HandlePersonalidad}
            defaultValue={0}
            min={0}
            max={3}
            marks={NivelesAtrevimiento}
          />
        </Entrada>
        <Entrada>
          <Typography variant="h5">¿Qué tan ocupad@ estás?:</Typography>
          <Grid
            container
            alignItems="center"
            justify="center"
            spacing={0}
            direction="row"
          >
            <Grid item container style={{ width: 33 + "%" }}>
              <figure>
                <img
                  alt="Libre"
                  src={
                    sexo === "mujer"
                      ? imgOcupacionMujer[1]
                      : imgOcupacionVaron[1]
                  }
                  width="100%"
                />
                <figcaption>Libre</figcaption>
              </figure>
            </Grid>
            <Grid item container style={{ width: 33 + "%" }}>
              <figure>
                <img
                  alt="Ocupada"
                  src={
                    sexo === "mujer"
                      ? imgOcupacionMujer[0]
                      : imgOcupacionVaron[0]
                  }
                  width="100%"
                />
                <figcaption>Ocupada</figcaption>
              </figure>
            </Grid>
          </Grid>
          <Slider
            className={Estilos.SliderNormal}
            onChange={HandleOcupacion}
            defaultValue={0}
            min={0}
            max={5}
            marks={NivelesOcupacion}
          />
        </Entrada>

        <Entrada>
          <Typography variant="h4">¿Qué tan ondulado es su cabello?</Typography>
          <img
            alt="TipoCabelo"
            src="https://i.ibb.co/KVXw6FH/tipo-Cab-1.jpg"
            width="70%"
          />
          <Slider
            className={Estilos.SliderNormal}
            onChange={HandleTipoCabello}
            defaultValue={0}
            min={0}
            max={4}
            marks={TiposCabello}
          />
        </Entrada>
      </Wrapper>
      <div>
        <Button
          onClick={HandleCorte}
          style={{ maxHeight: "70px", minHeight: "70px" }}
          color={sexo==='mujer'?'secondary':'primary'}
          variant="contained"
          fullWidth
        >
          Calcular Corte
        </Button>
      </div>
    </ThemeProvider>
  );
};
export default App;
