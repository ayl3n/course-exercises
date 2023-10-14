 
buttons = document.querySelectorAll(".drum").length

function handleClick(){
    alert("I got clicked!");
}

for (let i = 0; i < buttons; i++ ){
    //find  button. When ckicked, proceed to activate -handleClick-

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        let audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    });
}

