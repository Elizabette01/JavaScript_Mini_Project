
// Getting the HTML elements
const playerNum = document.getElementById("playernum");
const wrongAns = document.getElementById("wrongans");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit");
const chance = document.getElementById("chances");

// Function to get a random number as computer value from a given range
const minNum = 1;
const maxNum = 20;
const compNum = Math.floor(Math.random() * (maxNum - (minNum - 1))) + minNum;

let chances = 10;
chance.innerText = chances;

// Code to initiate and play game
    const playGame = () => {
       
        let  guess = Number(playerNum.value);
   
        if(isNaN(guess)){
          wrongAns.innerText = "Please enter a valid number";
          chances--;
          chance.innerText = chances;
        }

        else if (guess < minNum){
          wrongAns.innerText = "Your Number is less than range";
          chances--;
          chance.innerText = chances;
        }

        else if (guess > maxNum){
          wrongAns.innerText = "Your Number is greater than range";
          chances--;
          chance.innerText = chances;
        }

        else {
        
      }
    }