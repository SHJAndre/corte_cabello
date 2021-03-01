import "./KnowledgeBase/Varon.json"
import "./KnowledgeBase/Mujer.json"

function Busqueda(personas,ColordeCabello,ColorPiel,FormaRostro,Estilo,Atrevido,Tipo,Ocupado)
{
  var PersonaEncontrada=_.find(personas, function(persona)) {
  return ((persona.ColordeCabello==ColordeCabello)&&(persona.ColorPiel=ColorPiel)&&   (persona.FormaRostro==FormaRostro)&&(persona.Estilo==Estilo)&&(persona.Atrevido==Atrevido)&&(persona.Tipo==Tipo)&&(persona.Ocupado==Ocupado));
  }
  var Link=PersonaEncontrada.url;
  return Link;
}