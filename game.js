// Iteration 2: Generate 2 random number and display it on the screen
var num1 = document.getElementById("number1");
var num2 = document.getElementById("number2");
var button = document.getElementById("buttons");
var score=0
button.onclick = randomNo;
function randomNo() {
  num1.innerHTML = Math.floor(Math.random() * 100 );
  num2.innerHTML = Math.floor(Math.random() * 100 );
  score++
}
if(window.location.reload){
    num1.innerHTML = Math.floor(Math.random() * 100 );
    num2.innerHTML = Math.floor(Math.random() * 100 );
}

var timer = document.getElementById("timer");
var t=5;

// Iteration 3: Make the options button functional
var greater= document.getElementById('greater-than')
var less= document.getElementById('lesser-than')
var equal=document.getElementById('equal-to')

greater.onclick= greaterThan;
less.onclick= lesser;
equal.onclick= equalTo


function greaterThan(){
    if(num1.innerHTML>num2.innerHTML){
        t=5;
        score+1
    }
    else{
        gameover()
    }
    
}
function lesser(){
    if(num1.innerHTML<num2.innerHTML){
        t=5;
        score+1;
    }
    else{
        gameover()
    }

}
function equalTo(){
    if(num1.innerHTML==num2.innerHTML){
        t=5;
        score+1;
    }
    else{
        gameover()
    }
}

function gameover(){
    location.href=('gameover.html')
}
// Iteration 4: Build a timer for the game




function runtimer() {
  timer.innerHTML = t;
  if (t == 0) {
    clearInterval(abcd);
    gameover()
  }
  t--;
  sessionStorage.setItem("scores", score)
}
let abcd = setInterval(runtimer, 1000);

