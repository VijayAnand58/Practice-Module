let transcation=[1000,3000,4000,2000,-898,3800,-4500];
let sumofpos=transcation.filter(function(n){
    return n>0;
}).reduce(function(acc,value){
    let up_sum=acc+value;
    return up_sum;
},0)
console.log(sumofpos)