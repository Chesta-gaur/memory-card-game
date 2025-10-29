const cards = document.querySelectorAll(".card");

let matchCard = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard(e) {
  //getting cards click
  let clickedCard = e.currentTarget;
  if (clickedCard !== cardOne && !disableDeck) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      //return the cardOne value to clicked card
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;

    let cardOneImg = cardOne.querySelector("img").src,
      cardTwoImg = cardTwo.querySelector("img").src;
    disableDeck = true;
    matchCards(cardOneImg, cardTwoImg);
  }
}

//match cards function
function matchCards(img1, img2) {
  if (img1 === img2) {
    matchCard++;
    if (matchCard == 8) {
      setTimeout(() => {
        alert("🎉 Congratulations! You Won!");
        return shuffleCard();
      }, 1000);
    }
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = "";
    return (disableDeck = false);
  }

  //if two cards are not matched
  setTimeout(() => {
    //adding shake class to both after 400ms
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 400);

  setTimeout(() => {
    //removing both shake and flip class after 1200ms
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = "";
    disableDeck = false;
  }, 1200);
}

// shuffle card function
function shuffleCard() {
  matchCard = 0;
  cardOne = cardTwo = "";
  disableDeck = false;

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  arr.sort(() => Math.random() - 0.5);

  cards.forEach((card, index) => {
    card.classList.remove("flip");
    setTimeout(() => {
      card.classList.remove("shake");
    }, 300);
    let imgTag = card.querySelector("img");
    imgTag.src = `assets/img${arr[index]}.png`;
    card.addEventListener("click", flipCard);
  });
}

shuffleCard();
