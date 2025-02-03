// => HOMEWORK 1 (Advanced JavaScript)

// ## Excercise 1

// -> Creating a button and empty div (HTML)
// -> Adding an Event Listener to for the Button
// -> Fetching the date from the URL (using fetch to request the data) and also parse the response as JSON.
// -> Displaying the fetched data (the academy name and the students)

// 1. Global variable for the URL
const academyDataURL = "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json";

// 2. Function to fetch data from the URL
function fetchAcademyData() {
  fetch(academyDataURL)
    .then(function(response) {
      return response.json(); // Parsing the response to JSON
    })
    .then(function(data) {
      printAcademyData(data); // Pass the fetched data to the print function
    })
    .catch(function() {
      // Error message
      alert("Error fetching data");
    });
}

// 3. Function to print the fetched data
function printAcademyData(data) {
  const resultContainerDiv = document.getElementById("resultContainer");
  resultContainerDiv.innerHTML = "";

  // Checking if the necessary data exists
  if (data && data.academy && data.students) {
    // 4. Creating and displaying the Academy Name
    const academyNameElement = document.createElement("h1");
    academyNameElement.textContent = data.academy;
    resultContainerDiv.appendChild(academyNameElement);

    // 5. Creating and displaying the Student List
    const studentList = document.createElement("ul");
    for (let i = 0; i < data.students.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = data.students[i];
      studentList.appendChild(listItem);
    }
    resultContainerDiv.appendChild(studentList);
  } else {
    alert("Error: Missing academy or student information.");
  }
}

// 6. Adding the click event listener to the button
document
  .getElementById("fetchAcademyDataBtn")
  .addEventListener("click", fetchAcademyData);





