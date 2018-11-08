$(function(){

    /*登陆框*/
    var ww=$(window).width()/2;
    var wh=$(window).height()/2;

    var lw=$('.login_box').width()/2;
    var lh=$('.login_box').height()/2;
    console.log(lw);

    var newW=ww-lw;
    var newH=wh-lh;
    $('.login_box').css('left',newW);
    $('.login_box').css('top',newH);


    $('.login_box_tl_sj').click(function(){
        $('.login_box_tl_pt').css('color','#121212').css('border-bottom','1px solid #ccc');
        $(this).css('color','#fe617a').css('border-bottom','1px solid #ff4066');
        $('.login_box_content1').hide();
        $('.login_box_content2').show();
    })

    $('.login_box_tl_pt').click(function(){
        $('.login_box_tl_sj').css('color','#121212').css('border-bottom','1px solid #ccc');
        $(this).css('color','#fe617a').css('border-bottom','1px solid #ff4066');
        $('.login_box_content2').hide();
        $('.login_box_content1').show();
    })

    $('.login_box_close').click(function(){
        $('#login').hide();
    })
    /*/登陆框*/

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


    $('.thirdy_fk').click(function(){
        $('#login').show();
    })

    $('.thirdy_left_all').click(function(){
        $('.input0').attr('checked','checked');
    })

    function pri(){
        var price1=$('.one_price1').text();
        var price2=$('.one_price2').text();
        var newPrice=parseInt(price1)+parseInt(price2);
        $('.thirdy_price').text(newPrice);
    }

    $('.second_tbody_tr2_td5_jian1').click(function(){
        var num=$('.second_tbody_tr2_td5_ipt1').val();
        num--;
        if(num<=1){
            num=1;
        }
        $('.second_tbody_tr2_td5_ipt1').val(num);
        var number=num*$('.price1').text();
        $('.one_price1').text(number);

        pri();

    })

    $('.second_tbody_tr2_td5_jian2').click(function(){
        var num=$('.second_tbody_tr2_td5_ipt2').val();
        num--;
        if(num<=1){
            num=1;
        }
        $('.second_tbody_tr2_td5_ipt2').val(num);
        var number=num*$('.price2').text();
        $('.one_price2').text(number);

        pri();

    })

    $('.second_tbody_tr2_td5_jia1').click(function(){
        var num=$('.second_tbody_tr2_td5_ipt1').val();
        num++;
        $('.second_tbody_tr2_td5_ipt1').val(num);
        var number=num*$('.price1').text();
        $('.one_price1').text(number);

        pri();
    })

    $('.second_tbody_tr2_td5_jia2').click(function(){
        var num=$('.second_tbody_tr2_td5_ipt2').val();
        num++;
        $('.second_tbody_tr2_td5_ipt2').val(num);
        var number=num*$('.price2').text();
        $('.one_price2').text(number);

        pri();
    })



    $('.thirdy_left_other').click(function(){
        $('.input0').each(function(){
            var ck=$(this).attr('checked');
            if(ck=='checked'){
                $(this).removeAttr('checked');
            }else{
                $(this).attr('checked','checked');
            }
        })
    })

    $('.thirdy_left_noall').click(function(){
        $('.input0').removeAttr('checked');
    })

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