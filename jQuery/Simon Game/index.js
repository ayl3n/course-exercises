

let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"]
let randomChosenColour = buttonColours[nextSequence()];


function nextSequence(){
    
    let randomNumber = Math.round(Math.random()*3);
    return randomNumber;
}

gamePattern.push(randomChosenColour);
console.log(gamePattern);