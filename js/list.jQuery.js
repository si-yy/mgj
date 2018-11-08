/*设置入口函数*/
$(function(){

    /*网页顶部代码*/
    //购物车鼠标移入移出
    $('.wrap_right>li').eq(3).hover(function(){
        $('.gwc').show();
    },function(){
        $('.gwc').hide();
    })

//    客户服务鼠标移入移出
    $('.wrap_right>li').eq(4).hover(function(){
        $('.khfw').show();
    },function(){
        $('.khfw').hide();
    })

//    我的小店鼠标移入移出
    $('.wrap_right>li').eq(5).hover(function(){
        $('.mydian').show();
    },function(){
        $('.mydian').hide();
    })
    /*/网页顶部代码*/

    /*网页主体*/
    $('.one_dxt,.one_gdt').click(function(){
        if($('.show1').css('display')=='none'){
            $('.one_list_title1>h3').css('height','86px');
            $('.show1').css('display','block');
        }else{
            $('.one_list_title1>h3').css('height','51px');
            $('.show1').css('display','none');
        }
    })

    $('.one_list_dds').hover(function(){
        $(this).find('.one_list_dd_ul').show();
    },function(){
        $(this).find('.one_list_dd_ul').hide();
    });

    $(window).scroll(function(){
        var wt=$(window).scrollTop();
        var gd=$('.bodyer_one_first').offset().top;
        if(wt>=gd){
            $('.bodyer_xiding').slideDown();
        }else{
            $('.bodyer_xiding').slideUp();
        }
    })

    $('.one_list_lis').click(function(){
        var bj=$(this).find('span').text();

        $(this).parents('.one_list').hide();

        var tj=$('.one_title').find('ul');

        $('.one_title>ul').append('<li><a>'+bj+'</a></li>');

    })
    /*/网页主体*/

    /*网页底部*/

    $('.footer_ewmlist').hover(function(){
        $(this).find('.footer_ewm').show();
    },function(){
        $('.footer_ewm').hide();
    })

    $('.footer_two_p>a').hover(function(){
        $(this).css('color','#FF5577');
    },function(){
        $(this).css('color','');
    })
    $('.footer_three>ul>li>a').hover(function(){
        $(this).css('color','#FF5577');
    },function(){
        $(this).css('color','');
    })

    /*/网页底部*/
})