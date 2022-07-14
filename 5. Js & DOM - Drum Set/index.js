function makeSound(key) {
    switch (key) {
        case "w":
            new Audio('sounds/tom-1.mp3').play()
            break;
        case "a":
            new Audio('sounds/tom-2.mp3').play()
            break;
        case "s":
            new Audio('sounds/tom-3.mp3').play()
            break;
        case "d":
            new Audio('sounds/tom-4.mp3').play()
            break;
        case "j":
            new Audio('sounds/crash.mp3').play()
            break;
        case "k":
            new Audio('sounds/kick-bass.mp3').play()
            break;
        case "l":
            new Audio('sounds/snare.mp3').play()
            break;       
        default:
            console.log(key)
            break;
    }
}

function buttonAnimation(key) {
    document.querySelector(`.${key}`).classList.add("pressed")

    setTimeout(function (){
        document.querySelector(`.${key}`).classList.remove("pressed")
    }, 100)

}


let buttons = document.querySelectorAll(".set button");

for (let i = 0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        makeSound(this.innerHTML)
        buttonAnimation(this.innerHTML)
    });
}

document.addEventListener("keydown", function (event){
    makeSound(event["key"])
    buttonAnimation(event["key"])
})