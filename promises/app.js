let baseURL = "http://numbersapi.com";
let favouriteNumber = 7;
let getFact = axios.get(`http://numbersapi.com/${favouriteNumber}?json`);

// 1.
getFact
  .then((response) => console.log(response.data))
  .catch((err) => console.log(err));

numbers = [7, 8, 9];

// 2.
for (let number of numbers) {
  fact = axios.get(`http://numbersapi.com/${number}?json`);
  fact
    .then((response) => {
      console.log(response.data);
      p = document.createElement("p");
      p.append(response.data.text);
      body = document.querySelector("body");
      body.append(p);
    })
    .catch((err) => console.log(err));
}

// 3.
let fourFacts = [];
for (let i = 1; i < 5; i++) {
  fourFacts.push(getFact);
}

Promise.all(fourFacts)
  .then((facts) => {
    for (let response of facts) {
      console.log(response.data.text);
      p = document.createElement("p");
      p.append(response.data.text);
      body = document.querySelector("body");
      body.append(p);
    }
  })
  .catch((err) => console.log(err));
