// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //Populate the Voice List 
  let voices = [];
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }
  
    voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  
  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  //TTS and Face Change
  const button = document.querySelector("button");
  const synth = window.speechSynthesis;
  const selectedVoice = document.getElementById("voice-select");
  const face = document.querySelector("img");

  button.addEventListener("click", function() {
    var text = document.querySelector("textarea");
    const msg = new SpeechSynthesisUtterance(text.value);
    for (let i = 0; i < voices.length; i++) {
      console.log("voices:" + voices[i].name + " (" + voices[i].lang + ")");
      console.log("selected:" + selectedVoice.value);
      if ((voices[i].name + " (" + voices[i].lang + ")") === selectedVoice.value) {
        msg.voice = voices[i];
      }
    }

    synth.speak(msg);

    msg.addEventListener("start", function() {
      face.setAttribute("src", "assets/images/smiling-open.png");
    });

    msg.addEventListener("end", function() {
      face.setAttribute("src", "assets/images/smiling.png");
    });
    
  });


  
}