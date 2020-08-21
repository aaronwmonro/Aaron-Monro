gsap.registerPlugin(ScrollTrigger);

var heroTimeline = gsap.timeline();
heroTimeline.to("#academic-hero",{scrollTrigger:{
    trigger:"#academic-hero",
    pin: true,
    pinSpacing: false,
    start: "top",
    end: "bottom"
    // markers:true
}})

var heroPiiTimeline = gsap.timeline();
heroPiiTimeline.to("#pii-hero",{scrollTrigger:{
    trigger:"#pii-hero",
    pin: true,
    pinSpacing: false,
    start: "top",
    end: "bottom"
    // markers:true
}})

var heroPiiTwoTimeline = gsap.timeline();
heroPiiTwoTimeline.to("#pii-hero-2",{scrollTrigger:{
    trigger:"#pii-hero-2",
    pin: true,
    pinSpacing: false,
    start: "top",
    end: "bottom"
    // markers:true
}})

var wndrTimeline = gsap.timeline();
wndrTimeline.to("#wndr-hero",{scrollTrigger:{
    trigger:"#wndr-hero",
    pin: true,
    pinSpacing: false,
    start: "top",
    end: "bottom"
    // markers:true
}})

// var piiTimeline = gsap.timeline();
// piiTimeline.from("#colors",{duration:1, alpha:0, y: -200}, "contentFade")
//                 .from("#pii-title",{duration:1, alpha:0, y: 200}, "contentFade")
//                 .from("#pii-text",{duration:1, alpha:0, y: 200}, "contentFade")
//                 .from("#img-container",{duration:1, alpha:0, y: 200}, "contentFade")

//                 ScrollTrigger.create({
                    
                   

                    
//                     trigger: "#pii-container",
//                     start: "top 90%",
//                     end: "bottom 80%",
//                     animation: piiTimeline,
//                     scrub: 2,
//                     markers: true
//                 });  

 /* --------------------------
    PII Scroll
 --------------------------*/
ScrollTrigger.matchMedia({
"(min-width: 574px)": function(){
    var piiTimeline = gsap.timeline({
        scrollTrigger:{
    
            trigger: "#pii-container",
            start: "top 90%",
            end: "bottom 80%",
            animation: piiTimeline,
            scrub: 2
            // markers: true
        }
    });
    piiTimeline.from("#colors",{duration:1, alpha:0, y: -100}, "contentFade")
    .from("#pii-title",{duration:1, alpha:0, y: 200}, "contentFade")
    .from("#pii-text",{duration:1, alpha:0, y: 200}, "contentFade")
    .from("#img-container",{duration:1, alpha:0, y: 200}, "contentFade")
    
    
}
    
})

ScrollTrigger.matchMedia({
    "(max-width: 574px)": function(){
        var piiTimeline = gsap.timeline({
            scrollTrigger:{
        
                trigger: "#pii-container",
                start: "top 100%",
                end: "bottom 100%",
                animation: piiTimeline,
                scrub: .125

                // markers: true
            }
        });
        piiTimeline.from("#colors",{duration:1, alpha:0, x: -100}, "contentFade")
        .from("#pii-title",{duration:1, alpha:0, y: 100}, "contentFade")
        .from("#pii-text",{duration:1, alpha:0, y: 100}, "contentFade")
        // .from("#img-container",{duration:1, alpha:0, y: 100}, "contentFade")
        
        
    }
        
    })

ScrollTrigger.matchMedia({
    "(max-width: 574px)": function(){
        var piiLogoTimeline = gsap.timeline({
            scrollTrigger:{
        
                trigger: "#img-container",
                start: "top 100%",
                end: "bottom 100%",
                animation: piiLogoTimeline,
                scrub: 1

                // markers: true
            }
        });
        piiLogoTimeline.from("#img-container",{duration:2, alpha:0, x: -100}, "contentFade")
        
        
    }
        
    })



var piiSlidesTimeline = gsap.timeline();
piiSlidesTimeline.from("#logo-slides",{duration:1, alpha:0, y: 200}, "processFade")
                

                ScrollTrigger.create({
                    trigger: "#pii-slides",
                    start: "top 90%",
                    end: "bottom 80%",
                    animation: piiSlidesTimeline,
                    scrub: 2
                    // markers: true
                }); 

/* --------------------------
    WNDR Scroll
 --------------------------*/

 var wndrSlidesTimeline = gsap.timeline();
wndrSlidesTimeline.from(".my-slider",{duration:1, alpha:0, y: 200}, "processFade")
                

                ScrollTrigger.create({
                    trigger: "#wndr-slides",
                    start: "top 100%",
                    end: "bottom 90%",
                    animation: wndrSlidesTimeline,
                    scrub: 2
                    // markers: true
                }); 

ScrollTrigger.matchMedia({
"(min-width: 574px)": function(){
    var wndrTimeline = gsap.timeline({
        scrollTrigger:{
    
            trigger: "#wndr-container",
            start: "top 90%",
            end: "bottom 80%",
            animation: wndrTimeline,
            scrub: 2
            // markers: true
        }
    });
    wndrTimeline.from("#wndr-colors",{duration:1, alpha:0, y: -100}, "contentFade")
    .from("#wndr-title",{duration:1, alpha:0, y: 200}, "contentFade")
    .from("#wndr-text",{duration:1, alpha:0, y: 200}, "contentFade")
    .from("#wndr-process",{duration:1, alpha:0, y: 200}, "contentFade")
    
    
}
    
})

ScrollTrigger.matchMedia({
    "(max-width: 574px)": function(){
        var wndrTimeline = gsap.timeline({
            scrollTrigger:{
        
                trigger: "#wndr-container",
                start: "top 100%",
                end: "bottom 100%",
                animation: wndrTimeline,
                scrub: .125

                // markers: true
            }
        });
        wndrTimeline.from("#colors",{duration:1, alpha:0, x: -100}, "contentFade")
        .from("#wndr-title",{duration:1, alpha:0, y: 100}, "contentFade")
        .from("#wndr-text",{duration:1, alpha:0, y: 100}, "contentFade")
        // .from("#img-container",{duration:1, alpha:0, y: 100}, "contentFade")
        
        
    }
        
    })

ScrollTrigger.matchMedia({
    "(max-width: 574px)": function(){
        var wndrLogoTimeline = gsap.timeline({
            scrollTrigger:{
        
                trigger: "#wndr-process",
                start: "top 100%",
                end: "bottom 100%",
                animation: wndrLogoTimeline,
                scrub: 1

                // markers: true
            }
        });
        wndrLogoTimeline.from("#wndr-process",{duration:2, alpha:0, x: -100}, "contentFade")
        
        
    }
        
    })




