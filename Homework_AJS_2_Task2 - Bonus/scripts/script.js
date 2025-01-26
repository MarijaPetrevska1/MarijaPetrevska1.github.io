// Homework 2 (Advanced JS)

// ## Task 2


// Variables
const button = document.getElementById('show-planets-btn');
const tableBody = document.querySelector('#planets-table tbody');
let currentPage = 1; 

// Add elements for NEXT 10 and PREVIOUS 10 buttons
let nextButton = document.createElement('button');
nextButton.textContent = 'NEXT 10';
nextButton.id = 'next-planets-btn';
nextButton.style.display = 'none';

let previousButton = document.createElement('button');
previousButton.textContent = 'PREVIOUS 10';
previousButton.id = 'previous-planets-btn';
previousButton.style.display = 'none'; 

// Add buttons below the table
const tableContainer = document.querySelector('.table-container');
tableContainer.appendChild(previousButton);
tableContainer.appendChild(nextButton);

// Functions
function fetchPlanets(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Clearing existing rows in the table
      tableBody.innerHTML = '';
      // Calling displayPlanets to show planets
      displayPlanets(data.results);
      // Update button visibility based on the URLs
      updateButtonVisibility(data.next, data.previous);
    })
    .catch(error => console.error('An error occurred while fetching the planets data:', error));
}

function displayPlanets(planets) {
  // Loop through the planets and display the data
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

function updateButtonVisibility(nextUrl, prevUrl) {
  // Show "Next 10" if there is a next URL 
  if (nextUrl) {
    nextButton.style.display = 'inline-block';
  } else {
    nextButton.style.display = 'none';
  }

  // Show "Previous 10" button if there's a previous page
  if (prevUrl) {
    previousButton.style.display = 'inline-block';
  } else {
    previousButton.style.display = 'none';
  }
}

// Event Handlers
button.addEventListener('click', function() {
  fetchPlanets(`https://swapi.py4e.com/api/planets/?page=${currentPage}`);
  // After fetching the first 10 planets, show "Previous 10"
  previousButton.style.display = 'inline-block';
  nextButton.style.display = 'inline-block'; 
});

nextButton.addEventListener('click', function() {
  currentPage++;
  fetchPlanets(`https://swapi.py4e.com/api/planets/?page=${currentPage}`);
});

previousButton.addEventListener('click', function() {
  currentPage--;
  if (currentPage === 1) {
    previousButton.style.display = 'none'; 
  }
  fetchPlanets(`https://swapi.py4e.com/api/planets/?page=${currentPage}`);
});

