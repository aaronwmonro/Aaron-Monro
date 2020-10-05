gsap.registerPlugin(ScrollTrigger);

var proHeroTimeline = gsap.timeline();
proHeroTimeline.to("#professional-hero",{scrollTrigger:{
    trigger:"#professional-hero",
    pin: true,
    pinSpacing: false,
    start: "top",
    end: "bottom"
    // markers:true
}})

var heroZenTimeline = gsap.timeline();
heroZenTimeline.to("#zen-hero",{scrollTrigger:{
    trigger:"#zen-hero",
    pin: true,
    pinSpacing: false,
    start: "top",
    end: "bottom"
    // markers:true
}})

/* --------------------------
    Zen Scroll
 --------------------------*/
 ScrollTrigger.matchMedia({
    "(min-width: 574px)": function(){
        var zenTimeline = gsap.timeline({
            scrollTrigger:{
        
                trigger: "#zen-container",
                start: "top 90%",
                end: "bottom 80%",
                animation: zenTimeline,
                scrub: 2
                // markers: true
            }
        });
        zenTimeline.from("#colors-zen",{duration:1, alpha:0, y: -100}, "contentFade")
        .from("#zen-title",{duration:1, alpha:0, y: 200}, "contentFade")
        .from("#zen-text",{duration:1, alpha:0, y: 200}, "contentFade")
        .from("#zen-img-container",{duration:1, alpha:0, y: 200}, "contentFade")
        
        
    }
        
    })
    
    ScrollTrigger.matchMedia({
        "(max-width: 574px)": function(){
            var zenTimeline = gsap.timeline({
                scrollTrigger:{
            
                    trigger: "#zen-container",
                    start: "top 100%",
                    end: "bottom 100%",
                    animation: zenTimeline,
                    scrub: .125
    
                    // markers: true
                }
            });
            zenTimeline.from("#colors-zen",{duration:1, alpha:0, x: -100}, "contentFade")
            .from("#zen-title",{duration:1, alpha:0, y: 100}, "contentFade")
            .from("#zen-text",{duration:1, alpha:0, y: 100}, "contentFade")
            // .from("#img-container",{duration:1, alpha:0, y: 100}, "contentFade")
            
            
        }
            
        })
    
    ScrollTrigger.matchMedia({
        "(max-width: 574px)": function(){
            var zenLogoTimeline = gsap.timeline({
                scrollTrigger:{
            
                    trigger: "#zen-img-container",
                    start: "top 100%",
                    end: "bottom 100%",
                    animation: zenLogoTimeline,
                    scrub: 1
    
                    // markers: true
                }
            });
            zenLogoTimeline.from("#zen-img-container",{duration:2, alpha:0, x: -100}, "contentFade")
            
            
        }
            
        })
    
    
    
    var zenSlidesTimeline = gsap.timeline();
    zenSlidesTimeline.from("#zen-logo-slides",{duration:1, alpha:0, y: 200}, "processFade")
                    
    
                    ScrollTrigger.create({
                        trigger: "#zen-slides",
                        start: "top 90%",
                        end: "bottom 80%",
                        animation: zenSlidesTimeline,
                        scrub: 2
                        // markers: true
                    }); 
    



