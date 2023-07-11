"use strict";

// SET (KEY DATA COLLECTION) , MAP (KEY , VALUE DATA COLLECTION)

let wrapper = document.querySelectorAll('.wrapper'),
    container = document.querySelector('.container');


// / ATTRIBUTE , SELECTOR , DATA COLLECTION ,

// wrapper[1].style.cssText="background:green; padding:40px"
// wrapper[0].innerText="<i>HELLO</i>";
// console.log(wrapper[1].innerHTML)
// console.log(container.childNodes)
// console.log(wrapper[0].parentNode.parentNode.parentNode)
// console.log(wrapper[0].parentElement.parentElement.parentElement.parentElement)
// console.log(wrapper[0].nextElementSibling)
// console.log(wrapper[0].previousElementSibling)
// console.log(container.getBoundingClientRect())
// console.log(container.classList)
// console.log(container.className)
// console.log(container.clientHeight)
// console.log(container.clientWidth)
// console.log(container.scrollHeight)
// console.log(container.getAttribute('title'))
// console.log(container.setAttribute('style', 'color:red'))
// container.dataset.title="title"
// console.log(container.hasAttribute('data-title'))


// CLASS LIST METHODS

// console.log(container.classList.add('bg-green'))
// container.classList.remove('bg-green')
// console.log(container.classList.toggle('bg-green'))
// console.log(container.classList.contains('bg-green'));


// container.onclick=function(){
//     alert('You clicked')
// }


// container.addEventListener('event_name', (event Object)=>{
//     console.log(e.target)
//     prompt("enter username")
// })


// alert(localStorage.getItem('name'))

// localStorage.removeItem('key')

// localStorage.clear()

// sessionStorage.setItem('isLogin', true)
// document.cookie='name=javascript';
// document.cookie='login=12345'


// console.log(window)


// let person={
// name:'Jahongir',
// age:22,
// job:"Department",
// }


// localStorage.setItem('name', "Javascript")
// localStorage.setItem('user', JSON.stringify(person))


let products = JSON.parse(localStorage.getItem('movie'))

console.log(products.products)


// for (let i = 0; i < products.products.length; i++) {

//     console.log(el)

//     let div = document.createElement('div');

//     div.classList.add('card')

//     div.innerHTML = `
//     <img src="${el.images[0]}" alt="rasm" />
//     <div class="card-body">
//     <h1>${el.title}</h1>
//     <p>${el.description}</p>
//     </div>`;
//     container.append(div);
// }


products.products.forEach((el) => {

    let div = document.createElement('div');
    div.classList.add('card')

    div.innerHTML = `
    <img src="${
        el.images[0]
    }" alt="rasm" />
    <div class="card-body">
    <h1>${
        el.title
    }</h1>
    <p>${
        el.description
    }</p>
    </div>`;
    container.append(div);
})


container.addEventListener('click', (e) => {
    e.target.classList.contains('card') && alert(e.target.textContent)
})
