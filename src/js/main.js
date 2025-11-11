import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.to("#object-star-1", {
  opacity: 0,
  y: "-20%",
  scrollTrigger: {
    trigger: "#object-star-1",
    start: "top top",
    scrub: 1,
  },
});

gsap.to("#object-star-2", {
  opacity: 0,
  y: "-50%",
  scrollTrigger: {
    trigger: "#object-star-2",
    start: "bottom bottom",
    scrub: 1,
  },
});
