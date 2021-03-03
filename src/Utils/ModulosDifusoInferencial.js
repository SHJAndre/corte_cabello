//------------------------------------
// Logica difusa 
//------------------------------------
// Funciones para fuzzificación
// Función de pertenencia triangular
function triangular(x,param)
{
  var a=parseFloat(param[0]);
  var b=parseFloat(param[1]);
  var c=parseFloat(param[2]);
  var m;
  if ((a<=b)&&(b<=c))
    {
      if (typeof x === 'number')
        {
          if(x<=a)
            {
              m=0.0
            }
          else if((a<=x)&&(x<=b))
            {
              m=(x-a)/(b-a);
            }
          else if((b<=x)&&(x<=c))
            {
              m=(c-x)/(c-b)
            }
          else
            {
              m=0.0
            }
          return m;
        }
      else 
        {
          var m=[];
          for(var i=0;i<x.length;i++)
            {
              m.push(0);
            }
          for(var i=0;i<x.length;i++)
            {
              if(x[i]<=a)
                {
                  m[i]=0.0;
                }
              else if((a<=x[i])&&(x[i]<=b))
                {
                  m[i]=(x[i]-a)/(b-a);
                }
              else if((b<=x[i])&&(x[i]<=c))
                {
                  m[i]=(c-x[i])/(c-b);
                }
              else
                {
                  m[i]=0.0;
                }
               }
          return m;
        }
    }
  else
    {
      return -1;      
    }
}
//------------------------------------
// Función de pertenencia trapezoidal
function trapezoidal(x,param)
{
  var a=parseFloat(param[0]);
  var b=parseFloat(param[1]);
  var c=parseFloat(param[2]);
  var d=parseFloat(param[3]);
  var m;
  if ((a<=b)&&(b<=c)&&(c<=d))
    {
      if (typeof x === 'number')
        {
          if(x<=a)
            {
              m=0.0;
            }
          else if((a<=x)&&(x<b))
            {
              m=(x-a)/(b-a);
            }
          else if((b<=x)&&(x<=c))
            {
              m=1.0;
            }
          else if((c<x)&&(x<=d))
            {
              m=(d-x)/(d-c);
            }
          else{
              m=0.0;
            }
          return m;
        }
      else 
        {
          var m=[];
          for(var i=0;i<x.length;i++)
            {
              m.push(0);
            }
          for(var i=0;i<x.length;i++)
            {
              if(x[i]<=a)
              {
                m[i]=0.0;
              }
            else if((a<=x[i])&&(x[i]<b))
              {
                m[i]=(x[i]-a)/(b-a);
              }
            else if((b<=x[i])&&(x[i]<=c))
              {
                m[i]=1.0;
              }
            else if((c<x[i])&&(x[i]<=d))
              {
                m[i]=(d-x[i])/(d-c);
              }
            else{
                m[i]=0.0;
              }
            }
          return m;
        }
    }
  else
    {
      return -1;      
    }
}
//------------------------------------
// Función para cortar funciones
function cortar(value,mf)
{
  value=parseFloat(value);
  var aux=[];
  for(var i=0;i<mf.length;i++)
  {
    aux.push(0);
  }
  if(typeof value === 'number')
    {
      for(var i=0;i<mf.length;i++)
        {
          aux[i]=parseFloat(Math.min(value,mf[i]));
        }
      return aux;
    }
  else
    {
      return -1;
    }
}
//------------------------------------
function union(data)
{
  var aux=[];
  for(var i=0;i<data[0].length;i++)
  {
    aux.push(0.0);
  }
  for(var j=0;j<data.length;j++)
    {
      for(var i=0;i<aux.length;i++)
      {
        aux[i]=Math.max(aux[i],data[j][i]);        
      }
    }
  return aux;
    
}
//------------------------------------
// Función para defuzzificar valores
function defuzzificacion(y,mf)
{
  var num=0;
  var den=0;
  var y0;
  for(var i=0;i<y.length;i++)
  {
    num=num+y[i]*mf[i];
    den=den+mf[i];    
  }
  y0=num/den;
  return y0;
}
//------------------------------------
// Función para crear universo
function linspace(a,b,n) {
  if(typeof n === "undefined") n = Math.max(Math.round(b-a)+1,1);
  if(n<2) { return n===1?[a]:[]; }
  var i,ret = Array(n);
  n--;
  for(i=n;i>=0;i--) { ret[i] = (i*b+(n-i)*a)/n; }
  return ret;
}
//------------------------------------
// Modulos para fuzzificación de variables de entrada
// Variable Color Cabello
// En el presente modulo se ingresa un valor númerico 
// que permite definir el color del cabello en una 
// escala de claro a oscuro, fuzzificandose de esa manera.
//------------------------------------
function ColorCabello(Escala)
{
    //-------------------------------------------------------------------------------
    //Universo para variable Color de cabello
    var uOpacidad = linspace(0,10, 100);
    //-------------------------------------------------------------------------------
    //Parametros de conjuntos difusos: var Color de cabello
    var cClaro = [-0.1,0,7];
    var cOscuro = [2,10,10.1];          
    //-------------------------------------------------------------------------------
    //Grado de membresía para universo de Color de cabello
    var gClaro  = triangular(uOpacidad, cClaro);
    var gOscuro = triangular(uOpacidad, cOscuro);

    // Grado de membresía para Color de cabello
    var gCabelloClaro = triangular(Escala, cClaro);
    var gCabelloOscuro = triangular(Escala, cOscuro);
    var porcentClaro = gCabelloClaro*100;
    var porcentOscuro = gCabelloOscuro*100;
    if (porcentClaro>porcentOscuro)
    {
        return "gClaro";
    }
    else 
    {
        return "gOscuro";
    }
}

