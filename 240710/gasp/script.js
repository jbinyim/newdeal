gsap.registerPlugin(ScrollTrigger);

const headerEl = document.querySelector("header");

const scrollFnc = () => {
  if (window.scrollY > 100) {
    // headerEl.style.opacity = 0;
    gsap.to("header", { y: -100, duration: 1 });
  } else {
    // headerEl.style.opacity = 1;
    gsap.to("header", { y: 0, duration: 0.3 });
  }
};

window.addEventListener("scroll", scrollFnc);

const tl = gsap.timeline();
tl.to(".item", {
  y: 0,
  duration: 3,
})
  .to("span", { opacity: 0 })
  .to(".container", { gap: 0, duration: 2 });
