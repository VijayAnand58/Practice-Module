let arr1=[1,2,3,4,5,6,7,8,9];
let aar2= arr1.reduce(function(acc,value){
    let upsum=acc+value;
    return upsum;
},0)
console.log(aar2)
//reduce function hof function