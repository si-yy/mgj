/*设置入口函数*/
$(function () {

    /*网页顶部代码*/
    //购物车鼠标移入移出
    $('.wrap_right>li').eq(3).hover(function () {
        $('.gwc').show();
    }, function () {
        $('.gwc').hide();
    })

//    客户服务鼠标移入移出
    $('.wrap_right>li').eq(4).hover(function () {
        $('.khfw').show();
    }, function () {
        $('.khfw').hide();
    })

//    我的小店鼠标移入移出
    $('.wrap_right>li').eq(5).hover(function () {
        $('.mydian').show();
    }, function () {
        $('.mydian').hide();
    })

    $('.spxx').click(function () {
        $(this).find('div').css('border-top', '4px solid #ef2f23');
        $(this).find('div').css('background', '#fff');
        $('.bottom_center_img2').show();
        $('.bottom_center_img1').hide();
        $('.bottom_center_img3').hide();
        $('.ljpj').find('div').css('border-top', '4px solid #f6f6f6');
        $('.ljpj').find('div').css('background', '#f6f6f6');
        $('.bdtl').find('div').css('border-top', '4px solid #f6f6f6');
        $('.bdtl').find('div').css('background', '#f6f6f6');
    })

    $('.ljpj').click(function () {
        $(this).find('div').css('border-top', '4px solid #ef2f23');
        $(this).find('div').css('background', '#fff');
        $('.bottom_center_img2').show();
        $('.bottom_center_img1').hide();
        $('.bottom_center_img3').hide();
        $('.spxx').find('div').css('border-top', '4px solid #f6f6f6');
        $('.spxx').find('div').css('background', '#f6f6f6');
        $('.bdtl').find('div').css('border-top', '4px solid #f6f6f6');
        $('.bdtl').find('div').css('background', '#f6f6f6');
    })

    $('.bdtl').click(function () {
        $(this).find('div').css('border-top', '4px solid #ef2f23');
        $(this).find('div').css('background', '#fff');
        $('.bottom_center_img3').show();
        $('.bottom_center_img1').hide();
        $('.bottom_center_img2').hide();
        $('.spxx').find('div').css('border-top', '4px solid #f6f6f6');
        $('.spxx').find('div').css('background', '#f6f6f6');
        $('.ljpj').find('div').css('border-top', '4px solid #f6f6f6');
        $('.ljpj').find('div').css('background', '#f6f6f6');
    })


    /*/网页顶部代码*/

    /*网页主体*/

    var num=$('.num').val();
    $('.add').click(function(){
        num++;
        $('.num').val(num);

    })
    $('.del').click(function(){
        num--;
        if(num<1){
            num=1;
        }else{
            $('.num').val(num);
        }

    })


    $('.smallbox').mousemove(function(e){
        var x=e.pageX;
        var y=e.pageY;

        var sx=$(this).offset().left;
        var sy=$(this).offset().top;

        var mx=$('.move').width()/2;
        var my=$('.move').height()/2;

        var maxX=$(this).width()-$('.move').width();
        var maxY=$(this).height()-$('.move').height();

        var newX=x-sx-mx;
        var newY=y-sy-my;

        if(newX<=0){
            newX=0;
        }
        if(newX>=maxX){
            newX=maxX;
        }
        if(newY<=0){
            newY=0;
        }
        if(newY>=maxY){
            newY=maxY;
        }

        $('.move').css('top',newY).css('left',newX);

        var sw=$(this).width();
        var sh=$(this).height();
        // console.log(sw);
        // console.log(sh);

        var bw=$('.bigPic').width();
        var bh=$('.bigPic').height();
        // console.log(bw);
        // console.log(bh);
        // console.log(newX);
        // console.log(newY);

        var newBw=newX*bw/sw;
        var newBh=newY*bh/sh;

        $('.bigPic').css('left',-newBw).css('top',-newBh);

    })
    $('.smallbox').mouseover(function(){
        $('.move').show();
        $('.bigbox').show();
    })
    $('.smallbox').mouseout(function(){
        $('.move').hide();
        $('.bigbox').hide();
    })

    $('.smallbox_img_ul li').mouseover(function(){

        $('.smallbox_img_ul li').removeClass('i');

        $(this).attr('class','i');

        var src=$(this).find('img').attr('src');

        $('.smallbox').find('img').attr('src',src);
        $('.bigPic').attr('src',src);

    })

    /*/网页主体*/

    /*网页底部*/

    $('.footer_ewmlist').hover(function () {
        $(this).find('.footer_ewm').show();
    }, function () {
        $('.footer_ewm').hide();
    })

    $('.footer_two_p>a').hover(function () {
        $(this).css('color', '#FF5577');
    }, function () {
        $(this).css('color', '');
    })
    $('.footer_three>ul>li>a').hover(function () {
        $(this).css('color', '#FF5577');
    }, function () {
        $(this).css('color', '');
    })

    /*/网页底部*/
});