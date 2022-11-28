
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("Udało się!"); }, 5000);
});
promise.then((value) => {
    console.log(value);
})
const multiplyAsync = (x,y)=> {
    return new Promise((resolve, reject) => {
        if(typeof x !== 'number' || typeof y !== 'number'){
         reject("not a number");
        }
        else{
            resolve(x * y);
        }
    })

}
multiplyAsync(3, 7).then(console.log).catch((error) =>{
    console.log('not a number');
})
multiplyAsync(1, "234").then(console.log).catch((error) =>{
    console.log('not a number');
})
