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