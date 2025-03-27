// Task2- Fetch Products with .then()
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            console.log(product.fields.name);
        });
    })
    .catch(error => {
        console.log('Error fetching products', error);
    });
}

// Task3- Fetch Products with async/await
async function fetchProductsAsync() {
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}

// Task4- Display the Products
function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
    products.slice(0, 5).forEach(product => {
        const fields = product.fields;
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
        <img src="${fields.image[0].url}" alt="${fields.name}" width="200">
        <h2>${fields.name}</h2>
        <p>Price: $${fields.price / 100}</p>
        `;
        container.appendChild(productElement);
    })
}

// Task5- Reusable Error Handler
function handleError(error) {
    console.log("An error occurred: ", error.message);
}

// Task6- Call Your Fetch Functions
fetchProductsThen();
fetchProductsAsync();