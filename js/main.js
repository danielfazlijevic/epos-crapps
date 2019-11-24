var poljeZaGodinu = document.getElementById('godina');


var datum = new Date();

poljeZaGodinu.textContent = datum.getFullYear() + '.';


$(document).ready(function(){
  $('.images').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    arrows: false,
  });
});