


// localStorage   .setItem( key, value) .getItem( key ) , 

// localStorage.setItem("myname",'Mukhriddin');
// localStorage.setItem("age", 24);
// localStorage.setItem('job', "programmer");


// let name=localStorage.getItem("myname");
// let age=localStorage.getItem("age");
// let job=localStorage.getItem("job");


// localStorage.removeItem("myname");
// localStorage.removeItem("age");
// localStorage.removeItem("job");


// localStorage.clear()

// console.log(localStorage.key())

// console.log(window)
// console.log(name,age, job)


// sessionStorage.setItem("myname",'Mukhriddin');
// sessionStorage.setItem("age", 24);
// sessionStorage.setItem('job', "programmer");

// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
// console.log(window.document.cookie)

// "use strict";


let head=document.querySelector('#head'),
    text=document.querySelector('#text');
    themSelect=document.querySelector('#them');

    
    function selectThem(){  
        if(localStorage.getItem('them')==='dark'){
            head.style.cssText="background:#000000 !important; color:#fff;"
            text.style.cssText="background:#000000 !important; color:#fff;"
            
        }else{
            head.style.cssText="background:blue !important; color:#fff;"
            text.style.cssText="background:yellow !important; color:#000000;"
        }
    }
  
    selectThem()


    themSelect.addEventListener('change', (e)=>{

        localStorage.setItem('them', e.target.value)

        selectThem()

    })


















