"use strict";


// let st='salom'.split("")

// let [one,two,three,...other]=[1,2,3,4,5,6,7,8,9,10,...st]

// console.log(three)
// console.log(one)
// console.log(two)
// console.log(other)


// function randomNumber(a,b,...c){
//     console.log(`a: ${a}, b: ${b}`)
//     if(c.length){
//         for(let i=0; i<c.length;i++){
//             console.log(c[i])
//         }
//     }
// }

// randomNumber(1,2,3,4,5,6,7,8,9,10)

// shalow clone

// let array=[1,2,3,4,5,6,7,8,9,10];
// // let array2=arrray;
// // let array2=[];

// // 1.

// for(let i=0; i<array.length; i++){
//     array2.push(array[i]);
// }

// // 2. spread

// let array2=['a', ...array];

// // 3.

// array2.push(11)
// console.log(array)
// console.log(array2)


// function (array:arg){ return newArray }

// let arr=['a','b','c','d','e','f',1,2,3,4,5];

// function cloneAarray(array) {
//     if (typeof array === 'object') {
//         let clone = [... array]
//         return clone
//     }else{
//         return `${array} is not an Array`
//     }
// }


// let newAarr=cloneAarray(arr);


// console.log(newAarr);


// 1. forEach

// let array=[1,2,3,4,5,6,7,8,9,10];

// let arr2=[];

// deep clone
// array.forEach(e=> {
//    arr2.push({key:e})
// })

// console.log(array)
// console.log(arr2)

// // 2. map

// let array = [
//     1,2,3,4,5,6,7,8,9,10
// ];


// // deep clone

// let arr2 = array.map((e, i, arr) => {
//     return e
// })

// console.log(array)
// console.log(arr2)

// let array = [
//     1,2,3,4,5,6,7,8,9,10
// ];

// // . filter

// const juftRaqam=array.filter((e)=>{
//     return e
// })


// console.log(array)
// console.log(juftRaqam)


// .reduce
// let summa=4;
// let array = [1,2,3,4,5,6,7,8,9,10];

// let sum=array.reduce( (a,b)=>{ return a - b;},0)

// console.log(sum)

// ABC - acb , bac , cab , bca , abc ,cba


console.log(product)


const {products} = product;


const filterProduct = (filterStr) => {

    const result = products.filter((el) => {
        return el.category == filterStr;
    })

    const totalCount = result.map((el) => el.price).reduce((a, b) =>  a + b)

    return {result: result, resultCount: result.length, totalCount: totalCount}
}


const smartphone = filterProduct('smartphones');


console.log(smartphone)



const arr=[1,2,3,4,5,6,70,8,9,10];
const lang=['javascript','php','nodejs','angular','bootstrap','react']

console.log(lang.map((el)=> el.split("").sort().join('')))
console.log(arr.sort((a,b)=> b-a))