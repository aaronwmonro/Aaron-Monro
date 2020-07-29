var burgerAnimationTimeLine = gsap.timeline({
    paused: true
});
var burgerAnimateSpeed = 0.25;
gsap.set(".lines", {
    transformOrigin: "center"
});



burgerAnimationTimeLine.to("#top-line", {
        duration: burgerAnimateSpeed,
        rotation: 45,
        y: -8,
        x: 8,
        stroke: "#000"
    }, "burgerToX")
    .to("#bottom-line", {
        duration: burgerAnimateSpeed,
        rotation: -45,
        y: 10,
        x: 8,
        stroke: "#000"
    }, "burgerToX")
    .to("#right-arrow", {
        duration: burgerAnimateSpeed,
        alpha: 0,
        rotation: 0,
        y: 0,
        x: 0
    }, "burgerToX")
    .to("#left-arrow", {
        duration: burgerAnimateSpeed,
        alpha: 0,
        rotation: 0,
        y: 0,
        x: 0
    }, "burgerToX")
    .to("#circle", {
        duration: burgerAnimateSpeed,
        alpha: 1,
        rotation: 0,
        y: 0,
        x: 0
    }, "burgerToX");



// burgerAnimationTimeLine.to("#burger")

function animateBurger() {

    if (canYouSeeTheMenu === true) {
        // turn the burger to X
        burgerAnimationTimeLine.play();
    } else {
        // turn the X to burger
        burgerAnimationTimeLine.reverse();
    }
}