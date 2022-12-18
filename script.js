// Declare Variables
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const jokeBtn = document.querySelector(".jokeBtn");
const btns = document.querySelectorAll(".btn");
// Buttons für Kategorien
const programming = document.querySelector(".programming");
const misc = document.querySelector(".misc");
const dark = document.querySelector(".dark");
const pun = document.querySelector(".pun");
const spooky = document.querySelector(".spooky");
const christmas = document.querySelector(".christmas");

// Variable für Kategorie
let kategorie;

// fetch quotes
async function getJokes() {
  const url = `https://v2.jokeapi.dev/joke/${kategorie}?type=twopart`;
  try {
    const response = await fetch(url);
    const joke = response.json();
    joke.then((data) => {
      question.textContent = data.setup;
      answer.textContent = data.delivery;
    });
  } catch (err) {
    console.log(err);
  }
}

jokeBtn.addEventListener("click", getJokes);

// function btn-reset
const clearClassList = function (arr) {
  arr.forEach((el) => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    }
  });
};

// Event Listener BTNs
programming.addEventListener("click", () => {
  clearClassList(btns);
  programming.classList.add("active");
  kategorie = "Programming";
});

misc.addEventListener("click", () => {
  clearClassList(btns);
  misc.classList.add("active");
  kategorie = "Miscellaneous";
});

dark.addEventListener("click", () => {
  clearClassList(btns);
  dark.classList.add("active");
  kategorie = "Dark";
});

pun.addEventListener("click", () => {
  clearClassList(btns);
  pun.classList.add("active");
  kategorie = "Pun";
});

spooky.addEventListener("click", () => {
  clearClassList(btns);
  spooky.classList.add("active");
  kategorie = "Spooky";
});

christmas.addEventListener("click", () => {
  clearClassList(btns);
  christmas.classList.add("active");
  kategorie = "Christmas";
});
