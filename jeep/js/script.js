// document.addEventListener("DOMContentLoaded", function () {
//     // .menuBtn 요소를 가져오기
//     var menuBtn = document.querySelector(".menuBtn");
//     // #header 요소를 가져오기
//     var header = document.querySelector("#header");
//     // .nav 요소를 가져오기
//     var nav = document.querySelector(".nav");
//    // 네비게이션 펼쳐진 상태인지 여부를 저장하는 변수
//    var isNavExpanded = false;

//     //  .menuBtn 클릭 시 이벤트 리스너 추가
//     menuBtn.addEventListener("click", function () {
//         menuBtn.classList.toggle("active");
//         nav.classList.toggle("active");
//         isNavExpanded = !isNavExpanded;

//         if (isNavExpanded) {
//             header.classList.add("bgBlack");
//         }
//      });

//          // 스크롤 이벤트 리스너 추가
//     window.addEventListener("scroll", function () {
//         // 네비게이션이 펼쳐진 상태가 아니고 스크롤 탑이 0인 경우 bgBlack 클래스 제거
//         if (!isNavExpanded && window.scrollY === 0) {
//             header.classList.remove("bgBlack");
//         } else {
//             // 네비게이션이 펼쳐진 상태라면 항상 bgBlack 클래스 추가
//             if (isNavExpanded) {
//                 header.classList.add("bgBlack");
//             }
//         }
//     });
    
//     // 스크롤 이벤트 리스너 추가
//     window.addEventListener("scroll", function () {
//         // sub.html인 경우 항상 bgBlack 클래스 유지
//         if (window.location.href.includes("sub.html")) {
//             header.classList.add("bgBlack");
//         } else {
//             // index.html인 경우 스크롤 탑이 0일 때만 bgBlack 클래스 제거/추가
//             if (window.scrollY === 0) {
//                 header.classList.remove("bgBlack");
//             } else {
//                 header.classList.add("bgBlack");
//             }
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    var menuBtn = document.querySelector(".menuBtn");
    var header = document.querySelector("#header");
    var nav = document.querySelector("#nav");
    var isNavOpen = false; // 네비게이션이 열려 있는지 여부를 추적하는 변수

    menuBtn.addEventListener("click", function () {
        menuBtn.classList.toggle("active");
        nav.classList.toggle("active");
        isNavOpen = !isNavOpen; // 메뉴 버튼을 클릭할 때마다 상태 변경
        handleHeaderBackground(); // 헤더 배경 처리 함수 호출
    });

    window.addEventListener("scroll", function () {
        if (!isNavOpen) { // 네비게이션이 열려있지 않은 경우에만 작동
            handleHeaderBackground(); // 헤더 배경 처리 함수 호출
        }
    });

    window.addEventListener("load", function () {
        handleHeaderBackground(); // 초기 로드 상태에서 헤더 배경 처리 함수 호출
    });

    function handleHeaderBackground() {
        if (window.scrollY === 0 && !isNavOpen) {
            header.classList.remove("bgBlack");
        } else {
            header.classList.add("bgBlack");
        }
    }

    //네비게이션 열린 상태에서 스크롤 시 네비게이션 닫기
    window.addEventListener("scroll", function () {
        if (isNavOpen) {
            menuBtn.classList.remove("active");
            nav.classList.remove("active");
            isNavOpen = false;
        }
    });
});

// 메인 슬라이드
$(window).ready(function() {
    $("#slide > div:gt(0)").hide();

setInterval(function() {
  $('#slide > div:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slide');
},  5000);
});


// 웨이브 컨텐츠 애니메이션
window.addEventListener('scroll', function () {
    try {
    // left-content와 right-content 요소를 가져옵니다.
    const leftContent = document.querySelector('#left-content');
    const rightContent = document.querySelector('#wave-title');
    const waveTxtSpan = document.querySelector('#wave-title span');
  
    // 스크롤 위치를 확인합니다.
    const scrollY = window.scrollY;
  
    // 요소의 현재 위치를 가져옵니다.
    const leftContentPosition = leftContent.getBoundingClientRect().top;
    const rightContentPosition = rightContent.getBoundingClientRect().top;

    // 시작 위치를 화면에 진입한 시점으로 설정합니다.
    const viewportHeight = window.innerHeight;
    const startOffset = viewportHeight * 0.5; // 요소가 화면 높이의 50%에 진입할 때 시작
  
    // 요소의 초기 위치와 현재 위치의 차이를 계산합니다.
    const distanceFromStartLeft = leftContentPosition - startOffset;
    const distanceFromStartRight = rightContentPosition - startOffset;
  
    // 요소의 초기 위치에서 스크롤 위치에 따라 움직일 거리를 계산합니다.
    const movementDistanceLeft = Math.max(0, distanceFromStartLeft);
    const movementDistanceRight = Math.max(0, distanceFromStartRight);
  
    // 스크롤 위치에 따라 요소의 위치를 업데이트합니다.
    const leftContentTargetPosition = -100 * (movementDistanceLeft / startOffset);
    const rightContentTargetPosition = 100 * (movementDistanceRight / startOffset);
  
    // 위치를 적용합니다.
    leftContent.style.transform = `translateX(${leftContentTargetPosition}%)`;
    rightContent.style.transform = `translateX(${rightContentTargetPosition}%)`;

    // if (movementDistanceLeft === 0 && movementDistanceRight === 0) {
    //     waveTxtSpan.style.color = '#ffba00'; // 노란색으로 변경하거나 다른 원하는 색상으로 설정하세요.
    // } else {
    //     waveTxtSpan.style.color = ''; // 다시 초기 색상으로 되돌리세요.
    // }
     } catch (error) {
    console.log('오류 발생:', error);
}
});


