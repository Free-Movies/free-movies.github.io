/* Template: Juno - Multipurpose Landing Page Pack
   Author: InovatikThemes
   Created: Mar 2019
   Description: Custom JS file
*/
/* Some Parts of that Template has been used here*/

$("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "fadeIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 1500,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});



/* Counter - CountTo */
var a = 0;
$(window).scroll(function () {
    if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                var $this = $(this),
                countTo = $this.attr('data-count'), unit = $this.attr('data-unit');
                $({
                    countNum: $this.text(),
                    unit: unit
                }).animate({
                    countNum: countTo,
                },
                    {
                        duration: 2200,
                        easing: 'swing',
                        step: function () {
                            console.log(this)
                            $this.text(Math.floor(this.countNum) + this.unit);
                        },
                        complete: function () {
                            $this.text(this.countNum + this.unit);
                            //alert('finished');
                        }
                    });
            });
            a = 1;
        }
    }
});


/* Navbar Scripts */
	// jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 20) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});