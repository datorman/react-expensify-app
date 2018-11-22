const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({thing1:'This is my resolved data',thing2:'thing 2'});
        //reject('wrongerino');
    }, 1500)
});

promise.then((data) => {
    console.log(data);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('this is my other promise');
            //reject('wrongerino');
        }, 1500)
    });
}).then((str)=>{
    console.log('Second promise in the chain',str) 
}).catch((error) =>{
    console.log(error);
});