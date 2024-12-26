//BONUS HOMEWORK

//Create a recipe page from inputs

// Function to prompt the user for recipe details and show them
function createRecipePage() {
  // Asking the user for the recipe name
  let recipeName = prompt("What is the name of the recipe?");
  // Ask the user how many ingredients they need
  let numIngredients = parseInt(
    prompt("How many ingredients does the recipe need?")
  );
  // Creating an array to hold the ingredients
  let ingredients = [];
  // Asking for each ingredient's name using a basic for loop
  for (let i = 0; i < numIngredients; i++) {
    let ingredient = prompt(`Please enter the name of ingredient #${i + 1}:`);
    ingredients.push(ingredient);
  }
  // Access the HTML element where the recipe information will be displayed
  let recipeContainer = document.getElementById("recipe-container");
  // Clear any previous content
  recipeContainer.innerHTML = "";
  // Creating the HTML content for the recipe page
  // Recipe name as a heading
  let recipeContent = `<h2>${recipeName}</h2>`; 
  // Start table and add a header row
  recipeContent += `<table border="1"><tr><th>Ingredients</th></tr>`; 
  // Loop through the ingredients array and add them to the table
  for (let i = 0; i < ingredients.length; i++) {
    // Add each ingredient as a table row
    recipeContent += `<tr><td>${ingredients[i]}</td></tr>`;
  }
  recipeContent += `</table>`; // Close the table
  // Add the content to the recipe container
  recipeContainer.innerHTML = recipeContent;
}
// Call the function to create the recipe page
createRecipePage();
