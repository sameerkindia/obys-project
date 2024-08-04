function locomotiveScrolltrigger() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

function loadingAnimation() {
  let tl = gsap.timeline();

  // tl.from(".line h2", {
  //   y: 150,
  //   stagger: 0.25,
  //   // opacity: 0,
  //   duration: 0.6,
  //   delay: 0.5,
  // });

  // tl.from("#line1-part1", {
  //   opacity: 0,
  //   onStart: function () {
  //     let h2timer = document.querySelector("#line1-part1 h5");
  //     let grow = 0;

  //     const h2timeupdater = setInterval(() => {
  //       grow++;
  //       h2timer.textContent = grow;

  //       if (grow === 100) {
  //         clearInterval(h2timeupdater);
  //       }
  //     }, 30);
  //   },
  // });

  // tl.to(".line h3", {
  //   animationName: "animeNow",
  //   opacity: 1,
  // });

  // tl.to("#loader", {
  //   opacity: 0,
  //   duration: 0.2,
  //   delay: 3,
  // });

  // tl.from("#page1", {
  //   y: 1200,
  //   opacity: 0,
  //   delay: 0.2,
  //   duration: 0.5,
  //   // ease: power4,
  // });

  tl.to("#loader", {
    display: "none",
  });

  tl.from(".hero-heading", {
    // y: 150,
    y: 350,

    stagger: 0.2,
  });

  tl.from(
    "#hero1 , #page2",
    {
      opacity: 0,
    },
    "-=1.2"
  );
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

locomotiveScrolltrigger();
loadingAnimation();
// cursorAnimation();

function sheryAnimation() {}
