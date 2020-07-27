var burgerAnimationTimeLine = gsap.timeline({paused:true});

gsap.set(".lines",{transformOrigin:"center"});

burgerAnimationTimeLine.to("#top-line",{duration:0.5,rotation:45, y:10, stroke: "#000"},"burgerStart")
                    .to("#bottom-line",{duration:0.5,rotation:-45, y:-50, stroke: "#000"},"burgerStart");




function animateBurger(){
    
    if(canYouSeeTheMenu === true){
        // turn the burger to X
        burgerAnimationTimeLine.play();
    }else{
        // turn the X to burger
        burgerAnimationTimeLine.reverse();
    }
}