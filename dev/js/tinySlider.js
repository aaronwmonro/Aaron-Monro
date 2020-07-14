// console.log("tiny slider is working!");

tns({
    container: '.my-slider',
    items: 1,
    gutter: 15,
    edgePadding: 50,
    controls: false,
    controlsPosition: "bottom",
    navPosition: "bottom"
});

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