let root = document.documentElement;

let ticking = window.setInterval(updateTime, 1000);

function updateTime() {
  const date = new Date();
  let second = date.getSeconds() * 6;
  let minute = date.getMinutes() * 6;
  let hour = date.getHours() * 30;

  root.style.setProperty("--second-hand", second + "deg");
  root.style.setProperty("--minute-hand", minute + "deg");
  root.style.setProperty("--hour-hand", hour + "deg");
}

// Okay, here's the thing -- the transition between 60 and 0 is wrong. You could just turn off the transition for that one sweep, and that would be less weird but still a break, or you could get the real time once on load and then just tick the time up in the interval, which should work fine, but seems like cheating? There's probably something complicated you could do to make it work ... ? But perhaps not overcomplicating is best and we should go with option 2.