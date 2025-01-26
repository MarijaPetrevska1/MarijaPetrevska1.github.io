// Homework 2

// ## Exercise 2

// Variables
const changeStyleBtn = document.getElementById("changeStyleBtn");
const textSizeInput = document.getElementById("textSizeInput");
const colorInput = document.getElementById("colorInput");
const heading = document.getElementById("heading");

// Functions
// Arrow function for changing text color
const setTextColor = (elementToChange, color) => {
  if (!color) {
    color = "black"; // Default color is black
  }
  elementToChange.style.color = color;
};

// Arrow function for changing text size
const setTextSize = (elementToChange, textSize) => {
  if (!textSize || textSize <= 0) {
    textSize = 24; // Default size is 24px
  }
  elementToChange.style.fontSize = `${textSize}px`;
};

// Event Listener
changeStyleBtn.addEventListener("click", () => {
  const textSize = textSizeInput.value;
  const color = colorInput.value;

  setTextSize(heading, textSize);
  setTextColor(heading, color);
});




