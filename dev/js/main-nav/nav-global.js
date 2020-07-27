var canYouSeeTheMenu = false;

var navHeight = $("#main-nav").outerHeight();
//move the main nav off screen ( this is moving the main-nav on the Y axis )
gsap.set("#main-nav",{x: -navHeight})

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
    // turn burger into 
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