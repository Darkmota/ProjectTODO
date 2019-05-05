$(document).ready(function(e) {
    $("#btn-fold").click(function(e) {
        if($(".second-menu").css('left') === '0px'){
            $(".second-menu").animate({left:'-80%'},600);
            $(".main-content").animate({opacity:1},600);
        }
        else{
            $(".second-menu").animate({left:'0%'},600);
            $(".main-content").animate({opacity:0.5},600);
        }
    });
});