import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

export const animate = () => {
 gsap.registerPlugin(ScrollTrigger);

 // *** Initial animation ****************************
 const tl = gsap.timeline();
 tl
  .to(".preloader", { width: 0, duration: 1, delay: 0.5 })
  .fromTo(
   ".slider-item",
   { height: 0 },
   { height: "100%", duration: 1 },
   "-=0.5"
  )
  .from(".title-light", { x: 0, xPercent: -50, opacity: 0, duration: 1 }, "-=0.5")
  .from(".title-bold", { x: 0, xPercent: 50, opacity: 0, duration: 1 }, "-=1")
  .fromTo(
   ".slider-item .button",
   { opacity: 0, y: 30 },
   { opacity: 1, y: 0, duration: 0.5 },
   "-=0.8"
  )
  .fromTo(
   ".button__prev, .button__next, .slide-numbers",
   { opacity: 0 },
   { opacity: 1, duration: 0.4, stagger: 0.4 }
  )
  .fromTo(".line", { width: 0 }, { width: "100%", duration: 2 });

 // *** Title animation triggered by scroll *****************************
 const tl1 = gsap.to(".title-light", { x: -200 });
 const tl2 = gsap.to(".title-bold", { x: 200 });
 const tlSlader = gsap.to(".slider-item", { backgroundSize: "110%", backgroundPositionY: "5%" });


 ScrollTrigger.create({
  trigger: ".slider",
  start: "top top",
  endTrigger: ".about-section",
  end: "+=500",
  toggleActions: "play none none reverse",
  scrub: 1,
  ease: "power1.inOut",
  animation: tl1,
 });

 ScrollTrigger.create({
  trigger: ".slider",
  start: "top top",
  endTrigger: ".about-section",
  end: "+=500",
  toggleActions: "play none none reverse",
  scrub: 1,
  ease: "power1.inOut",
  animation: tl2,
 });

  ScrollTrigger.create({
   trigger: ".slider",
   start: "top top",
   endTrigger: ".about-section",
   end: "+=500",
   toggleActions: "play none none reverse",
   scrub: 1,
   ease: "power1.inOut",
   animation: tlSlader,
  });
 // *** Animation on Sections ****************

 const trigger = gsap.utils.toArray(".animate");

 trigger.forEach(element => {
  const q = gsap.utils.selector(element);
    
 const tl3 = gsap.timeline();
 const tl4 = gsap.timeline();

    if (q(".gallery_items").length > 0) {

        tl3.fromTo(
            q(".gallery_items"),
            { height: "0%", opacity: 1 },
            { height: "100%", opacity: 1, stagger: 0.25, duration: 1 }
        );
    }

    if (q(".features__number").length > 0) {
        tl3.from(q(".features__number"), { scale: 3, opacity: 0, stagger: 0.25 }, "+=0.5");
    }

    if (q(".project").length > 0) {
     console.log(q(".project"));
     tl3.fromTo(
      q(".project"),
      { opacity: 0 },
      { opacity: 1, stagger: 0.25, duration: 0.3 },
      "+=0.5"
     );
    }

    if (q("#contact-form").length > 0) {
   
     tl3.from(q("input, textarea, p"), {
      opacity: 0,
      stagger: 0.2,
      duration: 0.3
     });

      tl3.fromTo(q(".contacts__image"), {opacity:0},{
       opacity: 1,
       stagger: 0.1,
       duration: 0.3,
       delay:0.2
      });
    }    

    tl3.from(q("h2"), { y: 50, opacity: 0, stagger: 0.25 }, "-=1");

    if (q(".p-animate").length > 0) {
     tl3.from(q(".p-animate"), { y: 50, opacity: 0, stagger: 0.25 }, "-=1");
    }

    if (q(".button-animate").length > 0) {
        tl3.from(q(".button-animate"), { x: 50, opacity: 0, stagger: 0.1 }, "-=1");
    }

    ScrollTrigger.create({
    trigger: element,
    start: "top center",
    end: "+=500",
    toggleActions: "play none none pause",
    ease: "power1.inOut",
    animation: tl3,
    });

    });
};
