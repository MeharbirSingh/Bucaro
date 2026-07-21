// ==========================
// SLIDER ARTESANÍA
// ==========================
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if(slides.length > 0 && prevBtn && nextBtn){

    let currentSlide = 0;
    let slideInterval;

    function showSlide(index){

        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[index].classList.add("active");

        if(dots[index]){
            dots[index].classList.add("active");
        }

    }

    function nextSlide(){

        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }

    function prevSlide(){

        currentSlide--;

        if(currentSlide < 0){
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);

    }

    function startSlider(){

        slideInterval = setInterval(nextSlide,5000);

    }

    function resetSlider(){

        clearInterval(slideInterval);
        startSlider();

    }

    nextBtn.addEventListener("click", () => {

        nextSlide();
        resetSlider();

    });

    prevBtn.addEventListener("click", () => {

        prevSlide();
        resetSlider();

    });

    dots.forEach((dot,index)=>{

        dot.addEventListener("click",()=>{

            currentSlide=index;

            showSlide(currentSlide);

            resetSlider();

        });

    });

    showSlide(currentSlide);

    startSlider();

}

/*==========================
      NAVBAR SCROLL
==========================*/

const navbar = document.querySelector(".navbar");

if(navbar){

    window.addEventListener("scroll", () => {

        if(window.scrollY > 80){

            navbar.classList.add("scrolled");

        }else{

            navbar.classList.remove("scrolled");

        }

    });

}

/*==========================
      MENU HAMBURGER
==========================*/

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle && navLinks){

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

/*==========================
      LIGHTBOX GALLERY
==========================*/

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

const lightboxClose = document.querySelector(".lightbox-close");
const lightboxPrev = document.querySelector(".lightbox-prev");
const lightboxNext = document.querySelector(".lightbox-next");

if(galleryImages.length > 0 && lightbox){

    let currentImage = 0;

    function openLightbox(index){

        currentImage = index;

        lightboxImg.src = galleryImages[index].src;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    }

    function closeLightbox(){

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

    function showNext(){

        currentImage++;

        if(currentImage >= galleryImages.length){

            currentImage = 0;

        }

        lightboxImg.src = galleryImages[currentImage].src;

    }

    function showPrev(){

        currentImage--;

        if(currentImage < 0){

            currentImage = galleryImages.length - 1;

        }

        lightboxImg.src = galleryImages[currentImage].src;

    }

    galleryImages.forEach((img,index)=>{

        img.addEventListener("click",()=>{

            openLightbox(index);

        });

    });

    lightboxClose.addEventListener("click", closeLightbox);

    lightboxNext.addEventListener("click", showNext);

    lightboxPrev.addEventListener("click", showPrev);

    lightbox.addEventListener("click",(e)=>{

        if(e.target === lightbox){

            closeLightbox();

        }

    });

    document.addEventListener("keydown",(e)=>{

        if(!lightbox.classList.contains("active")) return;

        if(e.key === "Escape") closeLightbox();

        if(e.key === "ArrowRight") showNext();

        if(e.key === "ArrowLeft") showPrev();

    });

}
