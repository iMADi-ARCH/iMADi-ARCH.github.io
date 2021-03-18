
let nav_button = document.querySelector(".nav-button");
let nav_bar = document.querySelector("nav");

nav_bar.style.transform = "translateX(-225px)";

nav_button.onclick = function() {
    if (nav_bar.style.transform == "translateX(-225px)") {
        nav_bar.style.transform = "translateX(0)";
        nav_button.style.margin = "5px 240px";
    } else {
        nav_bar.style.transform = "translateX(-225px)";
        nav_button.style.margin = "5px 15px";
    }
}
