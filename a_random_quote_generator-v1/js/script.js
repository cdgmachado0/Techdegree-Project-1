/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing",
    source: "Walt Disney"
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor",
    source: "Eleanor Roosevelt"
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall",
    source: "Nelson Mandela"
  },
  {
    quote: "Now is the time to make justice a reality for all of God’s children.",
    source: "Martin Luther King Jr.",
    citation: "'I have a dream' speech",
    year: 1963
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life",
    source: "Steve Jobs",
    citation: "Standford Commencement Speech",
    year: 2005,
    tags: '#inspirational'
  }
];

/**
 * Produces a random number between 0 and its parameter
 * @param {number} _num upper number that the random number can get
 * @returns {number} random number between 0 and _num
 */
const getRandomNumber = _num => Math.floor(Math.random() * _num);


/**
 * Gets a random quote from the quotes array
 * @param {number} _num returned random number that will serve as index on the quotes' array
 * @returns {object} quote with all of its properties
 */
const getRandomQuote = _num => quotes[getRandomNumber(_num)];


/**
 * Prints the random quote on index.html
 * Checks that the same random quote is not used in the following call
 * Changes the background color of the body with each random quote
 */
function printQuote() {
  const previousQuote = document.querySelector('.quote');
  let quote;
  do {
    quote = getRandomQuote(5);
  } while (previousQuote.textContent === quote.quote)
  
  let html = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}
  `;
  if (quote.citation) {
    html += `
      <span class="citation">${quote.citation}</span>
      <span class="year">${quote.year}</span>
    </p>
    `;
  } else {
    html += '</p>';
  }
  if (quote.tags) {
    html += `<p>${quote.tags}</p>`;
  }

  document.querySelector('.quote-box').innerHTML = html;
  document.querySelector('body').style.backgroundColor = `rgb(${getRandomNumber(256)}, ${getRandomNumber(256)}, ${getRandomNumber(256)})`;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

setInterval(function() {printQuote();}, 10000);
