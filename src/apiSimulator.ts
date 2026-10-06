//4.custom error classes
export class NetworkError extends Error{
    constructor(message:string){
        super(message);
        this.name="NetworkError";
    }
}

export class DataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataError";
  }
}
//api siimulator functions

export function fetchProductCatalog(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(Math.random() < 0.8 ){
                resolve([
                    {id:1,name:'laptop',price:1200},
                    {id:2,name:'headphones',price:200}
                ]);
            }else{
                reject(new NetworkError("Failed to fetch product catalog: Connection timed out"));
            }

        },1000);
    });
}

export const fetchProductReview=(productId:number) => {
    return new Promise ((resolve,reject) => {
        setTimeout ( () =>{
            if(Math.random() < 0.8){
                resolve([
                    {reviewId:101,rating:5,comment: 'Great product!'},
                    {reviewId:102,rating:4,comment:'Good value for money'}
                ]);
            }else{
                reject(new DataError(`Failed to fetch reviews for product ID ${productId}: Corrupted payload`));
            }
        },1500);
     });
}

export const fetchSalesReport = () =>{
    return new Promise ((resolve,reject) => {
        setTimeout (() => {
            if (Math.random() < 0.8){
                resolve ({
                    totalSales: 54000,
                    unitSold:320,
                    averagePrice : 168.75
                });
            } else{
                reject (new NetworkError("Failed to fetch sales report: Server unreachable"));
            }
        },1000);
    });
};

console.log('testing fetchproductcatalog..');
fetchProductCatalog()
.then((products) =>{
    console.log('success product recuved',products);
})
.catch((error) => {
    console.error("Caught an error:", error);
  });