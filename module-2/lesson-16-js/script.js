"use strict";

// console.log(NaN*NaN)
// console.log(NaN*false)
// console.log(true+NaN)


// / ---- STRING -----


// let isName='  Lorem   ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum enim, delectus incidunt ipsam culpa laboriosam sunt in doloremque beatae sed alias illo ex. Culpa.';


// console.log(isName.toLowerCase())
// console.log(isName.toUpperCase())
// console.log(isName.length)
// console.log(isName.substring(0,10))
// console.log(isName.search(' '))
// console.log(isName.match(/o/g))


// let str = '      ';

// // console.log(str.charAt())
// console.log(str.length)
// console.log(str.trim().length)

// let yourJob = prompt('Enter your job');

// if (yourJob.trim().length) {
//     alert(yourJob)
// } else {
//     alert('Please enter a job name');
// }

// let str="JavaScript the  best programming language";
// console.log(str.split(""))


// / ----------- ARRAY ->


// V.1

// let arr=new Array('js','php','nodejs', true);

// V.2

// let arr=[]

// for(let i=0; i<=20; i++){
//     arr[i]=`${i+1} June`
// }

// console.log(arr)


// let numbers = [
//     1,
//     2,
//     3,
//     4,
//     5,
// ];

// let sum = 0;
// let sum1=1;

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
//     sum1*=numbers[i];
// }

// console.log(sum)
// console.log(sum1)\


// ### Array methods


// / arrayga element ohiridan qo'shish

// arr.push(1);
// arr.push('2');
// arr.push(3);

// / pop arrayga element ohiridan o'chiradi

// arr.pop();
// arr.pop()
// arr.pop()

// / arrayga element boshidan qo'shish

// arr.unshift('js')
// arr.unshift('php')


// array elementini boshidan o'chirish

// arr.shift()

// ctrl+x splice

// const res=arr.splice( 1 , arr.length-1)

// console.log(res)
// console.log(arr)


// ctrl+c splice


// let text="javascript the best language".split(" ");

// let arr=['js','nodejs','golang','rust','c++'];

// let result=arr.concat(text); // ES5
// let result=[ ...arr, ...text ] // ES6

// console.log(result);

// console.log(text)
// const res=arr.slice(1)

// console.log(arr)
// console.log(res)
// console.log(arr.includes('swift'))
// console.log(arr.join("-"))


let arr1 = [
    'js',
    'nodejs',
    'golang',
    'rust',
    'c++',
    'c',
    'react'
];
let arr2 = [
    'js',
    'nodejs',
    'c#',
    'scala',
    'c',
    'matlab',
    'delphi',
    'pascal',
    'ruby'
]
let arr3 = [
    ... arr1,
    ... arr2
];

let result = [];

// result = arr1+arr2 ( elements unique)

for (let i = 0; i < arr3.length; i++) {

    if (! result.includes(arr3[i])) {
        result.push(arr3[i])
    }

}

// const res2=Array.from(new Set([...arr1,...arr2]))
// console.log(new Set(result))

// console.log(res2)
console.log(result)
