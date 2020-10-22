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
        console.log("mouseenter")
        burgerAnimationTimeLine.play("burgerToRightArrow");
    } else {
       
        burgerAnimationTimeLine.play("xToLeftArrow");
       
    }

})

$("#burger").on("mouseleave", function () {


    if (canYouSeeTheMenu === false) {
        console.log("mouseleave")
        burgerAnimationTimeLine.reverse("burgerToRightArrowReverse");
       
    } else {
        
        burgerAnimationTimeLine.reverse("xToLeftArrowReverse");
    }

})




import {loadScreenAnimation, loadScreenTwoAnimation, loadAnimation, exitAnimation} from "./load-screen.js";
loadScreenAnimation();
loadScreenTwoAnimation();
loadAnimation();
exitAnimation();


import {resumeAnimation, resumeClickAnimation } from "./sections/resume-button";

resumeAnimation();
resumeClickAnimation();








// $("#toggle-button").on("click", function(){
//     console.log("working");
//     if(toggle === false){

//         mainResumeTL.play("yellowBarLoad");
//         toggle = true;

//     }else{
//         mainResumeTL.reverse("yellowBarLoad");
//        toggle = false;
//     }
// })

const mainResumeTL = gsap.timeline({paused:true});
mainResumeTL.add(resumeAnimation());

var toggle = false;

$("#toggle-button").on("mouseenter", function () {
     
   
        console.log("working");
        if(toggle === false){
    
            mainResumeTL.play();
            toggle = true;
        }
        
})





// $("#toggle-button").on("mouseleave", function () {
    
//     console.log("alsoworking");
//         if(toggle === true){
    
//             mainResumeTL.reverse();
//             toggle = false;
//         }
        

// })

var toggles = false;

const mainClickTL = gsap.timeline({paused:true});
mainClickTL.add(resumeClickAnimation());



$("#toggle-button").on("click", function () {
     
   
    console.log("working");
    if(toggles === false){

        mainClickTL.play();
        toggles = true;
    }
    
})



import {navDesktopAnimation } from "./main-nav/main-nav-desktop";

navDesktopAnimation();

const mainNavDesktopTL = gsap.timeline({paused:true});
mainNavDesktopTL.add(navDesktopAnimation());

var toggled = false;

$("#nav-hover").on("mouseenter", function () {
     
   
        console.log("yeah yeah yeah");
        if(toggled === false){
    
            mainNavDesktopTL.play();
            // toggled = true;
        }
        
})

$("#nav-hover").on("mouseleave", function () {
    
    console.log("blah blah blah");
        if(toggled === true){
    
            mainNavDesktopTL.reverse();
            toggled = false;
        }
        

})

// $("#main-nav-desktop").on("mouseenter", function () {
     
   
//     console.log("yeah yeah yeah");
//     if(toggled === false){

//         mainNavDesktopTL.play();
//         toggled = true;
//     }
    
// })

// $("#main-nav-desktop").on("mouseleave", function () {

// console.log("blah blah blah");
//     if(toggled === true){

//         mainNavDesktopTL.reverse();
//         toggled = false;
//     }
    

// })

