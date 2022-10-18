// Iteration 5: Store the player score and display it on the game over screen
var again = document.getElementById("play-again-button")

again.onclick = changeLoc;

function changeLoc(){
    location.href = "game.html"
}
var scoreboard=document.getElementById("score-board")
scoreboard.innerHTML= sessionStorage.getItem("scores")
