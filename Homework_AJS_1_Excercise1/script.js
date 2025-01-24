// => HOMEWORK 1 (Advanced JavaScript)

// ## Excercise 1

// -> Creating a button and empty div (HTML)
// -> Adding an Event Listener to for the Button
// -> Fetching the date from the URL (using fetch to request the data) and also parse the response as JSON.
// -> Displaying the fetched data (the academy name and the students)

// 1. Function to fetch data from the URL using fetch
function fetchAcademyData() {
  // Using fetch to make the HTTP request
  fetch(
    "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json"
  )
    .then(function(response) {
      return response.json(); // Parsing the response to JSON
    })
    .then(function(data) {
      // If data is successfully fetched
      const resultContainerDiv = document.getElementById("resultContainer");

      resultContainerDiv.innerHTML = "";

      // Checking if the necessary data exists
      if (data && data.academy && data.students) {
        // 2. Creating and displaying the Academy Name
        const academyNameElement = document.createElement("h1");
        academyNameElement.textContent = data.academy;
        resultContainerDiv.appendChild(academyNameElement);

        // 3. Creating and displaying the Student List
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
    })
    .catch(function() {
      //  Error message
      alert("Error fetching data");
    });
}

// 4. Adding the click event listener to the button
document
  .getElementById("fetchAcademyDataBtn")
  .addEventListener("click", fetchAcademyData);




