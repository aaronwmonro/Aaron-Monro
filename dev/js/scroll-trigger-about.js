gsap.registerPlugin(ScrollTrigger);

var aboutTimeline = gsap.timeline();

    aboutTimeline.from("#about-text",{duration: 2, alpha:0, x: 200}, "aboutLoad" )
                    .from("#about-social",{duration: 2, alpha:0, x: 200}, "aboutLoad" )
                    .from("#resume-content",{duration: 2, alpha:0, x: 200}, "aboutLoad" )
                    .from("#about-pic",{duration: 2, alpha:0, x: -200}, "aboutLoad" )
                    .from("#map",{duration: 2, alpha:0, y: 200}, "aboutLoad" )


var aboutScrollTimeline = gsap.timeline();
aboutScrollTimeline.to("#about-text",{duration: 2, x: 200}, "aboutScroll" )
                    .to("#about-social",{duration: 2, x: 200}, "aboutScroll" )
                    .to("#resume-content",{duration: 2, x: 200}, "aboutScroll" )
                    .to("#about-pic",{duration: 2, x: -200}, "aboutScroll" )
                   

                ScrollTrigger.create({
                    trigger: "#about-text",
                    start: "top 10%",
                    end: "bottom 10%",
                    animation: aboutScrollTimeline,
                    scrub: 2
                    // markers: true
                }); 