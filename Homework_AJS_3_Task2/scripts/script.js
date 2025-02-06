
console.log("Homework 3 (AJS) - Task 2");
console.log("Using higher order functions to find the answers");
console.log("=================================================")
const apiUrl = "https://dummyjson.com/carts";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const carts = data.carts;

    // 1. All product titles in all carts
    const allProductTitles = carts.flatMap(cart => cart.products.map(product => product.title));
    console.log("1. All Product Titles in all carts:", allProductTitles);

    // 2. The total quantity of all products purchased
    const totalQuantityOfAllProductsPurchased = carts.reduce((sum, cart) => sum + cart.totalQuantity, 0);
    console.log("2. Total Quantity:", totalQuantityOfAllProductsPurchased);

    // 3. Check if there is any cart with a total value above $100,000
    const highValueCart = carts.some(cart => cart.total > 100000);
    console.log("3. Is there any cart with a total value above $100,000?", highValueCart);

    // 4. The total revenue from all carts (sum of all discountedTotal values)
    const totalRevenue = carts.reduce((sum, cart) => sum + cart.discountedTotal, 0);
    console.log("4. Total Revenue from all carts:", totalRevenue);

    // 5. The cart with the highest total value
    const highestTotalValueCart = carts.reduce((max, cart) => {
    if (cart.total > max.total) {
      return cart;
    } else {
      return max;
    }
    }, carts[0]);
    console.log("5. Cart with the highest total value:", highestTotalValueCart);
  
    // 6. Find all products with a discount greater than 15%
    const discountedProducts = carts.flatMap(cart => cart.products.filter(product => product.discountPercentage > 15));
    console.log("6. Products with a discount greater than 15%:", discountedProducts);

    // 7. The user ID of the cart with the highest total quantity
    const highestQuantityCart = carts.reduce((max, cart) => {
    if (cart.totalQuantity > max.totalQuantity) {
      return cart;
    }
    return max;
    }, carts[0]);
    console.log("7. The user ID of the cart with the highest total quantity:", highestQuantityCart.userId);
  
    // 8. The most expensive product in all carts (before discount)
    const mostExpensiveProduct = carts.flatMap(cart => cart.products).reduce((max, product) => {
    if (product.price > max.price) {
    return product;
    }
    return max;
    }, carts[0].products[0]);

    console.log("8. The most expensive product (before discount):", mostExpensiveProduct);

    // 9. The average discounted total per cart
    const averageDiscountedTotal = totalRevenue / carts.length;
    console.log("9. The average discounted total per cart:", averageDiscountedTotal);

    // 10. The top 3 most expensive products after discount
    const top3ExpensiveProducts = carts.flatMap(cart => cart.products).sort((a, b) => b.discountedTotal - a.discountedTotal).slice(0, 3);
    console.log("10. Top 3 Most Expensive Products After Discount:", top3ExpensiveProducts);
  })
  .catch(error => console.error("Error occured:", error));




  