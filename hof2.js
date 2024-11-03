const arr1=[1,5,6,7,-1,-14];
let arr2=arr1.find(function(n){
    return n<0;
})
console.log(arr2);
let arr3=arr1.findIndex(function(n){
    return n<0;
})
console.log(arr3);
// some, returns true if some of the elements, satisfy the condition
//every, returns true if all the elements satisfy the condition
let result=arr1.some(function(n){
    return n>0
})
console.log(result);
let result1=arr1.every(function(n){
    return n>0
})
console.log(result1);