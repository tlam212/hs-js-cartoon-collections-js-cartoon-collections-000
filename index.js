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

// findTheCheese([ 'apple', 'cherry', 'gouda'])
// findTheCheese(['bananas', 'cheddar', 'gouda', 'pineapple'])

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

} 

