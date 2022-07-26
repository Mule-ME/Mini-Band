function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

function playSound(e) {
  //calling audio tag depending on data-key on that audio element
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  //calling key classes to access that specific div data
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0; //rewind to the start to acept new event whitc will make the player to play that specific sound agin and again
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
