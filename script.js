let button = document.getElementById("btn");
let output = document.getElementById("output");


const url = "https://emoji-api.com/emojis?access_key=65a2155f36841dc4807d66bf79bcd76104471815";

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}


button.addEventListener("click", async() => {
  output.textContent = "fetching...";
  let response = await fetch(url);
 let data = await response.json();


 let randomIndex = getRandomNumber(data.length);

 let emoji = data[randomIndex].character;
 let emojiName = data[randomIndex].unicodeName;

 button.textContent = emoji;

 output.textContent = emojiName;
});