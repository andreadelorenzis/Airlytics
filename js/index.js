import { showPredictions, showPosition } from "./search/search.js";

/* listeners for menu */
const menuBtn = document.querySelector(".nav__menu-open");
const closeBtn = document.querySelector(".nav__menu-close");
const navMenu = document.querySelector(".nav__menu");
menuBtn.addEventListener('click', () => {
    navMenu.classList.add('nav__menu--open');
});
closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('nav__menu--open');
});

/* listener for user position button */
document.querySelector(".search__position").addEventListener("click", () => {
    showPosition();
});

/* do this in order for callback in index.html to work with webpack */
window.initService = initService;

/* initialize Places API */
export function initService() {
    console.log("Connecting to maps API...")
    console.log("...connected");
    document.querySelector(".search__input").addEventListener('input', function () { showPredictions(this.value) });
}