let dice1 = Math.floor((Math.random()*6) + 1)
let dice2 = Math.floor((Math.random()*6) + 1)

document.querySelector("#dice1").innerHTML = `<img src="images/dice${dice1}.png" alt="dice">`
document.querySelector("#dice2").src = `images/dice${dice2}.png`

if (dice1 > dice2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}
else if (dice1 < dice2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}
else {
    document.querySelector("h1").innerHTML = "Draw."
}