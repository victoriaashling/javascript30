let keys = document.getElementsByClassName("key");

document.addEventListener("keydown", function(e) {
  let pressedKey = e.key;
  Array.from(keys).forEach(key => {
    if (key.id === pressedKey) {
      let currentPress = document.getElementById(key.id);
      currentPress.classList.add("active");
      currentPress.getElementsByTagName("audio")[0].play();
      
      setTimeout(function() {
        currentPress.classList.remove("active");
      }, 100);

    }
  })
});

