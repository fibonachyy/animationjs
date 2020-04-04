const firstSection = document.querySelector("#sec1");
const secoundSection = document.querySelector("#sec2");
const therdSection = document.querySelector("#sec3");

let myHover1 = new hoverEffect({
  parent: therdSection,
  intensity: 0.2,
  image1: "../dist/629506.jpg",
  image2: "../dist/629508.jpg",
  displacementImage: "../dist/heightMap.png",
  imagesRatio: 960 / 540
});

let myHover2 = new hoverEffect({
  parent: secoundSection,
  intensity: 0.2,
  image1: "../dist/738379.png",
  image2: "../dist/629506s.png",
  displacementImage: "../dist/stripe1.png",
  imagesRatio: 960 / 640
});

let myHover3 = new hoverEffect({
  parent: firstSection,
  intensity: 0.2,
  image1: "../dist/848026.jpg",
  image2: "../dist/849480.jpg",
  displacementImage: "../dist/heightMap.png",
  imagesRatio: 2280 / 1080,
  angle: Math.PI / 8
});
const colors = [
  "radial-gradient(#000, #000, #000, #0e0d0d)",
  "radial-gradient(#220433, #13031c)",
  "radial-gradient(#052b02, #021201)"
];
let currentPgae = 0;
function init() {
  const tl = gsap.timeline();
  const aside = document.querySelectorAll(".items");
  const humbergur = document.querySelectorAll("#humbergur");
  const pages = document.querySelectorAll(".pages");
  tl.fromTo(
    pages[currentPgae],
    0,
    { opacity: 0, pointerEvents: "none" },
    { opacity: 1, pointerEvents: "all" }
  );
  aside.forEach((node, index) => {
    node.addEventListener("click", () => {
      activeClick(node);
      showMewPage(index);
    });
  });

  function showMewPage(nextIndex) {
    tl.fromTo(
      pages[currentPgae],
      0.5,
      { opacity: 1, pointerEvents: "all" },
      { opacity: 0, pointerEvents: "none" }
    )
      .fromTo(
        pages[nextIndex],
        0.5,
        { opacity: 0, pointerEvents: "none", scale: 0.99 },
        { opacity: 1, pointerEvents: "all", scale: 1 },
        "-=0.2"
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
    // .set(pages[nextIndex], { clearProps: "all" });
    currentPgae = nextIndex;
  }
  function activeClick(item) {
    aside.forEach((node) => {
      node.classList.remove("active");
    });
    item.classList.add("active");
  }
}

init();
