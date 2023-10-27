const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Show new Quote(locally)

function newQuote() {
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
}
console.log("QUOTE", quote);
newQuote();

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);
// let apiQuotes = [];

// Get Quotes from API

// async function getQuotes() {
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
