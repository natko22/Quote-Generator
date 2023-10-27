let apiQuotes = [];

// Show new Quote
function newQuote() {
  // Pick a random quote from api
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log("QUOTE", quote);
}

// Get Quotes from API

async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    console.log("APIQUOTES", apiQuotes[12]);

    newQuote();
  } catch (error) {
    // Catch error here
    // alert(error)
  }
}

// On Load
getQuotes();
