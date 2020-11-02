document.addEventListener('DOMContentLoaded', () => {

const defaultImage = 'images/batman-com-logo.jpg',
maxFlip = 2,
cardsArray = [
  {
    name: "batman",
    img: "images/batman-img.png",
  },
  
  {
    name: "bane",
    img: "images/bane-img.jpg",
  },
 
  {
    name: "joker",
    img: "images/joker-img.jpg",
  },
  
  {
    name: "penguin",
    img: "images/penguin-img.jpg",
  },
 
  {
    name: "freeze",
    img: "images/freeze-img.png",
  },
  
 
  {
    name: "ivy",
    img: "images/ivy-img.jpg",
  },
  
  {
    name: "harley",
    img: "images/harley-img.png",
  },
  
  {
    name: "robin",
    img: "images/robin-img.png",
  },
  
  {
    name: "alfred",
    img: "images/alfred-img.png",
  },
  
  {
    name: "raj",
    img: "images/raj-img.png",
  },
  
];

let gameCards = [...cardsArray, ...cardsArray],
flipCount = 0,
firstClick = 0,
timeLeft,
matchedCards = [],
clickCounter = 50,
timerId;

 document.getElementById('resetBtn').addEventListener('click', resetGame, false);

    //function from Stack Overflow
    function gameTimer(duration, display) {
        let timer = duration,
            minutes, seconds;

        timerId = setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            display.textContent = minutes + ':' + seconds;

            if (timer-- <= 0) {
                loseGame(timer);
                timer = duration;
                clearTimeout(timerId);
            }
            // stop timer if game is won
            if (matchedCards.length === (cardsArray.length / 2)) {
                clearTimeout(timerId);
            }
        }, 1000);
    }

//  starting the timer upon first click

let game = document.querySelector('.board');
game.onclick = (function() {
    firstClick++;
if(parseInt(firstClick) < 2) {
game.removeAttribute('onclick');
timeLeft = 25 * 2,
display = document.querySelector('#timer');
gameTimer(timeLeft, display);
}
});

// flip counter when we click cards

function flipCount() {
    clickCounter--;
    let clickCounter = document.querySelector('#flip-counter');
    clickCounter.textContent = clickCounter;
}

function shuffleCards(array) {
    let shuffledCards = array.length - 1,
    temp, index;

    while (shuffledCards > 0) {
        index = Math.floor(Math.random() * shuffledCards);
        shuffledCards--;

        temp = array[shuffledCards];
        array[shuffledCards] = array[index];
        array[index] = temp;
    }
}
