const generateBtn = document.getElementById("generate-btn");
function generatePalette() {
  for (let i = 0; i < 5; i++) {
    // This now runs 5 times: for 0, 1, 2, 3, and 4
    let randomHex =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    const rectangle = document.getElementById(`rect-${i}`);
    const textLabel = document.getElementById(`hex-${i}`);

    rectangle.style.backgroundColor = randomHex;
    textLabel.innerText = randomHex.toUpperCase();
  }
}

// The function to copy the text to your clipboard
function copyToClipboard(index) {
  const textToCopy = document.getElementById(`hex-${index}`).innerText;
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("Color " + textToCopy + " copied!");
  });
}

// Listen for the button click
generateBtn.addEventListener("click", generatePalette);

// Run once on start
generatePalette();
