// Get the time of the date you want to countdown to in milliseconds.
const countDownDate = new Date("Aug 26, 2025 00:00:00").getTime();

// Set interval function, used to update our timer every second (1000 milliseconds)
const x = setInterval(() => {

  // calculate the difference in milliseconds between the date in future and today, date
  const now = new Date().getTime();
  const diff = countDownDate - now;

  // Days, hrs, mins ans sec are calculated from the diff value
  const days = Math.floor(diff/ (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);


  // values updated in document
  document.getElementById("days").innerHTML = (days<10 ? "0" : "") + days;
  document.getElementById("hrs").innerHTML = (hours<10 ? "0" : "") + hours;
  document.getElementById("mins").innerHTML = (mins<10 ? "0" : "") + mins;
  document.getElementById("secs").innerHTML = (secs<10 ? "0" : "") + secs;

  if(distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hrs").innerHTML = "00";
    document.getElementById("mins").innerHTML = "00";
    document.getElementById("secs").innerHTML = "00";
  }

}, 1000)