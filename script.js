document.addEventListener("DOMContentLoaded", () => {
  // Slider de propiedades
const propiedades = document.querySelectorAll(".propiedad-card");

propiedades.forEach((card) => {
    const slides = card.querySelectorAll(".slide");
    const prevBtn = card.querySelector(".prev");
    const nextBtn = card.querySelector(".next");
    let index = 0;

    const showSlide = (i) => {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[i].classList.add("active");
    };

    prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
    });

    nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
    });

    showSlide(index); 
});

  // Sidebar toggle (hamburguesa)
const hamburger = document.querySelector(".hamburger");
const overlay = document.getElementById("overlay");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", toggleSidebar);

function toggleSidebar() {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
}
});

