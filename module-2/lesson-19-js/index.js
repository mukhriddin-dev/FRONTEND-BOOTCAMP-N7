// IIFE -> Immediately Invoked Function Expression

// / decloration function
// abs(1)

let a = 12;

function abs(n) {

    return n + 4

    console.log(a)

};

// common js
// expression function

// const bac = function (n) {
//     return n + 1
// };


// // arrow function

// const cba = (n) => n + 2;


// (function (n) {
//     console.log("is Working" + n)
// }('hello'))

// this

// / literal

// const newObj=Object.assign({age:'12'}, {name:'ok', age:182})

// console.log(newObj)

// const keys=Object.keys(newObj);
// const values=Object.values(newObj);
// const keyVal=Object.entries(newObj);

// console.log(keys)
// console.log(values)
// console.log(keyVal);

// const obj={
//     name:"Student",
//     job:"Student",
//     info:{
//         state:{
//             personal_info:{
//                 age:20
//             }
//         }
//     }
// }

// const {info:{state:{personal_info: {age}}}}=obj;
// console.log(obj.info?.data?.a)


// console.log(false ?? 11)
// console.log( true && "ok" && false)


function Car(name, price, color, smth) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.smth = smth;
}

Car.prototype.getName = function () {
    return this.name;
}
console.log(Car)

const bmw = new Car('bmw x7', 120, 'silver', '. . . .');
const damas = new Car('damas', 8, 'white', '....')

const car = new Car();
console.log(car)
console.log(bmw.getName())
console.log(damas.getName())
