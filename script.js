const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const facebookBtn = document.getElementById('facebook');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//Show Loading

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;

}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}


// let apiQuotes = [];

// Show New Quote
function newQuote() {
    loading();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // Check if Authore field is blank and replace it with 'unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    // Chekc the Quote lenght to determine styling
    if (quote.text.length > 90) {
        quoteText.classList.add('long-quote');

    } else {
        quoteText.classList.remove('long-quote');
    }

    // Set Quote, Hide Loader

    quoteText.textContent = quote.text;
    complete();
}




// Get Quotes From API

// async function getQuotes () {
//     const apiUrl = 'https://type.fit/api/quotes'

//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();


//     } catch (error) {
//         // Catch Error Here
//     }
// }

// Share a Quote
function facebookQuote() {
    const facebookUrl = `https://www.facebook.com/dialog/share?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(facebookUrl, '_blank');
}

// Event listeners
newQuoteBtn.addEventListener('click', newQuote);
facebookBtn.addEventListener('click', facebookQuote);


// On Load
// getQuotes();

newQuote();