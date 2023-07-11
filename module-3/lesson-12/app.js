"use strict";

// resolve  ->  data
// reject   ->  404

// / status ->

// resolve -> success
// reject -> 404 error
// pending -> waiting

// function lesson() {

//     let load = 1;

// return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (load) {
//                 return resolve(
//                     [{
//                         id: 1,
//                         data: "hello world"
//                     },{
//                         id: 2,
//                         data: "Goodbye world"
//                     }]
//                     )
//             } else {
//                 return reject('Ma\'lumot topilmadi')
//             }
//         }, 2000)

//     })

// }

// lesson()
// .then((result)=>console.log(result)) // resolve promise
// .catch((error)=>console.log(error)) // reject promise
// .finally(()=>console.log('Done'))   // end promise

// console.log([1, 2, 3, 4, 5].length)

// fetch('backend') -> retrun promise
// axios.get('backend') -> retrun promise

// async function data(){
//     return 'Hello world'
// }

// console.log(data())

// setTimeout(() => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(3)
//             setTimeout(() => {
//                 consoles.log(4)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// const data = [
//     {
//         "id": 7,
//         "email": "michael.lawson@reqres.in",
//         "first_name": "Michael",
//         "last_name": "Lawson",
//         "avatar": "https://reqres.in/img/faces/7-image.jpg"
//     },
//     {
//         "id": 8,
//         "email": "lindsay.ferguson@reqres.in",
//         "first_name": "Lindsay",
//         "last_name": "Ferguson",
//         "avatar": "https://reqres.in/img/faces/8-image.jpg"
//     },
//     {
//         "id": 9,
//         "email": "tobias.funke@reqres.in",
//         "first_name": "Tobias",
//         "last_name": "Funke",
//         "avatar": "https://reqres.in/img/faces/9-image.jpg"
//     },
//     {
//         "id": 10,
//         "email": "byron.fields@reqres.in",
//         "first_name": "Byron",
//         "last_name": "Fields",
//         "avatar": "https://reqres.in/img/faces/10-image.jpg"
//     }, {
//         "id": 11,
//         "email": "george.edwards@reqres.in",
//         "first_name": "George",
//         "last_name": "Edwards",
//         "avatar": "https://reqres.in/img/faces/11-image.jpg"
//     }, {
//         "id": 12,
//         "email": "rachel.howell@reqres.in",
//         "first_name": "Rachel",
//         "last_name": "Howell",
//         "avatar": "https://reqres.in/img/faces/12-image.jpg"
//     }
// ];

// const getUsers = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (data.length) {
//             resolve(data);
//         } else {
//             reject('Data not found');
//         }
//     }, 3000)
// })

// getUsers()
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))
// .finally(()=>console.log('done'));

// --> P R O M I S E

// resolve or reject

// const resolve = Promise.resolve('Hello world');
// const reject = Promise.reject('404 Not Found');

// const result=Promise.all([ resolve , reject , getUsers()])
// Barcha ma'lumot keladi state "success" bo'lsa State "rejected" birinchi "reject" ni qaytaradi.

// const result=Promise.allSettled([ resolve , reject , getUsers()])
// Barcha ma'lumot keladi state holatidan qat'iy nazar ["success" , "rejected" , "result" ]

// const result=Promise.race([  reject , resolve , getUsers()])
// Birinchi kelgan ma'lumotni qaytaradi state hoolatidan qat'iy nazar ["success" , "rejected" , "result" ]

// const result=Promise.any([ resolve , reject , getUsers()])

// Birinchi kelgan ma'lumotni resolve holatni qaytaradi , agar barcha promielar rejected bo'lsa ohirigi rejected qayaradi

// console.log(result)

// const getNumber = async () => [
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10
// ];

// getNumber().then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// }). finally(() => console.log('done'))

let wrapper = document.querySelector(".wrapper");

const baseURL = "https://fakestoreapi.com";

function getProducts() {
    fetch(`${baseURL}/products`)
    .then((res) => res.json())
    .then((result) => dataRender(result))
    .catch((err) => console.log('error', err))
    .finally(() => console.info("productus successful loaded"));
}



function dataRender(data) {
    
    if (data.length) {
        data.forEach((item) => {
            
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `
             <img src="${item?.image}" class="card-img-top" alt="${item?.title}">
                <div class="card-body">
                  <h5 class="card-title">${item?.title}</h5>
                  <p class="card-text">${item?.description}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
        `;
        wrapper.append(div);
        });
       
    }
}

getProducts();
