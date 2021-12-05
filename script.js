//GENERATED NUMBER FROM 1 to 6
const randomNum = Math.floor(Math.random() * 6 ) + 1

//IMAGE DICEE 1 to 6
const diceeimage = 'images/dice' + randomNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src', diceeimage);


//GENERATED NUMBER FROM 1 to 6
const randomNum2 = Math.floor(Math.random() * 6 ) + 1

//IMAGE DICEE 1 to 6
const diceeimage2 = 'images/dice' + randomNum2 + '.png';

document.querySelectorAll('img')[1].setAttribute('src', diceeimage2);

if(randomNum > randomNum2) {
  document.querySelector('h1').innerHTML = "Player 1 WINS!"
} else if(randomNum < randomNum2){
  document.querySelector('h1').innerHTML = "Player 2 WINS!"
} else {
  document.querySelector('h1').innerHTML = "DRAW!"
}
