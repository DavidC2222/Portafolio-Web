const imageInput = document.getElementById("image-input");
const memeImage = document.getElementById("meme-image");
const topTextInput = document.getElementById("top-text-input");
const bottomTextInput = document.getElementById("bottom-text-input");
const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");
const downloadButton = document.getElementById("download-button");

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    memeImage.src = e.target.result;
    memeImage.style.display = "block";
  };

  reader.readAsDataURL(file);
});

topTextInput.addEventListener("input", () => {
  topText.textContent = topTextInput.value;
});

bottomTextInput.addEventListener("input", () => {
  bottomText.textContent = bottomTextInput.value;
});

downloadButton.addEventListener("click", () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = memeImage.width;
  canvas.height = memeImage.height;
  ctx.drawImage(memeImage, 0, 0);
  ctx.font = "2em Impact";
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.fillText(topText.textContent, canvas.width / 2, 30);
  ctx.strokeText(topText.textContent, canvas.width / 2, 30);
  ctx.fillText(bottomText.textContent, canvas.width / 2, canvas.height - 30);
  ctx.strokeText(bottomText.textContent, canvas.width / 2, canvas.height - 30);

  const link = document.createElement("a");
  link.download = "meme.png";
  link.href = canvas.toDataURL();
  link.click();
});

let fontSize = 24; // Tamaño de fuente inicial


const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", () => {
  imageInput.value = "";
  memeImage.src = "#";
  memeImage.style.display = "none";
  topTextInput.value = "";
  bottomTextInput.value = "";
  topText.textContent = "";
  bottomText.textContent = "";
  fontSize = 24; // Reiniciar el tamaño de fuente
  updateFontSize();
});

// Eventos para cambiar el tamaño de la fuente
const decreaseFontButton = document.getElementById("decrease-font");
const increaseFontButton = document.getElementById("increase-font");
const fontSizeDisplay = document.getElementById("font-size");

decreaseFontButton.addEventListener("click", () => {
  fontSize = Math.max(12, fontSize - 2); // Tamaño mínimo de 12px
  updateFontSize();
});

increaseFontButton.addEventListener("click", () => {
  fontSize = Math.min(48, fontSize + 2); // Tamaño máximo de 48px
  updateFontSize();
});

function updateFontSize() {
  topText.style.fontSize = `${fontSize}px`;
  bottomText.style.fontSize = `${fontSize}px`;
  fontSizeDisplay.textContent = fontSize;
}
