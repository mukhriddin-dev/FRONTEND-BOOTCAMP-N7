"use strict";

// function types in JavaScript


// type 1  function declaration -- first class function

// getData(1,2,3)

// function getData(a,b,c){
//    console.log('Hello world')
//    console.log(a,b,c)
// }


// getData(11, 21 , 33)
// getData(12, 21 , 33)
// getData(13, 21 , 33)


// function sendData(n){
//     return 100*n
// }


// console.log(sendData(2))


// type -2 function expression 

// const app=function(text){
//     return `dewrtdyui ${text}`
// }


// console.log(app('javascript'))


// es6 arrow function



// const arrow=(smth)=>smth



// const ok=arrow;

// console.log(ok('ok 2'))
// console.log(arrow('ok'))



//  function name(args) {
//     return args
//  }


//  const funcName=function(args){
//     return args
//  }


//  const functionApp=(args)=>{
//     return args
//  }

//  const functionApp2=(args)=> args
 


//  for(let i=0; i<20; i++){
//     if(i%2==0){
//         console.log(i)
//     }
//  }

// // .filter((el)=> el%2==0 )




// let n=+prompt('Enter number: ');
// let result=document.getElementById('result');

// let n=0;


// const incr=()=> {
//     n+=1;
//     result.textContent=n;
// };
// const decr=()=> {
//     if(n<1){
//         alert('STOP')
//     }else{
//         n-=1;
//     }
    
//     result.textContent=n;
// };


// const mode=()=>document.body.style.backgroundColor="black";


// function test(state=7, state2=11){
//     return `${state} , ${state2}`
// }

// console.log(test(10,12))

var a=12

function test(){
   var a=23;
}



test()
console.log(a)