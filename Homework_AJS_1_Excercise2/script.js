// Homework 1 (Advanced JavaScript)

// ## Excercise 2

// 1) Creating the HTML Structure (button, h1 tag and a table)
// 2) Creating the function to fetch the data from the StarWars API
// 3) Creating a function to display the data
// 4) Attaching the event listener to the button
// => I tried to separate the logic into functions

// Function to fetch the person data
function getPersonInfo() {
  const url = "https://swapi.dev/api/people/1";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayPersonData(data);
    })
    .catch(function (error) {
      console.error("Error occurred:", error);
    });
}

// Function to display the person's name and person's information
function displayPersonData(data) {
  const name = data.name;
  const height = data.height;
  const mass = data.mass; // Using mass instead of weight
  const eyeColor = data.eye_color;
  const hairColor = data.hair_color;

  // Updating the name in the h1 tag
  document.getElementById("personName").textContent = name;

  // Creating the table row
  const tbody = document.querySelector("#personInformation tbody");
  tbody.innerHTML = ""; // Clear any previous data

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${height} cm</td>
    <td>${mass} kg</td> <!-- Showing mass as weight -->
    <td>${eyeColor}</td>
    <td>${hairColor}</td>
  `;
  tbody.appendChild(row);
}

// Function to initialize the table with placeholders
function initializeTable() {
  const tbody = document.querySelector("#personInformation tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  `;
  tbody.appendChild(row);
}

// Adding event listener for the button click
document
  .getElementById("loadPersonData")
  .addEventListener("click", getPersonInfo);

// Initialize the table with placeholders
initializeTable();

