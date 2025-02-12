// Homework 3 (AJS)
// Exercises 
// => Exercise 2 (Using higher order functions to find the answers)


const apiUrl = 'https://dummyjson.com/products';

// Fetching the products data
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const products = data.products;

    // 1. All laptops in stock ordered by price descending
    const laptopsInStockDescending = products.filter(product => product.category === "laptops" && product.stock > 0).sort((a, b) => b.price - a.price);
    console.log("1. All laptops in stock ordered by price descending:", laptopsInStockDescending);

    // 2. The first grocery item
    const firstGroceryItem = products.find(product => product.category === "groceries");
    console.log("2. The first grocery item:", firstGroceryItem);

    // 3. Index of the first "Samsung" smartphone
    const samsungSmartphoneIndex = products.findIndex(product => product.brand === "Samsung" && product.category === "smartphones");
    console.log("3. Index of the first 'Samsung' smartphone:", samsungSmartphoneIndex);

    // 4. Check if there is any item from the brand "Sony"
    const isSonyItemPresent = products.some(product => product.brand === "Sony");
    console.log("4. Is there any item from the brand 'Sony'? :", isSonyItemPresent);

    // 5. The name of the highest rated skincare product
    const highestRatedSkincare = products.filter(product => product.category === "skincare")
    .reduce(function(max, product) {
    if (product.rating > max.rating) {
      return product;
    }
    return max;
    }, { rating: -Infinity });

    console.log("5. The name of the highest rated skincare product:", highestRatedSkincare.title);

    // 6. The average discount percentage of products with a rating above 4.5
    const highRatedProducts = products.filter(product => product.rating > 4.5);
    const avgDiscount = highRatedProducts.reduce((sum, product) => sum + product.discountPercentage, 0) / highRatedProducts.length;
    console.log("6. Average discount percentage of products with a rating above 4.5:", avgDiscount.toFixed(2));

   // 7. Find the product with the highest price
    const highestPriceProduct = products.reduce(function(max, product) {
    if (product.price > max.price) {
    return product;  
    }
    return max;  
    }, { price: 0 });

    console.log("7. The product with the highest price:", highestPriceProduct.title);

    // 8. Average price of all iPhone smartphones
    const iPhoneProducts = products.filter(product => product.title.toLowerCase().includes('iPhone'));
    // Checking if there are any iPhone products
    if (iPhoneProducts.length > 0) {
    const avgIphoneSmartphonesPrice = iPhoneProducts.reduce((sum, product) => sum + product.price, 0) / iPhoneProducts.length;
    console.log("8. Average price of all iPhone smartphones:", avgIphoneSmartphonesPrice.toFixed(2));
    } else {
     console.log("No iPhone smartphones found.");
    }

    // 9. The product with the lowest price
    const lowestPriceProduct = products.reduce(function(min, product) {
    if (product.price < min.price) {
    return product;  
    }
    return min;  
    }, { price: Infinity });

    console.log("9. The product with the lowest price:", lowestPriceProduct.title);

  })
  .catch(error => console.error("Error fetching data:", error));


  