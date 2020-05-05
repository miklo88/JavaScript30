// using querySelector to grab the classnames.
const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

// our functionality for the playback rate of the video. on mousemove event
speed.addEventListener("mousemove", function (e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + "%";
  // going to have to do some math to get the lower and upper bounds
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + "×";
  video.playbackRate = playbackRate;
  //   console.log(y);

  console.log(percent);
});
