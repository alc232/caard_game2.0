document.addEventListener('DOMContentLoaded', () => {

const cardsArray = [
  {
    name: "batman",
    img: "images/batman-img.png",
  },
   {
    name: "batman",
    img: "images/batman-img.png",
  },
  {
    name: "bane",
    img: "images/bane-img.jpg",
  },
   {
    name: "bane",
    img: "images/bane-img.jpg",
  },
  {
    name: "riddler",
    img: "images/riddler-img.png",
  },
  {
    name: "riddler",
    img: "images/riddler-img.png",
  },
  {
    name: "joker",
    img: "images/joker-img.jpg",
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
    name: "penguin",
    img: "images/penguin-img.jpg",
  },
  {
    name: "freeze",
    img: "images/freeze-img.png",
  },
  {
    name: "freeze",
    img: "images/freeze-img.png",
  },
  {
    name: "catwoman",
    img: "images/catwoman-img.png",
  },
  {
    name: "catwoman",
    img: "images/catwoman-img.png",
  },
  {
    name: "ivy",
    img: "images/ivy-img.jpg",
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
    name: "harley",
    img: "images/harley-img.png",
  },
  {
    name: "robin",
    img: "images/robin-img.png",
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
    name: "alfred",
    img: "images/alfred-img.png",
  },
  {
    name: "raj",
    img: "images/raj-img.png",
  },
  {
    name: "raj",
    img: "images/raj-img.png",
  }
];

//  random card sort
cardsArray.sort(() => 0.5 Math.random());

const game = document.querySelector('.game');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

//  creating the game board
function createBoard() {
    for (let i= 0; i < cardsArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'images/bat-logo.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipcard);
        game.appendChild(card);
    }
}

//  creating the flip function

function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardsArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardsArray[cardId].img);
    //  if correct check for match
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 1000);
    }
}


createBoard();
});