

let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"]



function nextSequence(){
    
    let randomNumber = Math.round(Math.random()*3);
    let randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)

    let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}
