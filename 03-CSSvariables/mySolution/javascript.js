const root = document.documentElement;
const inputs = document.querySelectorAll("#controls input");

function handleUpdate(e) {
  const suffix = this.dataset.suffix || "";
  root.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));


// MUCH DRYer this way than the previous -->

// const updateSpacing = e => {
//   const spacing = e.target.value;
//   root.style.setProperty("--spacing", spacing + "px");
// }

// const updateBlur = e => {
//   const blurValue = e.target.value;
//   root.style.setProperty("--blur-value", blurValue + "px");
// }

// const updateColor = e => {
//   const colorValue = e.target.value;
//   root.style.setProperty("--main-color", colorValue);
// }

// document.getElementById("ctr-spacing").addEventListener("change", updateSpacing);
// document.getElementById("ctr-blur").addEventListener("change", updateBlur);
// document.getElementById("ctr-color").addEventListener("change", updateColor);