const display = document.getElementById("display");
const btns = document.querySelectorAll(".btn");

// Functions for each button
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