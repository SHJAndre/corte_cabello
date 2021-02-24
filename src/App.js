import React,{useState} from 'react'
import NumberFormat from 'react-number-format';
import logo from './logo.svg';
import './App.css';
import {Modal,Slider,TextField,InputAdornment,Typography,Grid} from '@material-ui/core';
import styled from 'styled-components/macro'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import {marks,Tamanios, edades,LengthCabello} from './Arreglos'
import Tamanio from './ModuloDifusos'
import Cabello from './ModuloInferencial'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './temaConfig'
import Navbar from './Navbar';
import Footer from './footer';

const EstilosComponentes = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '25ch',
      display: 'flex',
      justifyContent: 'flex-start',
      maxWidth: 400,
      borderRadius: 50,
    },
  },
  modal:
  {
    paddingTop: "1vh",
    paddingBottom: "2vh",
    paddingRight : "2vh",
    paddingLeft : "2vh",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    minWidth:500,
    maxWidth: 500,
    backgroundColor:"white",
    borderRadius: 20,
    minHeight: 680,
    maxHeight: 680,
    //borderStyle: "2px solid #F39C12"
  },
  DeslizadorEdad: {
    borderRadius: 5,
    maxWidth: 350
  },
  DeslizadorTemp: {
      background: 'linear-gradient(90deg, #99ebff 20%, #ffcc00 90%)',
      borderRadius: 5,
      maxWidth: 350,
  },
  paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
  },
}));

