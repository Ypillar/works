$(document).ready(function() {
    //顶部菜单显示隐藏
    $('#zy, #zynone').mouseover(function() {
        $('#zynone').show();
    }).mouseout(function() {
        $('#zynone').hide();
    });
    $('#hy, #hynone').mouseover(function() {
        $('#hynone').show();
    }).mouseout(function() {
        $('#hynone').hide();
    });

    $('#jk, #jknone').mouseover(function() {
        $('#jknone').show();
    }).mouseout(function() {
        $('#jknone').hide();
    });
    //课程库隐藏显示
    $('#right_show0, #right_none0').mouseover(function() {
        $('#right_none0').show();
    }).mouseout(function() {
        $('#right_none0').hide();

    });
    $('#right_show1, #right_none1').mouseover(function() {
        $('#right_none1').show();
    }).mouseout(function() {
        $('#right_none1').hide();

    });
    $('#right_show2, #right_none2').mouseover(function() {
        $('#right_none2').show();
    }).mouseout(function() {
        $('#right_none2').hide();

    });
    $('#right_show3, #right_none3').mouseover(function() {
        $('#right_none3').show();
    }).mouseout(function() {
        $('#right_none3').hide();

    });
    $('#right_show4, #right_none4').mouseover(function() {
        $('#right_none4').show();
    }).mouseout(function() {
        $('#right_none4').hide();

    });
    $('#right_show5, #right_none5').mouseover(function() {
        $('#right_none5').show();
    }).mouseout(function() {
        $('#right_none5').hide();

    });
    $('#right_show6, #right_none6').mouseover(function() {
        $('#right_none6').show();
    }).mouseout(function() {
        $('#right_none6').hide();

    });
    $('#right_show7, #right_none7').mouseover(function() {
        $('#right_none7').show();
    }).mouseout(function() {
        $('#right_none7').hide();

    });
    $('#right_show8, #right_none8').mouseover(function() {
        $('#right_none8').show();
    }).mouseout(function() {
        $('#right_none8').hide();

    });
    $('#right_show9, #right_none9').mouseover(function() {
        $('#right_none9').show();
    }).mouseout(function() {
        $('#right_none9').hide();

    });
    //app下载
    $('#ashow_2, #anone_2').mouseover(function() {
        $('#anone_2').show();
    }).mouseout(function() {
        $('#anone_2').hide();

    });
    //个人中心
    $('.search-icon3, #_nonesubmenu').mouseover(function() {
        $('#_nonesubmenu').show();
    }).mouseout(function() {
        $('#_nonesubmenu').hide();

    });

    //中间鼠标移上去展示的



    $('.lesson-list ul li').on('mouseover', function() {
        $(this).children('li>.lesson-infor').stop().animate({ height: '175px' }, 500);
        $(this).children('li>.lesson-infor ').children('p').css({ 'height': '52px', 'opacity': ' 1', 'display': 'block' });
        // $(this).children('li>.lesson-infor>.timeandicon>.cf>dl>.zhongji').show();
        $(this).children('li>.lesson-infor').children('.timeandicon').children('.cf').children('dl').children('.zhongji').show();

    }).on('mouseout', function() {
        $(this).children('li>.lesson-infor').stop().animate({ height: '88px' }, 500);
        $(this).children('li>.lesson-infor').children('p').css({ 'height': '0', 'opacity': ' 0', 'display': 'none' });
        // $(this).children('li>.lesson-infor>.timeandicon>.cf>dl>.zhongji').hide();
        $(this).children('li>.lesson-infor').children('.timeandicon').children('.cf').children('dl').children('.zhongji').hide();
    });


    // 展示页面切换
    $('.previewMode').children('ul').children('.kuai-icon').on('click', function() {
        $('#changeid2').hide();
        $('#changeid').show();
        $('#pager').css('height', '2020');

    });
    $('.previewMode').children('ul').children('.list-icon').on('click', function() {
        $('#changeid').hide();
        $('#changeid2').show();
        $('#pager').css('height', '2820');

    });

    // 鼠标移动上去的效果二的个页面

    $('.lesson-list2 ul li').on('mouseover', function() {

        $(this).children('li>.lessonimg-box').children('.user-action').show();
        $(this).children('li>.lessonimg-box').children('a').children('.lessonplay').css({ "opacity": "1" });
        $(this).chi
    });
    $('.lesson-list2 ul li').on('mouseout', function() {

        $(this).children('li>.lessonimg-box').children('.user-action').hide();
        $(this).children('li>.lessonimg-box').children('a').children('.lessonplay').css({ "opacity": "0" });

    });
    // $(selector).scroll(function(){
    //     //原生
    //     //获取div距离顶部的距离
    //     var mTop = document.getElementsByClassName('gotop')[0].offsetTop;
    //     //减去滚动条的高度
    //     console.log(mTop);
    //     var sTop = document.body.scrollTop;
    //     var result = mTop - sTop;
    //     console.log(result);
    //     if(mTop==result){
    //         $('.top').hide();
    //     }else{
    //          $('.top').show();
    //     }

    // });
});


window.onscroll = function(){ 
    var t = document.documentElement.scrollTop || document.body.scrollTop;  
    var top_div = document.getElementById( "_top_" ); 
    console.log(t);
     var mTop = document.getElementById( "_top_" ).offsetTop;
    //减去滚动条的高度
    var sTop = document.body.scrollTop;
    var result = mTop - sTop;
     if( mTop== result ) { 
        top_div.style.display = "none"; 
       
    } else { 
         top_div.style.display = "inline"; 
    }
} 