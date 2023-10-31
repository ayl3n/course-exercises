prompt("hi");
console.log("holi");
let userClickedPattern = [];
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"]
 
 $(".btn").click(function(){
    
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour); 

    playSound(userChosenColour);
    animatePress(userChosenColour);
 });

function nextSequence(){
    
    level++;
    $("h1").text("Level " + level);
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)

    playSound(randomChosenColour);
    
}

function playSound(name){
    
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

function animatePress(currentColour){
    userChosenColour = $(this).attr("id");
    $("#" + currentColour).addClass("pressed")
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed")
    }, 100);
}


let started = false;
let level = 0;


$(document).keydown(function(){
    
    if (!started){
        $("h1").text("Level "+ level)
        nextSequence()
        started = true;
    }   
})