function valuetext(value) {
  return `${value}°C`;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  row-gap: 1vh;
`

const EntradaDifusa = styled.div`
  padding-top:3vh;
  display: flex;
  background-color: #FFFFFF;
  min-height: 25vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom:5vh;
`
const EntradaInferencial = styled.div`
  padding-top:3vh;
  display: flex;
  background-color: #FFFFFF;
  min-height: 25vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const IMC = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

function App() {
  const[Talla,setTalla]=useState(0);
  const[Peso, setPeso]=useState(0);
  const[Temperatura,setTemperatura]=useState(0);
  const[Edad, setEdad]=useState(0);
  const[FormaCara, setFormaCara]=useState('Ovalado');
  const[Personalidad, setPersonalidad]=useState('Introvertido');
  const[Moda,setModa]=useState('Clasico');
  const[OutCorte, setOutCorte]=useState('');
  const Estilos = EstilosComponentes();
  const[modal, setModal] = useState(false);
  const abrirCerrar =()=>
  {
    setModal(!modal);
  }
  const body=(
    <div className={Estilos.modal}>
      <div align="center">
        <h2> Resultado </h2>
      </div>
      <div align="center">
      <img alt={OutCorte} src={OutCorte} width="450" height="550"></img>
      </div>
      <div align="right">
      <Button color="secondary" style={{marginTop:"8px"}} variant="contained" size= "large" onClick={()=>abrirCerrar()}>  OK  </Button>
      </div>
    </div>
  )
  const TallaCambiada = (event) => {
    setTalla(Number(event.target.value));
  }
  const PesoCambiado = (event)=>{
    setPeso(Number(event.target.value));
  }

  const EdadCambiada = (event, newValue) => {
    setEdad(newValue);
  }
  const TemperaturaCambiada = (event, newValue) => {
    setTemperatura(newValue);
  };
  const HandleTipoRostro =(event)=>{
    setFormaCara(event.target.alt);
  }
  const HandlePersonalidad =(event)=>{
    setPersonalidad(event.target.alt);
  }
  const HandleModa=(event)=>{
    setModa(event.target.alt);
  }
  const HandleCorte=()=>{
    const Aux = Cabello(Tamanio(Edad,Temperatura,(Peso/Math.pow(Talla,2))),FormaCara,Personalidad,Moda);
    setOutCorte(Aux);
    abrirCerrar();
  }
  return(
    <ThemeProvider theme={theme}>
    <Navbar/>
    <Modal open = {modal}
          onClose={abrirCerrar}>
          {body}
        </Modal>
    <Wrapper>
      <EntradaDifusa className={Estilos.root}>
        <Typography variant="h4" >Ingrese sus datos personales</Typography>
        <IMC>
        <TextField
          label="Talla"
          id="Talla"
          onChange={TallaCambiada}
          InputProps={{
            endAdornment: <InputAdornment position="end">Mts</InputAdornment>,
          }}
          variant="outlined"
        />
        <TextField
          label="Peso"
          id="Talla"
          onChange={PesoCambiado}
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
          variant="outlined"
        />
        </IMC>
        <TextField
            required
            id="Edad"
            label="Edad"
            defaultValue="0"
            variant="outlined"
            InputProps={{
              endAdornment: <InputAdornment position="end">Años</InputAdornment>,
            }}
            value = {Edad}
          />
        <Slider className = {Estilos.DeslizadorEdad}
              onChange={EdadCambiada}
              getAriaValueText={valuetext}    
              defaultValue ={0}
              min={15}
              max={70}                                                
              marks={edades}                                                   
          />

        <TextField
            required
            id="Temperatura"
            label="Temperatura Ambiente"
            defaultValue="0"
            variant="outlined"
            InputProps={{
              endAdornment: <InputAdornment position="end">°C</InputAdornment>,
            }}
            value = {Temperatura}
          />
          <Slider className={Estilos.DeslizadorTemp}
              onChange={TemperaturaCambiada}
              getAriaValueText={valuetext}    
              defaultValue ={0}
              min={0}
              max={35}                                                
              marks={marks}                                                   
          />
          <Typography>{Tamanio(Edad,Temperatura,(Peso/Math.pow(Talla,2)))}</Typography>

      </EntradaDifusa>
      <EntradaInferencial className={Estilos.root}>
      <Typography variant='h4'>Seleccione su tipo de rostro: {FormaCara}</Typography>
        <Grid container spacing={2} alignItems="center"
        justify="center" direction="row">
            <Grid item xs={3}>
              <figure >
              <img onClick={HandleTipoRostro} alt='Ovalado' src='https://www.hogarmania.com/archivos/201404/formas-rostro-ovalado-XxXx80.jpg' width="200" height="250"/>
              <figcaption>Ovalado</figcaption>
              </figure></Grid>
            <Grid item xs={3}>
            <figure >
              <img onClick={HandleTipoRostro} alt='Cuadrado' src='https://www.hogarmania.com/archivos/201404/formas-rostro-cuadrado-XxXx80.jpg' width="200" height="250"/>
              <figcaption>Cuadrado</figcaption>
              </figure></Grid>
            <Grid item xs={3}>
            <figure >
              <img onClick={HandleTipoRostro} alt='Redondo' src='https://www.hogarmania.com/archivos/201404/formas-rostro-redondo-XxXx80.jpg' width="200" height="250"/>
              <figcaption>Redondo</figcaption>
              </figure></Grid>
            <Grid item xs={3}>
            <figure >
              <img onClick={HandleTipoRostro} alt='Corazon' src='https://www.hogarmania.com/archivos/201404/formas-rostro-corazon-XxXx80.jpg' width="200" height="250"/>
              <figcaption>Corazon</figcaption>
              </figure></Grid>
        </Grid>
        <Typography variant='h4'>Seleccione su personalidad: {Personalidad}</Typography>
        <Grid container alignItems="center"
        justify="center" spacing={0}
        direction="row">
            <Grid item xs={5}>
              <figure >
              <img onClick={HandlePersonalidad} alt='Introvertida' align="center" src='https://www.psico.mx/site/article/58060/47901/shutterstock-1682028859_ai1.jpg'  width="450" height="300"/>
              <figcaption>Introvertida</figcaption>
              </figure></Grid>
            <Grid item xs={5}>
            <figure >
              <img onClick={HandlePersonalidad} alt='Extrovertida' src='https://image.freepik.com/vector-gratis/extrovertido-concepto-extraversion-e-introversion-joven-mujer-feliz-centro-atencion-hablando_100478-392.jpg' width="450" height="300"/>
              <figcaption>Extrovertida</figcaption>
              </figure></Grid>
        </Grid>
        <Typography variant='h4'>Seleccione la moda que va con usted: {Moda}</Typography>
        <Grid container alignItems="center"
        justify="center" spacing={0}
        direction="row">
            <Grid item xs={4}>
              <figure>
                <img onClick={HandleModa} alt='Clasico' src='https://cr.emedemujer.com/wp-content/uploads/sites/7/2015/11/Beautiful-girl-at-the-image-of-Audrey-Hepburn-000075729923_Medium.jpg' width="350" height="250"/>
                <figcaption>Clasico</figcaption>
              </figure>
            </Grid>
            <Grid item xs={4} style={{alignItems: "center"}}>
              <figure>
                <img onClick={HandleModa} alt='Hipster' src='https://muy-trendy.com/wp-content/uploads/2019/08/look-urbano-mujer-Hipster.jpg' width="350" height="250"></img>
                <figcaption>Hipster</figcaption> 
              </figure>
            </Grid>
            <Grid item>
              <figure>
                <img onClick={HandleModa} alt = 'Urbano' src='https://www.esdesignbarcelona.com/sites/default/files/estilos-de-moda-urbana-y-sus-caracteristicas-2.jpg' width="350" height="250"></img>
                <figcaption>Urbano</figcaption>
              </figure>
            </Grid>
        </Grid>
      </EntradaInferencial>
      </Wrapper>
      <div>
        <Button onClick={HandleCorte} style={{maxHeight: '70px', minHeight: '70px'}} color="secondary" variant="contained" fullWidth>
        Calcular Corte
        </Button>
      </div>  
    </ThemeProvider>
  );
}
export default App;
