// impure
let a=10;
let add= function(b){
    console.log(a+b);
}
add(5)

//pure function
let c=function(a,b){
    return a+b;
}
console.log(c(5,10))