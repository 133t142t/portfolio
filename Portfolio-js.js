$(function(){
  $(window).scroll(function(){
   $('.fadein').each(function(){
       var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
         if (scroll > elemPos - windowHeight + windowHeight/2){
             $(this).addClass('scrollin');
           }
       });
   });
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^="#"]').click(function(){
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = 45;
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    var position = target.offset().top - adjust;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

$(window).scroll(function(){
  var obj_t_pos = $('.tech-parts1').offset().top;
  var scr_count = $(window).scrollTop();
  var windowHeight = $(window).height();
if(scr_count > obj_t_pos - 100){
  $('.bar-outer-first,.bar-outer-second,.bar-outer-third,.bar-outer-fourth,.bar-outer-zero,.bar-inner').addClass('barin');
}
})

});
