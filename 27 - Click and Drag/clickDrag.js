// selecting items and listening for a number of different events
const slider = document.querySelector(".items");

let isDown = false;
let startX; // to know where someone clicks down
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  console.log(startX);
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", () => {
  if (!isDown) return; // stops the function from running.
  e.preventDefault(); // stops any bad user clicking juju
  const x = e.pageX - slider.offsetLeft;
  console.log({ x, startX });
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
  //   console.log(walk);
});
