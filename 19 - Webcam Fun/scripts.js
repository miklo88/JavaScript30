const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
  /// get a users video sorted out first
  navigator.mediaDevices

    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      console.log(localMediaStream);

      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error(`OH NO!!!`, err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    ////////////take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);

    //////////// messing with the pixels
    // pixels = redEffect(pixels);

    //////////// another effect that splits multiple colored images across the screen
    // pixels = rgbSplit(pixels);
    // /////// contex give this a slowed down slow motion appearance.
    // ctx.globalAlpha = 0.2;

    pixels = greenScreen(pixels);
    // //then putting them back
    //// uncomment this and your filters will appear
    ctx.putImageData(pixels, 0, 0);
    // console.log(pixels);
    // debugger;
  }, 16);
}

function takePhoto() {
  //playing the sound
  snap.currentTime = 0;
  snap.play();

  //time to get a photo / getting data out of the url
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "handsome");
  link.innerHTML = `<img src="${data}" alt="Guapo chico" />`;
  strip.insertBefore(link, strip.firstChild);
  // console.log(data);
}
// cool red color overlay being run through a for loopies
function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // Rojo
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // Verde
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; //Azul
  }
  return pixels;
}
/// splitting the colors apart
function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // Rojo
    pixels.data[i + 100] = pixels.data[i + 1]; // Verde
    pixels.data[i - 150] = pixels.data[i + 2]; //Azul
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll(".rgb input").forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      //taking it out.
      pixels.data[i + 3] = 0;
    }
  }
  return pixels;
}

getVideo();

video.addEventListener("canplay", paintToCanvas);
