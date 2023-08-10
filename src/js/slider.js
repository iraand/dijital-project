import { register } from "swiper/element/bundle";

export const slider = () => {
    register();

    const swiper = document.querySelector("swiper-container").swiper;
    const buttonNextEl = document.querySelector(".button__next");
    const buttonPrevEl = document.querySelector(".button__prev");

    const setActiveSlid = () => {
     console.log(swiper.activeIndex);

        const slideNumber = document.querySelector(".slide-number");
        let span = `0${swiper.activeIndex + 1}`;
        slideNumber.innerHTML = span;

     return swiper.activeIndex + 1;
    };

    setActiveSlid();

    buttonNextEl.addEventListener("click", () => {
     swiper.slideNext();
     setActiveSlid();
    });
    buttonPrevEl.addEventListener("click", () => {
        swiper.slidePrev();
        setActiveSlid();
    });

    swiper.on("activeIndexChange", event => {
     setActiveSlid();
    });

}