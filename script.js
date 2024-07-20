let tl = gsap.timeline();

tl.from(".line h2", {
  y: 150,
  stagger: 0.25,
  // opacity: 0,
  duration: 0.6,
  delay: 0.5,
});

tl.from("#line1-part1 , .line h3", {
  opacity: 0,
  onStart: function () {
    let h2timer = document.querySelector("#line1-part1 h5");
    let grow = 0;

    const h2timeupdater = setInterval(() => {
      grow++;
      h2timer.textContent = grow;

      if (grow === 100) {
        clearInterval(h2timeupdater);
      }
    }, 30);
  },
});

tl.to("#loader", {
  opacity: 0,
  duration: 0.4,
  delay: 3,
});
