const toggelBtn = document.getElementById("toggelBtn");
const body = document.querySelector("body");

if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggelBtn.textContent = "🌙";
}

toggelBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        toggelBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
    else {
        toggelBtn.textContent = "🌞";
        localStorage.setItem("theme", "dark");
    }
});