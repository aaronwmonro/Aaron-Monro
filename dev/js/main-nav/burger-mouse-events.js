var burgerToArrowTimeline = gsap.timeline({paused:true});
var burgerArrowSpeed = 0.25;
var arrowToXTimeline = gsap.timeline({paused:true});
// burgerToArrowTimeline.to("#burger",{duration:burgerArrowSpeed, rotation:-90})
arrowToXTimeline.to("#burger",{duration:burgerArrowSpeed}, "createArrow")
            .to("#bottom-line",{duration:burgerArrowSpeed, rotation:0, y:-7.5}, "createArrow")
            .to("#top-line",{duration:burgerArrowSpeed, rotation:0, y:7.5}, "createArrow")
            .to("#left-arrow",{duration:burgerArrowSpeed, rotation:45, alpha:1, y:7, x:5}, "createArrow")
            .to("#right-arrow",{duration:burgerArrowSpeed, rotation:-45, alpha:1, y:11, x:-20}, "createArrow")
            .to("#circle",{duration: burgerAnimateSpeed, alpha:0, rotation:0, y:0, x:0}, "createArrow");


burgerToArrowTimeline.to("#bottom-line",{duration:burgerArrowSpeed, y:-9}, "createLeftArrow")
.to("#top-line",{duration:burgerArrowSpeed, y:7}, "createLeftArrow")
.to("#left-arrow",{duration:burgerArrowSpeed, alpha:1, rotation:-45, y:25, x:32}, "createLeftArrow")
.to("#right-arrow",{duration:burgerArrowSpeed, alpha:1, rotation:45, y:-8, x:9}, "createLeftArrow");           

            // xToArrowTime .to("#bottom-line",{duration:burgerArrowSpeed, y:-7.5}, "createLeftArrow")
            //     .to("#top-line",{duration:burgerArrowSpeed, y:7.5}, "createLeftArrow")
            //     .to("#left-arrow",{duration:burgerArrowSpeed, rotation:45, y:25, x:30}, "createLeftArrow")
            //     .to("#right-arrow",{duration:burgerArrowSpeed, rotation:-45, y:-10, x:6}, "createLeftArrow");

$("#burger").on("mouseenter", function (){

 // check the  canYouSeeTheMenu bool valus
 if(canYouSeeTheMenu === true){
    // turn the x to x
    arrowToXTimeline.play();
}else{
    // turn the burger to arrow
    burgerToArrowTimeline.play();
}

})

$("#burger").on("mouseleave", function (){

    // check the  canYouSeeTheMenu bool valus
    if(canYouSeeTheMenu === true){
       // turn the arrow to x
       arrowToXTimeline.reverse();
   }else{
       // turn the arrow to burger
       burgerToArrowTimeline.reverse();
   }
   
   })


   // $("#burger").on("mouseenter", function(){
//     console.log("mouse enter");
//     burgerToArrowTimeline.play();
// })

// $("#burger").on("mouseleave", function(){
//     console.log("mouse leave");
//     burgerToArrowTimeline.reverse();
// })

