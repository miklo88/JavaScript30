// key sequence detection. AKA CHEATS FOR VIDEO GAMES

/// creating empty array, assigning secretCode 'carlitos' to said array.
const pressed = [];
const secretCode = "carlitos";
// addEventListener function to the browser window that executes every keystroke "keyup" event.
window.addEventListener("keyup", (e) => {
  //console.logs each keystroke
  console.log(e.key);
  //pushes each keystroke thru the array
  pressed.push(e.key);
  //pressed.splice reads the secretCode length 'carlitos' which is 8 keystrokes.
  //-secretCode.length - 1 is checking the length of the secretCode from the back towards the front. so s,o,t,i,l,r,a,c which is 8 letters. Or for whatever length
  //YOUR secret code is.  pressed.length - secretCode.length and that trims our secretCode and renders the eventListenter function to invoke.
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  //logic for our secretCode when our pressed.length - secretCode.length when a match happens of our secretCode
  if (pressed.join("").includes(secretCode)) {
    //console.logs our a message when a succesful secretCode happens.
    console.log("HADUKKEN");
    // cornify_add is where the magic happens and the rainbows and unicorns come out
    cornify_add();
  }
  // renders the all the madness to the screen.
  console.log(pressed);
});
