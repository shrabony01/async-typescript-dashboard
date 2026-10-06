export function fetchProductCatalog(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(Math.random() < 0.8 ){
                resolve([
                    {id:1,name:'laptop',price:1200},
                    {id:2,name:'headphones',price:200}
                ]);
            }else{
                reject('failed to fetch product catalog');
            }

        },1000);
    });
}

export const fetchProductReview=()