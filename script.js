function loadingAnimation() {
  let tl = gsap.timeline();

  tl.from(".line h2", {
    y: 150,
    stagger: 0.25,
    // opacity: 0,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from("#line1-part1", {
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

  tl.to(".line h3", {
    animationName: "animeNow",
    opacity: 1,
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 3,
  });

  tl.from("#page1", {
    y: 1200,
    opacity: 0,
    delay: 0.2,
    duration: 0.5,
    // ease: power4,
  });

  tl.to("#loader", {
    display: "none",
  });
}

function cursorAnimation() {
  const crsr = document.getElementById("crsr");

  document.addEventListener("mousemove", (position) => {
    gsap.to(crsr, {
      left: position.x,
      top: position.y,
    });
  });

  Shery.makeMagnet("#nav-part2 h4");
}

loadingAnimation();
cursorAnimation();
