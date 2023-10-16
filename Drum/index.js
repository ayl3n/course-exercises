 
buttons = document.querySelectorAll(".drum").length


for (let i = 0; i < buttons; i++ ){
    //find  button. When ckicked, proceed to activate makeSound

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       this.style.color = "white";

       let buttonInnerHTML = this.innerHTML;
       makeSound(buttonInnerHTML);
       
    });
}
//detect keypress in keyboard to activate makeSound
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    this.style.color = "white";
})


function makeSound(key){
    switch (key){
        case "w":
            let audioW = new Audio("sounds/crash.mp3");
          audioW.play();
          break;
        
        case "a":
            let audioA = new Audio("sounds/tom-1.mp3")
            audioA.play();
            break;

        case "s":
            let audioS = new Audio("sounds/snare.mp3")
            audioS.play();
            break;

        case "d":
            let audioD = new Audio("sounds/tom-2.mp3")
            audioD.play();
            break;

        case "j":
            let audioJ = new Audio("sounds/tom-3.mp3")
            audioJ.play()
            break;

        case "k":
            let audioK = new Audio("sounds/kick-bass.mp3")
            audioK.play()
            break;

        case "l":
            let audioL = new Audio("sounds/tom-4.mp3")
            audioL.play()
            break;
    } 
}


