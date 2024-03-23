const quote = document.getElementById("quote");
const author = document.getElementById("author");
const fetchButton = document.getElementById("fetchButton");



fetchData();

async function fetchData() {
  try {
    let response = await fetch("https://dummyjson.com/quotes/random");
    let value = await response.json();

    quote.textContent = value.quote;
    author.textContent = value.author;
  } catch (error) {
    console.log(error);
  }
}

fetchButton.addEventListener("click", fetchData);
