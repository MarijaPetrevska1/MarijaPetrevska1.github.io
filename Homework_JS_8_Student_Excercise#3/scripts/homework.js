//STUDENT EXCERCISE #3

// all the input elements inside the 'userInputs' div
let inputs = document.getElementById("userInputs").children;
// The 'result' paragraph where the user info will be displayed
let result = document.getElementById("result");
// Submit Button
let submitBtn = document.getElementById("submit");

// Function to collect user information from the input elements 
function getUserInfo(inputElements){
    // Start with the label "User: "
    let result = "User: ";
    // FOR: => Loop through all input elements
    for (let input of inputElements) {
    // Added each input's value
        result = result + input.value + " ";
    }
    // Add a message indicating the user is registered
    result = result + "is registered!"
    // Return the complete user info message
    return result;
}
// An Event listener to the SUBMIT BUTTON 
submitBtn.addEventListener("click", function(){
// Call the 'getUserInfo' function and display the result in the 'result' paragraph
    result.innerText = getUserInfo(inputs);
});
