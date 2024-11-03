//imparative
let a=[1,2,3]
for(let c of a){
    console.log(c**2)
}
//declarative
let arr=[1,2,3,4,5,6]
let sqarr=arr.map(function(n){
    return n**2
})
console.log(sqarr)
// convert to dollars
let transcation=[1000,3000,4000,2000,-898,3800,-4500];
let dollars=80;
let conv=transcation.map(function(n){
    return (n/dollars).toFixed(0)
})
console.log(conv)
// map returns an array
//forEach doesnt return an array, instead it returns single values and
//the functions of it is restricted to the blocked scope
let conv1=transcation.forEach(function(n){
    console.log((n/dollars).toFixed(0))
})