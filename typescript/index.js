//Objects
// const person:{
//     name:string;
//     age:number;
// }={
var person = {
    name: "Sachin",
    age: 25
};
console.log(person.age);
//Nested objects
var product = {
    id: "abc1",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    details: {
        title: "Red Carpet",
        description: "A great carpet - almost brand-new!"
    }
};
console.log(product.details.title);
