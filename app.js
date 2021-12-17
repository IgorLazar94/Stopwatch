// Timer fields
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const millisecondElement = document.querySelector(".millisecond");
const timer = document.querySelector(".container");

//Buttons
const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const stopButton = document.querySelector(".stop");
const newButton = document.querySelector(".new");
// Variables
let hour = 0,
  second = 0,
  millisecond = 0,
  minute = 0,
  interval,
  counter = 0,
  disabled = true;
// Listeners

startButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

pauseButton.addEventListener("click", () => {
  clearInterval(interval);
});
document.body.addEventListener("dblclick", function () {
  clearInterval(interval);
  console.log("work?");
});
stopButton.addEventListener("click", () => {
  clearInterval(interval);
  clearFields();
  disableBtn();
});
newButton.addEventListener("click", () => {
  counter++;
  clearInterval(interval);
  const results = document.querySelector(".results");
  const block = document.createElement("div");
  block.classList.add("results__info");
  block.innerText = `Result ${counter}: ${hour}:${minute}:${second}:${millisecond}`;
  results.append(block);
  clearFields();
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
  // if (millisecond < 9) {
  //   millisecond.innerHTML = "0" + millisecond;
  // }
  // if (millisecond > 9) {
  //   millisecond.innerHTML = millisecond;
  // }
  // if (millisecond > 99) {
  //   second++;
  //   second.innerHTML = "0" + second;
  //   millisecond = 0;
  //   millisecond.innerHTML = "0" + millisecond;
  // }
  // if (second < 9) {
  //   second.innerHTML = "0" + second;
  // }
  // if (second > 9) {
  //   second.innerHTML = second;
  // }
  // if (second > 59) {
  //   minute++;
  //   second.innerHTML = "0" + second;
  //   second = 0;
  //   minute.innerHTML = "0" + minute;
  // }
});

function startTimer() {
  millisecond++;
  //milliseconds
  if (millisecond < 9) {
    millisecondElement.innerText = "0" + millisecond;
  }
  if (millisecond > 9) {
    millisecondElement.innerText = millisecond;
  }
  if (millisecond > 99) {
    second++;
    secondElement.innerHTML = "0" + second;
    millisecond = 0;
    millisecondElement.innerText = "0" + millisecond;
  }
  //seconds
  if (second < 9) {
    secondElement.innerText = "0" + second;
  }
  if (second > 9) {
    secondElement.innerText = second;
  }
  if (second > 59) {
    minute++;
    secondElement.innerHTML = "0" + second;
    second = 0;
    minuteElement.innerText = "0" + minute;
  }
  //minutes
  if (minute < 9) {
    minuteElement.innerText = "0" + minute;
  }
  if (minute > 9) {
    minuteElement.innerText = minute;
  }
  if (minute > 59) {
    hour++;
    minuteElement.innerHTML = "0" + minute;
    second = 0;
    hourElement.innerText = "0" + hour;
  }
  //hours
  if (hour < 9) {
    hourElement.innerText = "0" + hour;
  }
  if (hour > 9) {
    hourElement.innerText = hour;
  }

  newButton.disabled = false;
}

function clearFields() {
  hour = 0;
  second = 0;
  millisecond = 0;
  interval;
  millisecondElement.textContent = "00";
  secondElement.textContent = "00";
  minuteElement.textContent = "00";
  hourElement.textContent = "00";
}

function disableBtn() {
  if (disabled) {
    newButton.disabled = true;
  }
}
disableBtn();
