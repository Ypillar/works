$(document).ready(function() {
    // 图片滚动
    var show_width;
    var num_a;
    var width_divlengh;
    show_width = $(".carousel-content").width();
    // console.log(show_width);
    num_a = $(".carousel-content div>a").length;
    // console.log(num_a);
    width_divlength = num_a * show_width;
    // console.log(width_divlength);
    $(".show-banner").css("width", width_divlength + "px");
    // 'width':parseInt(show_width)+'px';
    $(".show-banner a").css("width", show_width + "px");
    var jl = show_width;
    setInterval(function ssas() {


        if (jl <= width_divlength - show_width) {
            $(".show-banner").animate({ margin: "0 0 0 " + "-" + jl + "px" }, 1000);
            jl = jl + show_width;

        } else {
            jl = show_width;
            $(".show-banner").animate({ margin: 0 }, 0);

        }

    }, 3000);

    // 新闻分类的显示和隐藏
    $('.selected').click(function() {
        $('#box_content').show();
        $('#box_banner').show();
        $('#contentnews').hide();
        $('.box_news_jx').show();
        $('.box_news_bd').hide();
        $('.box_news_ay').hide();
        $('.box_news_yl').hide();
        $('.box_news_bj').hide();
        $('.showleft').parent().remove();
        
        var pagejx = "精选";
        $.ajax({
            url: "http://127.0.0.1:8082/selected",
            type: "post",
            dataType: "json",
            jsonp: "callback",
            data: {

                page: pagejx,


            },
            success: function(data) {
                var json = data;
                console.log(json);
                for (var i = 0; i < json.length; i++) {
                    console.log(json.length);
                    var news = json[i];
                    console.log(news);
                    for (var j in news) {

                        var newsid = news.newsid;
                        var newstite = news.newstite;
                        var newsname = news.newsname;
                        var newsfl = news.newsfl;
                        var newsdate = news.newsdate;
                        var newsimag = news.newsimg;
                        var a = news.newsid;
                        var b = news.newstite;
                        var c = news.newsname;
                        var d = news.newsfl;
                        var e = news.newsdate;
                        var g = news.newsimg;
                        var ag = "images/" + g;

                        console.log(a, b, c, d);

                        $('.box_news_jx').append("<div  class='index-list-item' style='display: block;'>" +
                            "<div class='index-list-main showleft'>" +
                            "<div class='index-list-image'>" +
                            "<i class='ivideoplay'>" + "</i>" +
                            "<img src=" + ag + " data-save='true'/>" +
                            "</div>" +
                            "<div class='index-list-main-text'>" +
                            "<div class='index-list-main-title'>" + b +
                            "</div>" +
                            "<div class='index-list-bottom'>" +
                            "   <div class='index-list-main-time'>" +
                            "<b class='tip-time'>" + "发布日期" + e + "</b>" +
                            "<b class='tip-hop tip-fillred'>" + "热点" + "</b>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>");
                        break;

                    }
                    console.log(j);
                }
            },
            error: function() {
                console.log(出错了);
            }

        });

    });
    $('.selected1').click(function() {
        $('#box_content').show();
        $('#box_banner').show();
        $('#contentnews').hide();
        $('.box_news_bj').show();
        $('.box_news_bd').hide();
        $('.box_news_ay').hide();
        $('.box_news_yl').hide();
        $('.box_news_jx').hide();
        $('.showleft').parent().remove();
        var pagebj = "百家";
        $.ajax({
            url: "http://127.0.0.1:8082/selected1",
            type: "post",
            dataType: "json",
            jsonp: "callback",


            success: function(data) {
                var json = data;
                console.log(json);
                for (var i = 0; i < json.length; i++) {
                    var news = json[i];
                    console.log(news);
                    for (var j in news) {
                        console.log(news[i]);
                        console.log(news.newsid);
                        var newsid = news.newsid;
                        var newstite = news.newstite;
                        var newsname = news.newsname;
                        var newsfl = news.newsfl;
                        var newsdate = news.newsdate;
                        var newsimag = news.newsimg;
                        var a = news.newsid;
                        var b = news.newstite;
                        var c = news.newsname;
                        var d = news.newsfl;
                        var e = news.newsdate;
                        var g = news.newsimg;
                        var ag = "images/" + g;

                        console.log(a, b, c, d);

                        $('.box_news_bj').append("<div  class='index-list-item' style='display: block;'>" +
                            "<div class='index-list-main showleft'>" +
                            "<div class='index-list-image'>" +
                            "<i class='ivideoplay'>" + "</i>" +
                            "<img src=" + ag + " data-save='true'/>" +
                            "</div>" +
                            "<div class='index-list-main-text'>" +
                            "<div class='index-list-main-title'>" + b +
                            "</div>" +
                            "<div class='index-list-bottom'>" +
                            "   <div class='index-list-main-time'>" +
                            "<b class='tip-time'>" + "发布日期" + e + "</b>" +
                            "<b class='tip-hop tip-fillred'>" + "热点" + "</b>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>");
                        break;

                    }
                }


            },
            error: function() {
                console.log(出错);
            }

        });

    });
    $('.selected2').click(function() {
        $('#box_content').show();
        $('#box_banner').show();
        $('#contentnews').hide();
        $('.box_news_bd').show();
        $('.box_news_jx').hide();
        $('.box_news_ay').hide();
        $('.box_news_yl').hide();
        $('.box_news_bj').hide();
        $('.showleft').parent().remove();
        var pagebd = "本地";
        $.ajax({
            url: "http://127.0.0.1:8082/selected2",
            type: "post",
            dataType: "json",
            jsonp: "callback",

            success: function(data) {
                var json = data;
                console.log(json);
                for (var i = 0; i < json.length; i++) {
                    var news = json[i];
                    console.log(news);
                    for (var j in news) {

                        var newsid = news.newsid;
                        var newstite = news.newstite;
                        var newsname = news.newsname;
                        var newsfl = news.newsfl;
                        var newsdate = news.newsdate;
                        var newsimag = news.newsimg;
                        var a = news.newsid;
                        var b = news.newstite;
                        var c = news.newsname;
                        var d = news.newsfl;
                        var e = news.newsdate;
                        var g = news.newsimg;
                        var ag = "images/" + g;

                        console.log(a, b, c, d);

                        $('.box_news_bd').append("<div  class='index-list-item' style='display: block;'>" +
                            "<div class='index-list-main showleft'>" +
                            "<div class='index-list-image'>" +
                            "<i class='ivideoplay'>" + "</i>" +
                            "<img src=" + ag + " data-save='true'/>" +
                            "</div>" +
                            "<div class='index-list-main-text'>" +
                            "<div class='index-list-main-title'>" + b +
                            "</div>" +
                            "<div class='index-list-bottom'>" +
                            "   <div class='index-list-main-time'>" +
                            "<b class='tip-time'>" + "发布日期" + e + "</b>" +
                            "<b class='tip-hop tip-fillred'>" + "热点" + "</b>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>");
                        break;

                    }
                }


            },
            error: function() {
                console.log(出错);
            }

        });

    });
    $('.selected3').click(function() {
        $('#box_content').show();
        $('#box_banner').show();
        $('#contentnews').hide();
        $('.box_news_ay').show();
        $('.box_news_bd').hide();
        $('.box_news_jx').hide();
        $('.box_news_yl').hide();
        $('.box_news_bj').hide();
        $('.showleft').parent().remove();
        var pageay = "奥运";
        $.ajax({
            url: "http://127.0.0.1:8082/selected3",
            type: "post",
            dataType: "json",
            jsonp: "callback",

            success: function(data) {
                var json = data;
                console.log(json);
                for (var i = 0; i < json.length; i++) {
                    var news = json[i];
                    console.log(news);
                    for (var j in news) {
                        console.log(news[i]);
                        console.log(news.newsid);
                        var newsid = news.newsid;
                        var newstite = news.newstite;
                        var newsname = news.newsname;
                        var newsfl = news.newsfl;
                        var newsdate = news.newsdate;
                        var newsimag = news.newsimg;
                        var a = news.newsid;
                        var b = news.newstite;
                        var c = news.newsname;
                        var d = news.newsfl;
                        var e = news.newsdate;
                        var g = news.newsimg;
                        var ag = "images/" + g;

                        console.log(a, b, c, d);

                        $('.box_news_ay').append("<div  class='index-list-item' style='display: block;'>" +
                            "<div class='index-list-main showleft'>" +
                            "<div class='index-list-image'>" +
                            "<i class='ivideoplay'>" + "</i>" +
                            "<img src=" + ag + " data-save='true'/>" +
                            "</div>" +
                            "<div class='index-list-main-text'>" +
                            "<div class='index-list-main-title'>" + b +
                            "</div>" +
                            "<div class='index-list-bottom'>" +
                            "   <div class='index-list-main-time'>" +
                            "<b class='tip-time'>" + "发布日期" + e + "</b>" +
                            "<b class='tip-hop tip-fillred'>" + "热点" + "</b>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>");
                        break;

                    }
                }


            },
            error: function() {
                console.log(出错);
            }

        });

    });
    $('.selected4').click(function() {
        $('#box_content').show();
        $('#box_banner').show();
        $('#contentnews').hide();
        $('.box_news_yl').show();
        $('.box_news_bd').hide();
        $('.box_news_ay').hide();
        $('.box_news_jx').hide();
        $('.box_news_bj').hide();
        $('.showleft').parent().remove();
        var pageyl = "娱乐";
        $.ajax({
            url: "http://127.0.0.1:8082/selected4",
            type: "post",
            dataType: "json",
            jsonp: "callback",

            success: function(data) {
                var json = data;
                console.log(json);
                for (var i = 0; i < json.length; i++) {
                    var news = json[i];
                    console.log(news);
                    for (var j in news) {
                        console.log(news[i]);
                        console.log(news.newsid);
                        var newsid = news.newsid;
                        var newstite = news.newstite;
                        var newsname = news.newsname;
                        var newsfl = news.newsfl;
                        var newsdate = news.newsdate;
                        var newsimag = news.newsimg;
                        var a = news.newsid;
                        var b = news.newstite;
                        var c = news.newsname;
                        var d = news.newsfl;
                        var e = news.newsdate;
                        var g = news.newsimg;
                        var ag = "images/" + g;

                        console.log(a, b, c, d);

                        $('.box_news_ay').append("<div  class='index-list-item' style='display: block;'>" +
                            "<div class='index-list-main showleft'>" +
                            "<div class='index-list-image'>" +
                            "<i class='ivideoplay'>" + "</i>" +
                            "<img src=" + ag + " data-save='true'/>" +
                            "</div>" +
                            "<div class='index-list-main-text'>" +
                            "<div class='index-list-main-title'>" + b +
                            "</div>" +
                            "<div class='index-list-bottom'>" +
                            "   <div class='index-list-main-time'>" +
                            "<b class='tip-time'>" + "发布日期" + e + "</b>" +
                            "<b class='tip-hop tip-fillred'>" + "热点" + "</b>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>");
                        break;

                    }
                }


            },
            error: function() {
                console.log(出错);
            }

        });

    });

    function shownews() {
        $('.box_news_jx').show();
        $('.box_news_bd').hide();
        $('.box_news_ay').hide();
        $('.box_news_yl').hide();
        $('.box_news_bj').hide();
        $('.showleft').parent().remove();
        var pagejx = "精选";
        $.ajax({
            url: "http://127.0.0.1:8082/selected",
            type: "post",
            dataType: "json",
            jsonp: "callback",
            data: {

                page: pagejx,


            },
            success: function(data) {
                var json = data;
                console.log(json);

                for (var i = 0; i < json.length; i++) {
                    var news = json[i];
                    console.log(json[1]);

                    for (var j in news) {

                        var newsid = news.newsid;
                        var newstite = news.newstite;
                        var newsname = news.newsname;
                        var newsfl = news.newsfl;
                        var newsdate = news.newsdate;
                        var newsimag = news.newsimg;
                        var a = news.newsid;
                        var b = news.newstite;
                        var c = news.newsname;
                        var d = news.newsfl;
                        var e = news.newsdate;
                        var g = news.newsimg;
                        var ag = "images/" + g;
                        $('.box_news_jx').append("<div  class='index-list-item' style='display: block;'>" +
                            "<div class='index-list-main showleft'>" +
                            "<div class='index-list-image'>" +
                            "<i class='ivideoplay'>" + "</i>" +
                            "<img src=" + ag + " data-save='true'/>" +
                            "</div>" +
                            "<div class='index-list-main-text'>" +
                            "<div class='index-list-main-title'>" + b +
                            "</div>" +
                            "<div class='index-list-bottom'>" +
                            "   <div class='index-list-main-time'>" +
                            "<b class='tip-time'>" + "发布日期" + e + "</b>" +
                            "<b class='tip-hop tip-fillred'>" + "热点" + "</b>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>");
                        break;
                    }
                }
            },
            error: function() {
                console.log(出错);
            }

        });

    }
    shownews();

    $('.index-list-main').on("click", function() {
        $('#box_content').hide();
        $('#box_banner').hide();
        $('#contentnews').show();
        var row = $(this).parent().parent().index();
        var strtit = $(this).children('index-list-main-text').children("index-list-main-title").text();

        console.log(strtit);


    });
});
