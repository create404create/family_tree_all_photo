const message = document.getElementById("message");
const loading = document.getElementById("loading");
const content = document.getElementById("content");
const timerEl = document.getElementById("timer");

function startTimer(duration) {
  let time = duration;
  const interval = setInterval(() => {
    const hrs = String(Math.floor(time / 3600)).padStart(2, '0');
    const mins = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const secs = String(time % 60).padStart(2, '0');
    timerEl.textContent = `${hrs}:${mins}:${secs}`;

    if (time <= 0) {
      clearInterval(interval);
      loading.classList.add("hidden");
      content.classList.remove("hidden");
    }

    time--;
  }, 1000);
}

// Wait for typing animation to finish
setTimeout(() => {
  message.classList.add("hidden");
  loading.classList.remove("hidden");
  startTimer(3600); // 1 hour = 3600 seconds
}, 3000);
