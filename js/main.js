let burger = document.querySelector('.burger');
let headerNav = document.querySelector('.menu');


burger.addEventListener('click', f1);

function f1() {
   if (headerNav.style.display === "block") {
      headerNav.style.display = "none";
   } else {
      headerNav.style.display = "block";
   }
}

burger.addEventListener('click', () => {
   burger.classList.toggle('burger-active');
})


let lake = document.querySelector('.lake-block__item-2');
let lakeVid = document.querySelector('.lake-video');

lake.addEventListener('mouseover', f2);

function f2() {
   lakeVid.controls += 'play'; 
}

$('.slider').slick({
   dots: true,
   infinite: true,
   autoplay: true,
   autoplaySpeed: 3000,
   speed: 300,
   slidesToShow: 3,
   slidesToScroll: 1,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 1,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ]
 });
