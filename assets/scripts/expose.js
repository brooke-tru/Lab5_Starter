// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const img = document.querySelector("#volume-controls img");
  const vol = document.querySelector("#volume")
  const jsConfetti = new JSConfetti();
  const audio = document.querySelector("audio");
  const selectionImage = document.getElementById("horn-select");
  const image = document.querySelector("img");
  //Change the image based on selection

  selectionImage.addEventListener("change", function() {
    switch (selectionImage.value){
      case ("air-horn"):
        image.setAttribute("src", "assets/images/air-horn.svg");
        audio.setAttribute("src", "assets/audio/air-horn.mp3");
        break;
      case ("car-horn"):
        image.setAttribute("src", "assets/images/car-horn.svg");
        audio.setAttribute("src", "assets/audio/car-horn.mp3");
        break;
      case ("party-horn"):
        image.setAttribute("src", "assets/images/party-horn.svg");
        audio.setAttribute("src", "assets/audio/party-horn.mp3");
        break;
      default:
        image.setAttribute("src", "assets/images/no-image.png");
        break;
    }
  });

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
  const option = document.getElementById("horn-select");
  play.addEventListener('click', function(){
    let val = vol.value;
    let volumeLevel = val / 100;
    audio.volume = volumeLevel;
    audio.play();
    if (option.value == "party-horn"){
      jsConfetti.addConfetti();
    }
  })
}