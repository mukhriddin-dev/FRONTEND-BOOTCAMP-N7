"use strict";


let numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17
];


// let num=numbers.forEach(e=>e*2)

// let num=numbers.map(e=> {
//     if(e%2==0){
//         return e
//     }
// } )

// let num=numbers.map(e=>e*5).filter(e=> e%2==1).reduce((a,b)=>a+b);

// console.log(num)

// console.log(product)


// const {products} = product;


// console.log(products);


// function sortPrice(){
//     let result=products.sort((a,b)=>b.price-a.price);

//     return result
// }


// console.log(sortPrice());


// function getProducts(strCategory) {

//     const filteredCategory = products.filter(e => e.category.toLowerCase() === strCategory.toLowerCase());
//     const countResult = filteredCategory.length;
//     const countPrice = filteredCategory.map(e => e.price).reduce((a, b) => a + b)


//     return {filteredCategory,  countResult,  countPrice};

// }


// console.log(getProducts('laptops'))


// flat

// const num=[1,2,3,[4,5,6,[7,8,9,10,[11,12,13]]]];

// const newNum=num.flat(3)

// console.log(num)
// console.log(newNum)

// const arr=[1,6,3,4,5,6,7,8,'js','go',"$"];

// // const filNum=arr.fill('ok',2);
// // console.log(filNum);

// console.log(arr.find(el=>el==5))  ///output  5

// console.log(arr.findIndex(el=>el===5)) ///output 4

// console.log(arr.some((el)=>el%2==0)) // output  true
// console.log(arr.every((el)=>el%2==0)) // output false


// const obj={
//     isname:'Laptop',
//     color:"silver",
//     brand:"Apple",
//     price:1250
// }


// let objEntries=Object.entries(obj); // output [ [key,value] , . . . ]
// let recover=Object.fromEntries(objEntries) // recover intries

// console.log(Object.values(obj)) // output [values , . . .]
// console.log(Object.keys(obj)) // output [keys, . . . ]

// / Map data collection

// const state=new Map(objEntries);

// state.set('age',22)
// state.set('name','Davronbek')
// console.log(state)

// // element ( key , value )

// console.log(state.get('name')) // elemenni chiqaradi
// console.log(state.has('job'))  // elemenni bor yoki yo'qligini aniqlaydi true / false
// console.log(state.delete('name')) // elemenni o'chiradi
// console.log(state.size);
// console.log(state);


// Set data collection  [only key collection]


// const state = new Set();

// state.add(23)
// state.add('js')
// state.add([
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7
// ])
// state.add(23)
// state.add(function () {})
// state.add('js')

// let st = null;

// state.forEach(el => {
//     if (el == 23) {
//         st = el
//     }
// })

// console.log(st)


// const arr=[1,1,1,1,1,2,2,2,23,44,556,32,1,4,3,9];

// const unique=[];

// arr.forEach(el =>{
//     if(!unique.includes(el)){
//      unique.push(el);
//     }
// })

// const uniquArr=Array.from(new Set(arr))

// console.log(unique)
// console.log(uniquArr)

// let str='Hello';
// const str1=Array.from(str);
// console.log(str1)


// Date 

let weekday=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const d=new Date();


console.log(d.getDate()) // bugun sanasi
console.log(weekday[d.getDay()]) // hafta kuni 
console.log(d.getFullYear()) // hozirgi yil
console.log(d.getMonth()) // hozirgi oy
console.log(d.getHours()) // hozirgi soat
console.log(d.getMinutes()) // hozirgi daqiqa
console.log(d.getSeconds()) // hozirgi soniya
console.log(d.getMilliseconds()) // hozirgi soat
console.log("at",d.getTime())
console.log(2023-d.getTime()/1000/60/60/24/365) 

console.log(d.getTimezoneOffset()) 
// GMT time +5
d.setFullYear(1971)
d.setMonth(1)

console.log(d.getFullYear())
console.log(d.getTime())


