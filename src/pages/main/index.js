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
const buttonNext = document.querySelector(".slider__button-left");
const buttonBack = document.querySelector(".slider__button-right");
const slides = document.querySelectorAll(".slider__slide");
innerWrapper.style.transition = "margin-left .5s";
let shearWidth = +getComputedStyle(wrapper).width.split("px")[0];
let numberSlides = innerWrapper.querySelectorAll(".slider__slide").length - 1;

let activeSlide = 0;
let dot = []; 

function initWidthSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.width = shearWidth + "px";
  }
}

initWidthSlides(); 

function init() {
  for(let i = 0; i < slides.length; i++) {
    let dot = document.createElement("button");
    dot.classList.add("slider__dot");
    if(i === activeSlide) {
      dot.classList.add("slider__dot_active");
    }
      dot.addEventListener("click", function () {
        setActiveSlide(i);
      })
    // dots[dots.length] = dot;
    dots.push(dot);
    pagination.insertAdjacentElement("beforeend", dot);
  }
}

init();

function setActiveSlide(index) {
  if(index < 0 || index > numberSlides) {
    return;
  }
  dots[activeSlide].classList.remove(slider__dot_active);
  dots[index].classList.add(slider__dot_active);
  if(activeSlide - index > 0) {
    buttonNext.removeAttribute("disabled")
  }
  if(activeSlide - index < 0) {
    buttonBack.removeAttribute("disabled")
  }

  if(index === 0) {
    buttonBack.setAttribute("disabled, disabled");
  }
  if(index === numberSlides) {
    buttonNext.setAttribute("disabled, disabled");
  }
  innerWrapper.style.marginLeft = "-" + shearWidth + "px";
  activeSlide = index;
}

buttonNext.addEventListener("click", function () {
  setActiveSlide(activeSlide + 1);
})

buttonBack.addEventListener("click", function () {
  setActiveSlide(activeSlide - 1);
}) 



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





