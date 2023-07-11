"use strict";

// TDZ

// function numbers(){
//     return 1;

// }

// // Generator functions ->

// function * letters(){
//    yield "A";
//    yield "B";
//    yield "C";
//    yield "D";
// }


// const letter=letters();

// console.log(letter.throw(new Error("Nimadur xato")));

// console.log(letter.next());
// console.log(letter.next());
// console.log(letter.next());
// console.log(letter.next());
// console.log(letter.next());


// // no curried functions


// function funcE(a,b,c,d){
//     return a+b+c+d;
// }

// console.log(funcE(1,2,3,4))


// /// Curriyng  functions


// function funcA(a) {
//     a*=10
//     return function (b) {
//         b += 100;
//         return function (c) {
//             c-=5
//             return function (d) {
//                 return a + b + c + d;
//             }
//         }
//     }
// }

// console.log(funcA(1)(10)(5)(4))


// const curriedFunc=a=>b=>c=>d=>a+b+c+d;

// console.log(curriedFunc(1)(2)(3)(4))


// /// Pipe function

// const funcC=a=>a+10;
// const funcD=a=>a-2;
// const funcS=a=>a*4;

// console.log(funcD(funcS(funcC(10)))) // 48


// // pure function

// function pureFun(a){
// return a*10;
// }

// console.log(pureFun(10))

// let sum=10;

// // impure function

// function impureFun(a){
//     return sum+a;
// }


// console.log( impureFun(10))


// Closure

// let num = 11111;

// function ABS() {

//    let sum=10

//     function a(){


//         console.log(num+sum)


//     }

//     a()

// }

// ABS()
