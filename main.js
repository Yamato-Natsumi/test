/**
 * 画面サイズが変更になった際にスライダーを変える
 */
 

$('.slider').slick({/*コピペしたやつ*/
  arrows: false,
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: '50px',
        slidesToShow: 1
      }
    }
  ]
});

  // function switchW(){
  //   var w = $(window).width();
    
  //   if(w <= 780){ 
  //     $('.slider').slick({
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       centerMode: true,
  //       centerPadding:"10%",
  //       focusOnSelect: true,
  //     });
      
  //   }else{
  //     $('.slider').slick({
  //       slidesToShow: 3,
  //       slidesToScroll: 1,
  //       centerMode: true,
  //       centerPadding:"10%",
  //       focusOnSelect: true,
  //     });
  //   }
  // }

  // window.onload = switchW;
  // window.onresize = switchW;
  
  

  $(".icon").click(function(){
    if($(".icon").hasClass('active')){
    $('.menu').removeClass('open')
    $(".close").hide();
    $('.icon').removeClass('active');
    }else{
      $(".menu").addClass('open');
      $(".close").show();
      $('.icon').addClass('active');
    }  
 });

  
  $(".close,.active").click(function(){
    $('.menu').removeClass('open');
    $(".close").hide();
    $('.icon').removeClass('active');
  });


function fadeAnime(){
  $('.fadeUpTrigger').each(function(){
    var point =$(this).offset().top-50;/*画面上端から要素の一番上までの位置よりちょい上（－50）*/
    var scroll = $(window).scrollTop();/*スクロール量を測る*/
    var windowHeight = $(window).height();/*表示している画面の高さ*/

    if(scroll >= point - windowHeight){
      /*スクロール量＞＝全体から見た要素の位置ちょい上ー表示している画面の高さ
      （スクロール量に画面の大きさを足して（現在画面下部の位置が出る）、それを要素の位置と比べてるのと一緒）*/
      $(this).addClass('fadeUp');
    }
  });
}

$(window).scroll(function(){
  fadeAnime();
});

$(window).on('load',function(){
  fadeAnime();
});


$('a[href*="#"]').click(function () {/*#で始まるhrefのリンクを持っている要素を取得する*/
	var elmHash = $(this).attr('href'); /*リンク取得 */
	var pos = $(elmHash).offset().top-70;/*リンク先の高さ-70を取得*/
	$('body,html').animate({scrollTop: pos}, 500);
	return false;
});