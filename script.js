const cardsArray = [
  {
    name: "batman",
    img: "images/batman-img.png",
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
    name: "catwoman",
    img: "images/catwoman-img.png",
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

// create game grid
const game = document.getElementById("game");

const grid = document.createElement("section");
grid.setAttribute("class", "grid");

game.appendChild(grid);

// create a div for cards
cardsArray.forEach((item) => {
  const card = document.createElement("div");

  // adding class to card div
  card.classList.add("card");

  card.dataset.name = item.name;
  card.style.backgroundImage = `url(${item.img})`;

  grid.appendChild(card);
});
