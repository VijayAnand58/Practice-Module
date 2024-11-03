console.log('hi')
let person={
    name:"sbcd",
    age:123,
    address:{
        city:'chennai',
        state:'TN',
        street:'abcd'
    }
}
console.log(person)
console.log(person.name)
console.log(person['name'])
console.log(person.address.city)
person.address.state='Tamil Nadu'
console.log(person)
delete person.address.street
console.log(person)