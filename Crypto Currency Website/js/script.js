

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*=== navbar toggle ===*/
let menuBtn = document.querySelector("#menuBtn");
let navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {
  navbar.classList.toggle("active");
}

/*=== scroll section ===*/
window.onload = () => {
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 150);

}

var loader = document.querySelector('.preLoader');

window.addEventListener("load", function () {

  loader.classList.add('loader');

});