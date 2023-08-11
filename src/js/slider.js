import { register } from "swiper/element/bundle";

export const slider = () => {
    register();

    const swiper = document.querySelector("swiper-container").swiper;
    const buttonNextEl = document.querySelector(".button__next");
    const buttonPrevEl = document.querySelector(".button__prev");

    const setActiveButton = (index) => {
        buttonNextEl.classList.add("active");
        buttonPrevEl.classList.add("active");

        console.log(Number(index));

        if (Number(index) === 0) {
         buttonPrevEl.classList.remove("active");
        }
        if (Number(index) === 2) {
         buttonNextEl.classList.remove("active");
        } 
               
    }

    const setActiveSlid = () => {
        const slideNumber = document.querySelector(".slide-number");
        let span = `0${swiper.activeIndex + 1}`;
        slideNumber.innerHTML = span;

        setActiveButton(swiper.activeIndex);

     return swiper.activeIndex + 1;
    };
    setActiveButton(0)
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