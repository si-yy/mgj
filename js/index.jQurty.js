// 设置入口函数
$(function(){

    var index=0;
    var run;
    var cl;
    var mindex;


    $(window).scroll(function(){

        $('#body_top').click(function(){

            $(window).scrollTop(0);

        })
    })
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

    $(window).scroll(function(){
        var wh=$(window).scrollTop();
        var bh=$('#bodyer_three').offset().top;

        if(wh>=bh){
            $('.bodyer_xiding').slideDown();
        }else{
            $('.bodyer_xiding').slideUp();
        }

    })

        var arr=['rgb(96,165,215)','rgb(251,199,224)','rgb(227,79,81)','rgb(249,191,71)','rgb(186,132,251)'];

        /*轮播图*/

        function cs(index){
            for(var i in arr){
                cl=arr[index];
            }
        }
        function show(i){
            $('.bodyer_two_lunbo>a').hide();
            $('.bodyer_two_lunbo>a').eq(i).show();
            $('.bodyer_two_lunbo>ul>li').removeClass('it');
            $('.bodyer_two_lunbo>ul>li').eq(i).addClass('it');

            $('#bodyer_two').css('background',cl);
        }

        function autoRun(){
            if(run){return}
            run=setInterval(function(){
                index++;
                if(index>$('.bodyer_two_lunbo>a').length-1){
                    index=0;
                }
                cs(index);

                show(index);
            },1000)
        }

        autoRun();

        $('.bodyer_two_lunbo>a').hover(function(){
            clearInterval(run);
            run=undefined;
        },function(){
            autoRun();
        })

        $('.bodyer_two_lunbo>ul>li').hover(function(){
            clearInterval(run);
            run=undefined;

            index=$(this).index();

            cs(index);

            show(index);

        },function(){
            autoRun();
        })
    /*/轮播图*/
    $('.bodyer_two_list a').hover(function(){
        $(this).css('text-decoration','underline');
    },function(){
        $(this).css('text-decoration','none');
    })

    $('.dl').click(function(){
        $('.show1').css('display','block');
        $('.show2').css('display','none');
    })
    $('.hy').click(function(){
        $('.show1').css('display','none');
        $('.show2').css('display','block');
    })

    //侧边栏楼层
    $(window).scroll(function(){
        var wt=$(window).scrollTop();
       var $cha = $('#bodyer_six').offset().top - wt;
       	if($cha<=360){
       		$("#body_louceng").slideDown();
       	}else {
       		$("#body_louceng").slideUp();
       	}
       $(".aside_nav").each(function(){
       	var $cha = $(this).offset().top - wt;
       		if($cha<=360){
       			$("#body_louceng a").eq($(this).index()-5).css("background","red").siblings().css("background","rgba(0,0,0,0.5)")
       		}
       })
       $("#body_louceng a").click(function(){
   			$("html,body").stop().animate({
   				"scrollTop":$(".aside_nav").eq($(this).index()).offset().top-360
   			},800)
       })
       
    });
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