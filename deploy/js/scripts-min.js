var burgerAnimationTimeLine=gsap.timeline({paused:!0}),burgerAnimateSpeed=.25;gsap.set(".lines",{transformOrigin:"center"}),burgerAnimationTimeLine.addLabel("burgerToRightArrow").to("#bottom-line",{duration:burgerAnimateSpeed,y:-9},"createArrow").to("#top-line",{duration:burgerAnimateSpeed,y:9},"createArrow").to("#right-arrow-top",{duration:burgerAnimateSpeed,rotation:45,y:2,x:5,alpha:1},"createArrow").to("#right-arrow-bottom",{duration:burgerAnimateSpeed,rotation:-45,y:-2,x:5,alpha:1},"createArrow").addLabel("burgerToRightArrowReverse").addPause().addLabel("rightArrowToX").to("#top-line",{duration:burgerAnimateSpeed,rotation:45},"burgerToX").to("#bottom-line",{duration:burgerAnimateSpeed,rotation:-45},"burgerToX").to("#right-arrow-top",{duration:burgerAnimateSpeed,rotation:0,alpha:0},"burgerToX").to("#right-arrow-bottom",{duration:burgerAnimateSpeed,rotation:0,alpha:0},"burgerToX").to("#left-arrow-top",{duration:burgerAnimateSpeed,alpha:0},"burgerToX").to("#left-arrow-bottom",{duration:burgerAnimateSpeed,alpha:0},"burgerToX").to("#circle",{duration:burgerAnimateSpeed,alpha:1},"burgerToX").addLabel("rightArrowToXReverse").addPause().addLabel("xToLeftArrow").to("#top-line",{duration:burgerAnimateSpeed,rotation:0},"leftArrow").to("#bottom-line",{duration:burgerAnimateSpeed,rotation:0},"leftArrow").to("#left-arrow-top",{duration:burgerAnimateSpeed,rotation:-45,y:2,x:-5,alpha:1},"leftArrow").to("#left-arrow-bottom",{duration:burgerAnimateSpeed,rotation:45,y:-2,x:-5,alpha:1},"leftArrow").to("#circle",{duration:burgerAnimateSpeed,alpha:0},"leftArrow").addLabel("xToLeftArrowReverse").addPause().addLabel("leftArrowToBurger").to("#left-arrow-top",{duration:burgerAnimateSpeed,rotation:0,alpha:0},"backToBurger").to("#left-arrow-bottom",{duration:burgerAnimateSpeed,rotation:0,alpha:0},"backToBurger").to("#right-arrow-top",{duration:burgerAnimateSpeed,rotation:0,alpha:0},"backToBurger").to("#right-arrow-bottom",{duration:burgerAnimateSpeed,rotation:0,alpha:0},"backToBurger").to("#top-line",{duration:burgerAnimateSpeed,rotation:0},"backToBurger").to("#bottom-line",{duration:burgerAnimateSpeed,rotation:0},"backToBurger").addPause(),$("#burger").on("mouseenter",(function(){!1===canYouSeeTheMenu?burgerAnimationTimeLine.play("burgerToRightArrow"):burgerAnimationTimeLine.play("xToLeftArrow")})),$("#burger").on("mouseleave",(function(){!1===canYouSeeTheMenu?burgerAnimationTimeLine.reverse("burgerToRightArrowReverse"):burgerAnimationTimeLine.reverse("xToLeftArrowReverse")}));var canYouSeeTheMenu=!1,navWidth=$("#main-nav").outerWidth();gsap.set("#main-nav",{x:-navWidth});var mainNavTimeline=gsap.timeline({paused:!0});function hideShowMainNav(){console.log("show the menu"),console.log(canYouSeeTheMenu+" can you see the menu value"),!1===canYouSeeTheMenu?(canYouSeeTheMenu=!0,burgerAnimationTimeLine.play("rightArrowToX"),mainNavTimeline.play()):(console.log("burger click"),burgerAnimationTimeLine.play("leftArrowToBurger"),canYouSeeTheMenu=!1,mainNavTimeline.reverse())}mainNavTimeline.to("#main-nav",{duration:.75,x:-0}),gsap.set(".burger-lines",{transformOrigin:"center"});var menuBackground=document.querySelector("#main-nav");function reportWindowSize(){console.log("test"),!1===canYouSeeTheMenu&&(console.log("can't see the main nav"),console.log($("#main-nav").outerWidth()),navWidth=$("#main-nav").outerWidth(),gsap.set("#main-nav",{y:-navWidth}))}window.onclick=function(e){e.target==menuBackground&&hideShowMainNav()},window.addEventListener("resize",reportWindowSize),$("#burger").on("click",hideShowMainNav),$("#main-nav li button").on("click",hideShowMainNav),gsap.registerPlugin(ScrollTrigger);var heroTimeline=gsap.timeline();heroTimeline.to("#academic-hero",{scrollTrigger:{trigger:"#academic-hero",pin:!0,pinSpacing:!1,start:"top",end:"bottom"}});var heroPiiTimeline=gsap.timeline();heroPiiTimeline.to("#pii-hero",{scrollTrigger:{trigger:"#pii-hero",pin:!0,pinSpacing:!1,start:"top",end:"bottom"}});var heroPiiTwoTimeline=gsap.timeline();heroPiiTwoTimeline.to("#pii-hero-2",{scrollTrigger:{trigger:"#pii-hero-2",pin:!0,pinSpacing:!1,start:"top",end:"bottom"}});var wndrTimeline=gsap.timeline();wndrTimeline.to("#wndr-hero",{scrollTrigger:{trigger:"#wndr-hero",pin:!0,pinSpacing:!1,start:"top",end:"bottom"}}),ScrollTrigger.matchMedia({"(min-width: 574px)":function(){var e=gsap.timeline({scrollTrigger:{trigger:"#pii-container",start:"top 90%",end:"bottom 80%",animation:e,scrub:2}});e.from("#colors",{duration:1,alpha:0,y:-100},"contentFade").from("#pii-title",{duration:1,alpha:0,y:200},"contentFade").from("#pii-text",{duration:1,alpha:0,y:200},"contentFade").from("#img-container",{duration:1,alpha:0,y:200},"contentFade")}}),ScrollTrigger.matchMedia({"(max-width: 574px)":function(){var e=gsap.timeline({scrollTrigger:{trigger:"#pii-container",start:"top 100%",end:"bottom 100%",animation:e,scrub:.125}});e.from("#colors",{duration:1,alpha:0,x:-100},"contentFade").from("#pii-title",{duration:1,alpha:0,y:100},"contentFade").from("#pii-text",{duration:1,alpha:0,y:100},"contentFade")}}),ScrollTrigger.matchMedia({"(max-width: 574px)":function(){var e=gsap.timeline({scrollTrigger:{trigger:"#img-container",start:"top 100%",end:"bottom 100%",animation:e,scrub:1}});e.from("#img-container",{duration:2,alpha:0,x:-100},"contentFade")}});var piiSlidesTimeline=gsap.timeline();piiSlidesTimeline.from("#logo-slides",{duration:1,alpha:0,y:200},"processFade"),ScrollTrigger.create({trigger:"#pii-slides",start:"top 90%",end:"bottom 80%",animation:piiSlidesTimeline,scrub:2});var wndrSlidesTimeline=gsap.timeline();wndrSlidesTimeline.from(".my-slider",{duration:1,alpha:0,y:200},"processFade"),ScrollTrigger.create({trigger:"#wndr-slides",start:"top 100%",end:"bottom 90%",animation:wndrSlidesTimeline,scrub:2}),ScrollTrigger.matchMedia({"(min-width: 574px)":function(){var e=gsap.timeline({scrollTrigger:{trigger:"#wndr-container",start:"top 90%",end:"bottom 80%",animation:e,scrub:2}});e.from("#wndr-colors",{duration:1,alpha:0,y:-100},"contentFade").from("#wndr-title",{duration:1,alpha:0,y:200},"contentFade").from("#wndr-text",{duration:1,alpha:0,y:200},"contentFade").from("#wndr-process",{duration:1,alpha:0,y:200},"contentFade")}}),ScrollTrigger.matchMedia({"(max-width: 574px)":function(){var e=gsap.timeline({scrollTrigger:{trigger:"#wndr-container",start:"top 100%",end:"bottom 100%",animation:e,scrub:.125}});e.from("#colors",{duration:1,alpha:0,x:-100},"contentFade").from("#wndr-title",{duration:1,alpha:0,y:100},"contentFade").from("#wndr-text",{duration:1,alpha:0,y:100},"contentFade")}}),ScrollTrigger.matchMedia({"(max-width: 574px)":function(){var e=gsap.timeline({scrollTrigger:{trigger:"#wndr-process",start:"top 100%",end:"bottom 100%",animation:e,scrub:1}});e.from("#wndr-process",{duration:2,alpha:0,x:-100},"contentFade")}}),gsap.registerPlugin(ScrollTrigger);var aboutTimeline=gsap.timeline();aboutTimeline.from("#about-text",{duration:2,alpha:0,x:200},"aboutLoad").from("#about-social",{duration:2,alpha:0,x:200},"aboutLoad").from("#resume-content",{duration:2,alpha:0,x:200},"aboutLoad").from("#about-pic",{duration:2,alpha:0,x:-200},"aboutLoad").from("#map",{duration:2,alpha:0,y:200},"aboutLoad");var aboutScrollTimeline=gsap.timeline();aboutScrollTimeline.to("#about-text",{duration:2,x:200},"aboutScroll").to("#about-social",{duration:2,x:200},"aboutScroll").to("#resume-content",{duration:2,x:200},"aboutScroll").to("#about-pic",{duration:2,x:-200},"aboutScroll"),ScrollTrigger.create({trigger:"#about-text",start:"top 10%",end:"bottom 10%",animation:aboutScrollTimeline,scrub:2}),gsap.registerPlugin(ScrollTrigger);var headerTimeline=gsap.timeline();headerTimeline.to("#burger-container",{duration:1,alpha:0,y:-200},"contentFade").to("#name-container",{duration:1,alpha:0,y:-200},"contentFade"),ScrollTrigger.create({trigger:".header-container-2",start:"top",end:"bottom",animation:headerTimeline,scrub:1});var personalTimeline=gsap.timeline();personalTimeline.from("#load",{duration:2,alpha:0,scale:0},"Load"),$('[data-fancybox="gallery"]').fancybox({});var mySlider=document.getElementsByClassName("my-slider");mySlider.length>0&&tns({container:".my-slider",items:1,gutter:15,edgePadding:50,controls:!1,controlsPosition:"bottom",navPosition:"bottom"});var mySlider2=document.getElementsByClassName("my-slider-2");mySlider2.length>0&&tns({container:".my-slider-2",items:1,gutter:15,edgePadding:50,controls:!1,controlsPosition:"bottom",navPosition:"bottom",responsive:{350:{items:1},768:{items:3,gutter:50},1040:{items:4,gutter:100}}}),tns({container:".my-slider-1",items:1,gutter:0,edgePadding:0,controls:!1,controlsPosition:"bottom",navPosition:"bottom",loop:!0,autoplay:!0,autoplayTimeout:3e3,autoplayPosition:"bottom",swipeAngle:!1,speed:2e3}),gsap.registerPlugin(MorphSVGPlugin,ScrollTrigger,DrawSVGPlugin);