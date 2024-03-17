
/*=== hero section start ====*/

var swiper = new Swiper(".myHero", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/*==== navbar toggle ===*/
let menuBtn = document.querySelector("#menuBtn");
let navBar = document.querySelector(".navBar");

menuBtn.onclick = () => {
  navBar.classList.toggle("toggle");
  menuBtn.classList.toggle('bx-x');
}


/*==== filterable function ===*/

const filterButtons = document.querySelectorAll('.filter_buttons button');
const filterableCards = document.querySelectorAll('.filterable_cards .card');

const filterCards = e => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  filterableCards.forEach(card => {
      card.classList.add("hide");

      if (card.dataset.name === e.target.dataset.name || e.target.dataset.name == "all")
      {
        card.classList.remove("hide");
      }
  });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));

/*=== testimonial section ===*/
var swiper = new Swiper(".myClient", {
  spaceBetween: 30,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=== pre loader ===*/
var loader = document.querySelector('.preLoader');

window.addEventListener("load", function() {

    loader.classList.add('loader');

});