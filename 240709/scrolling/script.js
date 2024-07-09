const scrollFnc = () => {
  const container = document.querySelector(".container");
  const item1 = document.querySelector(".item1");
  const scrolled = window.scrollY;
  console.log(scrolled);
};

window.addEventListener("scroll", scrollFnc());
