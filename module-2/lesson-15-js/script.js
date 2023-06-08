"use strict";


// this keyword


// console.log(this)  // global window


// "use strict" ? undefined : global window

// function getThis(){
//    console.log(this)
// }


// getThis()


// global window , usestict -> ishlamaydi

// const message=()=>{
//    console.log(this)
// }

// message()

// /


// "use strict" ? undefined : global window

// const message=function(){
//    console.log(this)
// }

// message()


// const obj={


//    isName:'NEW OBJECT',
//    getInfo: function(){
//       console.log(this)
//    },

//    extar:'smth'

// }


// console.log(this)

// obj.getInfo()
// console.log(obj)


// function Car(brand, name, color, price, year) {
//     this.brand = brand;
//     this.name = name;
//     this.color = color;
//     this.price = price;
//     this.year = year;
// }

// Car.prototype.getBranding=function(){
//    return ` Brand: ${this.brand}`
// }

// Car.prototype.getPrice=function(){
//       return ` Price: ${this.price}`
// }

// console.log(new Car())


// // instance

// const damas = new Car('GM', 'Damas', 'black', '11000', 2022);
// const kia = new Car('KIA', 'k5', 'black', '42', '2023')

// damas.fullInfo = function () {
//     console.log(`brand: ${
//         this.brand
//     } Monapolist! . Price: ${
//         this.price
//     }$ arzimaydi !`)
// }


// console.log(damas.getBranding())
// console.log(kia.getBranding())


// const app={
// name:'name 1',
// age:12,
// logo:'https://picsum.photos/id/12/36/36'
// }


// const app2={
//    name:'name 2',
//    age:13,
//    logo:'https://picsum.photos/id/12/36/36'
// }


// const app3={
//    ...app1,
//    ...app2,
//    ...{color:'green', background:"red"}
// }

// console.log(app3)


// const meta= {
//     name: 'Meta',
//     age: '12',
//     country: 'USA',
//     users: '122B',
//     projects: {
//         facebook: {
//             name: 'Facebook',
//             age: '12',
//             country: 'USA',
//             users: '3B',
//             app: ['messenger', 'facebook-buisess', 'facebook-web-developers']
//         },
//         instagram: {
//             name: 'Instagram',
//             age: '9',
//             country: 'USA',
//             users: '643M',
//             app: ['Insta-store']
//         },
//         whtasapp: {
//             name: 'Whatsapp',
//             age: '14',
//             country: 'USA',
//             users: '2B',
//             app: ['Insta-store']
//         },
//         react: {
//             name: 'React',
//             age: '10',
//             country: 'USA',
//             users: '2B',
//             app: ['Next','React-router','React Query']
//         }
//     }
// }


// const {projects:{react:{users}}}=meta; destructuring


// OPTIONAL CHAINING

// console.log(meta.projects?.instagram?.age)
// console.log(meta?.projects?.twitter?.age)
// console.log(meta?.vesion?.v1)





 
console.log(Math.floor(1.5))   // kichik tomonga
console.log(Math.ceil(1.1))    // katta tomonga
console.log(Math.round(1.4))   // haqiqiy

console.log(Math.min(1,2,3,4,5,6,7,8,-22)) // minimum number

console.log(Math.max(1,2,3.6)) // maximum number

console.log(Math.trunc(22.43))  // butun qismini oladi

console.log(Math.abs(-112))  // sonning moduli

console.log(Math.pow(25, 1/2 )) // sonning darajasi

console.log(Math.sqrt(25)) // 5

console.log(Math.trunc(Math.random()*100)) // 0-1 

let num=122.23456789;

console.log(Number(num.toFixed(1)))

