// 원페이지 스크롤 페이지

var wheelDelta=0;   //휠 이벤트 발생시 반환값 확인 변수
var browser=0;      //파이어폭스 브라우자 판별 변수
//browser[event-mousewheel] : 크롬/익스/사파리/오페라 등
//browser[event-DOMMouseScroll] : 파이어폭스
// 파이어폭스 브라우저 판별 => window.navator.userAgent
// $('.section').each(function(index){
//     $(this).on('mousewheel DOMMouseScroll',function(event){
//         event.preventDefault();
//         browser=window.navigator.userAgent.toLowerCase().indexOf('firefox');
//         if (browser>=0) {
//             wheelDelta=-event.detail*40;
//         }else{
//             wheelDelta=event.originalEvent.wheelDelta;
//         }
//         // console.log(wheelDelta);
//         if (wheelDelta<0) {//-120 or -150 값을 가지면 다음섹션으로 이동
//             if (index<$('.section').length -1) {
//                 $('html, body').stop().animate({scrollTop:$(this).next().offset().top},500);
//             }
//         }else{
//             if (index>0) {
//                 $('html, body').stop().animate({scrollTop:$(this).prev().offset().top},500);
//             }
//         }
//     });
// });
// 상단메뉴고정
var header=$('.header');
// let headerOffsetTop=$('#section2').offset().top;
$(window).scroll(function(){
    if ($(this).scrollTop()>=30) {
        header.css('top','0px')
    }else{
        header.css('top','-105px')
    }
});
// 첫번째페이지 버튼 누르면 바로 밑 페이지 이동
$('.down').click(function(){
    $('html,body').animate({ scrollTop : $('#section2').offset().top-0},800);
});

// $('.nav-icon').click(function(){
//     $('html,body').animate({ scrollTop : $('#section1').offset().top-0},800);
// });

// 상단메뉴 클릭시 해당 페이지 애니메이션, 스크롤시 해당 페이지 메뉴 클래스 on
var menu = $('.nav-list ul li');
var contents = $('main>section');

menu.click(function(event){
    event.preventDefault();
    var tg = $(this);
    var i = tg.index();
    var section = contents.eq(i);
    var tt = section.offset().top;
    $('html, body').stop().animate({scrollTop:tt});
});
$(window).scroll(function(){
    var sct = $(window).scrollTop();
    contents.each(function(){
        var tg = $(this);
        var i = tg.index();
        if(tg.offset().top <= sct){
            menu.removeClass('on');
            menu.eq(i).addClass('on');
        }
    });
});


var text = document.getElementById("text");
var typewriter = new Typewriter(text, {
    loop: true,
    autoStart:true
});
typewriter.typeString('어서오세요, 안일환 포트폴리오 입니다.')
    .pauseFor(500)
    .deleteAll()
    .typeString('방문해주셔서 감사합니다.')
    .pauseFor(500)
    .deleteAll()
    .start();