//fade in paragraphs and images
$(window).on("load", function () {
    $(window).scroll(function () {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function () {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity") == 0) {
                    $(this).fadeTo(500, 1);
                }
            } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity") == 1) {
                    $(this).fadeTo(500, 0);
                }
            }
        });


        
        


        // play audio
        const mySound = document.getElementById("audio");
        const audioBottom = $("#scroll").offset().top + $("#scroll").outerHeight();

        if (audioBottom < windowBottom) {
            mySound.play();
        }


        
        const myVideo = document.getElementById("video");
        const videoBottom = $(".article1").offset().top + $(".article1").outerHeight();

        if (audioBottom < windowBottom) {
            myVideo.pause();
        } else {
            myVideo.play ();
        }



        //zoom a paragraph when visible
        const em = document.getElementById("em");
        const emBottom = $("#em2").offset().top + $("#em2").outerHeight();

        if (emBottom < windowBottom) {
            document.getElementById("em").classList.add('active');
        }



        //zoom an image when visible
        const kids = document.getElementById("kids");
        const kidsBottom = $(".article10").offset().top + $(".article10").outerHeight();

        if (kidsBottom < windowBottom) {
            document.getElementById("kids").classList.add('active2');
        }




    }).scroll(); //invoke scroll-handler on page-load
});

//scroll to the first

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
