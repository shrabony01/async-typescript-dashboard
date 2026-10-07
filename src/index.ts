import {
    fetchProductCatalog,
    fetchProductReview,
    fetchSalesReport,
    NetworkError,
    DataError
} from "./apiSimulator.js";

console.log('=== Starting E-Commerce Dashboard ===');

fetchProductCatalog()
.then((products:any) => {
    console.log('\n📦 Products retrieved:',products);

    //fetch review for each products
    const reviewPromises = products.map((product:any) => {
        return fetchProductReview(product.id)
        .then((reveiws) => {
            console.log(`\n⭐ Reviews for $({product.name} (ID:${product.id}):`, reveiws);
        })
        .catch((error) => {
            if (error instanceof DataError) {
            console.error(`[Data Issue] $({error.name}:${error.message}`);
          } else {
            console.error(`[Review Error]:`, error);
          }
            
        });
    });
    // wait for all reviewa to finish before fetching sales report
    return Promise.all(reviewPromises);
})
.then(() => {
    // Fetch sales report after products and reviews
    return fetchSalesReport();
  })
  .then((salesReport) => {
    console.log("\n📊 Sales Report retrieved:", salesReport);
  })
  .catch((error) => {
    if (error instanceof NetworkError) {
      console.error(`\n🌐 [Network Failure] ${error.name}:${error.message}`);
    } else if (error instanceof DataError) {
      console.error(`\n📄 [Data Format Failure] ${error.name}:${error.message}`);
    } else {
      console.error("\n❌ General Dashboard Error:", error);
    }
    
  })
  .finally(() => {
    console.log("\n✅ All API calls have been attempted.");
  });