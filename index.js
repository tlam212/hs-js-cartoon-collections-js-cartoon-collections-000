function dwarfRollCall(dwarves) {
  let dwarfNames = [];
  for (let i = 0; i<dwarves.length; i++) {
    dwarfNames.push(`${i+1}. ${dwarves[i]} `); 
  }
   return dwarfNames.join("");
}

function summonCaptainPlanet(planeteerCalls){
  return planeteerCalls.map(element =>
  element.toUpperCase() + "!")
}

function longPlaneteerCalls(words) {
  let result = words.some(function(word){
    return word.length > 4;
  }); 
  
  return result;
}

function findTheCheese (foods) {
  let result = foods.filter(function(food){
    return food === "cheddar" ||
    food === "gouda" ||
    food === "Camembert";
  });

  if(result.length !== 0) {
    return result;
  }else{
    return "no cheese!";
  }
<<<<<<< HEAD
=======

} 
if(result.length !==0){
  return result;
}else{
  return "no cheese";
}
>>>>>>> a50ab0f4c7c2db9fd5d8a80e53eac3f64c9bfb80

} 

