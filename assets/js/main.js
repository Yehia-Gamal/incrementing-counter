let counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = 0;

  let updateCounter = () => {
    let target = +counter.getAttribute("data-target");
    // console.log(typeof target, target);

    let count = +counter.innerHTML;

    let increment = target / 500;

    if (count < target) {
      counter.innerHTML = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerHTML = target;
    }
  };
  updateCounter();
});
