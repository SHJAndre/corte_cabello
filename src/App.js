import React,{useState} from 'react'
import NumberFormat from 'react-number-format';
import logo from './logo.svg';
import './App.css';
import { Slider,TextField,InputAdornment,Typography,Grid} from '@material-ui/core';
import styled from 'styled-components/macro'
import { makeStyles } from '@material-ui/core/styles';
import {marks,Tamanios, edades,LengthCabello} from './Arreglos'
import Tamanio from './ModuloDifusos'

const EstilosComponentes = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '25ch',
      display: 'flex',
      justifyContent: 'flex-start',
      maxWidth: 400,
      borderRadius: 15
    },
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
  padding-top:1vh;
  display: flex;
  background-color: #e6e6ff;
  min-height: 25vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5%;
`
const EntradaInferencial = styled.div`
  padding-top:1vh;
  display: flex;
  background-color: #bbe6ff;
  min-height: 25vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5%;
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
  const[FormaCara, setFormaCara]=useState('Ovalada');
  const[Personalidad, setPersonalidad]=useState('Introvertido');
  const[Moda,setModa]=useState('Clasico');
  const[OutCorte, setOutCorte]=useState('');
  
  
  const Estilos = EstilosComponentes();


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
    setOutCorte();
  }
  return(
    <Wrapper>
      <EntradaDifusa className={Estilos.root}>
        <Typography variant="h4" >Llene sus datos</Typography>
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
      <EntradaInferencial>

        <Typography variant="h4" >ENTRADA DE DATOS INFERENCIALES</Typography>
        <TextField
          
            required
            id="TipoRostro"
            label="Forma de Rostro"
            variant="outlined"ssssss
            value = {FormaCara}
          />
        <Grid container spacing={2}>
            <Grid item spacing={0}>
              <figure >
              <img onClick={HandleTipoRostro} alt='Ovalado' src='https://www.hogarmania.com/archivos/201404/formas-rostro-ovalado-XxXx80.jpg' style={{maxWidth:40+'vh', maxHeight:40+'vh'}}/>
              <figcaption>Olvalado</figcaption>
              </figure></Grid>
            <Grid item>
            <figure >
              <img onClick={HandleTipoRostro} alt='Cuadrado' src='https://www.hogarmania.com/archivos/201404/formas-rostro-cuadrado-XxXx80.jpg' style={{maxWidth:40+'vh', maxHeight:40+'vh'}}/>
              <figcaption>Cuadrado</figcaption>
              </figure></Grid>
            <Grid item>
            <figure >
              <img onClick={HandleTipoRostro} alt='Redondo' src='https://www.hogarmania.com/archivos/201404/formas-rostro-redondo-XxXx80.jpg' style={{maxWidth:40+'vh', maxHeight:40+'vh'}}/>
              <figcaption>Redondo</figcaption>
              </figure></Grid>
            <Grid item>
            <figure >
              <img onClick={HandleTipoRostro} alt='Corazon' src='https://www.hogarmania.com/archivos/201404/formas-rostro-corazon-XxXx80.jpg' style={{maxWidth:40+'vh', maxHeight:40+'vh'}}/>
              <figcaption>Corazon</figcaption>
              </figure></Grid>
        </Grid>

        <TextField
            required
            id="Personalidad"
            label="Personalidad"
            variant="outlined"
            value = {Personalidad}
          />
        <Grid container spacing={1}>
            
            <Grid item >
              <figure >
              <img onClick={HandlePersonalidad} alt='Introvertida' src='https://www.psico.mx/site/article/58060/47901/shutterstock-1682028859_ai1.jpg' style={{maxWidth:70+'vh'}}/>
              <figcaption>Introvertida</figcaption>
              </figure></Grid>
            <Grid item>
            <figure >
              <img onClick={HandlePersonalidad} alt='Extrovertida' src='https://image.freepik.com/vector-gratis/extrovertido-concepto-extraversion-e-introversion-joven-mujer-feliz-centro-atencion-hablando_100478-392.jpg' style={{maxWidth:70+'vh'}}/>
              <figcaption>Extrovertida</figcaption>
              </figure></Grid>
        </Grid>
        <Typography variant='h3'>Seleccione la moda que va con usted:{Moda}</Typography>
        <Grid container>
            <Grid item>
              <figure>
                <img onClick={HandleModa} alt='Clasico' src='https://cr.emedemujer.com/wp-content/uploads/sites/7/2015/11/Beautiful-girl-at-the-image-of-Audrey-Hepburn-000075729923_Medium.jpg' style={{maxWidth:58+'vh'}}/>
                <figcaption>Clasico</figcaption>
              </figure>
            </Grid>
            <Grid item>
              <figure>
                <img onClick={HandleModa} alt='Hipster' src='https://muy-trendy.com/wp-content/uploads/2019/08/look-urbano-mujer-Hipster.jpg' style={{maxWidth:58+'vh'}}></img>
              </figure>
            </Grid>
            <Grid item>
              <figure>
                <img onClick={HandleModa} alt = 'Urbano' src='https://www.esdesignbarcelona.com/sites/default/files/estilos-de-moda-urbana-y-sus-caracteristicas-2.jpg' style={{maxWidth:58+'vh'}}></img>
              </figure>
            </Grid>
        </Grid>
      </EntradaInferencial>
      <button onClick={HandleCorte}>Calcular Corte</button>
      <img alt='Salida' src={OutCorte}></img>
    </Wrapper>
  );
}
export default App;
