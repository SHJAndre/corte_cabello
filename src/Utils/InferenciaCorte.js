//Varon nombre del arreglo jason
//input variables de entrada caracteristicas
//output urlCorte de imagen de corte

const Varon = require('./Varon.json');
const Mujer = require('./Mujer.json');
function Busqueda(pcolorCabello,pcolorPiel,pformaRostro,pestilo,patrevimiento,ptipoCabello,pocupamiento)
{
  var PersonaEncontrada=_.find(Mujer,function(persona){
    return ((persona.colorCabello==pcolorCabello)&&(persona.colorPiel==pcolorPiel)&& (persona.formaRostro==pformaRostro)&&(persona.estilo==pestilo)&&(persona.atrevimiento==patrevimiento)&&(persona.tipoCabello==ptipoCabello)&&(persona.ocupamiento==pocupamiento));
    });
  var Link=PersonaEncontrada.urlCorte;
  return Link;
}


/*
var PersonaEncontrada=_.find(Mujer,function(persona){
  return persona.colorCabello=='gClaro';});
var Link=PersonaEncontrada.urlCorte;
return Link;
export default function Busqueda(pcolorCabello,pcolorPiel,pformaRostro,pestilo,patrevimiento,ptipoCabello,pocupamiento)
{
  var PersonaEncontrada=_.find(Mujer,function(persona){
    return ((persona.colorCabello==pcolorCabello)&&(persona.colorPiel==pcolorPiel)&& (persona.formaRostro==pformaRostro)&&(persona.estilo==pestilo)&&(persona.atrevimiento==patrevimiento)&&(persona.tipoCabello==ptipoCabello)&&(persona.ocupamiento==pocupamiento));
    });
  var Link=PersonaEncontrada.urlCorte;
  return Link;
}*/