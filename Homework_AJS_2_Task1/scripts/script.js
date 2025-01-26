// Homework 2 
 
// ## Task1

// --------------------------------------
// Variables
// --------------------------------------
const button = document.getElementById('show-planets-btn');
const tableBody = document.querySelector('#planets-table tbody');

// --------------------------------------
// Functions
// --------------------------------------

// Fetching planets data from the API
function fetchPlanets(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Clearing existing rows in the table
      tableBody.innerHTML = '';
    // Calling displayPlanets to display the first 10 planets
    displayPlanets(data.results);
    })
    .catch(error => console.error('An error occurred while fetching the planets data:', error));
}

// Print planet data into the table using a for loop 
function displayPlanets(planets) {
  // Loop through the FIRST 10 planets
  for (let i = 0; i < planets.length && i < 10; i++) {
    const planet = planets[i];
    const row = document.createElement('tr');
    
    const planetNameCell = document.createElement('td');
    planetNameCell.textContent = planet.name;
    row.appendChild(planetNameCell);
    
    const planetPopulationCell = document.createElement('td');
    planetPopulationCell.textContent = planet.population;
    row.appendChild(planetPopulationCell);
    
    const planetClimateCell = document.createElement('td');
    planetClimateCell.textContent = planet.climate;
    row.appendChild(planetClimateCell);
    
    const planetGravityCell = document.createElement('td');
    planetGravityCell.textContent = planet.gravity;
    row.appendChild(planetGravityCell);
    
    tableBody.appendChild(row);
  }
}

// --------------------------------------
// Events
// --------------------------------------

// Add event listener to the button to trigger planet fetching
button.addEventListener('click', function() {
  fetchPlanets('https://swapi.py4e.com/api/planets/?page=1');
});
