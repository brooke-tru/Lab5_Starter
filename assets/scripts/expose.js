// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const img = document.querySelector("#volume-controls img");
  const vol = document.querySelector("#volume")
  const jsConfetti = new JSConfetti();
  //Change image when value of input changes
  vol.addEventListener("input", function() {
    let val = vol.value;
    if (val == 0){
      img.setAttribute('src', "assets/icons/volume-level-0.svg");
    }
    else if (val < 33){
      img.setAttribute('src', "assets/icons/volume-level-1.svg");
    }
    else if (val < 67){
      img.setAttribute('src', "assets/icons/volume-level-2.svg");
    }
    else{
      img.setAttribute('src', "assets/icons/volume-level-3.svg");
    }
  });



  //Play the audio when click button on party horn 
  const play = document.querySelector("button");
  const audio = document.querySelector("audio");
  const option = document.getElementById("horn-select");
  play.addEventListener('click', function(){
    if (option.value == "party-horn"){
      let val = vol.value;
      let volumeLevel = val / 100;
      audio.volume = volumeLevel;
      audio.play();
      jsConfetti.addConfetti();
    }
  })
}