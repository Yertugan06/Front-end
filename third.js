const colorBox = document.getElementById("colorBox");

colorBox.addEventListener("mouseover", () => {
  colorBox.style.backgroundColor = "lightcoral";
});

colorBox.addEventListener("mouseout", () => {
  colorBox.style.backgroundColor = "lightblue";
});

const textInput = document.getElementById("textInput");
const outputDiv = document.getElementById("output");

textInput.addEventListener("keyup", () => {
  outputDiv.textContent = textInput.value;
});
