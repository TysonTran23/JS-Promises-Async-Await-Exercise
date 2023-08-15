// let drawCardURL = axios.get(
//   "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
// );

// drawCardURL.then((response) => {
//   console.log(
//     `${response.data.cards[0].value} of ${response.data.cards[0].suit}`
//   );
// });

// hand = [];
// for (let i = 1; i < 3; i++) {
//   hand.push(axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1"));
// }

// Promise.all(hand).then((response) => {
//   for (let card of response)
//     console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`);
// });

// let getDeck = axios.get(
//   "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
// );

// getDeck.then((response) => {
//   console.log(response.data);
//   deck = response.data.deck_id
//   console.log(deck)
// });

let deckId = null;

let getDeck = axios
  .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then((response) => {
    console.log(response.data.deck_id);
    deckId = response.data.deck_id;
  });

let button = document.getElementById("button");

button.addEventListener("click", function () {
  let drawCard = axios
    .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((response) => {
      console.log(
        `${response.data.cards[0].value} of ${response.data.cards[0].suit}`
      );
      let li = document.createElement("li");
      li.innerText = `${response.data.cards[0].value} of ${response.data.cards[0].suit}`;
      ul = document.getElementsByClassName("cards")[0];
      ul.append(li);
    }).catch((err) => {console.log("no more cards!")}) ;
});
