var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

/*==== Navbar toggle =====*/
let navBar = document.querySelector(".navbar");
let menuBar = document.querySelector("#menu");
let closeBar = document.querySelector("#close");

menuBar.onclick = () => {
    navBar.classList.add("active");
}

closeBar.onclick = () => {
    navBar.classList.remove("active");
}

/*==== product =====*/
var swiper = new Swiper(".myProducts", {
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints:{
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1300: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});
/*==== testimonial swiper ====*/
var swiper = new Swiper(".myTestimonial", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
