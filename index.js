//alert();
//document.getElementById("title").
// let w = document.body.getElementsByClassName("set")[0].getElementsByClassName("w")[0];
/*
w.addEventListener("click",drumListener);
function drumListener(){
  alert("w");
}
*/
/*
w.addEventListener("click",function drumListener(){
  alert("w");
});
*/

//let w = document.body.getElementsByClassName("set")[0].getElementsByClassName("drum");

document.body.addEventListener('keydown', drumListener);
document.body.addEventListener('keyup', drumListener_2);
let instruments = document.querySelectorAll(".drum");
let letters = ["w", "a", "s", "d", "j", "k", "l"];
for (let i = 0; i < instruments.length; i++) {
  instruments[i].addEventListener("mousedown", drumListener);
  instruments[i].addEventListener("mouseup", drumListener_2);
}

function drumListener(e) {
  let targeteddrum = getTargetedDrum(e,"keydown","mousedown");
  /*
  console.log(e);
  console.log(e.target);
  console.log(this);
  console.log(targeteddrum);
  */
  let audioPlayer = new Audio("");
  //let audioPlayer = document.getElementById("myaudio");
  if (targeteddrum === "w") {
    audioPlayer.src = "sounds/tom-1.mp3";
  } else if (targeteddrum === "a") {
    audioPlayer.src = "sounds/tom-2.mp3";
  } else if (targeteddrum === "s") {
    audioPlayer.src = "sounds/tom-3.mp3";
  } else if (targeteddrum === "d") {
    audioPlayer.src = "sounds/tom-4.mp3";
  } else if (targeteddrum === "j") {
    audioPlayer.src = "sounds/snare.mp3";
  } else if (targeteddrum === "k") {
    audioPlayer.src = "sounds/crash.mp3";
  } else if (targeteddrum === "l") {
    audioPlayer.src = "sounds/kick-bass.mp3";
  } else {
    return;
  }
  document.getElementsByClassName(targeteddrum)[0].classList.add("pressed");
  audioPlayer.play();

  /*
  let currentElement = e.target;
  let audioPlayer = new Audio("");
  if (currentElement.classList.contains("w")) { //may use innerHTML to compare
    audioPlayer.setAttribute("src", "sounds/tom-1.mp3");
  } else if (currentElement.classList.contains("a")) {
    audioPlayer.setAttribute("src", "sounds/tom-2.mp3");
  } else if (currentElement.classList.contains("s")) {
    audioPlayer.setAttribute("src", "sounds/tom-3.mp3");
  } else if (currentElement.classList.contains("d")) {
    audioPlayer.setAttribute("src", "sounds/tom-4.mp3");
  } else if (currentElement.classList.contains("j")) {
    audioPlayer.setAttribute("src", "sounds/snare.mp3");
  } else if (currentElement.classList.contains("k")) {
    audioPlayer.setAttribute("src", "sounds/crash.mp3");
  } else if (currentElement.classList.contains("l")) {
    audioPlayer.setAttribute("src", "sounds/kick-bass.mp3");
  }
  audioPlayer.play();
  */
}

function drumListener_2(e) {
  let targeteddrum = getTargetedDrum(e,"keyup","mouseup");
  if (letters.includes(targeteddrum)) {
    document.getElementsByClassName(targeteddrum)[0].classList.remove("pressed");
  }
}

function getTargetedDrum(e,keyEvent,mouseEvent) {
  if (e.type === keyEvent) {
    return e.key;
  } else if (e.type === mouseEvent) {
    return e.target.innerText;
  }
}



let drms = document.getElementsByClassName("drum");
for (let i = 0; i < 4; i++) {
  drms[i].style.backgroundImage = 'url("images/tom' + (i + 1) + '.png")';
}
drms[4].style.backgroundImage = 'url("images/snare.png")';
drms[5].style.backgroundImage = 'url("images/crash.png")';
drms[6].style.backgroundImage = 'url("images/kick.png")';
// w.addEventListener("click",e=> {
//   alert("w");
// });
