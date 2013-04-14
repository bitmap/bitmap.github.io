$(function () {
    'use strict'; //JSHint

    $('img').lazyload({
        threshold: 200
    });

    $('#work-link').click(function () {
        $('#portfolio').addClass('in-focus');
        $('header').addClass('in-background');
        $(window).trigger('scroll');
    });

    $('#back').click(function () {
        $('#portfolio').removeClass('in-focus');
        $('header').removeClass('in-background');
    });

    $('figure img').click(function () {

        if ($(this).is(':last-child')) {
            $(this).parent().find(':first-child').addClass('active');
            $(this).removeClass('active').css('');
            $(this).trigger('scroll');

        } else {
            $(this).next('img').addClass('active');
            $(this).removeClass('active').css('');
            $(this).trigger('scroll');
        }
    });

    $("img", "figure").each(function() {
        $(this).load(function() {
            var width = $(this).width();
            var height = $(this).height();
            $(this).parent().css("height", height);
        });
    });
});