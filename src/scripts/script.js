var countdownContainer = document.getElementById("countdown-container");
const countdown = document.getElementById("countdown");
const startButton = document.getElementById("start-button");

// document.addEventListener("contextmenu", function (event) {
//   event.preventDefault();
//   alert("Right click is not allowed!");
// });

// document.addEventListener("keydown", function (event) {
//   if (event.ctrlKey && (event.keyCode === 73 || event.keyCode === 85)) {
//     event.preventDefault();
//     alert("Inspect mode is not allowed!");
//   }
// });

const countdownTime = 60;

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

completionText =
  "<p style='font-weight: 600'>Thank you for participating!</p><img src='GDSC Logo.png' alt='Logo' height='55'><p style='font-weight: 600'>GDSC CBIT</p>";

function updateCountdown(endTime) {
  const remainingTime = Math.max(endTime - Date.now(), 0);
  countdown.innerHTML = formatTime(Math.ceil(remainingTime / 1000));
  if (remainingTime === 0) {
    clearInterval(timer);
    countdownContainer.innerHTML = completionText;
    document.body.style.pointerEvents = "none";
    return;
  }
}

startButton.addEventListener("click", function () {
  startButton.disabled = true;
  const endTime = Date.now() + countdownTime * 1000;
  updateCountdown(endTime);
  timer = setInterval(() => {
    updateCountdown(endTime);
  }, 1000);
});

countdown.innerHTML = formatTime(countdownTime);
