// // MENU

// let btnOpenMenu = document.querySelector("#openMenu");
// let btnCloseMenu = document.querySelector("#closeMenu");
// let mainNav = document.querySelector(".main-links");

// btnOpenMenu.addEventListener("click", () =>{
//     mainNav.classList.remove("hidden");
//     btnOpenMenu.classList.add("hidden");
//     mainNav.classList.add("show");
//     btnCloseMenu.classList.remove("close");
//     btnCloseMenu.classList.add("show");
// });

// btnCloseMenu.addEventListener("click", () =>{
//     mainNav.classList.add("hidden");
//     btnOpenMenu.classList.remove("hidden");
//     btnCloseMenu.classList.add("close");
// });

// // ANIMAÇÃO HERO

// function typeWriter(elemento) {
//     const texto = elemento.innerHTML.split("");
//     elemento.innerHTML = "";
//     texto.forEach((letra, i) => {
//         setTimeout(() =>{elemento.innerHTML += letra}, 75 * i)
//     });
// }

// const title = document.querySelector("#writer");

// typeWriter(title);

// // ANIMAÇÃO SCROLL

// const debounce = (func, wait, immediate) => {
//     let timeout;
//     return function(...args) {
//         const context = this;
//         const later = function() {
//             timeout = null;
//             if(!immediate) func.apply(context, args);
//         };
//         const callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if(callNow) func.apply(context, args);
//     }
// }

// const target = document.querySelectorAll("[data-anime]");
// const animationClass = 'animate';

// function animeScroll(){
//     const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
//     target.forEach((elemento) =>{
//         if(windowTop > elemento.offsetTop){
//             elemento.classList.add(animationClass);
//         }else{
//             elemento.classList.remove(animationClass);
//         }

//     })
// }

// animeScroll();

// if(target.length) {
//     window.addEventListener('scroll', debounce(() =>{
//         animeScroll();
//     }, 200));
// }

// // SCROLL SUAVE

// const links = document.querySelectorAll(".main-links li a");

// links.forEach(link =>{
//     link.addEventListener("click", (e) =>{
//         mainNav.classList.add("hidden");
//         btnOpenMenu.classList.remove("hidden");
//         btnCloseMenu.classList.add("close");

//         e.preventDefault();
//         const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
//         let targetID = link.getAttribute('href');
//         const targetAnchor = document.querySelector(targetID);
//         console.log(targetAnchor)
//         if (!targetAnchor) return;
//         const originalTop = distanceToTop(targetAnchor);
//         window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
//         const checkIfDone = setInterval(function() {
//             const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
//             if (distanceToTop(targetAnchor) === 0 || atBottom) {
//                 targetAnchor.tabIndex = '-1';
//                 targetAnchor.focus();
//                 window.history.pushState('', '', targetID);
//                 clearInterval(checkIfDone);
//             }
//         }, 100);
//     })
// })
