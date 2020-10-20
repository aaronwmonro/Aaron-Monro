import {gsap} from "gsap";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);


const resumeTL = gsap.timeline();
resumeTL .addPause()
.to("#resume", {duration: 2, morphSVG: "#download"})
          

;


addLabel("downloadToMountain")
                        .addPause()
                        .to("#start", {duration: 2, morphSVG: "#end"}, "download")
                        .to("#circle", {duration: 2, alpha: 1, rotation: -1125}, "download")
                        .to("#upload", {duration: 1, alpha: 0, y:25}, "download")
                        .to("#start", {duration: .5, alpha:0} )
                        .to("#circle", {duration: .5, rotation: -1080, morphSVG: "#arrow-load"})
                        .to("#circle", {duration: 1, x:1000, alpha:0, onComplete: slideMapIn})
                        .addPause()
// gsap.set(".circle",{transformOrigin: "center"});




export function resumeAnimation(){
    return resumeTL;
}