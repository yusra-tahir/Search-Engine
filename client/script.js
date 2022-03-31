const form = document.querySelector('form');
const quoteDisplay = document.getElementById('text1');
const allResults = document.getElementById('allResults');
const oneResult = document.getElementById('oneResult');

// Handle submit event and run the function to fetch a random quote
allResults.addEventListener('click', oneResult);

function oneResult(e) {
  e.preventDefault()
  fetch('http://localhost:3001/google_searches')
    .then(resp => resp.text())
    .then(Google => document.getElementById('tex1t').textContent = Google)
}
