// ============================
// CozyNest Website Script
// ============================

// Check connection
console.log("CozyNest JS is running");

// Welcome message (only once per session)
window.addEventListener("load", function () {
    alert("Welcome to CozyNest ✨");
});

// Simple navigation highlight (optional enhancement later)
const links = document.querySelectorAll("a");

links.forEach(link => {
    link.addEventListener("mouseover", function () {
        this.style.opacity = "0.7";
    });

    link.addEventListener("mouseout", function () {
        this.style.opacity = "1";
    });
});