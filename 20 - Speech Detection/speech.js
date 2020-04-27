window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

recognition.addEventListener("result", (e) => {
  console.log(e.results);
  const transcript = Array.from(e.results)
    .map((results) => results[0])
    .map((result) => result.transcript)
    .join("");
  /// adding a p element to the browswer when the recognition transcribes the speech to the browswer
  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
  console.log(transcript);
});
//this second event listener allows the speech recognition to continue to transcribe inbetween breaks
recognition.addEventListener("end", recognition.start);

recognition.start();
