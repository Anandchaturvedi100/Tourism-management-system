    AOS.init({
      duration:1000,
      once:true
    });

    // NAVBAR STICKY

    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll",()=>{

      navbar.classList.toggle("sticky",window.scrollY > 50);

    });

    // MOBILE MENU

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.onclick = ()=>{
      navLinks.classList.toggle("active");
    };

    // COUNTER

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

      counter.innerText = '0';

      const updateCounter = ()=>{

        const target = +counter.getAttribute("data-target");

        const c = +counter.innerText;

        const increment = target / 100;

        if(c < target){

          counter.innerText = `${Math.ceil(c + increment)}`;

          setTimeout(updateCounter,20);

        }else{
          counter.innerText = target;
        }

      };

      updateCounter();

    });

    // SWIPER

    var swiper = new Swiper(".mySwiper", {
      slidesPerView:3,
      spaceBetween:30,
      loop:true,
      autoplay:{
        delay:2500,
        disableOnInteraction:false,
      },

      breakpoints:{
        0:{
          slidesPerView:1
        },
        768:{
          slidesPerView:2
        },
        1024:{
          slidesPerView:3
        }
      }
    });