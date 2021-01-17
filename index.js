var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var imgName1 = "images/dice" + randomNumber1 + ".png";
var imgName2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", imgName1)
document.querySelector(".img2").setAttribute("src", imgName2)

if(randomNumber1 > randomNumber2)
{
  document.querySelector(".container h1").innerHTML = "🚩Player1 Wins!"
}else if (randomNumber2 > randomNumber1) {
  document.querySelector(".container h1").innerHTML = "Player2 Wins!🚩"
}else {
  document.querySelector(".container h1").innerHTML = "Draw!"
}
