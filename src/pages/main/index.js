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
const buttonBack = document.querySelector(".slider__button-left");
const buttonNext = document.querySelector(".slider__button-right");
const slides = document.querySelectorAll(".slider__slide");
innerWrapper.style.transition = "margin-left .5s";
let shearWidth = +getComputedStyle(wrapper).width.split("px")[0];
let numberSlides = innerWrapper.querySelectorAll(".slider__slide").length - 1;

let activeSlide = 0;
let dots = []; 

function initWidthSlides() {
  shearWidth = +getComputedStyle(wrapper).width.split("px")[0];
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
    dots[dots.length] = dot;
    // dots.push(dot);
    pagination.insertAdjacentElement("beforeend", dot);
  }
}

init();

function setActiveSlide(index) {
  if(index < 0 || index > numberSlides) {
    return;
  }
  innerWrapper.style.transition = "margin-left .5s"
  dots[activeSlide].classList.remove("slider__dot_active");
  dots[index].classList.add("slider__dot_active");
  if(index === 0) {
    buttonBack.setAttribute("disabled", "disabled");
  }
  if(index === numberSlides) {
    buttonNext.setAttribute("disabled", "disabled");
  }
  if(activeSlide - index > 0) {
    buttonNext.removeAttribute("disabled")
  }
  if(activeSlide - index < 0) {
    buttonBack.removeAttribute("disabled")
  }
  innerWrapper.style.marginLeft = "-" + shearWidth*index + "px";
  activeSlide = index;
};

buttonBack.addEventListener("click", function () {
  const index = activeSlide - 1;
  setActiveSlide(index);
}) 

buttonNext.addEventListener("click", function () {
  const index = activeSlide + 1;
  setActiveSlide(index);
})

window.addEventListener("resize", function () {
  initWidthSlides();
  setActiveSlide(activeSlide);
});


let mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
})

(function () {
  let form = document.querySelector.signin;
  formSignin.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  let formSignin = document.forms.signin;
  formSignin.addEventListener("submit", function (event) {
    event.preventDefault();
})(); 