import { months, weekdays } from "./strings.js";

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// yyyy, mm, dd, hh, mm, ss, msec
// let futureDate = new Date(2024, 3, 24, 11, 0, 0);
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `giveaway end on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`;

// Future time in ms
const futureTime = futureDate.getTime();

const getRemainingTime = () => {
  const today= new Date().getTime();
  const t = futureTime - today;
  // 1s  = 1000ms
  // 1m  = 60s
  // 1hr = 60min
  // 1d  = 24hr

  // Value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // Calculate all values.
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // Set values array
  const values = [days, hours, minutes, seconds];

  const format = (item) => {
    if (item < 10) {
      return item = `0${item}`;
    }

    return item;
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`;
  }
};

// Countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();