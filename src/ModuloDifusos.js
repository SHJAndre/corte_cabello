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
export default function Tamanio(Edad,Temperatura,IMC)
{
  //-------------------------EDAD-------------------------------------------------------------
  //Universo para variable Edad (25-70 años)
  var uEdad=linspace(15,75,200);
  //-------------------------------------------------------------------------------
  //Parametros de conjuntos difusos: var Edad
  var cJoven = [15,25,60];     
  var cAdulto = [35,52.5,70];        
  var cAnciano = [60,70,75];      
  //-------------------------------------------------------------------------------
  // Grado de membresía para universo de Edad
  var gJoven  = triangular(uEdad, cJoven);
  var gAdulto = triangular(uEdad, cAdulto);
  var gAnciano = triangular(uEdad, cAnciano);

  //Grado de membresía para Edad = 50 años
  //var Edad = 45
  var gJovenEdad = triangular(Edad, cJoven);
  var gAdultoEdad = triangular(Edad, cAdulto);
  var gAncianoEdad = triangular(Edad, cAnciano);
  //console.log(gJovenEdad);
  //console.log(gAdultoEdad);
  //console.log(gAncianoEdad);
  //-------------------------AMBIENTE-------------------------------------------------------------
  //Universo para variable Edad (25-70 años)
  var uTemperatura = linspace(0,35, 200);
  //-------------------------------------------------------------------------------
  //Parametros de conjuntos difusos: var Edad
  var cFrio = [0,5,13];   
  var cTemplado = [10,16,23];        
  var cCalido = [20,28,35];      

  //-------------------------------------------------------------------------------
  // Grado de membresía para universo de Edad
  var gFrio  = triangular(uTemperatura, cFrio);
  var gTemplado = triangular(uTemperatura, cTemplado);
  var gCalido = triangular(uTemperatura, cCalido);

  //Grado de membresía para Edad = 50 años
  //var Temperatura = 20;
  var gClimaFrio  = triangular(Temperatura, cFrio);
  var gClimaTemplado = triangular(Temperatura, cTemplado);
  var gClimaCalido = triangular(Temperatura, cCalido);
  //console.log(gClimaFrio);
  //console.log(gClimaTemplado);
  //console.log(gClimaCalido);
  //-------------------------IMC-------------------------------------------------------------
  //Universo para variable Cantidad de ropa (1-7kg)
  var uContextura = linspace(14, 35, 200);

  //-------------------------------------------------------------------------------
  //Parametros de conjuntos difusos: var Cantidad de ropa
  var cBajoPeso = [14,14,18,19];    
  var cNormal = [18,19,24.5,25.5];     
  var cSobrePeso = [24.5,25.5,29.5,30.5];        
  var cObesidad = [29.5,30.5,35,35];

  //-------------------------------------------------------------------------------
  //Grado de membresía para universo de Cantidad de ropa
  var gBajoPeso  = trapezoidal(uContextura, cBajoPeso);
  var gNormal = trapezoidal(uContextura, cNormal);
  var gSobrePeso = trapezoidal(uContextura, cSobrePeso);
  var gObesidad = trapezoidal(uContextura, cObesidad);

  //Grado de membresía para Cantidad de ropa = 5.2
  //var IMC = 19.8
  var gBajoPesoContex  = trapezoidal(IMC, cBajoPeso);
  var gNormalContex  = trapezoidal(IMC, cNormal);
  var gSobrePesoContex  = trapezoidal(IMC, cSobrePeso);
  var gObesidadContex  = trapezoidal(IMC, cObesidad);
  //console.log(gBajoPesoContex);
  //console.log(gNormalContex);
  //console.log(gSobrePesoContex);
  //console.log(gObesidadContex);
  //-------------------------OUTPUT-------------------------------------------------------------
  //----------------------TAMAÑO DE CORTE--------------------------
  //Universo para variable Prestamo(S/.)
  var uTamCorte = linspace(7, 80, 200);

  //-------------------------------------------------------------------------------
  //Parametros de conjuntos difusos: var Prestamo(S/.)  
  var cCorto = [7,21,35];       
  var cMediano = [30,40,65];      
  var cLargo = [60,70,80];      

  //-------------------------------------------------------------------------------
  //Grado de membresía para universo de Prestamo(S/.)
  var gCorto = triangular(uTamCorte, cCorto);
  var gMediano = triangular(uTamCorte, cMediano);
  var gLargo = triangular(uTamCorte, cLargo);
  //-----------------------------------------INFERENCIA LOGICA-------------------------
  var R1= Math.min(gJovenEdad,gClimaFrio,gBajoPesoContex);
  var R2= Math.min(gJovenEdad,gClimaFrio,gNormalContex);
  var R3= Math.min(gJovenEdad,gClimaFrio,gSobrePesoContex);	
  var R4= Math.min(gJovenEdad,gClimaFrio,gObesidadContex);	
  var R5= Math.min(gJovenEdad,gClimaTemplado,gBajoPesoContex);	
  var R6= Math.min(gJovenEdad,gClimaTemplado,gNormalContex);	
  var R7= Math.min(gJovenEdad,gClimaTemplado,gSobrePesoContex);	
  var R8= Math.min(gJovenEdad,gClimaTemplado,gObesidadContex);	
  var R9= Math.min(gJovenEdad,gClimaCalido,gBajoPesoContex);	
  var R10= Math.min(gJovenEdad,gClimaCalido,gNormalContex);	
  var R11= Math.min(gJovenEdad,gClimaCalido,gSobrePesoContex);	
  var R12= Math.min(gJovenEdad,gClimaCalido,gObesidadContex);	
  var R13= Math.min(gAdultoEdad,gClimaFrio,gBajoPesoContex);	
  var R14= Math.min(gAdultoEdad,gClimaFrio,gNormalContex);	
  var R15= Math.min(gAdultoEdad,gClimaFrio,gSobrePesoContex);	
  var R16= Math.min(gAdultoEdad,gClimaFrio,gObesidadContex);	
  var R17= Math.min(gAdultoEdad,gClimaTemplado,gBajoPesoContex);	
  var R18= Math.min(gAdultoEdad,gClimaTemplado,gNormalContex);	
  var R19= Math.min(gAdultoEdad,gClimaTemplado,gSobrePesoContex);	
  var R20= Math.min(gAdultoEdad,gClimaTemplado,gObesidadContex);	
  var R21= Math.min(gAdultoEdad,gClimaCalido,gBajoPesoContex);	
  var R22= Math.min(gAdultoEdad,gClimaCalido,gNormalContex);	
  var R23= Math.min(gAdultoEdad,gClimaCalido,gSobrePesoContex);	
  var R24= Math.min(gAdultoEdad,gClimaCalido,gObesidadContex);	
  var R25= Math.min(gAncianoEdad,gClimaFrio,gBajoPesoContex);	
  var R26= Math.min(gAncianoEdad,gClimaFrio,gNormalContex);	
  var R27= Math.min(gAncianoEdad,gClimaFrio,gSobrePesoContex);
  var R28= Math.min(gAncianoEdad,gClimaFrio,gObesidadContex);
  var R29= Math.min(gAncianoEdad,gClimaTemplado,gBajoPesoContex);	
  var R30= Math.min(gAncianoEdad,gClimaTemplado,gNormalContex);	
  var R31= Math.min(gAncianoEdad,gClimaTemplado,gSobrePesoContex);	
  var R32= Math.min(gAncianoEdad,gClimaTemplado,gObesidadContex);	
  var R33= Math.min(gAncianoEdad,gClimaCalido,gBajoPesoContex);
  var R34= Math.min(gAncianoEdad,gClimaCalido,gNormalContex);
  var R35= Math.min(gAncianoEdad,gClimaCalido,gSobrePesoContex);	
  var R36= Math.min(gAncianoEdad,gClimaCalido,gObesidadContex);	

  var Input = [R1, R2, R3, R4, R5, R6, R7, R8, R9, R10,R11, R12, R13, R14, R15, R16, R17, R18,R19,R20,R21, R22, R23, R24, R25, R26, R27, R28, R29, R30,R31, R32, R33, R34, R35, R36];

  var Output =[gLargo,gLargo,gLargo,gMediano,gLargo,gLargo,gMediano,gCorto,gMediano,gMediano,gCorto,gCorto,gLargo,gLargo,gMediano,gMediano,gLargo,gMediano,gMediano,gMediano,gMediano,gCorto,gCorto,gCorto,gMediano,gMediano,gMediano,gMediano,gMediano,gMediano,gMediano,gCorto,gMediano,gCorto,gCorto];

  var cR1 = cortar(R1,gLargo );
  var cR2 = cortar(R2,gLargo );
  var cR3 = cortar(R3,gLargo );
  var cR4 = cortar(R4,gMediano);
  var cR5 = cortar(R5,gLargo );
  var cR6 = cortar(R6,gLargo );
  var cR7 = cortar(R7,gMediano);
  var cR8 = cortar(R8,gCorto);
  var cR9 = cortar(R9,gMediano);
  var cR10 = cortar(R10,gMediano);
  var cR11 = cortar(R11,gCorto);
  var cR12 = cortar(R12,gCorto);
  var cR13 = cortar(R13,gLargo );
  var cR14 = cortar(R14,gLargo );
  var cR15 = cortar(R15,gMediano);
  var cR16 = cortar(R16,gMediano);
  var cR17 = cortar(R17,gLargo );
  var cR18 = cortar(R18,gMediano);
  var cR19 = cortar(R19,gMediano);
  var cR20 = cortar(R20,gMediano);
  var cR21 = cortar(R21,gMediano)
  var cR22 = cortar(R22,gCorto);
  var cR23 = cortar(R23,gCorto);
  var cR24 = cortar(R24,gCorto);
  var cR25 = cortar(R25,gMediano);
  var cR26 = cortar(R26,gMediano);
  var cR27 = cortar(R27,gMediano);
  var cR28 = cortar(R28,gMediano);
  var cR29 = cortar(R29,gMediano);
  var cR30 = cortar(R30,gMediano);
  var cR31 = cortar(R31,gMediano);
  var cR32 = cortar(R32,gCorto);
  var cR33 = cortar(R33,gMediano);
  var cR34 = cortar(R34,gCorto);
  var cR35 = cortar(R35,gCorto);
  var cR36 = cortar(R36,gCorto);


  var CORTE = union([cR1, cR2, cR3, cR4, cR5, cR6, cR7, cR8, cR9, cR10,cR11, cR12, cR13, cR14, cR15, cR16, cR17, cR18, cR19, cR20,cR21, cR22, cR23, cR24, cR25, cR26, cR27, cR28, cR29, cR30,cR31, cR32, cR33, cR34,cR35,cR36]);
  //--------------------------------------DEFUZZIFICACION------------------------
  //Aplicamos defuzzificación mediante CENTROIDE
  var Y1 = defuzzificacion(uTamCorte, CORTE);
  console.log(Y1);
  return Y1;
}

