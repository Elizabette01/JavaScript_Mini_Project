const display = document.getElementById("display");
const btns = document.querySelectorAll(".btn");


btns.forEach((btn) => {
  btn.addEventListener("click", (e) =>{
    btntext=e.target.innerText;

    if(btntext=='x'){
      btntext='*'
    }
    if(btntext=='÷'){
      btntext='/'
    }

    display.value += btntext
  })
})

// Function to calculate percentage
const percentage = () => {
  display.value = display.value*0.01
};

// Function to clear the screen
const clearDisplay = () => {
  display.value = "";
}

// Function to delete from screen
const deleteNumber = () => {
  display.value = display.value.toString().slice(0,-1);
}

// Function to get final output
const equalTo = () => {
  display.value = eval(display.value);
}

// Functions for scientific formulas
const sin = () => {display.value = Math.sin(display.value)};
const cos = () => {display.value = Math.cos(display.value)};
const tan = () => {display.value = Math.tan(display.value)};
const sinh = () => {display.value = Math.asin(display.value)};
const cosh = () => {display.value = Math.acos(display.value)};
const tanh = () => {display.value = Math.atan(display.value)};
const exp = () => {display.value = Math.exp(display.value)};
const ln = () => {display.value = Math.log(display.value)};
const l0g = () => {display.value = Math.log10(display.value)};
const cubert = () => {display.value = Math.cbrt(display.value)};
const squarert = () => {display.value = Math.sqrt(display.value)};
const square = () => {display.value = Math.pow(2)};
const cube = () => {display.value = Math.pow(3)};
const abs = () => {display.value = Math.abs()}