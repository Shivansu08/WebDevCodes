var n1 = Math.floor((Math.random() * 6)) + 1;

var randomDiceImage1 = "images/dice" + n1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImage1);


var n2 = Math.floor((Math.random() * 6)) + 1;

var randomDiceImage2 = "images/dice" + n2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


if (n1 > n2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
    document.querySelector("h1").classList.add("win1");
}
if (n1 < n2) {
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
    document.querySelector("h1").classList.add("win2");
}
if (n1 === n2) {
    document.querySelector("h1").textContent = "Draw";
    document.querySelector("h1").classList.add("win0");
}