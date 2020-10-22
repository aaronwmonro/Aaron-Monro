import {gsap} from "gsap";
import {TextPlugin} from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const navDesktopTL = gsap.timeline();

navDesktopTL 
.addLabel("workNavDropDown")
.from("#main-nav-desktop",{duration: 2, yPercent: -100, ease: "power2"}
)
.addLabel("workNavDropDownReverse")
// .addPause()   
;

export function navDesktopAnimation(){
    return navDesktopTL;
}