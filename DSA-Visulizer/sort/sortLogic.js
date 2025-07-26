// Dark Mode and Light Mode
const toggelBtn = document.getElementById("toggelBtn");
const themeIcon = document.getElementById("themeIcon")
const body = document.querySelector("body");

if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeIcon.src = "../icons/dark-mode.png";
}

toggelBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        themeIcon.src = "../icons/dark-mode.png";
        localStorage.setItem("theme", "light");
    }
    else {
        themeIcon.src = "../icons/light-mode.png";
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
        if (navLinks.classList.contains("show")) {
            navLinks.classList.remove("show");
            closeIcon.style.display = "none";
            menuIcon.style.display = "block";
        }
    });
});


//animation
function generateBars(arr) {
    const container = document.getElementById("barContainer");
    container.innerHTML = ""; // Clear existing bars

    const maxValue = Math.max(...arr);

    arr.forEach((value, index) => {
        const barWrapper = document.createElement("div");
        barWrapper.style.display = "flex";
        barWrapper.style.flexDirection = "column";
        barWrapper.style.alignItems = "center";
        barWrapper.style.gap = "5px";

        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${(value / maxValue) * 100}%`;

        const valLabel = document.createElement("div");
        valLabel.classList.add("bar-value");
        valLabel.textContent = value;

        const indexLabel = document.createElement("div");
        indexLabel.classList.add("bar-index");
        indexLabel.textContent = index;
        indexLabel.style.color = "#aaa";
        indexLabel.style.fontSize = "12px";

        bar.appendChild(valLabel);
        barWrapper.appendChild(bar);
        barWrapper.appendChild(indexLabel);
        container.appendChild(barWrapper);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    generateBars([30, 10, 50, 40, 20]);
});
