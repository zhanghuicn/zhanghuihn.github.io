/**
 * Created by zhang.hui on 7/31/2016.
 */

$(document).ready(function () {
    var MaxPages = 8;
    $(".page").on("swipeleft", function () {
        var id = $(this).attr("id");
        var arr = id.split("_");
        if (arr.length == 2) {
            var num = parseInt(arr[1]);
            if (num < MaxPages)
                $.mobile.changePage("index.html#page_" + (++num).toString(), {transition: "slide", changeHash: false});
        }
    }).on("swiperight", function () {
        var id = $(this).attr("id");
        var arr = id.split("_");
        if (arr.length == 2) {
            var num = parseInt(arr[1]);
            if (num > 1)
                $.mobile.changePage("index.html#page_" + (--num).toString(), {
                    transition: "slide",
                    reverse: true,
                    changeHash: false
                });
        }
    });

    function showTime() {
        var dateNow = new Date();
        var dateStart = new Date("2016/03/05 19:00:00");
        var diffSeconds = parseInt((dateNow.getTime() - dateStart.getTime()) / 1000);

        var days = parseInt((diffSeconds / 60 / 60 / 24).toString());
        var hours = parseInt(((diffSeconds - days * 24 * 60 * 60) / 3600).toString());
        var mins = parseInt(((diffSeconds / 60) % 60).toString());
        var seconds = parseInt((diffSeconds % 60).toString());

        $("p.time label").text(days + "天 " + hours + "小时 " + mins + "分钟 " + seconds + "秒");
        // alert(days + "天 " + hours + "小时 " + mins + "分钟 " + seconds + "秒");
    };

    showTime();
    var interval = setInterval(showTime, 1000);

    //$(".default .divImg img").ready(function () {
    //    $(".default .title").fadeIn();
    //});
});
