$(document).ready(function (e) {
    $("#btn-fold").click(function (e) {
        if ($(".second-menu").css('left') === '0px') {
            $(".second-menu").animate({
                left: '-80%'
            }, 200);
        } else {
            $(".second-menu").animate({
                left: '0%'
            }, 200);
        }
    });

    $(".second-menu-item").click(function () {
        if ($(this).children("ul").css("display") === "none") {
            $(this).children("ul").slideDown();
            $(this).siblings().children("ul").slideUp();
        } else {
            $(this).children("ul").slideUp();
        }
    })

    $(".second-nav-lan").click(function () {
        $(".lan-select").slideToggle();
    })
});