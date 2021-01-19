$(function () {
    /*
    * 初始化fullpage组件
    * 1.设置每个屏幕的背景颜色
    * 2.设置屏幕内容的对齐方式，默认是垂直对齐，改为顶部对齐
    * 3.设置项目导航
    * */
    $(".container").fullpage({
        /*配置参数*/
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        /*页面切换速度设置*/
        scrollingSpeed: 1000,
        afterLoad: function (link, index) {
            /*index从1开始*/
            $(".section").eq(index - 1).addClass("now");
        },
        /*插件内容渲染完毕后执行的函数*/
        afterRender: function () {
            $(".more").on("click", function () {
                /*调用插件中的方法 点击切到下一页*/
                $.fn.fullpage.moveSectionDown();
            });
            /*当第四屏的购物车动画结束后执行收货地址的动画*/
            $(".screen04 .cart").on("transitionend",function () {
                $(".screen04 .address").show().find("img:last").fadeIn(1000);
                $(".screen04").addClass("show");
            });
            /*手跟着鼠标走*/
            $(".screen08").on("mousemove",function (e) {
                $(this).find(".hand").css({
                    left:e.clientX -295,
                    top:e.clientY - 100
                });
            }).find(".again").on("click",function () {
                /*动画重置*/
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                $(".content [style]").removeAttr("style");
                /*跳回第一页*/
                $.fn.fullpage.moveTo(1);
            });
        },
        /*离开摸一个屏幕时触发*/
        onLeave: function (index, nextIndex, direction) {
            if (index == 2 && nextIndex == 3) {
                /*判断页面是从第二屏触发*/
                $(".section").eq(index-1).addClass("leaved");
            }else if(index == 3 && nextIndex == 4) {
                /*判断页面是从第三屏触发*/
                $(".section").eq(index-1).addClass("leaved");
            }else if(index == 5 && nextIndex == 6) {
                /*判断页面是从第五屏触发*/
                $(".section").eq(index-1).addClass("leaved");
                $(".screen06").addClass("show");
            } else if(index == 6 && nextIndex == 7) {
                /*判断页面是从第六屏触发*/
                $(".screen07").addClass("show");
                $(".screen07 .star img").each(function (index,element) {
                    $(element).delay(index*0.5*1000).fadeIn();
                });
            }
        }
    });
});