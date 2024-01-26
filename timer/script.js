function currentTime() {
  const d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  console.log(hours, minutes, seconds);

  time.textContent =
    hours > 12
      ? `${hours - 12}:${minutes}:${seconds} PM`
      : `${hours}:${minutes}:${seconds} AM`;
  setTimeout(() => {
    currentTime();
  }, 1000);
}

currentTime();
