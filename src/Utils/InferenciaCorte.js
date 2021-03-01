import "./KnowledgeBase/Varon.json"
import "./KnowledgeBase/Mujer.json"
//Varon nombre del arreglo jason
//input variables de entrada caracteristicas
//output urlCorte de imagen de corte
function Busqueda(Varon,pcolorCabello,pcolorPiel,pformaRostro,pestilo,patrevimiento,ptipoCabello,pocupamiento)
{
  var PersonaEncontrada=_.find(Varon, function(persona){
    return ((persona.colorCabello==pcolorCabello)&&(persona.colorPiel==pcolorPiel)&&  (persona.formaRostro==pformaRostro)&&(persona.estilo==pestilo)&&(persona.atrevimiento==patrevimiento)&&(persona.tipoCabello==ptipoCabello)&&(persona.ocupamiento==pocupamiento));
    });
  var Link=PersonaEncontrada.urlCorte;
  return Link;
};