let sum=function(x,y){
    return (x+y);
}
console.log(sum(2,3));

let sum2=function(x){
    return function(y){
        console.log(x+y)
    }
}
let sum3=sum2(5);
console.log(sum3);
sum3(4);