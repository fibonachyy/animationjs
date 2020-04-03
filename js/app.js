const firstSection = document.querySelector(".sec1");
const secoundSection = document.querySelector(".sec2");
let myHover1 = new hoverEffect({
  parent: firstSection,
  intensity: 0.2,
  image1: "../dist/853191.jpg",
  image2: "../dist/853192.jpg",
  displacementImage: "../dist/heightMap.png",
  imagesRatio: 1170 / 540
});

let myHover2 = new hoverEffect({
  parent: secoundSection,
  intensity: 0.2,
  image1: "../dist/851431.jpg",
  image2: "../dist/851437.jpg",
  displacementImage: "../dist/stripe1.png",
  imagesRatio: 1170 / 540
});