//------------------------------------
// Variable Color Piel
// En el presente modulo se ingresa un valor númerico 
// que permite definir el color del piel en una 
// escala de claro a oscuro, fuzzificandose de esa manera.
//------------------------------------
function ColorPiel(Escala)
{
    //-------------------------------------------------------------------------------
    //Universo para variable Color de cabello
    var uTonoPiel = linspace(0,10, 100);
    //-------------------------------------------------------------------------------
    //Parametros de conjuntos difusos: var Tono de Piel
    var cClaroP = [-0.1,0,7];
    var cOscuroP = [2,10,10.1];          
    //-------------------------------------------------------------------------------
    //Grado de membresía para universo de tono de piel
    var gClaroPiel  = triangular(uTonoPiel, cClaroP);
    var gOscuroPiel = triangular(cOscuroP, cOscuroP);

    // Grado de membresía para tono de piel
    var gPielClaro = triangular(Escala, cClaroP);
    var gPielOscuro = triangular(Escala, cOscuroP);
    var porcentClaro = gPielClaro*100;
    var porcentOscuro = gPielOscuro*100;
    if (porcentClaro>porcentOscuro)
    {
        return "gClaroPiel";
    }
    else 
    {
        return "gOscuroPiel";
    }
}

//------------------------------------
// Variable Personalidad
// En el presente modulo se ingresa un valor númerico 
// que permite definir la personalidad o grado de atrevimiento
// de una persona en una escala de reservado a atrevido
// fuzzificandose de esa manera.
//------------------------------------
function Personalidad(Escala)
{
    //-------------------------------------------------------------------------------
    //Universo para variable Personalidad (1-10)
    var uPersonalidad = linspace(0,3,100)
    //-------------------------------------------------------------------------------
    //Parametros de conjuntos difusos: var Personalidad
    var cReservado = [-0.1,0,2]     
    var cAlocado = [1,3,3.1]        
    //-------------------------------------------------------------------------------
    //Grado de membresía para universo Personalidad
    var gReservado  = triangular(uPersonalidad, cReservado)
    var gAlocado = triangular(uPersonalidad,cAlocado)

    var gPersonalidadReservado  = triangular(Escala,cReservado)
    var gPersonalidadAlocado = triangular(Escala,cAlocado)

    var Reservado = gPersonalidadReservado*100;
    var Alocado = gPersonalidadAlocado*100;
    if (Reservado>Alocado)
    {
        return "gReservado";
    }
    else 
    {
        return "gAlocado";
    }
}

//------------------------------------
// Variable Tipo de cabello
// En el presente modulo se ingresa un valor númerico 
// que permite definir el tipo de cabello de acuerdo a 
// la escala de lacio o crespo que tenga,
// fuzzificandose de esa manera.
//------------------------------------
function TipoCabe(Escala)
{
    //-------------------------------------------------------------------------------
    // Universo para variable Tipo de Cabello
    var uTipoCabello = linspace(0,4, 100)

    //-------------------------------------------------------------------------------
    //Parametros de conjuntos difusos: var Tipo de Cabello
    var cLacio = [-0.1,0,3]     
    var cCrespo = [1.5,4,4.1]            
    //-------------------------------------------------------------------------------
    //Grado de membresía para universo de Tipo de Cabello
    var gLacio  = triangular(uTipoCabello, cLacio)
    var gCrespo = triangular(uTipoCabello, cCrespo)

    //Grado de membresía para Tipo de Cabello
    var gCabelloLacio = triangular(Escala, cLacio)
    var gCabelloCrespo = triangular(Escala, cCrespo)

    //-------------------------------------------------------------------------------
    var Lacio = gCabelloLacio*100;
    var Crespo = gCabelloCrespo*100;
    if (Lacio>Crespo)
    {
        return "gLacio";
    }
    else 
    {
        return "gCrespo";
    }
}

