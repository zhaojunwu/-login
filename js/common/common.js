/**
 * Created by Administrator on 2017/2/26.
 */
define(['jquery'],function($){

    //9这里是给课程管理添加下拉
    $('.navs a').on('click',function(){
        $(this).next().slideToggle();
    });

    $.ajax({
        url:'/v6/login',
        type:'post',
        data:{
            tc_name:123456,
            tc_pass:123456
        },
        success:function(){
            console.log('成了');
        },
        error:function(){
            console.log('败了');
        }
    })
})