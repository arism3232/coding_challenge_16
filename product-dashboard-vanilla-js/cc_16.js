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