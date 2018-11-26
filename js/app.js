jQuery(document).ready(function ($) {

    $('nav.navbar a[href^="#"]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 500);
        e.preventDefault();
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $('nav.navbar').addClass('scrolled');
        } else {
            $('nav.navbar').removeClass('scrolled');
        }

        if(come("#first-section")) {
            $('nav.navbar .navbar-collapse ul.navbar-nav li.nav-item').removeClass('active');
            $('nav.navbar .navbar-collapse ul.navbar-nav li.nav-item:nth-child(1)').addClass('active');
        }

        if(come("#second-section")) {
            $('nav.navbar .navbar-collapse ul.navbar-nav li.nav-item').removeClass('active');
            $('nav.navbar .navbar-collapse ul.navbar-nav li.nav-item:nth-child(2)').addClass('active');
        }

        if(come("#third-section-content")) {
            $('nav.navbar .navbar-collapse ul.navbar-nav li.nav-item').removeClass('active');
            $('nav.navbar .navbar-collapse ul.navbar-nav li.nav-item:nth-child(3)').addClass('active');
        }

        if(come("#about-us")) {
            $('nav.navbar .navbar-collapse ul.navbar-nav li.nav-item').removeClass('active');
            $('nav.navbar .navbar-collapse ul.navbar-nav li.nav-item:nth-child(4)').addClass('active');
        }
    });

    function come(elem) {
        var docViewTop = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),
            elemTop = $(elem).offset().top,
            elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
});