var canYouSeeTheMenu = false;

var navWidth = $("#main-nav").outerWidth();
//move the main nav off screen ( this is moving the main-nav on the Y axis )
gsap.set("#main-nav",{x: -navWidth})

var mainNavTimeline = gsap.timeline({paused:true})
mainNavTimeline.to("#main-nav",{duration:0.75, x:-0})

function hideShowMainNav(){
    // console.log("hide or show nav");
    // //toggles the css display property
    // $("#main-nav").toggle();

    if(canYouSeeTheMenu === false)
    {
        console.log("show the menu");
    canYouSeeTheMenu = true;
    // turn burger into x
    animateBurger();

    mainNavTimeline.play();
    }else{
        console.log("hide the menu");

        canYouSeeTheMenu = false;
        // turn x into burger
        animateBurger();

        mainNavTimeline.reverse();
    }


}

var menuBackground = document.querySelector('#main-nav');
window.onclick = function(event){
if(event.target == menuBackground){
        hideShowMainNav();}
}