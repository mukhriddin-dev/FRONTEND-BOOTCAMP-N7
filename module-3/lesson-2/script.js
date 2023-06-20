"use strict";

// console.log(this) // global window


// function getThis(){
//     console.log(this) // strict mode ? 'undefined': 'global'
// }

// getThis();


// const app=()=>console.log(this)

// app()

// const obj={
//     isname:"this keyword",
//     getInfo: function(){
//         console.log(this)
//     }
// }
// obj.getInfo()


// function getObject(){
//     return this
// }


// console.log(getObject()) // global

// console.log(new Object()) // global


// const car={
//     isname:'the best car',
//     color:"red",
//     price:30000
// }

// const book={
//     isname:'the best book',
//     author:'Jack London',
//     price:3900
// }


// function fullInfo(arg1, arg2){
//     return ` ${arg1} ${arg2}    Name: ${this.isname} , Color: ${this.color ?? this.author} , Price: ${this.price}`
// }


// console.log(fullInfo()) // global

// ---- CALL -----

// fullInfo.call(car, 'car Object' , "->" )
// fullInfo.call(book, 'book Object' , "===")


// --- APPLY -----

// fullInfo.apply(car, ['car Object' , "->" ])
// fullInfo.apply(book, ['book Object' , "==="])


// --- BIND ---

// const res=fullInfo.bind(car); /// return Function
// const res2=fullInfo.bind(book) /// return Function

// console.log(res('car','car2'))
// console.log(res2('car','book2'))


// EVENTS

// let block = document.querySelector('#block');


// block.onclick=function(event, data="223"){

//     console.log(event.target)
//     // console.log('block clicked')
//     console.log(this)

// }


// / --- click event

// block.addEventListener('click', (event)=>{
//     // // console.log('block clicked')
//     // console.log(event.target)
//     // // console.log(this)
// } )


// block.addEventListener('dblclick', (e)=>{
// console.log("clicked")
// console.log(e)
// } )

// block.addEventListener('mouseover', (e) => {
//     block.style.cssText = "background:yellow !important"

// })


// block.addEventListener('mouseout', (e) => {
//     block.style.cssText = "background:red !important"
// })


// block.addEventListener('mousedown', (e) => {
//     block.style.cssText = "background:yellow !important"

// })


// block.addEventListener('mouseup', (e) => {
//     block.style.cssText = "background:red !important"
// })

// let circle= document.querySelector('.circle'),
//     dot= document.querySelector('.dot');

// window.addEventListener('mousemove', (e) => {
//     var latlong={
//         lat: e.clientX,
//         lon: e.clientY
//     }

//     dot.style.transform =`translate(${latlong.lat+15}px ,${latlong.lon+15}px)`
//     circle.style.transform =`translate(${latlong.lat}px ,${latlong.lon}px)`

// })

// window.addEventListener('mousedown', () => {
//     dot.style.cssText="width:32px;height:32px";
// });

// window.addEventListener('mouseup', () => {
//     dot.style.cssText="width:12px;height:12px";
// });


// input.addEventListener('keyup', (e) => {

//     if(e.keyCode ===13){
//         res.textContent = e.target.value
//     }

// })


let res = document.querySelector('#res'),
    input = document.querySelector('#input'),
    output = document.querySelector('.bg-primary'),
    checkbox=document.querySelector('#checkbox'),
    region=document.querySelector('#region');


input.addEventListener('input', (e) => {
    output.style.display="block";
    res.textContent = e.target.value;
})

checkbox.addEventListener('change', (e) => {
    console.log(e.target.checked)
    console.log('checked')   

})


region.addEventListener('change', (e)=>{
    console.log(e.target.value)
})




input.addEventListener('blur', (e) => {
    output.style.display="none";
    console.log(e)
})


// window.addEventListener('scroll', (e) => {
//    console.log(e)
// })

window.addEventListener('DOMContentLoaded', (e) => {
    document.body.innerHTML="<h1>LOADING . . . </h1>"
})  

window.addEventListener('load', (e) => {
    document.body.innerHTML=`<ul>
    
    <li>item 1</li>
    </ul>`
});