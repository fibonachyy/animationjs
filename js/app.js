const firstSection = document.querySelector("#sec1");
const secoundSection = document.querySelector("#sec2");
const therdSection = document.querySelector("#sec3");
const mainSection = document.querySelector(".container");
const navBar = document.querySelector(".navbar");
let myHover1 = new hoverEffect({
  parent: therdSection,
  intensity: 0.2,
  image1: "../dist/852940.jpg",
  image2: "../dist/852939.jpg",
  displacementImage: "../dist/heightMap.png",
  imagesRatio: 960 / 540
});

let myHover2 = new hoverEffect({
  parent: secoundSection,
  intensity: 0.2,
  image1: "../dist/629508B.jpg",
  image2: "../dist/629506B.jpg",
  displacementImage: "../dist/stripe1.png",
  imagesRatio: 960 / 540
});

let myHover3 = new hoverEffect({
  parent: firstSection,
  intensity: 0.2,
  image1: "../dist/848026.jpg",
  image2: "../dist/783887.jpg",
  displacementImage: "../dist/heightMap.png",
  imagesRatio: 2280 / 1080,
  angle: Math.PI / 8
});
const colors = [
  { bg: "#000", color: "#fff" },
  { bg: "#34bed7", color: "#111" },
  { bg: "#e1e4e9", color: "" }
];
let currentPgae = 0;

function init() {
  const tl = gsap.timeline();
  const aside = document.querySelectorAll(".items");
  const humbergur = document.querySelectorAll("#humbergur");
  const pages = document.querySelectorAll(".pages");
  aside.forEach((node, index) => {
    node.addEventListener("click", () => {
      activeClick(node);
      showMewPage(index);
    });
  });
  showMewPage(currentPgae, true);
  function showMewPage(nextIndex, instart) {
    tl.fromTo(
      pages[currentPgae],
      0.5,
      { opacity: 1, pointerEvents: "all", scale: 1 },
      { opacity: 0, pointerEvents: "none", scale: 0.99 }
    )
      .fromTo(
        document.querySelector("body"),
        0.2,
        { color: colors[currentPgae].color },
        { color: colors[nextIndex].color },
        "-=2"
      )
      .fromTo(
        mainSection,
        !instart ? 0.6 : 0,
        { background: colors[currentPgae].bg },
        { background: colors[nextIndex].bg },
        "-=1"
      )
      .fromTo(
        navBar,
        !instart ? 0.6 : 0,
        { background: colors[currentPgae].bg },
        { background: colors[nextIndex].bg },
        "-=6"
      )
      .fromTo(
        pages[nextIndex],
        0.5,
        { opacity: 0, pointerEvents: "none", scale: 0.99 },
        { opacity: 1, pointerEvents: "all", scale: 1 },
        "-=0.4"
      )
      .fromTo(
        pages[nextIndex].querySelector(".intro"),
        0.5,
        { rotateY: -90, opacity: 0 },
        { rotateY: 0, opacity: 1 }
      )
      .fromTo(
        pages[nextIndex].querySelector(".details"),
        0.5,
        { x: -30, y: -10, opacity: 0 },
        { x: 0, y: 0, opacity: 1 },
        "-=0.2"
      )
      .set(document.querySelectorAll(".intro"), { clearProps: "all" });
    currentPgae = nextIndex;
  }

  function activeClick(item) {
    aside.forEach((node) => {
      node.classList.remove("active");
    });
    item.classList.add("active");
  }
  document.addEventListener("wheel", throttle(scrollChange, 1500));
  document.addEventListener("touchmove", throttle(scrollChange, 1500));
  function scrollChange(e) {
    const max_age = pages.length - 1;
    let nextPage;
    if (e.deltaY > 0) {
      nextPage = currentPgae + 1 > max_age ? 0 : currentPgae + 1;
    } else {
      nextPage = currentPgae - 1 < 0 ? max_age : currentPgae - 1;
    }
    console.log(nextPage);
    showMewPage(nextPage, false);
  }
}

init();

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
