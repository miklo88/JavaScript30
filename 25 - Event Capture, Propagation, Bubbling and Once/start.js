// event listener skinnny

const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation(); // stops the bubbling
  console.log(this);
}

//bubbling what you select to click will bubble through the element, to the dom to the world
// document.body.addEventListener("click", logText);

divs.forEach((div) =>
  div.addEventListener("click", logText, {
    capture: false,
    //unbinding itself
    // once: true,
  })
);
// unbinding itself {once: true} and then wont listen for any
// further clicks on itself unless you refresh the page.
//is the same as =>
// div.removeEventListener('click', logText, capture?: boolean)

//another example {once} this is good for if youre purchasing items.
button.addEventListener(
  "click",
  () => {
    console.log("Click!!!");
  },
  {
    once: true,
  }
);
