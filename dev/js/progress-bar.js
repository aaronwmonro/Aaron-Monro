

  export function progressAnimation(){
    return progressTL;
}

const progressTL = gsap.to('#progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: { scrub: 0.3
    // markers: true
  }
  });