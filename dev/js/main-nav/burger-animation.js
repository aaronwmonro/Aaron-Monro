var burgerAnimationTimeLine = gsap.timeline({
    paused: true
});
var burgerAnimateSpeed = 0.25;
gsap.set(".lines", {
    transformOrigin: "center"
});


burgerAnimationTimeLine.addLabel("burgerToRightArrow")
                        .to("#bottom-line",{duration:burgerAnimateSpeed, y:-9}, "createArrow")
                        .to("#top-line",{duration:burgerAnimateSpeed, y:9}, "createArrow")
                        .to("#right-arrow-top",{duration:burgerAnimateSpeed, rotation:45, y:2, x:5, alpha: 1}, "createArrow")
                        .to("#right-arrow-bottom",{duration:burgerAnimateSpeed, rotation:-45, y:-2, x:5, alpha: 1}, "createArrow")
                        // .to("#left-arrow-top",{duration:0.0, alpha: 0}, "createArrow")
                        // .to("#left-arrow-bottom",{duration:0.0, alpha: 0 }, "createArrow")
                        .addLabel("burgerToRightArrowReverse")
                        .addPause()
                        .addLabel("rightArrowToX")
                        .to("#top-line",{duration: burgerAnimateSpeed, rotation:45},"burgerToX")
                        .to("#bottom-line",{duration: burgerAnimateSpeed, rotation:-45},"burgerToX")
                        .to("#right-arrow-top",{duration: burgerAnimateSpeed, rotation:0, alpha:0},"burgerToX")
                        .to("#right-arrow-bottom",{duration: burgerAnimateSpeed, rotation:0, alpha:0},"burgerToX")
                        .to("#left-arrow-top",{duration: burgerAnimateSpeed, alpha:0},"burgerToX")
                        .to("#left-arrow-bottom",{duration: burgerAnimateSpeed, alpha:0},"burgerToX")
                        .to("#circle",{duration: burgerAnimateSpeed, alpha:1},"burgerToX")
                        .addLabel("rightArrowToXReverse")
                        .addPause()
                        .addLabel("xToLeftArrow")
                        .to("#top-line",{duration: burgerAnimateSpeed, rotation:0},"leftArrow")
                        .to("#bottom-line",{duration: burgerAnimateSpeed, rotation:0},"leftArrow")
                        .to("#left-arrow-top",{duration:burgerAnimateSpeed,rotation:-45, y:2, x:-5, alpha:1}, "leftArrow")
                        .to("#left-arrow-bottom",{duration:burgerAnimateSpeed,rotation:45, y:-2, x:-5, alpha:1}, "leftArrow")
                        .to("#circle",{duration: burgerAnimateSpeed, alpha: 0},"leftArrow")
                        .addLabel("xToLeftArrowReverse")
                        .addPause()
                        .addLabel("leftArrowToBurger")
                        .to("#left-arrow-top",{duration:burgerAnimateSpeed,rotation:0, alpha:0}, "backToBurger")
                        .to("#left-arrow-bottom",{duration:burgerAnimateSpeed,rotation:0,alpha:0}, "backToBurger")
                        .to("#right-arrow-top",{duration:burgerAnimateSpeed,rotation:0, alpha:0}, "backToBurger")
                        .to("#right-arrow-bottom",{duration:burgerAnimateSpeed,rotation:0,alpha:0}, "backToBurger")
                        .to("#top-line",{duration: burgerAnimateSpeed, rotation:0},"backToBurger")
                        .to("#bottom-line",{duration: burgerAnimateSpeed, rotation:0},"backToBurger")
                        .addPause()
                        


// burgerAnimationTimeLine.to("#top-line", {
//         duration: burgerAnimateSpeed,
//         rotation: 45,
//         y: -8,
//         x: 8,
//         stroke: "#000"
//     }, "burgerToX")
//     .to("#bottom-line", {
//         duration: burgerAnimateSpeed,
//         rotation: -45,
//         y: 10,
//         x: 8,
//         stroke: "#000"
//     }, "burgerToX")
//     .to("#right-arrow", {
//         duration: burgerAnimateSpeed,
//         alpha: 0,
//         rotation: 0,
//         y: 0,
//         x: 0
//     }, "burgerToX")
//     .to("#left-arrow", {
//         duration: burgerAnimateSpeed,
//         alpha: 0,
//         rotation: 0,
//         y: 0,
//         x: 0
//     }, "burgerToX")
//     .to("#circle", {
//         duration: burgerAnimateSpeed,
//         alpha: 1,
//         rotation: 0,
//         y: 0,
//         x: 0
//     }, "burgerToX");



// burgerAnimationTimeLine.to("#burger")

// function animateBurger() {

//     if (canYouSeeTheMenu === true) {
//         // turn the burger to X
//         burgerAnimationTimeLine.play();
//     } else {
//         // turn the X to burger
//         burgerAnimationTimeLine.reverse();
//     }
// }