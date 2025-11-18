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
        scrub: 1,
        ease: "slow(0.7,0.7,false)",
        pin: true,
      },
    })
    .to(".zoom-container", {
      scale: 1.2,
      ease: "none",
      opacity: 1,
    });

  gsap.to(".zoom-container", {
    y: "100%",
    scrollTrigger: {
      trigger: ".presentation",
      start: "+=5%",
      end: "bottom bottom",
      scrub: 3,
    },
  });

  gsap.to(".zoom-container", {
    ease: "slow(0.7,0.7,false)",
    opacity: 0,
    scrollTrigger: {
      trigger: ".presentation",
      start: "bottom bottom",
      end: "+=10%",
      scrub: 3,
    },
  });

  // scroll parallax 2

  gsap.to("#txt-left-1", {
    opacity: 1,
    x: "100%",
    scrollTrigger: {
      trigger: "#txt-left-1",
      start: "bottom bottom",
      end: "+=10%",
      scrub: 1,
    },
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#txt-left-1",
        start: "top top",
        scrub: 2,
        ease: "slow(0.7,0.7,false)",
      },
    })
    .to("#txt-left-1", {
      y: "-20%",
      ease: "none",
      opacity: 0,
    });

  gsap.to("#img-right-2", {
    opacity: 1,
    x: "-140%",
    scrollTrigger: {
      trigger: "#txt-left-1",
      start: "bottom bottom",
      end: "+=50%",
      scrub: 2,
    },
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#txt-left-1",
        start: "top top",
        scrub: 5,
        ease: "slow(0.7,0.7,false)",
        pin: true,
      },
    })
    .to("#img-right-2", {
      y: "-40%",
      ease: "none",
      opacity: 0,
    });

  // scroll parallax 3
});
