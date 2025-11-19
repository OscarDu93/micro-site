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
      y: "-100%",
      ease: "none",
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

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".manifestation",
        start: "top top",
        scrub: 1,
        end: "+=5",
      },
    })

    .to("#txt-right-1", {
      ease: "none",
      opacity: 1,
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".manifestation",
        start: "top top",
        scrub: 1,
        ease: "slow(0.7,0.7,false)",
        pin: ".manifestation",
      },
    })
    .to("#manif-left-1", {
      x: "20%",
      ease: "none",
      opacity: 1,
      end: "+=50%",
    });

  gsap.to("#manif-right-2", {
    opacity: 1,
    x: "-40%",
    scrollTrigger: {
      trigger: ".manifestation",
      start: "top top",
      end: "+=50%",
      scrub: 2,
    },
  });

  // apparition

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".revolte-container",
        start: "bottom bottom",
        scrub: 2,
        ease: "slow(0.7,0.7,false)",
        pin: ".manifestation",
      },
    })
    .to(".apparition-1", {
      scale: 1.1,
      ease: "none",
      opacity: 1,
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".revolte-container",
        start: "bottom bottom",
        scrub: 2,
        ease: "slow(0.7,0.7,false)",
        pin: true,
      },
    })
    .to(".apparition-2", {
      scale: 1.1,
      ease: "none",
      opacity: 1,
    });

  // solo

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".god",
        start: "bottom bottom",
        scrub: 2,
        pin: true,
      },
    })
    .to(".god-container", {
      ease: "none",
      opacity: 1,
    });

  // disslocation

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".dead-body-container",
        start: "top top",
        scrub: 2,
        pin: true,
      },
    })
    .to("#object-leg-1", {
      y: -20,
      x: -10,
    })
    .to(
      "#object-leg-2",
      {
        y: 20,
        x: -10,
      },
      0
    )
    .to(
      "#object-bassin",
      {
        scale: 1.1,
      },
      0
    )
    .to(
      "#object-torse",
      {
        scale: 1.1,
      },
      0
    )
    .to(
      "#object-arms-1",
      {
        y: -20,
        x: -10,
        scale: 1.1,
      },
      0
    )
    .to(
      "#object-arms-2",
      {
        y: -20,
        x: -10,
        scale: 1.1,
      },
      0
    )
    .to(
      "#object-head",
      {
        scale: 1.1,
      },
      0
    );

  //marjane solo
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".dead-body-container",
        start: "bottom bottom",
        scrub: 1,
      },
    })
    .to(".apparition-1-solo", {
      ease: "none",
      opacity: 1,
      scale: 1.1,
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".container-images",
        start: "bottom bottom",
        scrub: 1,
        pin: true,
      },
    })
    .to(".marjane-dark", {
      ease: "none",
      scale: -0,
      rotate: 30,
    });
});

// Vérifie qu'on est bien sur la bonne page
if (window.location.pathname.endsWith("page1.html")) {
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight) {
      window.location.href = "book-page.html"; // page de destination
    }
  });
}
