
buttons = document.querySelectorAll(".drum").length

function handleClick(){
    alert("I got clicked!");
}

for (let i = 0; i < buttons; i++ ){
    //find  button. When ckicked, proceed to activate -handleClick-

    document.querySelector("button").addEventListener("click",handleClick);
}