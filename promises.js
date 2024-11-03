const { promises } = require("dns");

let promise1= new Promise(function(resolve,reject){
    const a=4;
    const b=5;
    setTimeout(() => {
        if(a===b){
            resolve(`Values are Equal`);
        }
        else{
            reject(`Values are not equal`);
        }
    }, 3000);
})
console.log(promise1);
promise1.then(function(result){
    console.log(result);
})
promise1.catch(function(result){
    console.log(result);
})