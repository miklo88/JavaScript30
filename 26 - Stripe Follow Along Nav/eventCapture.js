const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  console.log("two men enter");
  this.classList.add("trigger-enter");
  // controlling timeout of mouseenter. if trigger-enter-active is true setTimeout runs.
  // if not, don't even worry about it.
  setTimeout(
    () =>
      this.classList.add("trigger-enter-active") &&
      this.classList.add("trigger-event-active"),
    150
  );
  background.classList.add("open");

  //figure out what dropdown is
  const dropdown = this.querySelector(".dropdown");
  console.log(dropdown);
  //grabbing dropdownCoords
  const dropdownCoords = dropdown.getBoundingClientRect();
  ///grabbing nav coords
  const navCoords = nav.getBoundingClientRect();
  console.log(navCoords);
  /// coordinates of height width top and left/ top and left are hard because they're nested
  // in the dom.
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };
  // width and height of the background dropdown
  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty(
    "transform",
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

function handleLeave() {
  //   console.log("one man leave");
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);

/// break down in to two parts. one is getting content of the dropdown showing
/// second figure out how big the ul div is and help get the white background on the page
