let keys = document.getElementsByClassName("key"); //if you use querySelectorAll, you won't have to do Array.from later

document.addEventListener("keydown", function(e) {
  let pressedKey = e.key;
  Array.from(keys).forEach(key => {
    if (key.id === pressedKey) {
      let currentPress = document.getElementById(key.id);
      currentPress.classList.add("active");
      currentPress.getElementsByTagName("audio")[0].play();
      
      // setTimeout(function() {
      //   currentPress.classList.remove("active");
      // }, 100);

    }
  })
});

function removeTransition(e) {
  console.log("hi")
  this.classList.remove("active");
}

Array.from(keys).forEach(key => key.addEventListener("transitionend", removeTransition));