// 자동차 슬라이더
// $(document).ready(function () {
//     let currentSlide = 0;
//     const totalSlides = $('.subSlider > li').length;

//     function showSlide(index) {
//         $('.subSlider > li').each(function (i) {
//             if (i === index) {
//                 $(this).css('display', 'flex');
//             } else {
//                 $(this).css('display', 'none');
//             }
//         });
//     }

//     $('.next').on('click', function () {
//         currentSlide = (currentSlide + 1) % totalSlides;
//         showSlide(currentSlide);
//     });

//     $('.prev').on('click', function () {
//         currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//         showSlide(currentSlide);
//     });

//     showSlide(currentSlide);

window.onload = function() {
    const kindWrap = document.querySelector('#subSlide-wraper');
    const sslider = kindWrap.querySelector('ul');
    const slideLis = sslider.querySelectorAll('li');
    const moveButton = kindWrap.querySelector('#slide-button');

    /* 클론 */
    const clone1 = slideLis[0].cloneNode(true);
    const cloneLast = slideLis[slideLis.length - 1].cloneNode(true);
    sslider.insertBefore(cloneLast, slideLis[0]);
    sslider.appendChild(clone1);

    /* 주요 변수 초기화 */  
    let currentIdx = 0;
    let translate = 0;
    const speedTime = 500;

    /* 셋업 */
    const sliderCloneLis = sslider.querySelectorAll('li');
    const slideCount = sliderCloneLis.length; // 슬라이드 개수를 가져옵니다.

    const liWidthPercentage = 100 / slideCount; // 각 슬라이드의 너비 백분율
    const sliderWidthPercentage = slideCount * 100; // 전체 슬라이드 너비

    sslider.style.width = `${sliderWidthPercentage}%`;
    currentIdx = 1;
    translate = -liWidthPercentage;
    sslider.style.transform = `translateX(${translate}%)`;

    /* 리스너 설치하기 */
    moveButton.addEventListener('click', moveSlide);

    /* 슬라이드 실행 */
    function move(D) {
        currentIdx += (-1 * D);
        translate += liWidthPercentage * D; // 백분율로 이동
        sslider.style.transform = `translateX(${translate}%)`;
        sslider.style.transition = `all ${speedTime}ms ease`;
    }

    /* 클릭 버튼 */
    function moveSlide(event) {
        event.preventDefault();
        
        if (event.target.className === 'next') {
            move(-1);
            if (currentIdx === slideCount - 1) {
                setTimeout(() => {
                    sslider.style.transition = 'none';
                    currentIdx = 1;
                    translate = -liWidthPercentage;
                    sslider.style.transform = `translateX(${translate}%)`;
                }, speedTime);
            }
        } else {
            move(1);
            if (currentIdx === 0) {
                setTimeout(() => {
                    sslider.style.transition = 'none';
                    currentIdx = slideCount - 2;
                    translate = -(liWidthPercentage * currentIdx);
                    sslider.style.transform = `translateX(${translate}%)`;
                }, speedTime);
            }
        }
    }
}

//  스크롤 애니메이션 
// document.addEventListener('DOMContentLoaded', function() {
//     // 코드를 이 위치에 넣어 문서가 로드된 후 실행되도록 합니다.
//     window.addEventListener('scroll', function () {
//         handleScrollAnimation('.an-content');
//         handleScrollAnimation('.ad-content');
//         handleScrollAnimation('.tr-content');
//     });

//     function handleScrollAnimation(selector) {
//         const element = document.querySelector(selector);
//         const elementPosition = element.getBoundingClientRect().top;
//         const viewportHeight = window.innerHeight;
    
