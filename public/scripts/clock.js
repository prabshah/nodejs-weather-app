document.addEventListener("DOMContentLoaded", function() {
  const clock = () => {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    minute = checkTime(minute);
    second = checkTime(second);
    document.querySelector(".clock").innerHTML =
      hour + ":" + minute + ":" + second;
    setTimeout(clock, 500);
  };

  const checkTime = i => {
    if (i < 10) return "0" + i;
    else return i;
  };

  clock();
});
