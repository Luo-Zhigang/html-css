$(function () {
    autoHeight();
    $(window).resize(function () {
        autoHeight();
    });

    $(".siderbar p").click(function () {
        if ($(this).next("div").css("display") != "block") {
            $(".siderbar div").slideUp();
            $(this).next("div").slideDown();
        }
    });
    $(".siderbar a").mouseenter(function () {
        $(this).css({"color": "#fff", "font-weight": "bolder", "background": "#83ffbe", "borderRadius": "5px"});
    }).mouseleave(function () {
        $(this).css({"color": "#fff", "font-weight": "normal", "background": "none", "borderRadius": "0px"});
    });
    //滑动效果
    $(".siderbar>li>ul").slideUp();
    $(".siderbar>li>span").on("click", function () {
        $(".siderbar>li>ul").slideUp();
        $(this).next().slideDown();
    });
    $(".siderbar>li>span").eq(0).trigger("click");
});

function autoHeight() {
    var obj = {
        height: $(document).height() - 65,
        width: $(document).width()-160
    };
    $(".siderbar,.content").css("height", obj.height + "px");
    $(".content").css("width", obj.width + "px");
}