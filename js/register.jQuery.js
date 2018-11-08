// 设置入口函数
$(function(){

    /*网页主体*/
    $('.form_yhm>input').blur(function(){

    })

    $('.form_yhm input').focus(function(){
        $('.hide1').show();
        $('.hide2').hide();
        $('.hide3').hide();
    })

    $('.form_yhm input').blur(function(){
        var reg1=/^[a-zA-Z_0-9]{4,16}$/;
        var uname=$(this).val();
        var res=reg1.test(uname);
        console.log(res);
        if(uname==''){
            $('.hide1').show();
            $('.hide2').hide();
            $('.hide3').hide();
            return;
        }
        if(res==false){
            $('.hide1').hide();
            $('.hide2').hide();
            $('.hide3').show();
        }else{
            $('.hide1').hide();
            $('.hide3').hide();
            $('.hide2').show();
        }
    })

    $('.form_mm input').focus(function(){
        $('.hide4').show();
        $('.hide5').hide();
        $('.hide6').hide();
    })

    $('.form_mm input').blur(function(){
        var reg2=/^[a-zA-Z_0-9]{8,16}$/;
        var upwd=$(this).val();
        var res=reg2.test(upwd);
        // console.log(res);
        if(upwd==''){
            $('.hide4').show();
            $('.hide5').hide();
            $('.hide6').hide();
            return;
        }
        if(res==false){
            $('.hide4').hide();
            $('.hide5').hide();
            $('.hide6').show();
        }else{
            $('.hide4').hide();
            $('.hide6').hide();
            $('.hide5').show();
        }
    })

    $('.form_qrmm input').focus(function(){
        $('.hide7').show();
        $('.hide8').hide();
        $('.hide9').hide();
    })

    $('.form_qrmm input').blur(function(){
        var upwd1=$('.form_mm input').val();
        var upwd2=$('.form_qrmm input').val();
        if(upwd1=='' && upwd2==''){
            $('.hide7').show();
            $('.hide8').hide();
            $('.hide9').hide();
            return;
        }
        if(upwd1==upwd2){
            $('.hide8').show();
            $('.hide7').hide();
            $('.hide9').hide();
        }else{
            $('.hide9').show();
            $('.hide7').hide();
            $('.hide8').hide();
        }
    })

    $('.form_phone input').focus(function(){
        $('.hide10').show();
        $('.hide11').hide();
        $('.hide12').hide();
    })

    $('.form_phone input').blur(function(){
        var reg3=/^[1-9]{11}$/;
        var uphone=$('.form_phone input').val();
        var res=reg3.test(uphone);
        if(uphone==''){
            $('.hide10').show();
            $('.hide11').hide();
            $('.hide12').hide();
            return;
        }
        if(res==false){
            $('.hide12').show();
            $('.hide10').hide();
            $('.hide11').hide();
        }else{
            $('.hide11').show();
            $('.hide10').hide();
            $('.hide12').hide();
        }
    })

    $('.form_yzm input').focus(function(){
        $('.hide13').show();
        $('.hide14').hide();
        $('.hide15').hide();
    })

    $('.form_yzm input').blur(function(){
        var reg4=new RegExp(6856);
        var uyzm=$('.form_yzm input').val();
        var res=reg4.test(uyzm);
        if(uyzm==''){
            $('.hide13').show();
            $('.hide14').hide();
            $('.hide15').hide();
            return;
        }
        if(res==false){
            $('.hide15').show();
            $('.hide13').hide();
            $('.hide14').hide();
        }else{
            $('.hide14').show();
            $('.hide13').hide();
            $('.hide15').hide();
        }
    })

    $('.form_but').click(function(){
        var uname=$('.form_yhm input').val();
        var upwd1=$('.form_mm input').val();
        var upwd2=$('.form_qrmm input').val();
        var uphone=$('.form_phoneinput').val();
        var uyzm=$('.form_yzm input').val();

        if(uname=='' || upwd1=='' || upwd2=='' || uphone=='' || uyzm==''){
            alert('您有未填写项，请您填写后再提交');
        }else{
            var res=confirm('您真的要提交数据吗？');
            if(res==true){
                alert('数据已提交');
            }else{
                return false;
            }
        }


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