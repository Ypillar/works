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
        var pagejx = "精选";
        $.ajax({
            url: "php/index.php",
            type: "post",
            // dataType:'json',  
            data: {

                page: pagejx,
                sort: '10'

            },

            success: function(data) {
                console.log(data);
                var json = data;

                console.log(typeof(JSON.parse(json)));
                json = JSON.parse(json);
                console.log(json);
                newsaa = json;



                for (var i = 0; i < json.length; i++) {
                    var newsaa = json[i];



                    console.log(newsaa);
                    $.each(newsaa, function(index, item) {
                        // console.log(json[i]);
                        var newsid = newsaa[index].newsid;
                        var newstite = newsaa[index].newstite;
                        var newsname = newsaa[index].newsname;
                        var newsfl = newsaa[index].newsfl;
                        var newsdate = newsaa[index].newsdate;
                        var newsimag = newsaa[index].newsimg;
                        var a = newsaa.newsid;
                        var b = newsaa.newstite;
                        var c = newsaa.newsname;
                        var d = newsaa.newsfl;
                        var e = newsaa.newsdate;
                        var g = newsaa.newsimg;
                        var ag= "images/"+g;

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
                        return false;

                    });

                }
            },
            error: function() {
                console.log(出错);
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
        var pagebj = "百家";
        $.ajax({
            url: "php/index.php",
            type: "post",
            // dataType:'json',  
            data: {

                page: pagebj,
                sort: '10'

            },

            success: function(data) {
                console.log(data);
                var json = data;

                console.log(typeof(JSON.parse(json)));
                json = JSON.parse(json);
                console.log(json);
                newsaa = json;



                for (var i = 0; i < json.length; i++) {
                    var newsaa = json[i];



                    console.log(newsaa);
                    $.each(newsaa, function(index, item) {
                        // console.log(json[i]);
                        var newsid = newsaa[index].newsid;
                        var newstite = newsaa[index].newstite;
                        var newsname = newsaa[index].newsname;
                        var newsfl = newsaa[index].newsfl;
                        var newsdate = newsaa[index].newsdate;
                        var newsimag = newsaa[index].newsimg;
                        var a = newsaa.newsid;
                        var b = newsaa.newstite;
                        var c = newsaa.newsname;
                        var d = newsaa.newsfl;
                        var e = newsaa.newsdate;
                        var g = newsaa.newsimg;
                        var ag= "images/"+g;

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
                        return false;

                    });

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
        var pagebd = "本地";
        $.ajax({
            url: "php/index.php",
            type: "post",
            // dataType:'json',  
            data: {

                page: pagebd,
                sort: '10'

            },

            success: function(data) {
                console.log(data);
                var json = data;

                console.log(typeof(JSON.parse(json)));
                json = JSON.parse(json);
                console.log(json);
                newsaa = json;



                for (var i = 0; i < json.length; i++) {
                    var newsaa = json[i];



                    console.log(newsaa);
                    $.each(newsaa, function(index, item) {
                        // console.log(json[i]);
                        var newsid = newsaa[index].newsid;
                        var newstite = newsaa[index].newstite;
                        var newsname = newsaa[index].newsname;
                        var newsfl = newsaa[index].newsfl;
                        var newsdate = newsaa[index].newsdate;
                        var newsimag = newsaa[index].newsimg;
                        var a = newsaa.newsid;
                        var b = newsaa.newstite;
                        var c = newsaa.newsname;
                        var d = newsaa.newsfl;
                        var e = newsaa.newsdate;
                        var g = newsaa.newsimg;
                        var ag= "images/"+g;
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
                        return false;

                    });

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
        var pageay = "奥运";
        $.ajax({
            url: "php/index.php",
            type: "post",
            // dataType:'json',  
            data: {

                page: pageay,
                sort: '10'

            },

            success: function(data) {
                // console.log(data);
                var json = data;

                console.log(typeof(JSON.parse(json)));
                json = JSON.parse(json);
                // console.log(json);
                newsaa = json;



                for (var i = 0; i < json.length; i++) {
                    var newsaa = json[i];



                    // console.log(newsaa);
                    $.each(newsaa, function(index, item) {
                        // console.log(json[i]);
                        var newsid = newsaa[index].newsid;
                        var newstite = newsaa[index].newstite;
                        var newsname = newsaa[index].newsname;
                        var newsfl = newsaa[index].newsfl;
                        var newsdate = newsaa[index].newsdate;
                        var newsimag = newsaa[index].newsimg;
                        var a = newsaa.newsid;
                        var b = newsaa.newstite;
                        var c = newsaa.newsname;
                        var d = newsaa.newsfl;
                        var e = newsaa.newsdate;
                        var g = newsaa.newsimg;
                        var ag= "images/"+g;
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
                        return false;

                    });

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
        var pageyl = "娱乐";
        $.ajax({
            url: "php/index.php",
            type: "post",
            // dataType:'json',  
            data: {

                page: pageyl,
                sort: '10'

            },

            success: function(data) {
                // console.log(data);
                var json = data;

                console.log(typeof(JSON.parse(json)));
                json = JSON.parse(json);
                // console.log(json);
                newsaa = json;



                for (var i = 0; i < json.length; i++) {
                    var newsaa = json[i];



                    // console.log(newsaa);
                    $.each(newsaa, function(index, item) {
                        // console.log(json[i]);
                        var newsid = newsaa[index].newsid;
                        var newstite = newsaa[index].newstite;
                        var newsname = newsaa[index].newsname;
                        var newsfl = newsaa[index].newsfl;
                        var newsdate = newsaa[index].newsdate;
                        var newsimag = newsaa[index].newsimg;
                        var a = newsaa.newsid;
                        var b = newsaa.newstite;
                        var c = newsaa.newsname;
                        var d = newsaa.newsfl;
                        var e = newsaa.newsdate;
                        var g = newsaa.newsimg;
                        var ag= "images/"+g;
                        $('.box_news_yl').append("<div  class='index-list-item' style='display: block;'>" +
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
                        return false;

                    });

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
        var pagejx = "精选";
        $.ajax({
            url: "php/index.php",
            type: "post",
            // dataType:'json',  
            data: {

                page: pagejx,
                sort: '10'

            },

            success: function(data) {
                console.log(data);
                var json = data;

                console.log(typeof(JSON.parse(json)));
                json = JSON.parse(json);
                console.log(json);
                newsaa = json;



                for (var i = 0; i < json.length; i++) {
                    var newsaa = json[i];



                    console.log(newsaa);
                    $.each(newsaa, function(index, item) {
                        // console.log(json[i]);
                        var newsid = newsaa[index].newsid;
                        var newstite = newsaa[index].newstite;
                        var newsname = newsaa[index].newsname;
                        var newsfl = newsaa[index].newsfl;
                        var newsdate = newsaa[index].newsdate;
                        var newsimag = newsaa[index].newsimg;
                        var a = newsaa.newsid;
                        var b = newsaa.newstite;
                        var c = newsaa.newsname;
                        var d = newsaa.newsfl;
                        var e = newsaa.newsdate;
                        var g = newsaa.newsimg;
                        var ag= "images/"+g;

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
                        return false;

                    });

                }
            },
            error: function() {
                console.log(出错);
            }

        });

    }
    shownews();

    // $('.index-list-main').on("click",function(){    
    //     $('#box_content').hide();
    //     $('#box_banner').hide();
    //     $('#contentnews').show();
    //      var row = $(this).parent().parent().index();
    //     var strtit=$(this).children('index-list-main-text').children("index-list-main-title").text();

    //     console.log(strtit);


    // });
});
