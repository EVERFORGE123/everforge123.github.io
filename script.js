// EVERFORGE Script

// Fade in sections as you scroll

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach(section =>{

    section.classList.add("hidden");

    observer.observe(section);

});


// Card hover glow

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
        radial-gradient(circle at ${x}px ${y}px,
        rgba(176,141,87,.18),
        rgba(20,20,20,.95) 45%)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.03)";

    });

});


// Logo fade

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

document.addEventListener("DOMContentLoaded", () => {

    const menu = document.querySelector(".mobile-menu");
    const button = document.querySelector(".menu-toggle");
    const overlay = document.querySelector(".menu-overlay");

    button.addEventListener("click", () => {

    menu.classList.toggle("active");
    button.classList.toggle("active");
    overlay.classList.toggle("active");

    if (menu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
overlay.addEventListener("click", () => {

    menu.classList.remove("active");
    button.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";

});
});

    document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");
        button.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";

    });

});
});
