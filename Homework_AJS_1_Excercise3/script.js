// Homework 1 (Advanced JavaScript)

// ## Excercise 3

// HTML Structure (creating basic html structure with a container)
// Adding Bootstrap
// Fetching Data from the API to get 10 products (handle the response and parse it to json)
// Rendering the Product Cards (loop through the fetched products)
// Handling Errors (.catch)
// Calling the Fetch Function

// Function to fetch products from the API using fetch
function loadProducts() {
    fetch('https://dummyjson.com/products?limit=10')
        .then(function(response) {
                return response.json();  
        })
        .then(function(data) {
            console.log('API Response:', data);  
            renderProductCards(data.products);  
        })
        .catch(function(error) {
            console.error("Error occured: " + error); 
        });
}

// Function to create a product card with Bootstrap classes
function createProductCard(product) {
    console.log('Product Image:', product.images);  

    // Checking if the image URL exists
    // I checked that on some products there are 3 images, so with [0] it will appear on the first image
    const imageUrl = product.images[0] || 'https://via.placeholder.com/150';

    return `
        <div class="col-md-4 mb-4">
            <div class="card shadow-sm border-0 rounded h-100">
                <img src="${imageUrl}" class="card-img-top" alt="${product.title}" style="height: 250px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-center text-primary fw-bold">${product.title}</h5>
                    <p class="card-text text-muted mb-4 flex-grow-1">${product.description}</p>
                    <a href="#" class="btn btn-primary mt-3">View Details</a>
                </div>
            </div>
        </div>
    `;
}

// Function to render the product cards on the page
function renderProductCards(products) {
    let productCardsContainer = document.getElementById('product-cards-container');
    productCardsContainer.innerHTML = '';  

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let productCard = createProductCard(product);
        productCardsContainer.innerHTML += productCard;  
    }
}

// Directly calling the function
loadProducts();


