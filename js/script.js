// 익스플로러 접속시 엣지로 변환
function noIE(msg){
    if(navigator.userAgent.indexOf('Trident') > 0){
        location.href = "microsoft-edge:" + location.href;
        alert(msg)
        setTimeout(close);
    }
}
noIE('인터넷 익스플로러에서는 지원을 하지않습니다. 확인해주세요.');
// 원페이지 스크롤 페이지

var wheelDelta=0;   //휠 이벤트 발생시 반환값 확인 변수
var browser=0;      //파이어폭스 브라우자 판별 변수
//browser[event-mousewheel] : 크롬/익스/사파리/오페라 등
//browser[event-DOMMouseScroll] : 파이어폭스
// 파이어폭스 브라우저 판별 => window.navator.userAgent
$('.section').each(function(index){
    $(this).on('mousewheel DOMMouseScroll',function(event){
        event.preventDefault();
        browser=window.navigator.userAgent.toLowerCase().indexOf('firefox');
        if (browser>=0) {
            wheelDelta=-event.detail*40;
        }else{
            wheelDelta=event.originalEvent.wheelDelta;
        }
        // console.log(wheelDelta);
        if (wheelDelta<0) {//-120 or -150 값을 가지면 다음섹션으로 이동
            if (index<$('.section').length -1) {
                $('html, body').stop().animate({scrollTop:$(this).next().offset().top},500);
            }
        }else{
            if (index>0) {
                $('html, body').stop().animate({scrollTop:$(this).prev().offset().top},500);
            }
        }
    });
});
// 상단메뉴고정
var header=$('.header');
let headerOffsetTop=$('#section2').offset().top;
$(window).scroll(function(){
    if ($(this).scrollTop()>=30) {
        header.css('top','0px')
    }else{
        header.css('top','-105px')
    }
});
// 첫번째페이지 버튼 누르면 바로 밑 페이지 이동
$('.down').click(function(){
    $('html,body').animate({ scrollTop : $('#section2').offset().top-0},500);
});

$('.nav-icon').click(function(){
    $('html,body').animate({ scrollTop : $('#section1').offset().top-0},300);
});

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
//------------------------------------------------------- 

// 타이핑효과
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
// 포트폴리오 스와이퍼
    var swiper = new Swiper(".mySwiper", {
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 40,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".right",
          prevEl: ".left",
        }
      });
// 연락처 복사기능
function fnCopyToClipboard(str) {
    // str이 복사하고자 하는 문자열
    var tempElement = document.createElement("textarea");
    document.body.appendChild(tempElement);
    tempElement.value = str;
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
  }
$('.kakao img').click(function() {
    fnCopyToClipboard('1hwan');
    alert('클립보드로 복사되었습니다. 카카오톡 실행 후 ID검색창에 붙여넣기 해주세요.');
});
$('.email img').click(function() {
    fnCopyToClipboard('dlfghks0922@naver.com');
    alert('클립보드로 복사되었습니다.');
});
$('.phone img').click(function() {
    fnCopyToClipboard('01094941376');
    alert('클립보드로 복사되었습니다.');
});
$('.git-hub img').click(function() {
    fnCopyToClipboard('https://github.com/anilhwan');
    alert('클립보드로 복사되었습니다.');
});
// 카카오톡 이미지, 텍스트 바꾸기 해상도768이상일때 실행
if (window.matchMedia('(min-width: 768px)').matches){
    $('.kakao').hover(function(){
        $(this).find('img').attr({src:'./img/kakaoprofile.png',alt:'카카오톡프로필'});
        $(this).find('span').html('QR코드스캔 또는 이미지를 클릭해주세요 <button class="pop-btn">QR코드크게보기</button>');
        modalPop();
    },function(){
        $(this).find('img').attr({src:'./img/kakaotalk.png',alt:'카카오톡'});
        $(this).find('span').text('ID :1hwan');
    });
    function modalPop(){
        $(".pop-btn").click(function(){
            $('.pop').fadeIn();
            $('body').addClass('scroll');
        });
        $(".pop-close-btn").click(function(){
            $('.pop').fadeOut();
            $('body').removeClass('scroll');
        });
    }
}

// qr코드창 외부영역 클릭시 나가기기능
$(document).mouseup(function (e){
    var container = $('.pop');
    if(container.has(e.target).length === 0){
      container.fadeOut();
      $('body').removeClass('scroll');
    }
  });