import {gsap} from "gsap";
import {TextPlugin} from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);




var morphAnimationSpeed = .20;


// const loadScreenTL = gsap.timeline({repeat: 4, yoyo: true});
// loadScreenTL.from("#one",{duration: morphAnimationSpeed,  ry:30, rx:30, ease: "power2"}, "morphTL")
//             .from("#two",{duration: morphAnimationSpeed,  ry:30, rx:30, ease: "power2"}, "morphTL+=.2")
//             .from("#three",{duration: morphAnimationSpeed, ry:30, rx:30, ease: "power2"}, "morphTL+=.3")
//             .from("#four",{duration: morphAnimationSpeed, ry:30, rx:30, ease: "power2"}, "morphTL+=.4")
//             .from("#five",{duration: morphAnimationSpeed,  ry:30, rx:30, ease: "power2"}, "morphTL+=.5")
//             .from("#six",{duration: morphAnimationSpeed,  ry:30, rx:30, ease: "power2"}, "morphTL+=.6")
//             .from("#seven",{duration: morphAnimationSpeed,  ry:30, rx:30, ease: "power2"}, "morphTL+=.7")
//             .from("#eight",{duration: morphAnimationSpeed, ry:30, rx:30, ease: "power2"}, "morphTL+=.6")
//             .from("#nine",{duration: morphAnimationSpeed, ry:30, rx:30, ease: "power2"}, "morphTL+=.5")
//             .from("#ten",{duration: morphAnimationSpeed, ry:30, rx:30, ease: "power2"}, "morphTL+=.4")
//             .from("#eleven",{duration: morphAnimationSpeed, ry:30, rx:30, ease: "power2"}, "morphTL+=.3")
//             .from("#twelve",{duration: morphAnimationSpeed, ry:30, rx:30, ease: "power2"}, "morphTL+=.2")
//             .from("#thirteen",{duration: morphAnimationSpeed, ry:30, rx:30, ease: "power2"}, "morphTL")       
// ;

const loadScreenTL = gsap.timeline({repeat: 3, yoyo: true});
loadScreenTL.to("#one",{duration: morphAnimationSpeed, y: -100, ease: "power2"}, "morphTL")
            .to("#two",{duration: morphAnimationSpeed,  y: -100, ease: "power2"}, "morphTL+=.05")
            .to("#three",{duration: morphAnimationSpeed, y: -100, ease: "power2"}, "morphTL+=.1")
            .to("#four",{duration: morphAnimationSpeed, y: -100, ease: "power2"}, "morphTL+=.15")
            .to("#five",{duration: morphAnimationSpeed,  y: -100, ease: "power2"}, "morphTL+=.2")
            .to("#six",{duration: morphAnimationSpeed,  y: -100, ease: "power2"}, "morphTL+=.25")
            .to("#seven",{duration: morphAnimationSpeed, y: -100, ease: "power2"}, "morphTL+=.3")
            .to("#eight",{duration: morphAnimationSpeed, y: -100, ease: "power2"}, "morphTL+=.35")
            .to("#nine",{duration: morphAnimationSpeed, y: -100, ease: "power2"}, "morphTL+=.4")
            .to("#ten",{duration: morphAnimationSpeed, y: -100, ease: "power2"}, "morphTL+=.45")
            .to("#eleven",{duration: morphAnimationSpeed, y: -100, ease: "power2"}, "morphTL+=.5")
            .to("#twelve",{duration: morphAnimationSpeed, y: -100, ease: "power2"}, "morphTL+=.55")
            .to("#thirteen",{duration: morphAnimationSpeed, y: -100, ease: "power2"}, "morphTL+=.6")       
;

gsap.set(".circle",{transformOrigin: "center"});




export function loadScreenAnimation(){
    return loadScreenTL;
}

export function loadScreenTwoAnimation(){
    return loadScreenTwoTL;
}

var morAnimationSpeed = 1;

const loadScreenTwoTL = gsap.timeline();
loadScreenTwoTL.to(".circle",{duration: 0, ry:30, rx:30, ease: "power2"}, "+=3.5") 
            .to("#one",{duration: morAnimationSpeed, y:-1500, ease: "power2"}, "morTL")
            .to("#two",{duration: morAnimationSpeed, y:-1500, ease: "power2"}, "morTL+=.2")
            .to("#three",{duration: morAnimationSpeed, y:-1500, ease: "power2"}, "morTL+=.3")
            .to("#four",{duration: morAnimationSpeed, y:-1500, ease: "power2"}, "morTL+=.4")
            .to("#five",{duration: morAnimationSpeed, y:-1500, ease: "power2"}, "morTL+=.5")
            .to("#six",{duration: morAnimationSpeed, y:-1500, ease: "power2"}, "morTL+=.6")
            .to("#seven",{duration: morAnimationSpeed, y:-1500, ease: "power2"}, "morTL+=.7")
            .to("#eight",{duration: morAnimationSpeed, y:-1500, ease: "power2"}, "morTL+=.6")
            .to("#nine",{duration: morAnimationSpeed, y:-1500, ease: "power2"}, "morTL+=.5")
            .to("#ten",{duration: morAnimationSpeed, y:-1500, ease: "power2"}, "morTL+=.4")
            .to("#eleven",{duration: morAnimationSpeed, y:-1500, ease: "power2"}, "morTL+=.3")
            .to("#twelve",{duration: morAnimationSpeed, y:-1500, ease: "power2"}, "morTL+=.2")
            .to("#thirteen",{duration: morAnimationSpeed, y:-1500, ease: "power2"}, "morTL") 
            ;


            const loadTL = gsap.timeline();
            loadTL.to("#loading", {duration: 2, text:" loading...", ease: "power2"})
                    .to("#loading", {duration: 2, text:" loaded", ease: "power2"});


// tl.fromTo(shapes, {drawSVG:"100%"}, {duration: 1, drawSVG:"50% 50%", stagger: 0.1})
            


export function loadAnimation(){
    return loadTL;
   
}


export function exitAnimation(){
    return exitTL;
   
}

const exitTL = gsap.timeline();
exitTL.to("#home-load", {duration: 1, yPercent:-200, ease: "none"}, "+=4.25");


