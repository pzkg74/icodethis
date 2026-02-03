const SECOND_IN_MS = 1000;

const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_ON_CLOCK = 12;

const secondHand = document.getElementById('seconds');
const minuteHand = document.getElementById('minutes');
const hourHand = document.getElementById('hours');

const date = new Date();
time = {
  hour: date.getHours(),
  minute: date.getMinutes(),
  second: date.getSeconds(),
};

secondHand.style.transform = `rotate(${time.second / SECONDS_IN_MINUTE}turn)`;
minuteHand.style.transform = `rotate(${time.minute / MINUTES_IN_HOUR}turn)`;
hourHand.style.transform = `rotate(${time.hour / HOURS_ON_CLOCK}turn)`;

setInterval(() => {
  time.second += 1;
  secondHand.style.transform = `rotate(${time.second / SECONDS_IN_MINUTE}turn)`;

  if (time.second === SECONDS_IN_MINUTE) {
    time.second = 0;
    time.minute += 1;
    minuteHand.style.transform = `rotate(${time.minute / MINUTES_IN_HOUR}turn)`;

    if (time.minute === MINUTES_IN_HOUR) {
      time.minute = 0;
      time.hour += 1;
      hourHand.style.transform = `rotate(${(time.hour % 12) / HOURS_ON_CLOCK}turn)`;
    }
  }

  console.clear();
  console.log(`${time.hour}:${time.minute}:${time.second}`);
}, SECOND_IN_MS);
