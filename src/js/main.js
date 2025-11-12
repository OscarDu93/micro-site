// Les imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Puis les déclarations de plugins (registerPlugin)
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  //code JS ici
  //parallax intro

  // scroll image
  gsap.to(".slider-track", {
    scrollTrigger: {
      trigger: ".slider-mask",
      start: "top top",
      end: "+=400%",
      pin: true,
      scrub: true,
    },
    x: "-50%",
    ease: "sine.inOut",
  });

  // zoom
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".presentation",
        start: "top top",
        scrub: 2,
        pin: true,
      },
    })
    .to("#zoom-element", {
      width: 500,
      height: 500,
    });

  // scroll parallax
});
