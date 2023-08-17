const drawCard = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
const brandNewDeck = "https://deckofcardsapi.com/api/deck/new/";

async function drawACard() {
  let response = await axios.get(drawCard);
  console.log(
    `${response.data.cards[0].value} of ${response.data.cards[0].suit}`
  );
}

const deck = {
  async init() {
    let res = await axios.get("https://www.deckofcardsapi.com/api/deck/new/");
    this.deckId = res.data.deck_id;
  },
  async drawCard() {
    try {
      let res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`
      );
      console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`);
      let div = $('<div id="hand"></div>');
      div.append(
        "<p>" + res.data.cards[0].value + "of" + res.data.cards[0].suit
      );
      $("body").append(div);
    } catch (e) {
      console.log("no more cards brother", e);
    }
  },
};