var Edad=45;
var Temperatura=20;
var IMC=19.8;
Tamanio(Edad,Temperatura,IMC);  

function Inferencial(FormaRostro,Personalidad,Estilo)
{
  var salida = [];
  switch(FormaRostro)
  {
    case 'Ovalado':
      switch(Personalidad)
      {
        case 'Introvertido':
          switch(Estilo)
          {
            case 'Clasico':
              salida = ['<img src="https://i.ibb.co/rGjfnXX/cortes-de-pelo-disparejos-desmechado-asim-tricos-para-mujeres-2.jpg" alt="cortes-de-pelo-disparejos-desmechado-asim-tricos-para-mujeres-2" border="0">',
              '<img src="https://i.ibb.co/vZTG2gy/1489672007-000m46g8.jpg" alt="1489672007-000m46g8" border="0">',
              ''];
              break;
            case 'Hipster':
              salida = ['<img src="https://i.ibb.co/dbQYG96/50b06922e001af7b898b6f71a45b7f92.jpg" alt="50b06922e001af7b898b6f71a45b7f92" border="0">',
              '<img src="https://i.ibb.co/vZTG2gy/1489672007-000m46g8.jpg" alt="1489672007-000m46g8" border="0"><img src="https://i.ibb.co/KK7RyLC/cec7521fe46a76598993346912de3df9.jpg" alt="cec7521fe46a76598993346912de3df9" border="0">',''];
              break;
            case 'Urban':
              salida = ['<img src="https://i.ibb.co/f0BMB6t/cabello-c331d98839f72df73ada9422bb231e4d-0x1200.jpg" alt="cabello-c331d98839f72df73ada9422bb231e4d-0x1200" border="0">',
              '<img src="https://i.ibb.co/Mf07DKT/cortes-de-pelo-cara-alargada-rachel-weisz-4ff35d33-1000x1500.jpg" alt="cortes-de-pelo-cara-alargada-rachel-weisz-4ff35d33-1000x1500" border="0">',
              ''];
              break;
          }
          break;
        case 'Extrovertido':
          switch(Estilo)
          {
            case 'Clasico':
              salida = ['<img src="https://i.ibb.co/f0BMB6t/cabello-c331d98839f72df73ada9422bb231e4d-0x1200.jpg" alt="cabello-c331d98839f72df73ada9422bb231e4d-0x1200" border="0"><img src="https://i.ibb.co/583YBMj/corte-pelo-corto-cara-redonda-89-15.jpg" alt="corte-pelo-corto-cara-redonda-89-15" border="0">',
              '<img src="https://i.ibb.co/J5wcVbQ/cortes-de-pelo-segun-forma-cara-sara-canning-07f44392-1000x1500.jpg" alt="cortes-de-pelo-segun-forma-cara-sara-canning-07f44392-1000x1500" border="0">',
              ''];
              break;
            case 'Hipster':
              salida = ['<img src="https://i.ibb.co/G38kN2b/mujer-hipster-elegante-en-sombrero-y-gafas-caminando-al-aire-libre-con-c-mara-retro-feliz-hermosa-vi.jpg" alt="mujer-hipster-elegante-en-sombrero-y-gafas-caminando-al-aire-libre-con-c-mara-retro-feliz-hermosa-vi" border="0">',
              '<img src="https://i.ibb.co/72VkwMm/resizer.jpg" alt="resizer" border="0">',
              ''];
              break;
            case 'Urban':
              salida = ['<img src="https://i.ibb.co/Fx032RK/23-corte-pelo-mujer-cara-ovalada-melena-bob-1535533955.jpg" alt="23-corte-pelo-mujer-cara-ovalada-melena-bob-1535533955" border="0">',
              '<img src="https://i.ibb.co/frXh9pY/image-92362-16730.jpg" alt="image-92362-16730" border="0">',
              ''];
              break;
          }
          break;
      }
      break;
    case 'Cuadrado':
      switch(Personalidad)
      {
        case 'Introvertido':
          switch(Estilo)
          {
            case 'Clasico':
              salida = ['<img src="https://i.ibb.co/JKCZr8Q/4a73a651a4ef561a6c243294cb9ef4f2.jpg" alt="4a73a651a4ef561a6c243294cb9ef4f2" border="0">'
              ,'<img src="https://i.ibb.co/Lz6P35w/6.jpg" alt="6" border="0"><img src="https://i.ibb.co/vZRpMhn/bb088ced09995ab18df660fa68980131.jpg" alt="bb088ced09995ab18df660fa68980131" border="0">',''];
              break;
            case 'Hipster':
              salida = ['<img src="https://i.ibb .co/nQDVS8W/cortes-cara-cuadrada.jpg" alt="cortes-cara-cuadrada" border="0">',
              '',''];
              break;
            case 'Urban':
              salida = ['<img src="https://i.ibb.co/LQmBwWM/peinados-para-cara-cuadrada-4.jpg" alt="peinados-para-cara-cuadrada-4" border="0">',
              '<img src="https://i.ibb.co/K9Td0L7/005be24c94e18c0806f20c0510d29d01.jpg" alt="005be24c94e18c0806f20c0510d29d01" border="0">',
              ''];
              break;
          }
          break;
        case 'Extrovertido':
          switch(Estilo)
          {
            case 'Clasico':
              salida = ['<img src="https://i.ibb.co/5GJ2y4V/corto-cuadrado.jpg" alt="corto-cuadrado" border="0">',
              '<img src="https://i.ibb.co/425xcs9/cortes-de-pelo-segun-forma-cara-ashley-graham-8cc02b4a-1000x1500.jpg" alt="cortes-de-pelo-segun-forma-cara-ashley-graham-8cc02b4a-1000x1500" border="0">',
              ,''];
              break;
            case 'Hipster':
              salida = ['<img src="https://i.ibb.co/HDXXddZ/corto-extro.jpg" alt="corto-extro" border="0">'
              ,'<img src="https://i.ibb.co/cvsN4Y0/peinados-cara-cuadrada-flequillo-0ee3498e-600x900.jpg" alt="peinados-cara-cuadrada-flequillo-0ee3498e-600x900" border="0">',
              ''];
              break;
            case 'Urban':
              salida = ['<img src="https://i.ibb.co/x5DZNMn/14976045315128.jpg" alt="14976045315128" border="0">',
              '<img src="https://i.ibb.co/Lz6P35w/6.jpg" alt="6" border="0">',''];
              break;
          }
          break;
      }
      break;
    case 'Redondo':
      switch(Personalidad)
      {
        case 'Introvertido':
          switch(Estilo)
          {
            case 'Clasico':
              salida = ['<img src="https://i.ibb.co/SPQJ5VZ/4eef8cf7238db5a28d143dfd52d618d8.jpg" alt="4eef8cf7238db5a28d143dfd52d618d8" border="0">'
              ,'',''];
              break;
            case 'Hipster':
              salida = ['<img src="https://i.ibb.co/RY3fH3N/01-guetzli-2.jpg" alt="01-guetzli-2" border="0">','',''];
              break;
            case 'Urban':
              salida = ['<img src="https://i.ibb.co/T4vxfVM/cortes-de-cabello-segun-forma-cara-2020-cara-redonda-corte-pixie.webp" alt="cortes-de-cabello-segun-forma-cara-2020-cara-redonda-corte-pixie" border="0">','',''];
              break;
          }
          break;
        case 'Extrovertido':
          switch(Estilo)
          {
            case 'Clasico':
              salida = ['<img src="https://i.ibb.co/NSQ3f3D/2896a9cde1d08233045a8edeedf5cb1d.jpg" alt="2896a9cde1d08233045a8edeedf5cb1d" border="0">','',''];
              break;
            case 'Hipster':
              salida = ['<img src="https://i.ibb.co/4MfqKww/ss.jpg" alt="ss" border="0">',
              '',''];
              break;
            case 'Urban':
              salida = ['<img src="https://i.ibb.co/4MfqKww/ss.jpg" alt="ss" border="0"><img src="https://i.ibb.co/tQsQvrh/cortes-pelo-para-cara-redonda.jpg" alt="cortes-pelo-para-cara-redonda" border="0">','',''];
              break;
          }
          break;
      }
      break;
    case 'Corazon':
      switch(Personalidad)
      {
        case 'Introvertido':
          switch(Estilo)
          {
            case 'Clasico':
              salida = ['<img src="https://i.ibb.co/qd8Fbjp/corazon-corto-intro-clasico.jpg" alt="corazon-corto-intro-clasico" border="0">',
                        '',''];
              break;
            case 'Hipster':
              salida = ['<img src="https://i.ibb.co/S5Qjs35/corto-hipster-corazon.jpg" alt="corto-hipster-corazon" border="0">',
                        '',''];
              break;
            case 'Urban':
              salida = ['<img src="https://i.ibb.co/f0YG220/fafa.jpg" alt="fafa" border="0">',
                        '',''];
              break;
          }
          break;
        case 'Extrovertido':
          switch(Estilo)
          {
            case 'Clasico':
              salida = ['<img src="https://i.ibb.co/hB5XHGm/corto-clasico.jpg" alt="corto-clasico" border="0">',
                        '',''];
              break;
            case 'Hipster':
              salida = ['<img src="https://i.ibb.co/hVZRFxg/midi-2-1.jpg" alt="midi-2-1" border="0">','',''];
              break;
            case 'Urban':
              salida = ['<img src="https://i.ibb.co/k8dZ4gF/corazon-extro-urba.jpg" alt="corazon-extro-urba" border="0">',
                        '',
                        ''];
              break;
          }
          break;
      }
      break;
  }
  //console.log(salida[0])
  return salida;
}

Inferencial('Ovalado','Introvertido','Clasico');