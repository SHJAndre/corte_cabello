import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { EstilosComponentes } from "./Utils/EstilosMaterialUI";
import "./App.css";
import {
  Modal,
  Slider,
  TextField,
  InputAdornment,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";

import {
  OpacidadColores,
  ColorPiel,
  OpacidadRango,
  imgOcupacionMujer,
  LengthCabello,
} from "./Utils/Arreglos";

import {
  Wrapper,
  EntradaDifusa,
  EntradaInferencial,
  Entrada,
} from "./Components/StyledComponents";
import Tamanio from "./Utils/ModuloDifusos";
import Cabello from "./Utils/ModuloInferencial";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Utils/temaConfig";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";

function valuetext(value) {
  return `${value}°C`;
}

const App = () => {
  const [mujer, setMujer] = useState(true);
  const [OpacidadCabello, setOpacidadCabello] = useState(0);
  const [Piel, setPiel] = useState(0);
  const [FormaCara, setFormaCara] = useState("Ovalado");
  const [Personalidad, setPersonalidad] = useState("Introvertido");
  const [NivelOcupacion, setNivelOcupacion] = useState();
  const [Moda, setModa] = useState("Clasico");
  const [OutCorte, setOutCorte] = useState("");
  const Estilos = EstilosComponentes();
  const [modal, setModal] = useState(false);
  const abrirCerrar = () => {
    setModal(!modal);
  };
  const body = (
    <div className={Estilos.modal}>
      <div align="center">
        <h2> Resultado </h2>
      </div>
      <div align="center">
        <img alt={OutCorte} src={OutCorte} width="450" height="550"></img>
      </div>
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
  const HandlePersonalidad = (event) => {
    setPersonalidad(event.target.alt);
  };
  const HandleOcupacion = (event) => {
    setNivelOcupacion(event.target.alt);
  };
  const HandleModa = (event) => {
    setModa(event.target.alt);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar change={Sexo =>setMujer(Sexo)} />
      <Modal open={modal} onClose={abrirCerrar}>
        {body}
      </Modal>
      <Wrapper>
        
          <Typography variant="h4">Ingrese sus datos personales</Typography>
          <Entrada>
            <Typography variant="h4">¿Cuál es la opacidad de su cabello?</Typography>
            <div style={{ background: OpacidadColores[OpacidadCabello] }}>
              Muestra
            </div>
          </Entrada>
          <Slider
            className={Estilos.SlideHair}
            onChange={OpacidadCabelloCambiada}
            getAriaValueText={valuetext}
            defaultValue={0}
            min={0}
            max={10}
            marks={OpacidadRango}
          />

          <Entrada>
            <Typography variant="h4">Elija su tono de piel</Typography>
            <div style={{ background: ColorPiel[Piel] }}>Muestra</div>
          </Entrada>
          <Slider
            className={Estilos.SlideSkin}
            onChange={ColorPielCambiada}
            getAriaValueText={valuetext}
            defaultValue={0}
            min={0}
            max={10}
            marks={OpacidadRango}
          />

          <Typography variant="h4">
            Seleccione su tipo de rostro: {FormaCara}
          </Typography>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justify="center"
            direction="row"
          >
            <Grid item xs={3}>
              <figure>
                <img
                  onClick={HandleTipoRostro}
                  alt="Ovalado"
                  src="https://www.hogarmania.com/archivos/201404/formas-rostro-ovalado-XxXx80.jpg"
                  width="200"
                  height="250"
                />
                <figcaption>Ovalado</figcaption>
              </figure>
            </Grid>
            <Grid item xs={3}>
              <figure>
                <img
                  onClick={HandleTipoRostro}
                  alt="Cuadrado"
                  src="https://www.hogarmania.com/archivos/201404/formas-rostro-cuadrado-XxXx80.jpg"
                  width="200"
                  height="250"
                />
                <figcaption>Cuadrado</figcaption>
              </figure>
            </Grid>
            <Grid item xs={3}>
              <figure>
                <img
                  onClick={HandleTipoRostro}
                  alt="Redondo"
                  src="https://www.hogarmania.com/archivos/201404/formas-rostro-redondo-XxXx80.jpg"
                  width="200"
                  height="250"
                />
                <figcaption>Redondo</figcaption>
              </figure>
            </Grid>
            <Grid item xs={3}>
              <figure>
                <img
                  onClick={HandleTipoRostro}
                  alt="Corazon"
                  src="https://www.hogarmania.com/archivos/201404/formas-rostro-corazon-XxXx80.jpg"
                  width="200"
                  height="250"
                />
                <figcaption>Corazon</figcaption>
              </figure>
            </Grid>
          </Grid>

          <Typography variant="h4">
            Seleccione la moda que va con usted: {Moda}
          </Typography>
          <Grid
            container
            alignItems="center"
            justify="center"
            spacing={0}
            direction="row"
          >
            <Grid item xs={4}>
              <figure>
                <img
                  onClick={HandleModa}
                  alt="Clasico"
                  src="https://cr.emedemujer.com/wp-content/uploads/sites/7/2015/11/Beautiful-girl-at-the-image-of-Audrey-Hepburn-000075729923_Medium.jpg"
                  width="350"
                  height="250"
                />
                <figcaption>Clasico</figcaption>
              </figure>
            </Grid>
            <Grid item xs={4} style={{ alignItems: "center" }}>
              <figure>
                <img
                  onClick={HandleModa}
                  alt="Hipster"
                  src="https://muy-trendy.com/wp-content/uploads/2019/08/look-urbano-mujer-Hipster.jpg"
                  width="350"
                  height="250"
                ></img>
                <figcaption>Hipster</figcaption>
              </figure>
            </Grid>
            <Grid item>
              <figure>
                <img
                  onClick={HandleModa}
                  alt="Urbano"
                  src="https://www.esdesignbarcelona.com/sites/default/files/estilos-de-moda-urbana-y-sus-caracteristicas-2.jpg"
                  width="350"
                  height="250"
                ></img>
                <figcaption>Urbano</figcaption>
              </figure>
            </Grid>
          </Grid>
          <Typography variant="h4">
            Seleccione su personalidad: {Personalidad}
          </Typography>
          <Grid
            container
            alignItems="center"
            justify="center"
            spacing={0}
            direction="row"
          >
            <Grid item xs={5}>
              <figure>
                <img
                  onClick={HandlePersonalidad}
                  alt="Introvertida"
                  align="center"
                  src="https://www.psico.mx/site/article/58060/47901/shutterstock-1682028859_ai1.jpg"
                  width="450"
                  height="300"
                />
                <figcaption>Introvertida</figcaption>
              </figure>
            </Grid>
            <Grid item xs={5}>
              <figure>
                <img
                  onClick={HandlePersonalidad}
                  alt="Extrovertida"
                  src="https://image.freepik.com/vector-gratis/extrovertido-concepto-extraversion-e-introversion-joven-mujer-feliz-centro-atencion-hablando_100478-392.jpg"
                  width="450"
                  height="300"
                />
                <figcaption>Extrovertida</figcaption>
              </figure>
            </Grid>
          </Grid>

          <Typography variant="h4">
            Del 1 al 10 ¿Qué tan ocupad@ estás?: {NivelOcupacion}
          </Typography>
          <Grid
            container
            alignItems="center"
            justify="center"
            spacing={0}
            direction="row"
          >
            <Grid item xs={5}>
              <figure>
                <img
                  onClick={HandleOcupacion}
                  alt="Libre"
                  align="center"
                  src={imgOcupacionMujer[1]}
                  width="450"
                  height="300"
                />
                <figcaption>Libre</figcaption>
              </figure>
            </Grid>
            <Grid item xs={5}>
              <figure>
                <img
                  onClick={HandleOcupacion}
                  alt="Ocupada"
                  src={imgOcupacionMujer[0]}
                  width="450"
                  height="300"
                />
                <figcaption>Ocupada</figcaption>
              </figure>
            </Grid>
          </Grid>
      </Wrapper>
      <div>
        <Button
          onClick={{}}
          style={{ maxHeight: "70px", minHeight: "70px" }}
          color="secondary"
          variant="contained"
          fullWidth
        >
          Calcular Corte
        </Button>
      </div>
    </ThemeProvider>
  );
}
export default App;
