const favNum = 7;
URL = "http://numbersapi.com";
async function getFact() {
  let response = await axios.get(`${URL}/${favNum}?json`);
  console.log(response.data.text);
}

numbers = [1, 2, 3];

async function getFacts() {
  for (number of numbers) {
    let response = await axios.get(`${URL}/${number}?json`);
    console.log(response.data.text);
  }
}

async function getFacts7() {
  for (let i = 0; i < 4; i++) {
    let response = await axios.get(`${URL}/${favNum}?json`);
    console.log(response.data.text);
    $('#facts-container').append('<p>' + response.data.text + "</p>")
  }
}
