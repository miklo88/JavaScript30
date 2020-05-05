const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");

let lastHole;
let timeUp = false;
let score = 0;
// WHACK A MOLE
// what hole will the mole pop up in and where will it pop up in.
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
// a node list that contains our holes
function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    console.log("Thats the same one buddy");
    return randomHole(holes);
  }
  //   console.log(hole);
  lastHole = hole;
  return hole;
}

//gettin the moles
function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
  console.log(time, hole);
}

// to start the game, invoking moles
function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  // each game/round lasts 10 seconds
  setTimeout(() => (timeUp = true), 10000);
}

// bonk them on the head
function bonk(e) {
  if (!e.isTrusted) return; // to stop cheaters! HA
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = score;
  console.log(e);
}
moles.forEach((mole) => mole.addEventListener("click", bonk));
