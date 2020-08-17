var canYouSeeTheMenu = false;

var navWidth = $("#main-nav").outerWidth();
//move the main nav off screen ( this is moving the main-nav on the Y axis )
gsap.set("#main-nav", {
    x: -navWidth
})

var mainNavTimeline = gsap.timeline({
    paused: true
})
mainNavTimeline.to("#main-nav", {
    duration: 0.75,x: -0})

// reset the lines 
gsap.set(".burger-lines", {
    transformOrigin: "center"
});

function hideShowMainNav() {
    console.log("show the menu");
    console.log(canYouSeeTheMenu + " can you see the menu value");

    if (canYouSeeTheMenu === false) {
        canYouSeeTheMenu = true;
        // turn burger into x
        burgerAnimationTimeLine.play("rightArrowToX");

        mainNavTimeline.play();
    } else {
        console.log("burger click");
        burgerAnimationTimeLine.play("leftArrowToBurger");
        canYouSeeTheMenu = false;
        // turn x into burger

        mainNavTimeline.reverse();
    }


}

var menuBackground = document.querySelector('#main-nav');
window.onclick = function (event) {
    if (event.target == menuBackground) {
        hideShowMainNav();
    }
}