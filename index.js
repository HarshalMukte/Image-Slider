var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 60,
      stretch: 0,
      depth: 500,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });


  // for page-loader
 const loader = document.getElementById("loading") ;
 const sliderContainer = document.querySelector(".swiper-container");
  window.addEventListener("load", () => {
    sliderContainer.classList.remove("hidden");
    loader.classList.add("fade-down");
   setTimeout(()=>{
    loader.style.display = "none";
   },1000);
  });