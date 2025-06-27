gsap.registerPlugin(ScrollTrigger);


// hero
function animateWithSplitType(selector, options = {}) {
    const split = new SplitType(selector, { types: 'chars' });
    gsap.from(split.chars, {
        scrollTrigger: {
            trigger: options.trigger || selector,
            start: options.start || 'top 80%',
            toggleActions: options.toggleActions || 'play none none none',
        },
        y: options.y || 50,
        opacity: 1,
        duration: options.duration || 1.2,
        stagger: options.stagger || 0.1,
        ease: options.ease || "power4.out",
        delay: options.delay || 0
    });

      return split; // return in case you want to revert later
    }
function moveOnScroll(selector, options = {}) {
  gsap.to(selector, {
    y: options.y || 0,
    opacity: options.opacity || 1,
    scrollTrigger: {
      trigger: options.trigger || selector,
      start: options.start || "top 40%",
      end: options.end || "top -30%",
      toggleActions: options.toggleActions || "play none reverse none",
      scrub: options.scrub || 0.5,
      markers: options.markers || false,
    }
  });
}

function fadeInFromY(selector, options = {}) {
  gsap.from(selector, {
    opacity: 0,
    y: options.y || "100%",
    duration: options.duration || 1,
    ease: options.ease || "power2.out",
    scrollTrigger: {
      trigger: options.trigger || selector,
      start: options.start || "top 30%",
      toggleActions: options.toggleActions || "play none none none",
      markers: options.markers || false
    }
  });
}
function slideInFromX(selector, options = {}) {
  gsap.from(selector, {
    opacity: 0,
    x: options.x || "100%",
    duration: options.duration || 1,
    ease: options.ease || "power2.out",
    delay: options.delay || 0,
    scrollTrigger: {
      trigger: options.trigger || selector,
      start: options.start || "top 70%",
      toggleActions: options.toggleActions || "play none none none",
      markers: options.markers || false
    }
  });
}
function animateLettersFromRight(selector, options = {}) {
  const split = new SplitType(selector, { types: "chars" });

  gsap.from(split.chars, {
    x: options.x || "400px",
    opacity: 0,
    duration: options.duration || 2,
    ease: options.ease || "power4.out",
    stagger: options.stagger || 0.1,
    scrollTrigger: {
      trigger: options.trigger || selector,
      start: options.start || "top 70%",
      toggleActions: options.toggleActions || "play none none none",
      markers: options.markers || false
    }
  });

  return split;
}

function buttonHoverSlideRight(selector, trigger){
    const icon = document.querySelector(selector);
    const iconTL = gsap.timeline({ paused: true });

    iconTL
    .to(icon, {
        x: 30,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
    })
    .set(icon, { x: -30 })
    .to(icon, {
        x: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
    });

    // Play on hover
    document.querySelector(trigger).addEventListener("mouseenter", () => {
    iconTL.restart();
    });
}

function hoverFadeSiblings(containerSelector) {
  const items = document.querySelectorAll(`${containerSelector} > *`);
  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
    itemServiceName = item.id.replace("service-list-item-", "");
      items.forEach((el) => {
        gsap.to(el, {
          opacity: el === item ? 1 : 0.2,
          duration: 0.6,
          ease: "power2.out"
        });
        
        const videoItems = document.querySelectorAll("#service-bg-video-wrapper > *");
        videoItems.forEach((el) => {
            itemServiceVideo = el.id.replace("service-bg-video-", "");
            gsap.to(el, {
              opacity: itemServiceVideo === itemServiceName ? 1 : 0,
              duration: 0.6,
              ease: "power2.out"
            });
        })
      });
    });

    item.addEventListener("mouseleave", () => {
      items.forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
        });
      });
    });
  });
}

// hero
animateWithSplitType('#hero-heading-1', options = {
    y: 200,
    duration: 1,
    delay: 0,
    trigger: "#hero",
    stagger: 0.05,
});
animateWithSplitType('#hero-heading-2', options = {
    y: 200,
    duration: 1,
    delay: 1,
    stagger: 0.05,
});
moveOnScroll("#hero-text-wrapper", options = {
    y: -100,
    trigger: ".hero-subheading"
});
fadeInFromY(".hero-subheading", {
  y: "-100%",
});

fadeInFromY("#hero-btn", {
  y: "100%",
  trigger: "#hero-subheading-1"
});



// about
slideInFromX("#about", options = {
    duration: 1.6,
    ease: "expo.in",
    start: "top 60%"
})
slideInFromX("#about-wrapper", options = {
    opacity: 0,
    x: "-20%",
    delay: 1.4,
    duration: 1,
    trigger: "#about",
    ease: "power2.out",
    start: "top 60%"
})
slideInFromX("#about-description", options = {
    opacity: 0,
    x: "30%",
    delay: 1.7,
    duration: 1,
    trigger: "#about",
    ease: "power3.out",
    start: "top 60%"
})
buttonHoverSlideRight("#about-btn-demo-svg", "#about-btn-demo")

// services
animateWithSplitType('#services-title', options = {
    y: 200,
    duration: 1.5,
    delay: 0,
    trigger: "#services",
    stagger: 0.08,
});
hoverFadeSiblings("#services-list")
moveOnScroll("#services-list", options = {
    y: -300,
    opacity: 0,
    trigger: "#services",
    start: "top 0%",
    end: "top -100%",
    scrub: true
});