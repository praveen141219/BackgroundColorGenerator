const chaneBtn = document.querySelector(".btn");
const textApperance = document.querySelector(".text");
const hslAppearance = document.querySelector("h1");

chaneBtn.addEventListener("click", () => {
  const hue = Math.trunc(Math.random() * 360);
  const saturation = Math.trunc(Math.random() * 101);
  const light = Math.trunc(Math.random() * 101);
  const colour = `hsl(${hue},${saturation}%,${light}%)`;
  console.log(colour);
  document.body.style.background = colour;
  textApperance.style.color = colour;
  hslAppearance.textContent = colour;
});
