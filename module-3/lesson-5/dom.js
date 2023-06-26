"use strict";

// let intro=document.querySelector('#intro');

function $(selector){
    return document.querySelector(selector)
}

function $$(selector){
    return document.querySelectorAll(selector)
}

// $('#intro').style.cssText="display:none";


window.addEventListener('scroll', (e)=>{

    let scrollTop=window.scrollY
     console.log(scrollTop)
    if(scrollTop>=100){
        $('header').classList.add('topheader')
    }else{
        $('header').classList.remove('topheader');
    }

    if(scrollTop>=713){
        $$('.box')[0].style.cssText=`transform: translateX(0); opacity:1`;
        $$('.box')[1].style.cssText=`transform: translateY(0); opacity:1`;
        $$('.box')[2].style.cssText=`transform: translateX(0); opacity:1`;
        $('.about').style.cssText=`transform: translateY(0) scale(1); opacity:1`;

    }





})

console.log($$('.box'))

console.log($("#intro"))


window.addEventListener('load', ()=>{
    $('.load-wrapper').style.display="none";
    $("body").style.cssText="overflow-x: hidden, overflow-y: visible !important";
})