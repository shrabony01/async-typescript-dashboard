export function fetchProductCatalog(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(Math.random() < 0.8 ){
                resolve('success! here is the data');
            }else{
                reject('failed to fetch');
            }

        },1000);
    });
}
