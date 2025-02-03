// Homework 2 (Advanced JS)

// ## Task 2


// Variables
const button = document.getElementById('show-planets-btn');
const tableBody = document.querySelector('#planets-table tbody');
const planetImageContainer = document.getElementById('planet-image');
let currentPage = 1; 

// Base URL for fetching planets data
const baseURL = 'https://swapi.py4e.com/api/planets/?page=';

// Adding elements for NEXT 10 and PREVIOUS 10 buttons
let nextButton = document.createElement('button');
nextButton.textContent = 'NEXT 10';
nextButton.id = 'next-planets-btn';
nextButton.style.display = 'none';

let previousButton = document.createElement('button');
previousButton.textContent = 'PREVIOUS 10';
previousButton.id = 'previous-planets-btn';
previousButton.style.display = 'none';

// Adding buttons below the table
const tableContainer = document.querySelector('.table-container');
tableContainer.appendChild(nextButton);
tableContainer.appendChild(previousButton);

// Functions
// Function fetchPlanets
function fetchPlanets(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Clearing existing rows in the table
      tableBody.innerHTML = '';
      // Calling displayPlanets to show planets
      displayPlanets(data.results);
      // Update button visibility based on the current page
      updateButtonVisibility(data.next, data.previous);
    })
    .catch(error => console.error('An error occurred while fetching the planets data:', error));
}

function displayPlanets(planets) {
  for (let i = 0; i < planets.length; i++) {
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

// Function to update the button visibility
function updateButtonVisibility() {
  if (currentPage === 1) {
    previousButton.style.display = 'none';
    nextButton.style.display = 'inline-block'; 
  } else {
    previousButton.style.display = 'inline-block'; 
    nextButton.style.display = 'none'; 
  }
}

// Event Handlers
button.addEventListener('click', function() {
  fetchPlanets(`${baseURL}${currentPage}`);
});

nextButton.addEventListener('click', function() {
  currentPage++;
  fetchPlanets(`${baseURL}${currentPage}`);
});

previousButton.addEventListener('click', function() {
  currentPage--;
  fetchPlanets(`${baseURL}${currentPage}`);
});
