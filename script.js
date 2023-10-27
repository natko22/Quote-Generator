const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// Show new Quote(locally)

function newQuote() {
  loading();
  // Pick a random quote from api
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  // Check if author field is blank and replace it with unknown
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }

  // Check quote lenght to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  // authorText.textContent = quote.author;
  quoteText.textContent = quote.text;
  complete();
}
console.log("QUOTE", quote);
newQuote();
// loading();

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// Show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}
// let apiQuotes = [];

// Get Quotes from API

// async function getQuotes() {
// loading()
//   const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     console.log("APIQUOTES", apiQuotes[12]);

//     newQuote();
//   } catch (error) {
//     // Catch error here
//     // alert(error)
//   }
// }

// On Load
// getQuotes();
