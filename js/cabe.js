(function () {
    $("#portfolio").focus();
    $("img").lazyload({
        threshold: 200
    });
    $(".next-img").click(function () {
        if ($(this).parent().find("img.active").is("img:last-child")) {
            $(this).parent().find("img.active").removeClass("active").parent().find("img").first().addClass("active");
            $(this).trigger("scroll")
        } else {
            $(this).parent().find("img.active").removeClass("active").next("img").addClass("active");
            $(this).trigger("scroll")
        }
    });
    $(".prev-img").click(function () {
        if ($(this).parent().find("img").first().hasClass("active")) {
            $(this).parent().find("img.active").removeClass("active").parent().find("img").last().addClass("active");
            $(this).trigger("scroll")
        } else {
            $(this).parent().find("img.active").removeClass("active").prev("img").addClass("active");
            $(this).trigger("scroll")
        }
    });
    $("img", "figure").each(function () {
        $(this).load(function () {
            var b = $(this).width();
            var a = $(this).height();
            $(this).parent().css("min-height", a)
        })
    })
})();