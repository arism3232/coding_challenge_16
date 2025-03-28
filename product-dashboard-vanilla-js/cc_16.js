// Task2- Fetch Products with .then()
const BASE_URL = 'https://www.course-api.com/javascript-store-products';
function fetchProductsThen() {
    fetch(BASE_URL) // Getting product data from API
    .then(response => response.json()) // Turniing response into data
    .then(products => {
        products.forEach(product => {
            console.log(product.fields.name); // Showing each product name in console
        });
    })
    .catch(error => {
        console.log('Error fetching products', error); // Showing error if fetch fails
    });
}

// Task3- Fetch Products with async/await
async function fetchProductsAsync() {
    try { // To get and show products
        const response = await fetch(BASE_URL);
        const products = await response.json();
        displayProducts(products); // Displaying products on the page
    } catch (error) { // Catching errors
        handleError(error); // Hnadling errors
    }
}

// Task4- Display the Products
function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
    products.slice(0, 5).forEach(product => { // Showing first 5 products
        const fields = product.fields; // Getting product details
        const productElement = document.createElement('div');
        productElement.className = 'product'; // Adding new product class
        productElement.innerHTML = `
        <img src="${fields.image[0].url}" alt="${fields.name}" width="200">
        <h2>${fields.name}</h2>
        <p>Price: $${fields.price / 100}</p>
        `; // Adding image, name, and price to product
        container.appendChild(productElement); // Appending to the contianer
    })
}

// Task5- Reusable Error Handler
function handleError(error) {
    console.log("An error occurred: ", error.message); // Logging error message in console
}

// Task6- Call Your Fetch Functions
fetchProductsThen();
fetchProductsAsync(); // Running fetch functions