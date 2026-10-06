import {
    fetchProductCatalog,
    fetchProductReview,
    fetchSalesReport
} from "./apiSimulator.js";

console.log('=== Starting E-Commerce Dashboard ===');

fetchProductCatalog()
.then(products) => {
    console.log('\n📦 Products retrieved:',products);
}