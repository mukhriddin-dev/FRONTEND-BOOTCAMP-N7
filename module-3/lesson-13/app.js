"use strict";
// promise
// fetch
// api

// STATUS CODE
// METHODS

// - GET -> MA'LUMOT KELADI
// - POST -> MA'LUMOTNI YUBORASIZ
// - PUT -> O'ZGARTIRISH
// - DELETE -> BAZADAN O'CHIRISH
// - PATCH  -> BIROR KEYNI UPDATE

// let obj={
// id:1,
// name: "Iphone 14",
// category: "Smartphone",
// brand:'apple',
// price:'1220',
// }

let api_url = "https://reqres.in/api/users?page";


// ----------- DATA FETCHING --------

function fetchingData(page_number){
    fetch(`${api_url}=${page_number}`)
    .then((data) => data.json())
    .then((result) => {
    renderData(result.data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("finished"));
}


// --------------- RENDER FUNCTION  ----------------


function renderData(data) {
  
  if (data.length) {

    data.forEach((item) => {
    
      const div = document.createElement("div");

      div.classList.add("card");

      div.innerHTML = `
               
                   <img src="${item.avatar}" alt="users" />
                    <div class="p-2"> 
                      <h3>${item.first_name} ${item.last_name}</h3>
                      <p>${item.email}</p>
                    </div>
               `;

            document.querySelector(".container").append(div);

    });

    
  }
}


fetchingData(2)