"use strict";

// // createElement
// // append , prepend, after , before

// let h2=document.createElement("h2");
// h2.textContent="Lorem ipsum dolor sit amet, consectetur";


// // classList -> add , remove , toggle , contains


// let div=document.createElement("div");  // step 1

// div.classList.add('box')  // step 2

// div.innerHTML = "<h1>Hello world</h1>"  // step 3


// wrapper.append(div)  // step 4
// wrapper.append(h2) // step 5


// console.log(div , h2 , wrapper)


// for(let i=0; i<10; i++){

//     let item=document.createElement('div');

//     item.classList.add('item')

//     item.textContent=i+1;

//     wrapper.append(item);
//     // wrapper.prepend(item);

//     console.log(item)
// }


// let box=document.querySelector('.box');

// let el=document.createElement("div");

//     el.classList.add('p-5','bg-danger')

//     el.textContent="2"
//     box.before(el);


// console.log(el)

// console.log(box);


let wrapper = document.querySelector(".wrapper");
const {products} = product;

// console.log(products)

let brands = [];
let select = document.querySelector('#brand')

products.forEach((el) => {
    brands.push(el.brand)
})

let uniqueBrand = Array.from(new Set(brands))

uniqueBrand.forEach((el) => {
    let option = document.createElement("option");
    option.textContent = el;
    select.append(option);
})


function renderData(data) {

    data.forEach((el, index, arr) => {


        let card = document.createElement('div');

        card.classList.add('card');

        card.innerHTML = `
       <img src="${
            el.thumbnail
        }" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${
            el.title
        }</h5>
         <p class="card-text">${
            el.description
        }</p>
         <a href="#" class="btn btn-primary">Add to cart</a>
       </div>
       `;

        wrapper.append(card)

    })
}

renderData(products);

select.addEventListener('change', (e) => {
    wrapper.innerHTML = ""
    console.log(e.target.value);

    const result = products.filter((el) => {
        return el.brand.toLowerCase() == e.target.value.toLowerCase()
    })

    renderData(result);

})
