window.addEventListener("load", function () {
  document.querySelector(".loader").style.display = "none";
});
const slider = document.querySelector(".img-slider");
const slides = slider.querySelectorAll(".slide");
const radioButtons = slider.querySelectorAll(".slider-radio");
const navButtons = slider.querySelectorAll(".navigation .btn");

let slideIndex = 0;

function showSlide() {
  slides.forEach((slide) => (slide.style.opacity = 0));
  navButtons.forEach((btn) => btn.classList.remove("active"));

  slides[slideIndex].style.opacity = 1;
  navButtons[slideIndex].classList.add("active");

  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
}

let interval = setInterval(showSlide, 3000);

navButtons.forEach((btn, index) => {
  btn.addEventListener("mouseenter", () => {
    if (slideIndex !== index) {
      navButtons[index].classList.add("hover");
    }
  });
  btn.addEventListener("mouseleave", () => {
    if (slideIndex !== index) {
      navButtons[index].classList.remove("hover");
    }
  });
  btn.addEventListener("click", () => {
    slideIndex = index;
    clearInterval(interval);
    showSlide();
    interval = setInterval(showSlide, 3000);
  });

  function adjustBoxSize() {
    var box = document.querySelector(".box");
    var windowWidth = window.innerWidth;

    if (windowWidth <= 600) {
      box.style.width = "200px";
      box.style.height = "150px";
    } else {
      box.style.width = "300px";
      box.style.height = "200px";
    }
  }
  window.onload = adjustBoxSize;
  window.onresize = adjustBoxSize;
});

function addToCart(itemName, itemPrice) {
  alert("Added to cart: " + itemName + " - Price: " + itemPrice);
}
