import "./scss/style.scss";
import { animate } from "./js/animate.js"
import { toggleBurgerMenu } from "./js/toggleBurgerMenu.js";

window.addEventListener("load", onLoadFunction);

function onLoadFunction(e) {
    e.preventDefault();

    animate();
    onResizeFunction(); 

    window.addEventListener("resize", onResizeFunction);
}

function onResizeFunction() {   
    calculateSliderHeight();
    toggleBurgerMenu();
}

function calculateSliderHeight () {
    const slider = document.getElementById("slider");
    slider.style.height = slider.offsetWidth * 1.08 + "px";
    console.log(slider.style.height);
}




