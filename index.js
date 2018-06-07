function dwarfRollCall(dwarves) {
  let dwarfNames = [];
  for (let i = 0.5*dwarves.length; i < dwarves.length; i++) {
    dwarfNames.push(`${i+1}. ${dwarves[i]} `); 
  }
   return dwarfNames.join("");
}

function summonCaptainPlanet(planeteerCalls){
  return planeteerCalls.map(element =>
  element.toUpperCase() + "!")}

function longPlaneteerCalls(words) {
  let result = words.some(function(word){
    return word.length > 4;
  }); 
  
  return result;
}

// findTheCheese([ 'apple', 'cherry', 'gouda'])
// findTheCheese(['bananas', 'cheddar', 'gouda', 'pineapple'])

function findTheCheese (foods) {
  let result = foods.find(function(food){
    return food === "cheddar" ||
    food === "gouda" ||
    food === "Camembert" ||
    food === "swiss";
  });

  if(result.length !== 0) {
    return result;
  }else{
    return "no cheese!";
  }

} 

function wordsThatStartWithB(words){
  let result = words.filter(function(word){
    return word.startsWith('b');
  })
  return result;
}

//'bob'.startsWith("b") => true
// 'sally'.startsWith("b") => false

// wordsThatStartWithB(['bob', 'brian', 'sally']) => ['bob', brian]
// wordsThatStartWithB(['billy', 'jane', 'susanne']) => ['billy']
// wordsThatStartWithB(['alex', 'tim', 'steve']) => []

