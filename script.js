const colorPreview = document.querySelector(".colorPreview");
const boxInput = document.querySelectorAll(".box input");
const colorCode = document.querySelector("#colorCode");
const copyCodeBtn = document.querySelector(".copyCodeBtn");

//Generating RGB Color based on input change
function generateColor() {
  const R = boxInput[0].value;
  const G = boxInput[1].value;
  const B = boxInput[2].value;
  colorPreview.style.backgroundColor = `rgb(${R},${G},${B})`;
  colorCode.value = `rgb(${R},${G},${B})`;
}

//calls the generateColor function whenever inputs changes
boxInput.forEach((e) => {
  e.addEventListener("input", generateColor);
});

//copying color code to the clipbaord
copyCodeBtn.addEventListener("click", () => {
  const text = colorCode.value;
  navigator.clipboard.writeText(text);
  copyCodeBtn.innerHTML = "Copied to Clipboard";
  setTimeout(() => {
    copyCodeBtn.innerHTML = "Copy Code";
  }, 2000);
});

generateColor();
