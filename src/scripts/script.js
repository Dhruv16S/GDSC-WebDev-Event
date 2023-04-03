const { clipboard } = require("electron");

var countdownContainer = document.getElementById("countdown-box");
const countdown = document.getElementById("countdown");
const startButton = document.getElementById("start-button");
const submissionLink = document.querySelector("#submission-link");

submissionLink.addEventListener("click", (e) => {
  e.preventDefault();
  const url = e.target.href;
  console.log(url);
  clipboard.writeText(url);
  alert(
    "URL Copied to clipboard\nYou can paste the link in a browser to open it."
  );
});

const countdownTime = 60 * 60;

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

const completionText =
  "<p style='text-align:center;font-weight: 600'>Thank you for participating!</p><img src='./assets/logos/GDSC_Logo.png' alt='Logo' height='55'><p style='font-weight: 600'>GDSC CBIT</p>";

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
