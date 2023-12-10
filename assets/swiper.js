var slidesPerView = 7;
if(window.innerWidth <= 600)
{
  slidesPerView = 4;
}

const swiper = new Swiper('.sample-slider',{
  loop: true,
    autoplay: {
        delay: 0,
    },
    speed: 3000,          //add
    slidesPerView: slidesPerView,
});