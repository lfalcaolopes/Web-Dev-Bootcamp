function makeSound(classes) {
    switch (classes) {
        case "green":
            new Audio("sounds/green.mp3").play()
            break;
        case "red":
            new Audio("sounds/red.mp3").play()
            break;
        case "yellow":
            new Audio("sounds/yellow.mp3").play()
            break;
        case "blue":
            new Audio("sounds/blue.mp3").play()
            break;
        case "wrong":
            new Audio("sounds/wrong.mp3").play()
            break;
    
        default:
            break;
    }
}

function buttonSequenceAnimation(entry) {
    for (let i = 0; i < entry.length; i++) {
        setTimeout(function() {
            $(`.${entry[i]}`).addClass("clicked")
    
        setTimeout(function() { 
            $(`.${entry[i]}`).removeClass("clicked")
        }, 50);

        makeSound(entry[i])
        }, 700 * (i + 1))   
    }
}

function game(){  
    /* Removing event listener, to avoid playing multiple games at the same time */ 
    $(document).unbind()

    /* Variables */
    let buttonColors = ["green", "red", "yellow", "blue"]
    let buttonOrder = [] 
    let roundCount = 1
    let buttonsPerRound = 0

    /* Add first button */
    buttonOrder.push(buttonColors[Math.floor(Math.random()*4)])
    buttonSequenceAnimation(buttonOrder)

    /* Setup round title */
    $("h1").text(`Round ${roundCount}`)

    /* Button event listener */
    $(".button").click(function(event) {
        let $this = $(this)
        
        let buttonPressed = event["currentTarget"]["className"].split(" ")[1]
    
        /* Click animation */
        $this.addClass("clicked")
    
        setTimeout(function() { 
            $this.removeClass("clicked")
        }, 50);

        /* Click Sound */
        makeSound(buttonPressed)

        /* Check if guess is right or wrong */
        if (buttonOrder[buttonsPerRound] === buttonPressed) {
            buttonsPerRound++
            if (buttonsPerRound === roundCount) {
                /* Updates round count when round ends */
                roundCount++
                $("h1").text(`Round ${roundCount}`)

                /* Add another button after round ends */
                buttonOrder.push(buttonColors[Math.floor(Math.random()*4)])
                buttonSequenceAnimation(buttonOrder)

                /* Reset buttons per round */
                buttonsPerRound = 0
            }
        }
        else {
            /* Wrong guess Animation */
            $("body").addClass("wrong-answer")
        
            setTimeout(function() { 
                $("body").removeClass("wrong-answer")
            }, 100);

            /* Wrong guess sound */
            makeSound("is wrong")

            $("h1").text(`Your got to round ${roundCount}. To play again Press A Key!`)

            /* Removing click event listeners, to avoid playing multiple games at the same time */
            $(".button").unbind()

            /* Restarting game */
            $(document).keydown(game)
        }
    })
}



/* Start game */
$(document).keydown(game)

