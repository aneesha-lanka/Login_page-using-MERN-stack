import React from "react";
const Auction = () =>{
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');

function countdown() {
  const targetDate = new Date('2023-05-06T00:00:00');
  const now = new Date();
  const timeDifference = targetDate - now;

  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  hoursSpan.textContent = padNumber(hours);
  minutesSpan.textContent = padNumber(minutes);
  secondsSpan.textContent = padNumber(seconds);
}

function padNumber(number) {
  return number.toString().padStart(2, '0');
}

setInterval(countdown, 1000);
}
export default Auction;