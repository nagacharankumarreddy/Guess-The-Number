const $submitbutton = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");

var guessnumber = Math.floor(Math.random() * 100);
localStorage.setItem("ans",guessnumber)
var lives = 5;
var message;


var input = document.getElementById("number-input");
input.addEventListener("keyup", function(event) {
    if (event.code === "Enter") {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});


$submitbutton.onclick = () => {
  var userip = document.getElementById("number-input").value;
  lives--;
  if (userip == guessnumber) location.href = "./win.html";
  else if (lives == 0) location.href = "./lose.html";
  else if (userip > guessnumber) message = "Your Guess is too high😢";
  else if (userip < guessnumber) message = "Your Guess is too low😢";

  $message.style.display = "inhertit";
  //debugger
  $message.innerHTML = message;
  $lives.innerHTML = lives;
};
