//01.스프리팅호출
$(function() {
    Splitting();
});

//02. header 영역 스크롤 방향 이벤트
$(function() {
    var prevScrollTop = 0;
    document.addEventListener("scroll", function() {
        var nowScrollTop = $(window).scrollTop();

        if(nowScrollTop > prevScrollTop) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
        prevScrollTop = nowScrollTop;
    });

    // gnb 메뉴 클릭 시 이동
    $('.gnb a').on('click', function (e) {
        e.preventDefault(); // a태그 기본 이동 막기

        let target = $(this).attr('href'); // a태그의 href 값 가져오기 (예: #about)
        
        // #none 같은 경우 제외
        if (target !== "#none" && $(target).length) {
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 600); // 600ms 동안 부드럽게 이동
        }
    });
});


//03.scrolla.js
$(function() {
    $('.animate').scrolla({
        mobile: true,
        once: false
    });
});

$(function(){
  const $loop = $('.textLoop ul');
  $loop.append($loop.html()); // 한 세트 복제
});


$(function() {
    gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: '50% 100%',
            toggleClass: { targets: '.imgBox', className: 'active' },
            scrub: 1,
            //markers: true
        }
    });
});


// 03.skills -- 스킬리스트 애니메이션
$(function() {
    gsap.timeline({
        scrollTrigger: {
            trigger: '.skill',
            start: 'top 80%', // 화면 80% 지점에서 시작
            end: 'bottom 50%',
            scrub: 1,
            //markers: true
        }
    })
    .from(".skillList li", {
        y: 50,           // 아래에서 올라오게
        opacity: 0,      // 투명 → 불투명
        scale: 0.8,      // 작게 시작
        rotation: -5,    // 살짝 기울임
        duration: 0.6,
        stagger: 0.15,   // 순차 등장
        ease: "power3.out"
    })
});


// 04.strengths -- 강점 슬라이드
document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.strengths-swiper', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: false,
    grabCursor: true,
    speed: 500,
    freeMode: false,

    // 기본(데스크톱)
    slidesOffsetBefore: 300,
    slidesOffsetAfter: 300,

    // 반응형 옵션
    breakpoints: {
      0: { // 0px 이상
        slidesOffsetBefore: 60,
        slidesOffsetAfter: 60,
      },
      501: { // 501px 이상
        slidesOffsetBefore: 300,
        slidesOffsetAfter: 300,
      }
    }
  });
});


// 04.work
$(function() {
    gsap.registerPlugin(ScrollTrigger);

    const works = gsap.utils.toArray('.work');
    
    gsap.utils.toArray('.work').forEach((work, i)=>{
        ScrollTrigger.create({
            trigger:work,
            start:'top top',
            pin:true,
             pinSpacing: false, // 마지막만 true
            // markers:true,
        })
    })
})


// .con01 gsap 애니메이션
$(function() {
    gsap.timeline({
        scrollTrigger : {
            trigger:'.con01',
            start: '0% 80%',
            end:'100% 100%',
            scrub:1,
            //markers:true,
        }
    })
    .to('.strengths, .con01', {backgroundColor:'#fff', color:'#000', ease:'none', duration:5}, 0)
    .fromTo('.videoWrap video', {'clip-path': 'inset(60% 60% 60% 60% round 30%)'}, {'clip-path': 'inset(0% 0% 0% 0% round 0%)',
    ease:'none', duration:10}, 0)


    // .con02 gsap 애니메이션
    // title 글자애니메이션
    gsap.timeline({
        scrollTrigger : {
            trigger : '.con02',
            start : '0% 100%',
            end : '0% 20%',
            scrub:1,
            //markers:true
        }
    })
    .fromTo('.con02 .title .a', {x:'-100%'}, {x:'0%', ease:'none', duration:5},0)
    .fromTo('.con02 .title .b', {x:'100%'}, {x:'0%', ease:'none', duration:5},0)

    gsap.timeline({
    scrollTrigger : {
        trigger : '.workList',
        start : 'top bottom',     // 예: 요소 top이 뷰포트 바닥에 닿을 때 시작
        end   : 'top center',     // 여유 있는 종료 구간
        scrub : 1,
        // markers:true
    }
    })
    .to('.wrap', { backgroundColor : '#000', ease:'none' }, 0)
    .to('.con02', { color:'#fff', ease:'none' }, 0)
    .fromTo('.workList',
    { y: '' },
    { y: '10vh', position:'relative', zIndex: 10, ease:'none', immediateRender:false },
    0
    );

    // 제목 고정은 애니메이션으로 position:fixed를 주지 말고 pin으로 처리
    ScrollTrigger.create({
    trigger: '.con02 .title',
    start: 'top top',
    endTrigger: '.workList',
    end: 'bottom top',
    pin: true,
    pinSpacing: false
    });

    //worklist가 끝날때 글자가 화면 밖으로
    gsap.timeline({
        scrollTrigger : {
            trigger : '.workList',
            start : 'bottom bottom', // 중간쯤 올때
            end : 'bottom top', // 뷰포트가 끝날때 끝날 수 잇도록
            scrub : 1,
            //markers:true
        }
    })
    .fromTo('.con02 .title .a', {x:'0%'}, {x:'-100%', ease:'none', duration:5},0)
    .fromTo('.con02 .title .b', {x:'0%'}, {x:'100%', ease:'none', duration:5},0)
});


//menuOpen
$(function() {
    $('.menuOpen').on('click', function() {
        $('.gnbWrap').toggleClass('on');
        $(this).toggleClass('on');
        $('body').toggleClass('on'); // 스크롤 방지하기 위해
    });
});