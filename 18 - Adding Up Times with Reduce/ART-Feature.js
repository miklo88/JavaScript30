// Pulling info out of the dom, converting into hours mins seconds and console.loggin the total time of the videos
//now we want to convert data-time from a node list to an array
const timeNodes = Array.from(document.querySelectorAll("[data-time]"));
// converting down into seconds. Taking the time nodes from a list of items
const seconds = timeNodes
  // mapping over it converting it to a list of strings.
  .map((node) => node.dataset.time)
  //now we want to turn it into just seconds. so we'll map over and split this string into mins and seconds
  .map((timeCode) => {
    // using es6 destructuring to split mins and seconds on the colon :
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
    // console.log(mins, secs);
  })
  // now its time to reduce all of these numbers into one total number.
  .reduce((total, vidSeconds) => total + vidSeconds);
// now we're chopping this back to hours mins, seconds
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
// remember mins are not 100 based but 60 based.
// you see mod on here % what this does is find out how many are left after
// being evenly distributed. so after we chunk it into hours, this will be
// how many seconds left we have.
secondsLeft = secondsLeft % 3600;
// back again for the mins and mod the leftover seconds.
const mins = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
// seeing how many hours, mins, seconds we have total.
console.log(hours, mins, secondsLeft);

// console.log(timeNodes);
