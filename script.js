let tl = gsap.timeline();
tl.from("#navbar h3", {
  y: 20,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

gsap.from("#monster_drink h1", {
  x: 20,
  scale: 0.5,
  opacity: 0,
  duration: 1,
  stagger: 1,
});

gsap.from("#monster_drink #monster-main", {
  scale: 0.2,
  duration: 1,
  x: 40,
});

gsap.from("#monster_drink #monsterBG", {
  scale: 0.5,
  duration: 1,
  x: -40,
});

gsap.from("#monster_drink #lightningStrikes", {
  scale: 0.5,
  duration: 1,
  x: -40,
});

gsap.from("#monster_drink #lightningStrikes1", {
  scale: 0.5,
  duration: 1,
  x: -30,
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".aboutUs",
    start: "0% 90%",
    end: "50% 50%",
    scrub: true,
  },
});

tl2.to(
  "#monster_drink #monster-main",
  {
    top: "120%",
    left: "10%",
    duration: 1,
  },
  "thunder"
);
tl2.to(
  "#monster_drink #monsterBG",
  {
    top: "600",
    left: "-20%",
    rotate: "90deg",
    width: "90vw",
  },
  "thunder"
);

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".products",
    start: "0% 90%",
    end: "50% 50%",
    scrub: true,
  },
});
tl3.to("#monster_drink #monster-main", {
  top: "205%",
  left: "33%",
  height: "65%",
});
