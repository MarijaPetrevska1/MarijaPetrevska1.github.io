console.log("Homework 3 (AJS)");
console.log("Task 1 (Using higher order functions to find the answers)")
console.log("===========================================================");

const recipesUrl = 'https://dummyjson.com/recipes';

// Fetching the data from the global URL variable
fetch(recipesUrl)
  .then(response => response.json()) 
  .then(data => {
    const recipes = data.recipes; 

     // 1. All Desserts 🤤
     const allDesserts = recipes.filter(recipe => recipe.mealType.includes("Dessert") || recipe.tags.includes("Dessert"));
     console.log('1. All Desserts:', allDesserts);
 
     // 2. Get the names of recipes with more than 30 reviews
     const recipesWithMoreThan30Reviews = recipes.filter(recipe => recipe.reviewCount > 30).map(recipe => recipe.name);
     console.log('2. Recipes with more than 30 reviews:', recipesWithMoreThan30Reviews);
 
     // 3. All recipes that use Cinnamon as an ingredient
     const recipesWithCinnamon = recipes.filter(recipe => recipe.ingredients.includes('Cinnamon'));
     console.log('3. Recipes that use Cinnamon as an ingredient:', recipesWithCinnamon);
 
     // 4. Recipes that are served as both Lunch and Dinner
     const lunchAndDinnerRecipes = recipes.filter(recipe => recipe.mealType.includes('Lunch') && recipe.mealType.includes('Dinner'));
     console.log('4. Recipes served as both Lunch and Dinner:', lunchAndDinnerRecipes);
 
     // 5. The ingredients needed for "Mango Salsa Chicken" dish
    const mangoSalsaChicken = recipes.find(recipe => recipe.name === 'Mango Salsa Chicken').ingredients;
    if (mangoSalsaChicken) {
    console.log('5. Ingredients for Mango Salsa Chicken:', mangoSalsaChicken);
    } else {
    console.log('5. Recipe not found');
    }
     // 6. Calculate the average number of calories for all American cuisine recipes
    const americanCuisineRecipes = recipes.filter(recipe => recipe.cuisine === 'American');
    // Checking if there are any recipes
    if (americanCuisineRecipes.length > 0) {
    const avgCaloriesAmericanCuisineRecepies = americanCuisineRecipes.reduce((acc, recipe) => acc + recipe.caloriesPerServing, 0) / americanCuisineRecipes.length;
    console.log('6. Average calories for American cuisine recipes:', avgCaloriesAmericanCuisineRecepies);
    } else {
    console.log('No American cuisine recipes found.');
    }

    // 7. The average cooking time of all pasta recipes
    const pastaRecipes = recipes.filter(recipe => recipe.tags.includes('Pasta'));
    // Check if there are any pasta recipes
    if (pastaRecipes.length > 0) {
    const avgCookingTimePasta = pastaRecipes.reduce((acc, recipe) => acc + recipe.prepTimeMinutes + recipe.cookTimeMinutes, 0) / pastaRecipes.length;
    console.log('7. Average cooking time for Pasta recipes:', avgCookingTimePasta);
    } else {
    console.log('No pasta recipes found.');
    }

     // 8. Recipe with the lowest number of reviews 
     const recipeWithLowestReviews = recipes.reduce((lowest, recipe) => {
     if (recipe.reviewCount < lowest.reviewCount) {
     return recipe;
     }
    return lowest;
    }, recipes[0]);

    console.log('8. Recipe with the lowest number of reviews:', recipeWithLowestReviews);
  })
  .catch(error => console.error('Error fetching data:', error));


  