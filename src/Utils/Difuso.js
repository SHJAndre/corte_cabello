//import Busqueda from "./InferenciaCorte"
const Varon = require('./Varon.json');
const Mujer = require('./Mujer.json');
const _ = require('lodash');

function Busqueda(pcolorCabello,pcolorPiel,pformaRostro,pestilo,patrevimiento,ptipoCabello,pocupamiento)
{
  var PersonaEncontrada=_.find(Mujer,function(persona){
    return ((persona.colorCabello==pcolorCabello)&&(persona.colorPiel==pcolorPiel)&& (persona.formaRostro==pformaRostro)&&(persona.estilo==pestilo)&&(persona.atrevimiento==patrevimiento)&&(persona.tipoCabello==ptipoCabello)&&(persona.ocupamiento==pocupamiento));
    });
  var Link=PersonaEncontrada.urlCorte;
  return Link;
}
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

function linspace(a,b,n) {
  if(typeof n === "undefined") n = Math.max(Math.round(b-a)+1,1);
  if(n<2) { return n===1?[a]:[]; }
  var i,ret = Array(n);
  n--;
  for(i=n;i>=0;i--) { ret[i] = (i*b+(n-i)*a)/n; }
  return ret;
}

function ColorCabello(Escala)
{
    //-------------------------------------------------------------------------------
    //Universo para variable Color de cabello
    var uOpacidad = linspace(0,10, 100);
    //-------------------------------------------------------------------------------
    //Parametros de conjuntos difusos: var Color de cabello
    var cClaro = [0,3,7];
    var cOscuro = [2,7,10];          
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

function ColorPiel(Escala)
{
    //-------------------------------------------------------------------------------
    //Universo para variable Color de cabello
    var uTonoPiel = linspace(0,10, 100);
    //-------------------------------------------------------------------------------
    //Parametros de conjuntos difusos: var Tono de Piel
    var cClaroP = [0,3,7];
    var cOscuroP = [2,7,10];          
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

function Personalidad(Escala)
{
    //-------------------------------------------------------------------------------
    //Universo para variable Personalidad (1-10)
    var uPersonalidad = linspace(0,10,100)
    //-------------------------------------------------------------------------------
    //Parametros de conjuntos difusos: var Personalidad
    var cReservado = [1,3,7]     
    var cAlocado = [4,8,10]        
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

function TipoCabe(Escala)
{
    //-------------------------------------------------------------------------------
    // Universo para variable Tipo de Cabello
    var uTipoCabello = linspace(0,10, 100)

    //-------------------------------------------------------------------------------
    //Parametros de conjuntos difusos: var Tipo de Cabello
    var cLacio = [0,4,7.5]     
    var cCrespo = [3,7,10]          
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

function Ocupacion(Escala)
{
    //-------------------------------------------------------------------------------
    //Universo para variable Nivel de Ocupacion
    var uNivelOcupacion = linspace(0,10, 100)

    //-------------------------------------------------------------------------------
    //Parametros de conjuntos difusos: var Nivel de Ocupacion
    var cLibre = [0,3,6.5]     
    var cMucho = [2,7,10]          
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

function CorteRecomendado(Opacidad,TonoPiel,FormaCara,Estilo,TipoPersonalidad,TipoCabello,NivelOcup)
{
    // Pertenencia
    var ColorCab = ColorCabello(Opacidad);
    var ColorP = ColorPiel(TonoPiel); 
    var Person = Personalidad(TipoPersonalidad);
    var TipoCab = TipoCabe(TipoCabello);
    var NivelOcup = Ocupacion(NivelOcup);
    //-------------------------------------------
    var Resultado = Busqueda(ColorCab,ColorP,FormaCara,Estilo,Person,TipoCab,NivelOcup)
    return Resultado;
}

var CC=6;
var CP=4;
var P=4;
var TipoCabello = 3;
var Nivel = 8;

console.log(CorteRecomendado(CC,CP,'gOvalado','gClasico ',P,TipoCabello,Nivel))
