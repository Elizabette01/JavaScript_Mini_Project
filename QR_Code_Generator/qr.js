const inputTxt = document.getElementById("input_txt");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generate_btn");
const downloadBtn = document.getElementById("download_btn");
const qrContainer = document.getElementById("qr_container");
const BGColor = document.getElementById("bg_color");
const FGColor = document.getElementById("fg_color");



// Setting the available options

let userSize, userBG, userFG;

// default settings
window.onload = () => {
  userSize = 100;
  userBG = "#FFFFFF";
  userFG = "#000000";
  downloadBtn.style.display = "none"
}