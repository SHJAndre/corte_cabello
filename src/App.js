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

const App = () => {
  const Estilos = EstilosComponentes();
  const [mujer, setMujer] = useState(true);
  const [OpacidadCabello, setOpacidadCabello] = useState(0);
  const [Piel, setPiel] = useState(0);
  const [FormaCara, setFormaCara] = useState("Ovalado");
  const [Personalidad, setPersonalidad] = useState("Introvertido");
  const [NivelOcupacion, setNivelOcupacion] = useState();
  const [Moda, setModa] = useState("Clasico");
  const [OutCorte, setOutCorte] = useState("");
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
  const HandleCorte=()=>{
    setOutCorte();
  }

  return (
    <ThemeProvider theme={theme} >
      <Navbar change={(Sexo) => setMujer(Sexo)} />
      <Modal open={modal} onClose={abrirCerrar}>
        {body}
      </Modal>
      <Wrapper style={{backgroundImage:'url("https://previews.123rf.com/images/stepv/stepv1904/stepv190400006/122103258-womens-hair-salon-seamless-pattern-decorative-wallpaper-for-printing-design-background-vector-illust.jpg")'}}>
        <Typography variant="h1">Ingrese sus datos personales</Typography>
        <Entrada>
          <Typography variant="h1">
            ¿Cuál es la opacidad de su cabello?
          </Typography>
          <div style={{ background: OpacidadColores[OpacidadCabello] }}>
            Muestra
          </div>
        </Entrada>
        <Slider
          className={Estilos.SlideHair}
          onChange={OpacidadCabelloCambiada}
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
        >
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justify="center"
          >
            <Grid item xs={3}>
              <figure>
                <img
                  onClick={HandleTipoRostro}
                  alt="Ovalado"
                  src="https://i.ibb.co/qrMzxHx/formas-rostro-ovalado-Xx-Xx80.jpg"
                  style={{ maxWidth: 100 + "%" }}
                />
                <figcaption>Ovalado</figcaption>
              </figure>
            </Grid>
            <Grid item xs={3}>
              <figure>
                <img
                  onClick={HandleTipoRostro}
                  alt="Cuadrado"
                  src="https://i.ibb.co/txQVNbd/formas-rostro-cuadrado-Xx-Xx80.jpg"
                  style={{ maxWidth: 100 + "%" }}
                />
                <figcaption>Cuadrado</figcaption>
              </figure>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justify="center"
          >
            <Grid item xs={3}>
              <figure>
                <img
                  onClick={HandleTipoRostro}
                  alt="Redondo"
                  src="https://i.ibb.co/8bjWjz9/formas-rostro-redondo-Xx-Xx80.jpg"
                  style={{ maxWidth: 100 + "%" }}
                />
                <figcaption>Redondo</figcaption>
              </figure>
            </Grid>
            <Grid item xs={3}>
              <figure>
                <img
                  onClick={HandleTipoRostro}
                  alt="Corazon"
                  src="https://i.ibb.co/JrrQWfq/formas-rostro-corazon-Xx-Xx80.jpg"
                  style={{ maxWidth: 100 + "%" }}
                />
                <figcaption>Corazon</figcaption>
              </figure>
            </Grid>
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
                src="https://i.ibb.co/6sbT5Pv/Beautiful-girl-at-the-image-of-Audrey-Hepburn-000075729923-Medium.jpg"
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
                src="https://i.ibb.co/8PC3LQx/look-urbano-mujer-Hipster.jpg"
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
                src="https://i.ibb.co/VLr65Pq/Fitness-sporty-girl-wearing-fashion-sportswear-over-street-wall-outdoor-sports-urban-style-Teen-mode.jpg"
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
                src="https://i.ibb.co/DVfSwT7/shutterstock-1682028859-ai1.jpg"
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
                src="https://i.ibb.co/hR1dzLP/extrovertido-concepto-extraversion-e-introversion-joven-mujer-feliz-centro-atencion-hablando-100478.jpg"
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
          onClick={{HandleCorte}}
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
};
export default App;
