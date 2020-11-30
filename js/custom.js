
/* jQuery Pre loader
 -----------------------------------------------*/
$(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


/* HTML document is loaded. DOM is ready. 
 -------------------------------------------*/
$(document).ready(function () {

    /* template navigation
     -----------------------------------------------*/
    $('.main-navigation').onePageNav({
        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
        scrollOffset: 75, //Height of Navigation Bar
        filter: ':not(.external)',
        changeHash: true
    });

    /* Navigation visible on Scroll */
    mainNav();
    $(window).scroll(function () {
        mainNav();
    });

    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40)
            $('.sticky-navigation').stop().animate({
                "opacity": '1',
                "top": '0'
            });
        else
            $('.sticky-navigation').stop().animate({
                "opacity": '0',
                "top": '-75'
            });
    }


    /* Hide mobile menu after clicking on a link
     -----------------------------------------------*/
    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });


    /*  smoothscroll
     ----------------------------------------------*/
    $(function () {
        $('.navbar-default a, #home a, #overview a').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });


    /* Parallax section
     -----------------------------------------------*/
    function initParallax() {
        $('#home').parallax("100%", 0.1);
        $('#overview').parallax("100%", 0.3);
        $('#instructor').parallax("100%", 0.2);
        $('#newsletter').parallax("100%", 0.3);
        $('#blog').parallax("100%", 0.1);
        $('#aspects').parallax("100%", 0.2);
        $('#testimonial').parallax("100%", 0.2);

    }
    initParallax();


    /* home slider section
     -----------------------------------------------*/
    $(function () {
        jQuery(document).ready(function () {
            $('#home').backstretch([
                "images/home_slider/slider_img_yoga_loznica_01.jpg",
                "images/home_slider/slider_img_yoga_loznica_02.jpg",
                "images/home_slider/slider_img_yoga_loznica_03.jpg",
                "images/home_slider/slider_img_yoga_loznica_04.jpg",
                "images/home_slider/slider_img_yoga_loznica_05.jpg",
                "images/home_slider/slider_img_yoga_loznica_06.jpg",
                "images/home_slider/slider_img_yoga_loznica_07.jpg",
                "images/home_slider/slider_img_yoga_loznica_08.jpg",
                "images/home_slider/slider_img_yoga_loznica_09.jpg",
                "images/home_slider/slider_img_yoga_loznica_10.jpg",
                "images/home_slider/slider_img_yoga_loznica_11.jpg",
            ], {duration: 2000, fade: 750});
        });
    })


    /* Owl Carousel
     -----------------------------------------------*/
    $(document).ready(function () {
        $("#owl-testimonial").owlCarousel({
            autoPlay: 6000,
            items: 1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
        });
    });


    /* wow
     -------------------------------*/
    new WOW({mobile: false}).init();

});


// Set default values
var date = new Date();
var year = date.getFullYear();
document.getElementById("is-phone").href = isPhone();
document.getElementById("now").innerHTML = year;

// Formspree send email event
window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
    var form = document.getElementById("e-mail-form");
    var button = document.getElementById("submit-form-button");
    var status = document.getElementById("form-status");
    // Success and Error functions for after the form is submitted
    function success() {
        form.reset();
        button.style = "display: none ";
        status.innerHTML = "Hvala na poverenju. Bićemo u kontaktu!";
    }
    function error() {
        status.innerHTML = "Ups! Nešto nije u redu. Pokušajte ponovo.";
    }
    // handle the form submission event
    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});
// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE)
            return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

function isPhone() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // true for mobile device
        return "tel:+381640882949";
    } else {
        // false for not mobile device
        return "kontakt.html";
    }

}