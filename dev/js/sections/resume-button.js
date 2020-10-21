import {gsap} from "gsap";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);


// const resumeTL = gsap.timeline();
// resumeTL.addLabel("resumeToDownload")
//          .addPause()
//          .to("#resume", {duration: 2, morphSVG: "#download"})
//          .addLabel("resumeToDownloadReverse")
//          .addPause()
//          .addLabel("yellowLoadIn")
//          .from("yellow-rectangle", {duration: 2, alpha: 1, yPercent:100 })
//          .to("#download", {duration: 2, morphSVG: "#check"})
//          .addPause()
// ;

const resumeTL = gsap.timeline({
   
});
resumeTL.to("#resume", {duration: .5, morphSVG: "#download"})
;

// const resumeTL = gsap.timeline();
// resumeTL.to("#resume", {duration: 1, morphSVG: "#download"})
//         .from("#yellow-rectangle", {duration: 4, xPercent: -100, alpha: 0, ease: "slow"})
//         .to("#resume", {duration: 1, morphSVG: "#check", fill: "#000"}, "-=.5")
// ;






export function resumeAnimation(){
    return resumeTL;
}


// export var resumeAnimationTimeLine = gsap.timeline({
//     paused: true
// });

// resumeAnimationTimeLine.addLabel("resumeToDownload")
//         .to("#resume", {duration: 1, morphSVG: "#download"})
//         .addLabel("resumeToDownloadReverse")
//         .addPause()
        // .addLabel("yellowBarLoad")
        // .from("#yellow-rectangle", {duration: 4, xPercent: -100, alpha: 0, ease: "slow"})
        // .to("#resume", {duration: 1, morphSVG: "#check", fill: "#000"}, "-=.5")
        // .addPause()


export function resumeClickAnimation(){
    return resumeClickTL;
}

const resumeClickTL = gsap.timeline({
   
});
resumeClickTL.from("#yellow-rectangle", {duration: 2, xPercent: -100,  ease: "slow"})
        .to("#resume", {duration: 1, morphSVG: "#check", fill: "#000"}, "-=.5")
;
