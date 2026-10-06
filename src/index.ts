import {
    fetchProductCatalog,
    fetchProductReview,
    fetchSalesReport
} from "./apiSimulator.js";

console.log('=== Starting E-Commerce Dashboard ===');

fetchProductCatalog()
.then((products) => {
    console.log('\n📦 Products retrieved:',products);

    //fetch review for each products
    const reviewPromises = products.map((product) => {
        return fetchProductReview(fetchProductCatalog.id)
        .then((reveiws) => {
            console.log(`\n⭐ Reviews for \({product.name} (ID:\){product.id}):`, reviews);
        })
        .catch((error) => {
            console.error(`⚠️ Error fetching reviews for ${product.name}:`, error);
        });
    });
    // wait for all reviewa to finish before fetching sales report
    return Promise.all(reviewPromises);
})