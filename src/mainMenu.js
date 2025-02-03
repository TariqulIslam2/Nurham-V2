import $ from 'jquery';
export default function mainMenu() {
    var menuItems = $('.primary-menu'),
        navContainer = $('.header-navigation'),
        menuContainer = $('.site-nav-menu'),
        navToggler = $('.nav-toggler'),
        closeIcon = $('.nav-close');

    // Adds toggle button to li items that have children
    menuItems.find('li a').each(function () {
        if ($(this).next().length > 0) {
            $(this).parent('li').append('<span class="dd-trigger"><i class="fal fa-plus"></i></span>');
        }
    });

    // expands the dropdown menu on each click
    menuItems.find('li .dd-trigger').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('open').parent('li').children('ul').stop(true, true).slideToggle(350);
        $(this).find("i").toggleClass("fa-minus fa-plus");
    });

    // Open menu on toggler click
    navToggler.on('click', function (e) {
        menuContainer.toggleClass('menu-opened');
        e.preventDefault();
        $(this).toggleClass('menu-opened');
    });

    // Close menu on toggler click
    closeIcon.on('click', function (e) {
        menuContainer.removeClass('menu-opened');
        navToggler.removeClass('menu-opened');
        e.preventDefault();
    });

    // check browser width in real-time
    function breakpointCheck() {
        var windoWidth = window.innerWidth;

        if (windoWidth <= 991) {
            navContainer.addClass('breakpoint-on');
        } else {
            navContainer.removeClass('breakpoint-on');
        }
    }

    breakpointCheck();
    $(window).on('resize', function () {
        breakpointCheck();
    });

    // Search Widget
    var searchBtn = $('.search-icon'),
        searchClose = $('.search-close'),
        searchFrom = $('.search-form');

    searchBtn.on('click', function (e) {
        searchFrom.toggleClass('opened');
        e.preventDefault();
    });

    searchClose.on('click', function (e) {
        searchFrom.removeClass('opened');
        e.preventDefault();
    });

    // One Page Active Class
    var scrollLink = $(".onepage-nav li a");
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top - 90;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass("current");
                $(this).parent().siblings().removeClass("current");
            }
        });
    });

    // // One Page Nav animation
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
        if (
            window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            window.location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {

                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {

                    var $target = $(target);
                    $target.focus();

                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });
}