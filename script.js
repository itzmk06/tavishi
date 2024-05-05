
function cursorAnimation(){
  Shery.mouseFollower({
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 0.5,
  });
  
  Shery.makeMagnet("a ,#logo,img" , {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
  });
}
cursorAnimation();

const navTimeline = gsap.timeline({ defaults: { duration: 0.5, ease: "power3.out" } });
navTimeline.from(".nav-link", { opacity: 0, y: -20, stagger: 0.1, onComplete: addNavHoverEffect });

function addNavHoverEffect() {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(link, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
  });
}

const homeTimeline = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
homeTimeline.from("#logo", { opacity: 1, x: -100, rotation: -180, stagger: 0.2 })
            .from("#tagline", { opacity: 1, y: 50, rotation: -180 }, "-=0.5")
            .from("#homeContent", { opacity: 1, duration: 1, y: 50, rotationX: 90, stagger: 0.2 }, "-=0.5")
            .to("#homeContent", { rotationX: 1, duration: 0.5, ease: "power3.out" });

const logo = document.getElementById("logo");
logo.addEventListener("mouseenter", () => {
  gsap.to("#logo", { backgroundColor: getRandomColor(), duration: 0.5 });
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

gsap.registerPlugin(ScrollTrigger);
const homeContentElements = gsap.utils.toArray("#homeContent > *");
homeContentElements.forEach((element, index) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top bottom-=200",
      end: "bottom top",
      scrub: true,
    },
    y: index % 2 === 0 ? -100 : 100,
    opacity: 0.5,
    duration: 1,
    ease: "power1.out",
  });
});

const dynamicBlur = gsap.timeline({ onUpdate: updateBlur });
const blurFilter = { blur: 0 };
function updateBlur() {
  gsap.set("#homeContent", { filter: `blur(${blurFilter.blur}px)` });
}
ScrollTrigger.create({
  onUpdate: (self) => {
    blurFilter.blur = self.progress * 5;
    dynamicBlur.progress(self.progress);
  },
});

const particles = gsap.utils.toArray(".particle");
particles.forEach((particle, index) => {
  gsap.to(particle, {
    x: gsap.utils.random(-100, 100),
    y: gsap.utils.random(-100, 100),
    rotation: gsap.utils.random(0, 360),
    opacity: 0,
    duration: gsap.utils.random(1, 3),
    repeat: -1,
    delay: index * 0.2,
    ease: "power1.inOut",
    yoyo: true,
  });
});



const aboutTimeline = gsap.timeline({ defaults: { duration: 1, ease: "elastic.out(1, 0.3)" } });
aboutTimeline.from("#aboutText", { opacity: 1, y: -50 })
            .from(".people", { opacity: 1, y: 50, stagger: 0.2 }, "-=0.5")
            .from("#teamIntro", { opacity: 1, y: 50 }, "-=0.5");

const people = document.querySelectorAll(".people");
people.forEach(person => {
  person.addEventListener("mouseenter", () => {
    gsap.to(person, { scale: 1.1, duration: 0.3, ease: "power4.out" });
    gsap.to(person.querySelector("img"), { filter: "grayscale(0%)", duration: 0.3 });
    gsap.fromTo(person.querySelector("h3"), { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.3, ease: "power4.out" });
  });
  person.addEventListener("mouseleave", () => {
    gsap.to(person, { scale: 1, duration: 0.3, ease: "power4.out" });
    gsap.to(person.querySelector("img"), { filter: "grayscale(100%)", duration: 0.3 });
    gsap.to(person.querySelector("h3"), { opacity: 0, y: -20, duration: 0.3, ease: "power4.out" });
  });
});


const paragraphs = gsap.utils.toArray("p");
paragraphs.forEach((paragraph, index) => {
  gsap.from(paragraph, {
    scrollTrigger: {
      trigger: paragraph,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power3.out",
  });
});
const headings = gsap.utils.toArray("h1, h2, h3, h4, h6:not(#aboutText)");
headings.forEach((heading, index) => {
  let animation;
  switch(index % 6) {
    case 0:
      animation = { opacity: 0, y: -50, duration: 1, ease: "power2.out" };
      break;
    case 1:
      animation = { opacity: 0, x: -50, duration: 1, ease: "power2.out" }; 
      break;
    case 2:
      animation = { opacity: 0, y: 50, duration: 1, ease: "power2.out" }; 
      break;
    case 3:
      animation = { opacity: 0, x: 50, duration: 1, ease: "power2.out" }; 
      break;
    case 4:
      animation = { opacity: 0, y: -50, duration: 1, ease: "power2.out" }; 
      break;
    case 5:
      animation = { opacity: 0, y: 50, duration: 1, ease: "power2.out" }; 
      break;
    default:
      animation = {};
  }
  gsap.from(heading, {
    scrollTrigger: {
      trigger: heading,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    ...animation
  });
});
const lists = gsap.utils.toArray("ul");
lists.forEach((list, index) => {
  gsap.from(list, {
    scrollTrigger: {
      trigger: list,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out"
  });

  const listItems = list.querySelectorAll("li");
  listItems.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      delay: index * 0.1 
    });
  });
});

const tables = gsap.utils.toArray("table");
tables.forEach((table, index) => {
  gsap.from(table, {
    scrollTrigger: {
      trigger: table,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out"
  });

  const tableRows = table.querySelectorAll("tr");
  tableRows.forEach((row, rowIndex) => {
    gsap.from(row, {
      scrollTrigger: {
        trigger: row,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      delay: rowIndex * 0.001
    });
  });
});

const images = gsap.utils.toArray("img:not(#logo, #about img)");

images.forEach((image, index) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: image,
      start: "top 80%",
      toggleActions: "play none none reverse",
    }
  });

  tl.from(image, {
    opacity: 0,
    y: gsap.utils.random(-100, 100),
    scale: 0.7,
    rotation: gsap.utils.random(-30, 30),
    duration: 1.5,
    ease: "power4.out",
  })

  .to(image, {
    scale: 1, 
    rotation: 0, 
    duration: 0.1 
  });
});


Shery.textAnimate("#logoText", {
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 0.1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});
