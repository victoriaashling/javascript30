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
