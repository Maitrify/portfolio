function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

     menu.classList.toggle('open');
     icon.classList.toggle('open');
}
// const slider = document.getElementById("project-slider");
// let scrollAmount = 0;
// let slideTimer = setInterval(() =>{
//     scrollAmount += 320; //match your card+ gap width
//     if(scrollAmount >= slider.scrollWidth - slider.clientWidth)
//     {
//         scrollAmount = 0; //reset to beginning
//     }
//     slideTimer.scrollTo({
//         left: scrollAmount,
//         behavior: "smooth"
//     });
// },3000); //3 sec per slide



  const slider = document.getElementById("project-slider");

  let currentScroll = 0;
  const scrollStep = 320; // width + margin
  const scrollDelay = 3000; // 3 seconds

  let sliderInterval = startAutoSlide(); //start on page load
  //start auto-slide function
  function startAutoSlide(){
   return setInterval(() => {
    if (currentScroll + slider.clientWidth >= slider.scrollWidth) {
      currentScroll = 0;
    } else {
      currentScroll += scrollStep;
    }

    slider.scrollTo({
      left: currentScroll,
      behavior: "smooth"
    });
  }, scrollDelay);
}

//pause on hover
slider.addEventListener("mouseenter",() =>{
  clearInterval(sliderInterval);
});

//resume on mouse leave
slider.addEventListener("mouseleave", () =>{
  sliderInterval= startAutoSlide();
});


function isMobile() {
  return window.innerWidth <= 768;
}

if (!isMobile()) {
  let currentScroll = 0;
  const scrollStep = 320;
  const scrollDelay = 3000;

  let sliderInterval = startAutoSlide();

  function startAutoSlide() {
    return setInterval(() => {
      if (currentScroll + slider.clientWidth >= slider.scrollWidth) {
        currentScroll = 0;
      } else {
        currentScroll += scrollStep;
      }

      slider.scrollTo({
        left: currentScroll,
        behavior: "smooth"
      });
    }, scrollDelay);
  }

  // Pause on hover (only on desktop)
  slider.addEventListener("mouseenter", () => clearInterval(sliderInterval));
  slider.addEventListener("mouseleave", () => {
    sliderInterval = startAutoSlide();
  });
}