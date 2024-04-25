Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
  });
  Shery.makeMagnet("#nav2 h3" , {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray('#nav2 h3').forEach(item => {
  item.addEventListener('mouseenter', () => {
    gsap.to(item, { scale: 1.2, color: "#ff6699", duration: 0.3 });
  });
  item.addEventListener('mouseleave', () => {
    gsap.to(item, { scale: 1, color: "#fff", duration: 0.3 });
  });
});

gsap.from('#logo', {
    opacity: 0,
    x: '-50%',
    y: '-50%',
    color: '#ff00ff',
    duration: 2,
    ease: 'elastic.out(1, 0.5)',
    stagger: 0.2,
    onComplete: () => {
      gsap.to('#logo', {
        color: '#00ff00',
        duration: 0.5,
        ease: 'power4.inOut'
      });
      gsap.to('#logo', {
        color: '#ff6699',
        duration: 0.5,
        delay: 0.5,
        ease: 'power4.inOut'
      });
      gsap.to('#logo', {
        color: '#ffff00',
        duration: 0.5,
        delay: 1,
        ease: 'power4.inOut'
      });
      gsap.to('#logo', {
        color: '#0000ff',
        duration: 0.5,
        delay: 1.5,
        ease: 'power4.inOut'
      });
      gsap.to('#logo', {
        color: '#ff0000',
        duration: 0.5,
        delay: 2,
        ease: 'power4.inOut'
      });
    },
    scrollTrigger: {
      trigger: '#homeContent',
      start: 'top 20%',
      end: 'bottom 50%',
      scrub: true
    }
  });
  
  

  gsap.from('#tagline', {
    opacity: 0,
    y: 50,
    duration: 2,
    delay: 0.5,
    ease: 'elastic.out(1, 0.5)',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '#homeContent',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: true
    }
  });
  

gsap.utils.toArray('.people').forEach((person, index) => {
  gsap.from(person, {
    opacity: 0,
    y: 100,
    rotation: index % 2 === 0 ? -45 : 45,
    scale: 0.5,
    duration: 1.5,
    ease: 'elastic.out(1, 0.5)',
    scrollTrigger: {
      trigger: person,
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: true
    }
  });
});

gsap.to('#articleImg', {
  yPercent: -20,
  ease: 'none',
  scrollTrigger: {
    trigger: '#article',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }
});

gsap.from('#articleText', {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: 'power4.out',
  scrollTrigger: {
    trigger: '#article',
    start: 'top 80%',
    end: 'bottom 60%',
    scrub: true
  }
});
