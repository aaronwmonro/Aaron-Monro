gsap.registerPlugin(ScrollTrigger);

var headerTimeline = gsap.timeline();
headerTimeline.to("#burger-container",{duration:1, alpha:0, y: -200}, "contentFade")
                .to("#name-container",{duration:1, alpha:0, y: -200}, "contentFade")

                ScrollTrigger.create({
                    trigger: ".header-container-2",
                    start: "top",
                    end: "bottom",
                    animation: headerTimeline,
                    scrub: 1
                    // markers: true
                });

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     console.log("show the menu");
//     document.getElementById("#header-container-2").style.top = "0";
//   } else {
//     document.getElementById("#header-container-2").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }


// $(document).ready(function () {
// 	var previousScroll = 0;
// 	$(window).scroll(function () {
// 		var currentScroll = $(this).scrollTop();
// 		if (currentScroll < 100) {
// 			showTopNav();
// 		} else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
// 			if (currentScroll > previousScroll) {
// 				hideNav();
// 			} else {
// 				showNav();
// 			}
// 			previousScroll = currentScroll;
// 		}
// 	});

// 	function hideNav() {
// 		$("#header-container-2").removeClass("is-visible").addClass("is-hidden");
// 	}

// 	function showNav() {
// 		$("#header-container-2").removeClass("is-hidden").addClass("is-visible").addClass("scrolling");
// 	}
// });