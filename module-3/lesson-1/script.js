"use strict";


// let text=document.getElementById("text"); // element

// let textTag=document.getElementsByTagName('h1') // HTML Collection

// let textClass=document.getElementsByClassName("text") // HTML Collection

// let text1=document.querySelector(".text");
// let allSelectors=document.querySelectorAll('h1');  // NodeList

// let h1=document.querySelector('.text')

// let p=document.querySelector('p');

// let box2=document.querySelector('.box2');

// console.log(h1.nextElementSibling.childElementCount)
// console.log(box2.previousElementSibling.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.parentElement.previousElementSibling)

let wrapper = document.querySelector('.wrapper');
let btn = document.querySelector("#btn");

const addStyle = () => {
    // wrapper.style.width="650px";
    // wrapper.style.height="600px";
    // wrapper.style.backgroundColor="limegreen";
    wrapper.style.cssText = "width: 650px; height: 600px; background-color: limegreen;"
}

btn.onclick = function () {
    console.log("added style");
    addStyle();
}

console.log(wrapper.style)
console.log(wrapper.style.width)
