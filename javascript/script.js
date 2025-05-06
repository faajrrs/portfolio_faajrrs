// Typing Animation
// var typed = new Typed(".typing", {
//     strings: ["Junior Programmer", "Graphics Designer"],
//     typeSpeed: 120,
//     backSpeed: 80,
//     backDelay: 500,
//     startDelay: 300,
//     loop: true,
//     smartBackspace: false,
//     showCursor: true,
//     cursorChar: "|",
// });

// Preloader
function counter() {
    let int = 0;
    const c = document.getElementById("counter");

    function updateCounter() {
        if (int < 100) {
            int++;
            c.textContent = int.toString();
            requestAnimationFrame(updateCounter);
        } else {
            c.classList.add("hide");
            document.getElementById("preloader").classList.add("slide-up");
        }
    }

    setTimeout(() => {
        requestAnimationFrame(updateCounter);
    }, 500);
}

counter();

// Dark Mode
const darkModeIcon = document.getElementById("darkMode-icon");
const body = document.body;

body.style.transition = "background-color 1s, color 1s";

if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  darkModeIcon.classList.replace("bx-sun", "bx-moon");
}

darkModeIcon.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    darkModeIcon.classList.replace("bx-sun", "bx-moon");
} else {
    localStorage.setItem("darkMode", "disabled");
    darkModeIcon.classList.replace("bx-moon", "bx-sun");
}
});