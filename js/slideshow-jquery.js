$(document).ready(function () {
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = $(".hero-slideshow img");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.opacity = "0";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.opacity = "1";

    setTimeout(showSlides, 5000); // Change image every 5 seconds
  }
});
