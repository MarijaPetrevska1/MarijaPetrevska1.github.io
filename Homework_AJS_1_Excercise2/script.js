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
      console.error("Error occured:", error);
    });
}

// Function to display the person's name and person's information
function displayPersonData(data) {
  const name = data.name;
  const height = data.height;
  const weight = "N/A"; // Weight isn't available in the API
  const eyeColor = data.eye_color;
  const hairColor = data.hair_color;

  // Updating the name in the h1 tag
  document.getElementById("personName").textContent = name;

  // Creating the table row
  const tbody = document.querySelector("#personInformation tbody");
  tbody.innerHTML = "";
  const row = document.createElement("tr");
  row.innerHTML = `
        <td>${height} cm</td>
        <td>${weight}</td>
        <td>${eyeColor}</td>
        <td>${hairColor}</td>
      `;
  tbody.appendChild(row);
}

// Adding event listener for the button click
document
  .getElementById("loadPersonData")
  .addEventListener("click", getPersonInfo);
