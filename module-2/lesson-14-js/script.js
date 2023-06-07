"use strict";


// literal 

// const person={
//    isName:'Davronbek',
//    age:23,
//    hobby:function(){
//       console.log('Hello everyone')
//    }
// }

// // get

// console.log(person.age) // . notion
// console.log(person['age'])  // bracket notion



// const classRoom={

// }


// set

// classRoom['name']='Netflix';
// classRoom.size='large';
// classRoom.info=function(){
//    console.log('Room name: "Netflix" ')
// }

// delete or remove

// delete classRoom.info;


// console.log(classRoom) //


// new Instance Object

// const obj2=new Object({is:'ok'});


// function App(name,version){
//  this.name=name;
//  this.version=version;
// }


// console.log(new App())
// const app=new App('telegram',12);

// console.log(app);

// console.log(obj2)
// console.log(Object())


// let yearsAge={
// isName:'Orifjon',
// isMarried:true,
// level:'Junior',
// }


// let atTheMoment={
// isMarried:false,
// level:'Middle +', 
// isProgrammer:true
// }


// // let newShallow=yearsAge;// shallow clone
// let newShallow={...yearsAge};// deep clone

// newShallow.isMarried=false;

// console.log(yearsAge)

// const newObject=Object.assign( yearsAge , atTheMoment); // assign
// const result={...yearsAge,...atTheMoment}; // spread  operator

// console.log(newObject)
// console.log(result)


let result=document.getElementById('result'),
     min=document.getElementById('minus'),
     pl=document.getElementById('plus'),
     mult=document.getElementById('mult'),
     devi=document.getElementById('devi');


let a=+prompt('A=');
let b=+prompt('B=');


const calculate={
   add: function(a,b){return a + b},
   minus: function(a,b){return a-b},
   multiple: function(a,b){return a*b},
   devision: function(a,b){return a/b},
}

min.onclick=function(){
   let res=calculate.minus(a,b);
   result.textContent = res;
}

pl.onclick=function(){
   let res=calculate.add(a,b);
   result.textContent = res;
}

mult.onclick=function(){
   let res=calculate.multiple(a,b);
   result.textContent = res;
}


devi.onclick=function(){
   let res=calculate.devision(a,b);
   result.textContent = res
}














