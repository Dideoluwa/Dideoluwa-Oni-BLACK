// function color(c) {
//     let a= getComputedStyle(c)
//     let b= a.backgroundColor;
//     document.getElementsByTagName("BODY")[0].style.backgroundColor=b;
// }



// let nav1 = document.querySelector('#nav1')
// let nav2 = document.querySelector('#nav2')


// function backClr1(){
//     let body = document.querySelector('body')
//     body.style.backgroundColor = 'rgb(11, 11, 15)'
// }

// function backClr2(){
//     let body = document.querySelector('body')
//     body.style.backgroundColor = 'rgb(128, 28, 15)'
// }

// nav1.onclick = backClr1;
// nav2.onclick = backClr2

// let div = document.querySelector('div')
// div.onclick = function(){
//     document.body.classList.toggle('light-mode')
// }
let btn = document.querySelector('div')

btn.addEventListener('click', ()=>{
    let ran1 = Math.floor(Math.random() * 255);
    let ran2 = Math.floor(Math.random() * 255);
    let ran3 = Math.floor(Math.random() * 255);
    let newClr = `rgb(${ran1}, ${ran2}, ${ran3})`;
    document.body.style.backgroundColor = newClr;
})