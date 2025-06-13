// Get the time of the date you want to countdown to in milliseconds.
const countDownDate = new Date("Aug 26, 2024 00:00:00").getTime();

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

}, 1000)