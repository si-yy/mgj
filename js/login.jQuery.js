$(function(){

    var ww=$(window).width()/2;
    var wh=$(window).height()/2;
    console.log(ww);

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


})