const SECOND_IN_MS = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_HOUR = 60 * 60;
const HOURS_ON_CLOCK = 12;

const secondHand = document.getElementById('seconds');
const minuteHand = document.getElementById('minutes');
const hourHand = document.getElementById('hours');

function setHands() {
  secondHand.style.setProperty(
    '--rotation',
    `${time.second / SECONDS_IN_MINUTE}turn`,
  );
  minuteHand.style.setProperty(
    '--rotation',
    `${(time.minute * SECONDS_IN_MINUTE + time.second) / SECONDS_IN_HOUR}turn`,
  );
  hourHand.style.setProperty(
    '--rotation',
    `${(time.hour * SECONDS_IN_HOUR + time.minute * SECONDS_IN_MINUTE + time.second) / (SECONDS_IN_HOUR * 12)}turn`,
  );
}

const date = new Date();
time = {
  hour: date.getHours(),
  minute: date.getMinutes(),
  second: date.getSeconds(),
};

setHands();

setInterval(() => {
  time.second += 1;
  setHands();

  if (time.second === SECONDS_IN_MINUTE) {
    time.second = 0;
    time.minute += 1;

    if (time.minute === MINUTES_IN_HOUR) {
      time.minute = 0;
      time.hour += 1;
    }
  }

  // console.clear();
  // console.log(`${time.hour}:${time.minute}:${time.second}`);
}, SECOND_IN_MS);
