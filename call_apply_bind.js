person1={
    Name:"ABC",
    Age:5,
    Gender:"Male"
};
person2={
    Name:"xyz",
    Age:5,
    Gender:"Male"
};
let printdetails=function(city){
    console.log(`My name is ${this.Name},\n My age is ${this.Age},\n My gender is ${this.Gender},\n I live in ${city}`)
}
printdetails.call(person1,'newyork')
printdetails.call(person2,'newyork')
// call is used to call the same function to different objects with the same structure, where parameters can be given
printdetails.apply(person1,["London"])
// apply function is same as call function , the only diiference is that , the parameters are passed as a array , rather than 
// single strings in call method.
let DC=printdetails.bind(person2,"Chennai");
console.log(DC);
DC();
//Bind method is ame as call method , but it is used to store the commmand in a particular variable, which can be invoked later as a function.
