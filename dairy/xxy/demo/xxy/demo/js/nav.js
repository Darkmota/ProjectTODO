window.onload = function(){
    $(function () {
        $('#nav_all>li').mouseenter(function () {
            $(this).find('ul').stop(false, true).slideDown(500);
        }).mouseleave(function () {
            $(this).find('ul').stop(false, true).slideUp(500);
        });
    });
}