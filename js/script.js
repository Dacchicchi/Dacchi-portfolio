// JavaScript Document
$(function(){
    //ヘッダーメニューのページ内移動
    $('header a').click(function(){
        var id=$(this).attr('href');
        var position=$(id).offset().top;
        
        $('html,body').animate({
            'scrollTop':position
        },500);
    });
    
    //iphoneメニューアイコン　フェードイン
    $('.menu-icon img').click(function(){
        $('.iphone-menu-wrap').fadeIn(1000).animate({
            marginTop:420,
            zIndex:-1
        },{queue:false,duration:500});
        $('.bars').hide();
        $('.close').show();
    });
    
    //iphoneクローズアイコン　フェードイアウト
    $('.close').click(function(){
        $('.iphone-menu-wrap').fadeOut(300).animate({
            marginTop:-420,
            zIndex:-1
        },{queue:false,duration:700});
        $('.close').hide();
        $('.bars').show();
    });
    
    
    //ページトップ　フェードイン
    $(window).scroll(function(){
        var sc=$(window).scrollTop();
        if(sc > 300){
           $('.pagetop').fadeIn(300);
           }else{
           $('.pagetop').fadeOut(300);
           }
    });
    
    //ページトップ　クリックしたらトップへ戻る
    $('.pagetop').click(function(){
        $("body,html").animate({
           'scrollTop':0
        },500,'swing');
    });
    
    
    //works スライド機能
    //works 先頭 or 末尾時に矢印を隠す。
     function toggleChangeBtn() {
    var slideIndex = $('.slide').index($('.active'));
    $('.change-btn').show();
    if (slideIndex == 0) {
      $('.works-left').hide();
    } else if (slideIndex == $(".slide").length-1) {
      $('.works-right').hide();
    }
  }
    
    
    
    
  //works 各作品名ボタンを押した際のスライド　（スライド切り替え）

      $('.works-btn').click(function() {
    var wind=$(window).width();
    var clickedIndex = $('.works-btn').index($(this));
          
        console.log(clickedIndex);  
          
    $('.active').removeClass('active');
          
    if(wind>=768){
    $('.slide').eq(clickedIndex).addClass('active');
          $('.slides ul').fadeOut(100).animate({
            marginLeft:-700 * clickedIndex
        },{queue:false,duration:300}).fadeIn(600);
    toggleChangeBtn(); 
    }else if(wind<=768){
        $('.slide').eq(clickedIndex).addClass('active');
          $('.slides ul').fadeOut(100).animate({
            marginLeft:-304 * clickedIndex
        },{queue:false,duration:300}).fadeIn(600);
    toggleChangeBtn(); 
    }
    });
    
    /*
   //works 各作品名ボタンを押した際のスライド （切り替え）
  $('.works-btn').click(function() {
      var clickedIndex = $('.works-btn').index($(this));
    $('.active').removeClass('active');
    $('.slide').eq(clickedIndex).addClass('active');
    toggleChangeBtn();
    });
    */
    
    

    //works 矢印ボタンを押した際のスライド スライド切り替え）
  $('.change-btn').click(function() {
      var wind=$(window).width();
      var $displaySlide = $('.active');
      var slideIndex=$('.slide').index($('.active'));
      
      console.log(slideIndex);
      
    $displaySlide.removeClass('active');
    if(wind>=768){
    if ($(this).hasClass('works-right')){
        $displaySlide.next().addClass('active');
        $('.slides ul').fadeOut(100).animate({
            marginLeft:-700 * (slideIndex + 1)
        },{queue:false,duration:300}).fadeIn(600);
    } else if ($(this).hasClass('works-left')){
        $displaySlide.prev().addClass('active');
        $('.slides ul').fadeOut(100).animate({
            marginLeft:(-700 * (slideIndex))+700
        },{queue:false,duration:300}).fadeIn(600);
    }
    toggleChangeBtn();
      
  }else if(wind<=768){
      
    if ($(this).hasClass('works-right')){
        $displaySlide.next().addClass('active');
        $('.slides ul').fadeOut(100).animate({
            marginLeft:-304 * (slideIndex + 1)
        },{queue:false,duration:300}).fadeIn(600);
    } else if ($(this).hasClass('works-left')){
        $displaySlide.prev().addClass('active');
        $('.slides ul').fadeOut(100).animate({
            marginLeft:(-304 * (slideIndex))+304
        },{queue:false,duration:300}).fadeIn(600);
    }
    toggleChangeBtn();
  }
  });
    
    //works下画面　アイコンホバーでアニメーション（PC）
    $('.item-left .item:nth-child(2) img').hover(function(){
        $('#item-DM').hide();
        $('#item-DM-gif').show();
    },function(){
        $('#item-DM-gif').hide();
        $('#item-DM').show();
    });
  
    
    
/*       //works 矢印ボタンを押した際のスライド (切り替え）
  $('.change-btn').click(function() {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if ($(this).hasClass('works-right')) {
      $displaySlide.next().addClass('active');
    } else if ($(this).hasClass('works-left')){
      $displaySlide.prev().addClass('active');
    }
    toggleChangeBtn();
  });
  */
  
    
    //表示されてる作品に対応したボタンの色変更。
    /*if($('.works-btn:first').hasClass('active')){
         $('.works-btn:first').css({
            'color':'#dc6000',
            'background-color':'rgba(220,90,0,0.1)'
         });
         }else if($('.works-btn:nth-child(2)').hasClass('active')){
             $('.works-btn:nth-child(2)').css({
            'color':'#3fa24c',
            'background-color':'rgba(63,162,76,0.1)'
             });
}
          else if('.works-btn:nth-child(3)'){
            $('.works-btn:nth-child(3)').css({
            'color':'#dc6000',
            'background-color':'rgba(220,90,0,0.1)'
            });
}
      else if('.works-btn:nth-child(4)'){
            $('.works-btn:nth-child(4)').css({
            'color':'#dc6000',
            'background-color':'rgba(220,90,0,0.1)'
            });
}
              else if('.works-btn:nth-child(5)'){
                      $('.works-btn:nth-child(5)').css({
            'color':'#dc6000',
            'background-color':'rgba(220,90,0,0.1)'
            });
}
      else if($('.works-btn:last').hasClass('active')){
    $($('.works-btn:last').hasClass('active')).css({
            'color':'#dc6000',
            'background-color':'rgba(220,90,0,0.1)'
            });
}*/

});