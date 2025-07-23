// Dark Mode and Light Mode
const toggelBtn = document.getElementById("toggelBtn");
const themeIcon = document.getElementById("themeIcon")
const body = document.querySelector("body");

if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeIcon.src = "./icons/dark-mode.png";
}

toggelBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        themeIcon.src = "./icons/dark-mode.png";
        localStorage.setItem("theme", "light");
    }
    else {
        themeIcon.src = "./icons/light-mode.png";
        localStorage.setItem("theme", "dark");
    }
});

// menuIcon logic
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.add("show");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
    navLinks.classList.remove("show");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
});

const allLinks = document.querySelectorAll(".nav-links a");
allLinks.forEach(link => {
    link.addEventListener("click", () => {
        if(navLinks.classList.contains("show")){
        navLinks.classList.remove("show");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
        }
    });
});

// window.addEventListener("resize", () => {
//     if (window.innerWidth > 768) {
//         // Desktop screen: show nav and hide icons
//         navLinks.classList.remove("show"); // optional: desktop pe 'show' class ki zarurat nahi
//         navLinks.style.display = "flex";   // or whatever display you use in CSS for desktop
//         menuIcon.style.display = "none";
//         closeIcon.style.display = "none";
//     } else {
//         // Mobile screen: hide nav by default
//         navLinks.style.display = "none";
//         menuIcon.style.display = "block";
//         closeIcon.style.display = "none";
//     }
// });
