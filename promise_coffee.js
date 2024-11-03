const { rejects } = require("assert");
const { resolve } = require("path/posix");

function placeorder(order){
    return new Promise (function(resolve,reject){
        if(order=="coffee"){
            resolve(`coffee order is places`)
        }
        else{
            reject(`no coffee`)
        }
    })
}
function recieveorder(order){
    return new Promise(function(resolve){
        console.log(`order is being served`);
        resolve(`${order} is served`)
    })
}
// placeorder(`coffee`).then(function(result){
//     console.log(result);
//     let orderprocessed=recieveorder(result)
//     return orderprocessed
// }).then(function(result2){console.log(result2)}).catch(function(err){
//     console.log(err)
// })
async function serve(){
    try{
    let orderplaced= await placeorder(`coffee`)
    console.log(orderplaced)
    let order=await recieveorder(orderplaced)
    console.log(order)
}catch(err){console.log(err);}
}
serve()