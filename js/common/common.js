/**
 * Created by Administrator on 2017/2/26.
 */
define(['jquery'],function($){

    //9这里是给课程管理添加下拉
    $('.navs a').on('click',function(){
        $(this).next().slideToggle();
    });

    // 退出功能
    $('#logout').on('click',function(){
        $.post('/v6/logout',function(data){
            if(data.code ==200){
                location.href = '/html/home/login.html';
            }
        });
    });


    // 获取本地cookie用户信息，同时做容错处理
    var userInfo = null;
    try{
        userInfo = JSON.parse($.cookie('userInfo'))
    }catch(e){
        userInfo ={};
    }


    // 然后展示到左侧导航
    $('.aside .profile h4').html(userInfo.tc_name? userInfo.tc_name: 'dagenimeiminga');
    $('.aside .profile img').attr('src', userInfo.tc_avatar? userInfo.tc_avatar: '/img/default.png');
})