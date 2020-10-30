// console.log("tiny slider is working!");
// import $ from "tiny-slider";

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

var mySlider5 = document.getElementsByClassName('my-slider-5');
if(mySlider5.length > 0){
  tns({
    container: '.my-slider-5',
    items: 1,
    gutter: 40,
    edgePadding: 20,
    controls: true,
    controlsPosition: "bottom",
    navPosition: "bottom",
    responsive: {
      "350": {
        edgePadding: 20
      },
      "768": {
        edgePadding: 100
      },
      "1040": {
        edgePadding: 150
      }
}
});
}

var mySlider6 = document.getElementsByClassName('my-slider-6');
if(mySlider6.length > 0){
  tns({
    container: '.my-slider-6',
    items: 1,
    gutter: 40,
    edgePadding: 20,
    controls: true,
    controlsPosition: "bottom",
    navPosition: "bottom",
    // loop: false,
    // autoWidth: true,
    responsive: {
      "350": {
        edgePadding: 20
      },
      "768": {
        edgePadding: 100
      },
      "1040": {
        edgePadding: 150
      }
}
});
}

var mySlider9 = document.getElementsByClassName('my-slider-9');
if(mySlider9.length > 0){
  tns({
    container: '.my-slider-9',
    items: 1,
    gutter: 40,
    edgePadding: 20,
    controls: true,
    controlsPosition: "bottom",
    navPosition: "bottom",
    // loop: false,
    // autoWidth: true,
    responsive: {
      "350": {
        edgePadding: 20
      },
      "768": {
        edgePadding: 100
      },
      "1040": {
        edgePadding: 150
      }
}
});
}

var mySlider7 = document.getElementsByClassName('my-slider-7');
if(mySlider7.length > 0){
  tns({
    container: '.my-slider-7',
    items: 1,
    gutter: 40,
    edgePadding: 20,
    controls: true,
    controlsPosition: "bottom",
    navPosition: "bottom",
    // loop: false,
    // autoWidth: true,
    responsive: {
      "350": {
        edgePadding: 20
      },
      "768": {
        edgePadding: 100
      },
      "1040": {
        edgePadding: 360
      }
}
});
}

var mySlider8 = document.getElementsByClassName('my-slider-8');
if(mySlider8.length > 0){
  tns({
    container: '.my-slider-8',
    items: 1,
    gutter: 40,
    edgePadding: 20,
    controls: true,
    controlsPosition: "bottom",
    navPosition: "bottom",
    // loop: false,
    // autoWidth: true,
    responsive: {
      "350": {
        edgePadding: 20
      },
      "768": {
        edgePadding: 100
      },
      "1040": {
        edgePadding: 400
      }
}
});
}



 var mySlider2 = document.getElementsByClassName('my-slider-2');
if(mySlider2.length > 0){
  tns({
    container: '.my-slider-2',
    items: 1,
    gutter: 15,
    edgePadding: 50,
    controls: true,
    controlsPosition: "bottom",
    navPosition: "bottom",
    loop: false,
     responsive: {
          "350": {
            "items": 1
          },
          "768": {
            "items": 1,
            gutter:50
          },
          "1040": {
            "items": 3
          },
          "1250": {
            "items": 3
          }
    }
   
});
}

var mySlider3 = document.getElementsByClassName('my-slider-3');
if(mySlider3.length > 0){
  tns({
    container: '.my-slider-3',
    items: 1,
    gutter: 15,
    edgePadding: 50,
    controls: true,
    controlsPosition: "bottom",
    navPosition: "bottom",
    loop: false,
     responsive: {
          "350": {
            "items": 1
          },
          "768": {
            "items": 1,
            gutter:50
          },
          "1040": {
            "items": 3
          },
          "1250": {
            "items": 3
          }
    }
   
});
}

var mySlider4 = document.getElementsByClassName('my-slider-4');
if(mySlider4.length > 0){
  tns({
    container: '.my-slider-4',
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
    },
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayPosition: "bottom", 
    swipeAngle: false,
    speed: 2000
});
}


// tns({
//   container: '.my-slider-1',
//   items: 1,
//   gutter: 0,
//   edgePadding: 0,
//   controls: false,
//   controlsPosition: "bottom",
//   navPosition: "bottom",
//   loop: true,

//   autoplay: true,
//   autoplayTimeout: 3000,
//   autoplayPosition: "bottom", 
//   swipeAngle: false,
//   speed: 2000
// });
