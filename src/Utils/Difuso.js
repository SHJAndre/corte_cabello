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

function ColorCabello(Escala)
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
    var cReservado = [2,3,7]     
    var cAlocado = [4,8,9]        
    //-------------------------------------------------------------------------------
    //Grado de membresía para universo Personalidad
    var gReservado  = triangular(uPersonalidad, cReservado)
    var gAlocado = triangular(uPersonalidad,cAlocado)

    //Grado de membresía para Escala
    var Personalidad = 5
    var gPersonalidadReservado  = triangular(Personalidad,cReservado)
    var gPersonalidadAlocado = triangular(Personalidad,cAlocado)

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

function TipoCabello(Escala)
{
    
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

