let obj_1={
    name:"Abc",
    class1:"CSE",
    roll:130,
    address:{
        country:"india",
        state:"T.N"
    }
}
let{name,class1,roll,address:{state}}= obj_1
console.log(class1)
console.log(state)