//------------------------------------
// Variable Ocupacion
// En el presente modulo se ingresa un valor númerico 
// que permite definir el grado de ocupación de una persona
// de acuerdo a la escala de libre o muy ocupado que tenga,
// fuzzificandose de esa manera.
//------------------------------------
function Ocupacion(Escala)
{
    //-------------------------------------------------------------------------------
    //Universo para variable Nivel de Ocupacion
    var uNivelOcupacion = linspace(0,5,50)

    //-------------------------------------------------------------------------------
    //Parametros de conjuntos difusos: var Nivel de Ocupacion
    var cLibre = [-0.1,0,4]    
    var cMucho = [1,5,5.1]          
    //-------------------------------------------------------------------------------
    //Grado de membresía para universo de Nivel de Ocupacion
    var gLibre  = triangular(uNivelOcupacion, cLibre)
    var gMucho = triangular(uNivelOcupacion, cMucho)

    //Grado de membresía para Nivel de Ocupacion
    var gOLibre = triangular(Escala, cLibre)
    var gOMucho = triangular(Escala, cMucho)

    //-------------------------------------------------------------------------------
    var Libre = gOLibre*100;
    var Mucho = gOMucho*100;
    if (Libre>Mucho)
    {
        return "gLibre";
    }
    else 
    {
        return "gMucho";
    }
}

//--------------------------------------
// Logica Inferencial
//------------------------------------
// Carga de datos de base de conocimiento (.json)
const Varon = require('./Varon.json');
const Mujer = require('./Mujer.json');
// Llamamos a la libreria
const _ = require('lodash');

// Busqueda inferencial en base de conocimiento
function Busqueda(genero,pcolorCabello,pcolorPiel,pformaRostro,pestilo,patrevimiento,ptipoCabello,pocupamiento)
{
  var Link;
  var PersonaEncontrada;
  // Definimos y devolvemos valores de acuerdo al genero
  if(genero === "mujer")
  {
      // Modulo que encuentra a una mujer segun sus caracteristicas
      PersonaEncontrada=_.find(Mujer,function(persona){
      // le pasamos las caracteristicas de la mujer, y devolvemos a la persona en sí.
      return ((persona.colorCabello==pcolorCabello)&&(persona.colorPiel==pcolorPiel)&& (persona.formaRostro==pformaRostro)&&(persona.estilo==pestilo)&&(persona.atrevimiento==patrevimiento)&&(persona.tipoCabello==ptipoCabello)&&(persona.ocupamiento==pocupamiento));
      });
      // Recuperamos su recomendacion
     Link=PersonaEncontrada.urlCorte;
  }
  else
  {
      // Modulo que encuentra a un varon segun sus caracteristicas
      PersonaEncontrada=_.find(Varon,function(persona){
      // le pasamos las caracteristicas del varón, y devolvemos a la persona en sí.
      return ((persona.colorCabello=='gOscuro')&&(persona.colorPiel==pcolorPiel)&& (persona.formaRostro==pformaRostro)&&(persona.estilo==pestilo)&&(persona.atrevimiento==patrevimiento)&&(persona.tipoCabello==ptipoCabello)&&(persona.ocupamiento==pocupamiento));
      });
      // Recuperamos su recomendacion
      Link=PersonaEncontrada.urlCorte;
  }
  return Link;
}

// Devuelve el corte recomendado como url
export default function CorteRecomendado(Genero,Opacidad,TonoPiel,FormaCara,Estilo,TipoPersonalidad,TipoCabello,NivelOcup)
{
    // Procesamos las variables de entrada difusas
    // segun su grado de pertenencia
    var ColorCab = ColorCabello(Opacidad);
    var ColorP = ColorPiel(TonoPiel); 
    var Person = Personalidad(TipoPersonalidad);
    var TipoCab = TipoCabe(TipoCabello);
    var NivelOcup = Ocupacion(NivelOcup);
    //-------------------------------------------
    // Buscamos en nuestra base de conocimiento, y devolvemos su recomendación 
    var Resultado = Busqueda(Genero,ColorCab,ColorP,FormaCara,Estilo,Person,TipoCab,NivelOcup)
    return Resultado;
}