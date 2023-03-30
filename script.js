var countdown = document.getElementById("countdown");
var startButton = document.getElementById("start-button");
var countdownContainer = document.getElementById("countdown-container");

var count = 2700; // 45 minutes in seconds
var timer = null;


document.addEventListener("contextmenu", function(event){
    event.preventDefault();
    alert("Right click is not allowed!");
  });

document.addEventListener("keydown", function(event){
    if (event.ctrlKey && (event.keyCode === 73 || event.keyCode === 85)) {
      event.preventDefault();
      alert("Inspect mode is not allowed!");
    }
  });

  
function formatTime(timeInSeconds) {
  var minutes = Math.floor(timeInSeconds / 60);
  var seconds = timeInSeconds % 60;
  return minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
}

completionText = "<p style = 'font-weight: 600'>Thank you for participating!</p><img src='GDSC Logo.png' alt='Logo' height='55'><p style = 'font-weight: 600'>GDSC CBIT</p>";

function tick() {
  countdown.innerHTML = formatTime(count);
  if (count === 0) {
    clearInterval(timer);
    countdownContainer.innerHTML = completionText;
  }
  count--;
}

startButton.addEventListener("click", function() {
  startButton.disabled = true;
  timer = setInterval(tick, 1000);
});

countdown.innerHTML = formatTime(count);
