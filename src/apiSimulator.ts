function fetchProductCatalog(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(){
                resolve(mockData);
            }else{
                reject(new Error('failed to fetch'));
            }

        },1000);
    })
}