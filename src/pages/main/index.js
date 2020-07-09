// let age, name, sName;

// age = prompt("Введите ваш возраст: ", 18);
// name = prompt("ВВедите ваше имя: ");
// sName = prompt("Введите вашу фамилию: ");

// let user = {
//   age: age,
//   name: name,
//   sName: sName,
// };

// console.log(user);

const wrapper = document.querySelector(".slider__wrapper");
const innerWrapper = document.querySelector(".slider__inner-wrapper");
const pagination = document.querySelector(".slider__pagination");
const buttonNext = document.querySelector(".slider__button-next");
const buttonBack = document.querySelector(".slider__button-back");
const slides = document.querySelectorAll(".slider_slide");

let shearWidth = +getComputedStyle(wrapper).width.split("px")[0];
let numberSlides = innerWrapper.querySelectorAll(".slider_slide").length - 1;

let activeSlide = 0;

function init() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.width = shearWidth + "px";
  }
}

init();

function setActiveSlide(index) {
  innerWrapper.style.marginLeft = "-" + shearWidth + "px";
}

setActiveSlide();



// const changleActiveSlide = function(whereTo) {
//   const indentML = +innerWrapper.style.marginNext.split("px")[0];
//   innerWrapper.style.transition = "margin-left .5s";
//   switch (whereTo) {
//     case "next":
//       if (activeSlide < numberSlides) {
//         innerWrapper.style.marginLeft = (indentML - shearWidth) + "px";
//         activeSlide = activeSlide +1;
//         buttonNext.removeAttribute("disabled");
//       }
//       if (activeSlide === numberSlides) {
//         buttonNext.setAttribute("disabled", "disabled");
//       }
//       break;

//       case "back":
//         if (activeSlide !== 0) {
//           innerWrapper.style.marginBack = (indentML + shearWidth) + "px";
//           activeSlide = activeSlide -1;
//           buttonBack.removeAttribute("disabled");
//         }
//       if (activeSlide === 0) {
//         buttonBack.setAttribute("disabled, disabled");
//       }
//       break;
//   }
// };

// buttonBack.setAttribute("disabled", "disabled");
// addWidthSlides();
// for (i = 0; i< innerWrapper.children.length; i++) {
//   let newElem = document.createElement("button");
//   i === activeSlide
// }

// buttonNext.addEventListener(
//   "click",
//   function(){ changleActiveSlide("next")});

// buttonBack.addEventListener(
//     "click",
//     function(){ changleActiveSlide("back")});  





