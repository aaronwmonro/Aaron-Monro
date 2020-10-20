gsap.registerPlugin( MorphSVGPlugin, ScrollTrigger, DrawSVGPlugin, TextPlugin);

import {gsap} from "gsap";
import {TextPlugin} from "gsap/TextPlugin";


import $ from "jquery";

import { burgerAnimationTimeLine } from "./main-nav/burger-animation";

import {canYouSeeTheMenu} from "./main-nav/nav-global.js"


// import {} from "./sections/illustrations/.js"

// burger imports & animations
import {hideShowMainNav} from "./main-nav/nav-global.js"

//burgerAnimationTimeLine();
// hideShowMainNav();

// // index imports
// import {loadScreenAnimation} from "./sections/index/index-load-screen.js"

// loadScreenAnimation();

//main nav clicks
$("#burger").on("click", hideShowMainNav);



$("#burger").on("mouseenter", function () {

    if (canYouSeeTheMenu === false) {
  
        burgerAnimationTimeLine.play("burgerToRightArrow")
    } else {
       
        burgerAnimationTimeLine.play("xToLeftArrow");
       
    }

})

$("#burger").on("mouseleave", function () {


    if (canYouSeeTheMenu === false) {
        
        burgerAnimationTimeLine.reverse("burgerToRightArrowReverse")
       
    } else {
        
        burgerAnimationTimeLine.reverse("xToLeftArrowReverse");
    }

})




import {loadScreenAnimation, loadScreenTwoAnimation, loadAnimation, exitAnimation} from "./load-screen.js";
loadScreenAnimation();
loadScreenTwoAnimation();
loadAnimation();
exitAnimation();


import {resumeAnimation } from "./sections/resume-button";

resumeAnimation();