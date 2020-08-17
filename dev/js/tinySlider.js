// console.log("tiny slider is working!");
var mySlider = document.getElementsByClassName('my-slider');
if(mySlider.length > 0){
  tns({
    container: '.my-slider',
    items: 1,
    gutter: 15,
    edgePadding: 50,
    controls: false,
    controlsPosition: "bottom",
    navPosition: "bottom"
});
}

var mySlider2 = document.getElementsByClassName('my-slider-2');
if(mySlider2.length > 0){
  tns({
    container: '.my-slider-2',
    items: 1,
    gutter: 15,
    edgePadding: 50,
    controls: false,
    controlsPosition: "bottom",
    navPosition: "bottom",
     responsive: {
          "350": {
            "items": 1
          },
          "768": {
            "items": 3,
            gutter:50
          },
          "1040": {
            "items": 4,
            gutter:100
          }
    }
   
});
}


tns({
  container: '.my-slider-1',
  items: 1,
  gutter: 0,
  edgePadding: 0,
  controls: false,
  controlsPosition: "bottom",
  navPosition: "bottom",
  loop: true,

  autoplay: true,
  autoplayTimeout: 3000,
  autoplayPosition: "bottom", 
  swipeAngle: false,
  speed: 2000
});
