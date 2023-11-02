
let userClickedPattern = [];
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let started = false;
let level = 0;
 
$(document).keydown(function(){
    
    if (!started){
        $("h1").text("Level "+ level)
        nextSequence()
        started = true;
    }   
})


$(".btn").click(function(){
    
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour); 

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){

        if (userClickedPattern.length === gamePattern.length){

            setTimeout(function () {
              nextSequence();
            }, 1000);
        } 
        
    } else{
        $("h1").text("Game Over, Press Any Key to Start")
        let audioWrong = new Audio ("sounds/wrong.mp3");
        audioWrong.play();
        setTimeout(function(){
            $("body").addClass("game-over")});
        setTimeout(function(){
            $("body").removeClass("game-over")},200)
        startOver();
        };
}


function nextSequence(){
    userClickedPattern = [];
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
    $("#" + currentColour).addClass("pressed")
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed")
    }, 100);
}


function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}