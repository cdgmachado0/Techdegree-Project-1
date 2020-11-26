/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

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
    year: 2005
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  const randonNum = Math.floor(Math.random() * 5);
  return quotes[randonNum];
}


/***
 * `printQuote` function
***/
function printQuote() {
  const quote = getRandomQuote();
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

  document.querySelector('.quote-box').innerHTML = html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
