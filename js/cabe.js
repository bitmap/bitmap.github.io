$(function () {
    'use strict';
    $('#work-link').click(function () {
        $('#portfolio').addClass('in-focus');
        $('header').addClass('in-background');
    });

    $('#back').click(function () {
        $('#portfolio').removeClass('in-focus');
        $('header').removeClass('in-background');
    });
    $('figure img').click(function () {
        if ($(this).is(':last-child')) {
            $(this).parent().find(':first-child').addClass('active');
            $(this).removeClass('active');
        } else {
            $(this).next('img').addClass('active');
            $(this).removeClass('active');
        }
    });
});