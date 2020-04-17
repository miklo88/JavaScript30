// key sequence detection. AKA CHEATS FOR VIDEO GAMES
const pressed = [];
const secretCode = "carlitos";

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join("").includes(secretCode)) {
    console.log("HADUKKEN");
    cornify_add();
  }
  console.log(pressed);
});
