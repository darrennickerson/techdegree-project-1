/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `getRandomQuote` function
***/

function getRandomQuote(arr) {
  //get a random quote from the array of objects
  const randomQuote = arr[Math.floor(Math.random()*arr.length)];
  return randomQuote;

};


/***
 * `printQuote` function
***/

const printQuote = () => {

// targetContainer is where the html will be injected in the DOM
const targetContainer = document.getElementById('quote-box')

quote = getRandomQuote(quotes);

// quoteBody is the quote contents. It's implied that there will be quote and source for quote. 
quoteBody = `
    <p class="quote"> ${quote.quote}</p>
   <p class="source">${quote.source}
   `;

// Check to see if there is a citation and year for this quote 

   if (quote.citation) {
    quoteBody += `<span class="citation">${quote.citation}</span>`;
   }
   if (quote.year) {
    quoteBody += `<span class="year">${quote.year}</span>`;
   }
   
quoteBody += `</p>`


targetContainer.innerHTML = quoteBody;
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
