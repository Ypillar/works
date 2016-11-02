$(document).ready(function() {




    $(".navigation3").click(function() {
        $(".menu3").slideToggle("slow");
    });
    //单击右边菜单的显示效果
    $("#_news1").click(function() {
        $(".right").hide();
        $(".news-revision").hide();
        $(".news-add").hide();
        $(".news-delete").hide();
        $(".table2").hide();

        $(".news-query").show();
        $(".table1").show();
        $(".id").parent().remove();



        //自动增加新闻

        $.ajax({
            url: "http://127.0.0.1:8082/_news1",
            type: "post",
            dataType: "json",
            jsonp: "callback",

            success: function(data) {

                var json = data;
                console.log(json);


                // console.log(json);
                newsaa = json[0];
                // var sum = $('.table-striped').children('tbody').children('tr').length;
                var sum = $('.table-striped tbody tr').length;
                var titstring = [];
                var sum = $('.titid').length;


                for (var j = 0; j <= sum; j++) {
                    titstring[j] = $(".titid").eq(j).text();
                }
                if (sum <= 10) {
                    for (var i = 0; i < json.length && sum <= 10; i++) {
                        var newsaa = json[i];

                        // console.log(sum);

                        // console.log(newsaa);
                        $.each(newsaa, function(index, item) {
                            // console.log(json[i]);
                            var newsid = newsaa[index].newsid;
                            var newstite = newsaa[index].newstite;
                            var newsname = newsaa[index].newsname;
                            var newsfl = newsaa[index].newsfl;
                            var newsdate = newsaa[index].newsdate;
                            var a = newsaa.newsid;
                            var b = newsaa.newstite;
                            var c = newsaa.newsname;
                            var d = newsaa.newsfl;
                            var e = newsaa.newsdate;

                            // $(".table-striped tbody").append("<tr>+<td width='35px'>" + a + "</td>+<td>" + b + "</td>+<td width='35px'>" + c + "</td>+<td width='70px'>" + d + "</td>+<td width='100px'>" + e + "</td>+<td width='115px'>" + "<button class='btn' type='submit'>" + "修改" + "</button>" + "<button class='btn' type='submit'>" + "删除" + "</button>" + "</td></tr>")
                            $(".table1 tbody").append("<tr calss='aa3'>+<td class='id'>" + a + "</td>+<td class='titid'>" + b + "</td>+<td >" + c + "</td>+<td>" + d + "</td>+<td >" + e + "</td>+<td >" + "<button class='btn btnxg' type='button'>" + "修改" + "</button>" + "<button class='btn btnsc' type='button'>" + "删除" + "</button>" + "</td></tr>")
                            return false;


                        });
                        var sum = $('.table-striped').children('tbody').children('tr').length;

                    }
                }


            },
            error: function() {
                console.log(出错);
            }

        });


    });
    // 提交按钮
    $('.btncz1').click(function() {
        var anewstite = $('.textlength').val();
        var anewsfl = $('.newsfllb').val();
        var anewsname = $('.newsnamezz').val();
        var anewsdate = $('.newsdatarq').val();
        var anewsimg = $('.newsimg').val();
        var anewscontent = $('.textareastyle').val();
        // console.log(anewscontent);
        // if (anewstite != "" && anewsfl != "" && anewscontent != "") {
        //     $('.cg').hide(1000);
        // } else {
        //    
        // }
        $('.cg1').hide(1000);
        $('.sb1').hide(1000);

    });

    $("#_news2").click(function() {
        $(".news-revision").hide();
        $(".right").hide();
        $(".news-query").hide();
        $(".news-revision").hide();
        $(".news-add").show();
        $('.textlength').val("");
        $('.newsfllb').val("");
        $('.newsnamezz').val("");
        $('.newsdaterq').val("");
        $('.textareastyle').val("");
        $("#progress").hide();

    });
    //新闻修改
    var qjid;
    $('tbody').on("click", ".btnxg", function() {
        var row = $(this).parent().parent().index();
        var cellid = $('tbody').children("tr").eq(row).children("td").eq('0').text();
        qjid = cellid;
        console.log(qjid);
        var anewstite = $('.textlength').val();
        var anewsfl = $('.newsfllb').val();
        var anewsname = $('.newsnamezz').val();
        var anewsdate = $('.newsdatarq').val();
        var anewsimg = $('.newsimg').val();
        var anewscontent = $('.textareastyle').val();
        $(".news-query").hide();
        $("#progress").hide();
        $(".news-revision").show();

        $.ajax({
            url: "http://127.0.0.1:8082/btnxg",
            type: "post",
            dataType: "json",
            jsonp: "callback",
            data: {

                cellid: cellid,
                newstite: anewstite,
                newsfl: anewsfl,
                newsname: anewsname,
                newsdate: anewsdate,
                newsimg: anewsimg,
                newscontent: anewscontent

            },
            success: function(data) {

                // console.log(data);
                var json = data;
                // console.log(typeof(JSON.parse(json)));

                newsaa = json[0];
                console.log(newsaa);
                $.each(newsaa, function(index, item) {
                    var newsid = newsaa[index].newsid;
                    var newstite = newsaa[index].newstite;
                    var newsname = newsaa[index].newsname;
                    var newsfl = newsaa[index].newsfl;
                    var newsdate = newsaa[index].newsdate;
                    var newscontent = newsaa[index].newscontent;
                    var a = newsaa.newsid;
                    var b = newsaa.newstite;
                    var c = newsaa.newsname;
                    var d = newsaa.newsfl;
                    var e = newsaa.newsdate;
                    var f = newsaa.newscontent;
                    $('.textlength').val(b);
                    $('.newsfllb').val(d);
                    $('.newsnamezz').val(c);
                    $('.newsdaterq').val(e);
                    $('.textareastyle').val(f);


                    return false;
                });


            },
            error: function() {
                console.log(出错);
            }
        });

    });
    // 单击修改出现的修改页面的提交

    $('.btntjxg').click(function() {

        var row = $(this).parent().parent().index();
        var cellid = $('tbody').children("tr").eq(row).children("td").eq('0').text();
        qjid = cellid;
        console.log(qjid);
        var anewstite1 = $('.textlentha').val();
        var anewsfl = $('.newsfllba').val();
        var anewsname = $('.newsnamezza').val();
        var anewsdate = $('.newsdaterqa').val();


        var anewscontent = $('.textareastylea').val();


        if (anewstite1 != "" && anewsfl != "" && anewscontent != "") {

            $.ajax({
                url: "http://127.0.0.1:8082/btntjxg",
                type: "post",
                dataType: "json",
                jsonp: "callback",
                data: {
                    newsid: qjid,
                    newstite: anewstite1,
                    newsfl: anewsfl,
                    newsname: anewsname,
                    newsdate: anewsdate,
                    newsimg: str,
                    newscontent: anewscontent

                },
                success: function(data) {

                    // console.log(data);
                    var json = data;
                    // console.log(typeof(JSON.parse(json)));

                    // console.log(json);

                    // $('.linecg1').append("<spna>" + json + "</span>");
                    $('.cg').show(1000);


                },
                error: function() {
                    console.log(出错);
                }

            });
        } else {
            $('.cg').hide();
            $('.sb').show();
        }
        $('.news-revision').hide();
        $('.news-query').show();
        $(".id").parent().remove();
        setTimeout(function() {
            $.ajax({
                url: "http://127.0.0.1:8082/_news1",
                type: "post",
                dataType: "json",
                jsonp: "callback",

                success: function(data) {

                    var json = data;
                    console.log(json);


                    // console.log(json);
                    newsaa = json[0];
                    // var sum = $('.table-striped').children('tbody').children('tr').length;
                    var sum = $('.table-striped tbody tr').length;
                    var titstring = [];
                    var sum = $('.titid').length;


                    for (var j = 0; j <= sum; j++) {
                        titstring[j] = $(".titid").eq(j).text();
                    }
                    if (sum <= 10) {
                        for (var i = 0; i < json.length && sum <= 10; i++) {
                            var newsaa = json[i];

                            // console.log(sum);

                            // console.log(newsaa);
                            $.each(newsaa, function(index, item) {
                                // console.log(json[i]);
                                var newsid = newsaa[index].newsid;
                                var newstite = newsaa[index].newstite;
                                var newsname = newsaa[index].newsname;
                                var newsfl = newsaa[index].newsfl;
                                var newsdate = newsaa[index].newsdate;
                                var a = newsaa.newsid;
                                var b = newsaa.newstite;
                                var c = newsaa.newsname;
                                var d = newsaa.newsfl;
                                var e = newsaa.newsdate;

                                // $(".table-striped tbody").append("<tr>+<td width='35px'>" + a + "</td>+<td>" + b + "</td>+<td width='35px'>" + c + "</td>+<td width='70px'>" + d + "</td>+<td width='100px'>" + e + "</td>+<td width='115px'>" + "<button class='btn' type='submit'>" + "修改" + "</button>" + "<button class='btn' type='submit'>" + "删除" + "</button>" + "</td></tr>")
                                $(".table1 tbody").append("<tr calss='aa3'>+<td class='id'>" + a + "</td>+<td class='titid'>" + b + "</td>+<td >" + c + "</td>+<td>" + d + "</td>+<td >" + e + "</td>+<td >" + "<button class='btn btnxg' type='button'>" + "修改" + "</button>" + "<button class='btn btnsc' type='button'>" + "删除" + "</button>" + "</td></tr>")
                                return false;


                            });
                            var sum = $('.table-striped').children('tbody').children('tr').length;

                        }
                    }


                },
                error: function() {
                    console.log(出错);
                }

            });

        }, 500);


    });



    //新闻删除
    $('tbody').on("click", ".btnsc", function() {
        var row = $(this).parent().parent().index();
        var cellid = $('tbody').children("tr").eq(row).children("td").eq('0').text();

        $.ajax({
            url: "http://127.0.0.1:8082/btnsc",
            type: "post",
            dataType: "json",
            jsonp: "callback",

            data: {

                cellid: cellid

            },
            success: function(data) {

                // console.log(data);
                var json = data;
                // console.log(typeof(JSON.parse(json)));
                json = JSON.parse(json);
                // console.log(json);



            },
            error: function() {
                console.log(出错);
            }
        });
        $('tbody').children("tr").eq(row).remove();

    });
    var page = 1;
    var textnews;

    //单击查询像服务获取数据
    $('.btnnewsxx').click(function() {
        textnews = $.trim($('.selectnews').val());
        $('.table1').hide();
        $(".table2").show();

        $.ajax({
            url: "http://127.0.0.1:8082/btnnewsxx",
            type: "post",
            dataType: "json",
            jsonp: "callback",
            data: {
                textnews: textnews,
                page: page,
                sort: '10',

            },
            success: function(data) {

                // console.log(data);
                var json = data;
                console.log(json[0]);
                newsaa = json[0];
                $.each(json, function(index, item) {
                    var newsid = json[index].newsid;
                    var newstite = json[index].newstite;
                    var newsname = json[index].newsname;
                    var newsfl = json[index].newsfl;
                    var newsdate = json[index].newsdate;
                    var a = newsaa.newsid;
                    var b = newsaa.newstite;
                    var c = newsaa.newsname;
                    var d = newsaa.newsfl;
                    var e = newsaa.newsdate;
                    // $(".table-striped tbody").append("<tr>+<td width='35px'>" + a + "</td>+<td>" + b + "</td>+<td width='35px'>" + c + "</td>+<td width='70px'>" + d + "</td>+<td width='100px'>" + e + "</td>+<td width='115px'>" + "<button class='btn' type='submit'>" + "修改" + "</button>" + "<button class='btn' type='submit'>" + "删除" + "</button>" + "</td></tr>")
                    $(".table2 tbody").append("<tr>+<td>" + a + "</td>+<td>" + b + "</td>+<td >" + c + "</td>+<td>" + d + "</td>+<td >" + e + "</td>+<td >" + "<button class='btn btnxg' type='submit'>" + "修改" + "</button>" + "<button class='btn btnsc' type='submit'>" + "删除" + "</button>" + "</td></tr>")

                    return false;
                });


            },
            error: function() {
                console.log(出错);
            }

        });


    });
    var anewsimg = "";
    //新闻添加提交后返回的数据
    var str;
    $('.btntj').click(function() {

        var anewstite = $('.textlength').val();
        var anewsfl = $('.newsfllb').val();
        var anewsname = $('.newsnamezz').val();
        var anewsdate = $('.newsdatarq').val();
        var anewsimg = str
        var anewscontent = $('.textareastyle').val();

        console.log(anewsfl, anewstite, str, anewsname, anewscontent);
        // console.log(anewscontent);
        if (anewstite != "" && anewsfl != "" && anewscontent != "") {
            $.ajax({
                url: "http://127.0.0.1:8082/btntj",
                type: "post",
                dataType: "json",
                jsonp: "callback",
                data: {
                    newstite: anewstite,
                    newsfl: anewsfl,
                    newsname: anewsname,
                    newsdate: anewsdate,
                    newsimg: str,
                    newscontent: anewscontent
                },
                success: function(data) {

                    var json = data;
                    // console.log(typeof(JSON.parse(json)));

                    // console.log(json);

                    // $('.linecg1').append("<spna>" + json + "</span>");
                    $('.cg1').show(1000);
                },
                error: function() {
                    console.log(出错);
                }

            });

        } else {
            $('.cg1').hide();
            $('.sb1').show();
        }
        $('.news-add').hide();
        $('.news-query').show();
        $(".id").parent().remove();
        setTimeout(function() {
            $.ajax({
                url: "http://127.0.0.1:8082/_news1",
                type: "post",
                dataType: "json",
                jsonp: "callback",

                success: function(data) {

                    var json = data;
                    console.log(json);


                    // console.log(json);
                    newsaa = json[0];
                    // var sum = $('.table-striped').children('tbody').children('tr').length;
                    var sum = $('.table-striped tbody tr').length;
                    var titstring = [];
                    var sum = $('.titid').length;


                    for (var j = 0; j <= sum; j++) {
                        titstring[j] = $(".titid").eq(j).text();
                    }
                    if (sum <= 10) {
                        for (var i = 0; i < json.length && sum <= 10; i++) {
                            var newsaa = json[i];

                            // console.log(sum);

                            // console.log(newsaa);
                            $.each(newsaa, function(index, item) {
                                // console.log(json[i]);
                                var newsid = newsaa[index].newsid;
                                var newstite = newsaa[index].newstite;
                                var newsname = newsaa[index].newsname;
                                var newsfl = newsaa[index].newsfl;
                                var newsdate = newsaa[index].newsdate;
                                var a = newsaa.newsid;
                                var b = newsaa.newstite;
                                var c = newsaa.newsname;
                                var d = newsaa.newsfl;
                                var e = newsaa.newsdate;

                                // $(".table-striped tbody").append("<tr>+<td width='35px'>" + a + "</td>+<td>" + b + "</td>+<td width='35px'>" + c + "</td>+<td width='70px'>" + d + "</td>+<td width='100px'>" + e + "</td>+<td width='115px'>" + "<button class='btn' type='submit'>" + "修改" + "</button>" + "<button class='btn' type='submit'>" + "删除" + "</button>" + "</td></tr>")
                                $(".table1 tbody").append("<tr calss='aa3'>+<td class='id'>" + a + "</td>+<td class='titid'>" + b + "</td>+<td >" + c + "</td>+<td>" + d + "</td>+<td >" + e + "</td>+<td >" + "<button class='btn btnxg' type='button'>" + "修改" + "</button>" + "<button class='btn btnsc' type='button'>" + "删除" + "</button>" + "</td></tr>")
                                return false;


                            });
                            var sum = $('.table-striped').children('tbody').children('tr').length;

                        }
                    }


                },
                error: function() {
                    console.log(出错);
                }

            });

        }, 500);

    });
    $('#fileupload,#fileupload1').click(function() {
        $("#progress").show();
    });
    $('#fileupload').fileupload({

        dataType: 'json',
        add: function(e, data) {

            data.submit();

        },
        progressall: function(e, data) {
            //进度条
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('.bar').css(
                'width',
                progress + '%'
            );
        },
        done: function(e, data) {
            str = data.files[0].name

            console.log(str)
        }
    });
    $('#fileupload1').fileupload({
        dataType: 'json',
        add: function(e, data) {

            data.submit();

        },
        progressall: function(e, data) {
            //进度条
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('.bar').css(
                'width',
                progress + '%'
            );
        },
        done: function(e, data) {
            str = data.files[0].name

            console.log(str)
        },
        fail: function(e, data) {
            //错误提示
            alert('Fail!');
        }
    });

});
