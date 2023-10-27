let apiQuotes = [];
// Get Quotes from API

async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    console.log("APIQUOTES", apiQuotes);
  } catch (error) {
    // alert(error)
    // Catch error here
  }
}

// On Load
getQuotes();