//         // 요소가 진입할 위치를 계산합니다.
//         const entryPoint = viewportHeight * 0.8;
    
//         // 스크롤 위치가 요소의 진입 지점에 도달하면 .animate 클래스를 추가하여 요소를 나타나게 합니다.
//         if (elementPosition - entryPoint <= 0) {
//             element.classList.add('animate');
//         } else {
//             element.classList.remove('animate');
//         }
//     }
// });



// 비디오 스크립트

document.addEventListener('DOMContentLoaded', function() {
    try {
        const video = document.getElementById('videoPlayer');
        const playButton = document.getElementById('playButton');
        // const videoTxt = document.querySelector('.video-txt');
        
        if (video && playButton) {
            function togglePlayPause() {
                if (video.paused) {
                    video.play();
                    playButton.style.display = 'none';
                    videoTxt.style.display = 'none';
                } else {
                    video.pause();
                    playButton.style.display = 'block';
                    videoTxt.style.display = 'block';
                }
            }
            
            playButton.addEventListener('click', togglePlayPause);
            video.addEventListener('click', togglePlayPause);
        }
    } catch (error) {
        console.log('오류 발생:', error);
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     const video = document.getElementById('videoPlayer');
//     const playButton = document.getElementById('playButton');
//     const videoTxt = document.querySelector('.video-txt');
  
//     function togglePlayPause() {
//       if (video.paused) {
//         video.play();
//         playButton.style.display = 'none';
//         videoTxt.style.display = 'none';
//       } else {
//         video.pause();
//         playButton.style.display = 'block';
//         videoTxt.style.display = 'block';
//       }
//     }
//     playButton.addEventListener('click', togglePlayPause);
//     video.addEventListener('click', togglePlayPause);

// });

// 온오프

document.addEventListener('DOMContentLoaded', function() {
    try {
        const openButtonBox2 = document.querySelector('.box2 button');
        const openButtonBox3 = document.querySelector('.box3 button');
        const imageBox1 = document.querySelector('.box1 img');
        const imageBox4 = document.querySelector('.box4 img');
        let isOpenBox2 = false; 
        let isOpenBox3 = false; 

        if (openButtonBox2 && openButtonBox3 && imageBox1 && imageBox4) {
            function toggleImageAndButtonTextBox2() {
                if (isOpenBox2) {
                    imageBox1.src = './images/ex-close.jpg'; 
                    openButtonBox2.textContent = 'OPEN';
                  } else {
                    imageBox1.src = './images/ex-open.jpg';
                    openButtonBox2.textContent = 'CLOSE';
                  }
                  isOpenBox2 = !isOpenBox2;
            }

            function toggleImageAndButtonTextBox3() {
                if (isOpenBox3) {
                    imageBox4.src = './images/ex-on.jpg';
                    openButtonBox3.textContent = 'OFF'; 
                  } else {
                    imageBox4.src = './images/ex-off.jpg';
                    openButtonBox3.textContent = 'ON';
                  }
                  isOpenBox3 = !isOpenBox3;
            }

            openButtonBox2.addEventListener('click', toggleImageAndButtonTextBox2);

            openButtonBox3.addEventListener('click', toggleImageAndButtonTextBox3);
        } else {
            console.log('요소를 찾을 수 없습니다.');
        }
    } catch (error) {
        console.log('오류 발생:', error);
    }
});


// 숫자 카운팅
function countNumbers(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const txt2Values = entry.target.querySelectorAll('.counting-text');
  
        txt2Values.forEach((pElement) => {
          const targetNumber = parseInt(pElement.textContent);
          let currentNumber = 0;
  
          const timer = setInterval(() => {
            pElement.textContent = currentNumber;
            currentNumber += Math.ceil(targetNumber / 50);
  
            if (currentNumber >= targetNumber) {
              pElement.textContent = targetNumber;
              clearInterval(timer);
            }
          }, 30);
        });
  
        observer.unobserve(entry.target);
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const section1Txt = document.getElementById('section1__txt');
  
    if (section1Txt) {
      const observer = new IntersectionObserver(countNumbers, { threshold: 0.5 });
      observer.observe(section1Txt);
    }
  });
  
  

  // 갤러리 영역 모달

  function openModal(imgElement) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImg");
    var body = document.getElementsByTagName("body")[0];
  
    modal.style.display = "block";
    modalImg.src = imgElement.src;
    body.style.overflow = "hidden"; // 스크롤 막기
  }
  
  function closeModal() {
    var modal = document.getElementById("modal");
    var body = document.getElementsByTagName("body")[0];
  
    modal.style.display = "none";
    body.style.overflow = "auto"; // 스크롤 허용
  }
  