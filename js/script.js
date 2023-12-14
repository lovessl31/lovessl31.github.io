$(function() {
  // 메뉴 버튼을 클릭할 때
  $('button').on('click', function(event) {
      event.preventDefault();

      $(this).toggleClass('active');
      $('#overlay').toggleClass('visible');
  });

  // 메뉴 항목(li)을 클릭할 때
  $('#nav a').on('click', function() {
      // 오버레이를 숨기고 모바일 메뉴 버튼의 활성 상태를 제거
      $('#overlay').removeClass('visible');
      $('button').removeClass('active');
  });
});


//스크롤 풀페이지 & 타이핑

var mHtml = document.querySelector("html");
var typingIdx = 0;
var typingTxt = "프론트엔드 개발자";
var tyInt;
var isScrolling = false;
var currentPage = 1;
var isTyping = false; // 타이핑 중인지 여부 나타내는 함수 추가

function handleScroll(e) {
    e.preventDefault();

    if (isScrolling) return;
    isScrolling = true;

    setTimeout(function () {
        isScrolling = false;
    }, 500);

    if (e.deltaY > 0) {
        if (page == 4) return;
        page++;
    } else if (e.deltaY < 0) {
        if (page == 1) return;
        page--;
    }

    var typingStartPage = 2;

    if (page !== currentPage) {
        stopTypingAnimation();
        if (page >= typingStartPage) {
            setTimeout(function () {
                startTypingAnimation();
            }, 1000);
        }
        currentPage = page;

        // 현재 페이지 정보를 URL에 추가
        updateURL();
    }

    if (isTyping) {
        return; // 타이핑 중에는 다시 실행하지 않음
    }

    var posTop = (page - 1) * window.innerHeight;
    mHtml.scrollTo({
        top: posTop,
        behavior: "smooth"
    });
}

function updateURL() {
    // 현재 페이지 정보를 URL 매개변수로 추가
    var url = window.location.href.split('#')[0]; // 현재 URL에서 # 이전 부분만 가져옴
    var newUrl = url + '#section' + page;
    window.history.replaceState({ path: newUrl }, '', newUrl);
}

function setPage() {
    var hash = window.location.hash;

    // URL 매개변수에서 현재 페이지 정보를 가져와 설정
    if (hash) {
        page = parseInt(hash.replace('#section', '')) || 1;
    } else {
        page = 1;
    }

    var posTop = (page - 1) * window.innerHeight;
    mHtml.scrollTo({
        top: posTop,
        behavior: "smooth"
    });

    if (page >= 2) {
        setTimeout(function () {
            startTypingAnimation();
        }, 1000);
    } else {
        stopTypingAnimation();
    }
}

function handleNavClick(targetPage) {
    page = targetPage;

    var posTop = (page - 1) * window.innerHeight;
    mHtml.scrollTo({
        top: posTop,
        behavior: "smooth"
    });

    if (page >= 2) {
        setTimeout(function () {
            startTypingAnimation();
        }, 1000);
    } else {
        stopTypingAnimation();
    }

    // 현재 페이지 정보를 URL 매개변수로 추가
    updateURL();
}

function handleScreenSizeChange() {
    var screenWidth = window.innerWidth;

    if (screenWidth >= 1270) {
        window.addEventListener("wheel", handleScroll, { passive: false });

        document.addEventListener("DOMContentLoaded", function () {
            setPage();

            var navLinks = document.querySelectorAll('nav a');

            navLinks.forEach(function (link, index) {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    handleNavClick(index + 1);
                });
            });
        });

        // 화면 너비가 1440 이상인 경우, html 요소에 오버플로우를 숨김
        document.documentElement.style.overflow = 'hidden';
    } else {
        window.removeEventListener("wheel", handleScroll); // 스크롤 이벤트 리스너 제거
        document.documentElement.style.overflow = 'visible';
    }
}

// 화면 크기 변경을 감지하는 이벤트 리스너 추가
window.addEventListener('resize', function () {
    handleScreenSizeChange();
    handleScroll(); // 화면 크기 변경 시 스크롤 이벤트 처리
});

handleScreenSizeChange();


function startTypingAnimation() {

    if (isTyping) {
        return; // 이미 타이핑 중이면 다시 실행하지 않음
    }

    isTyping = true; // 타이핑 중으로 설정

    clearInterval(tyInt);
    typingIdx = 0;
    var typingContainer = document.querySelector(".typing");
    typingContainer.textContent = "";

    tyInt = setInterval(typing, 100);

    function typing() {
        if (typingIdx < typingTxt.length) {
            typingContainer.textContent += typingTxt[typingIdx];
            typingIdx++;
        } else {
            clearInterval(tyInt);
        }
    }
}

function stopTypingAnimation() {
    clearInterval(tyInt);
    typingIdx = 0;
    var typingContainer = document.querySelector(".typing");
    typingContainer.textContent = "";
    isTyping = false; // 타이핑 종료 시 타이핑 중 해제
}


// 슬라이드

document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 1300) {
    var slides = document.querySelector('.slides');
    var slide = document.querySelectorAll('.slides li');
    var currentIdx = 0;
    var prevBtn = document.querySelector('.prev');
    var slideCount = slide.length;
    var slideWidth = 400;
    var slideMargin = 30;
    var nextBtn = document.querySelector('.next');

    slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

    function moveSlide(num) {
      slides.style.left = -num * (slideWidth + slideMargin) + 'px';
      currentIdx = num;
    }

    prevBtn.addEventListener('click', function() {
      if (currentIdx > 0) {
        moveSlide(currentIdx - 1);
      }
    });

    nextBtn.addEventListener('click', function() {
      if (currentIdx < slideCount - 1) {
        moveSlide(currentIdx + 1);
      }
    });
}
});

document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 1300) {
    var slides = document.querySelector('.slides');
    var slide = document.querySelectorAll('.slides li');
    var currentIdx = 0;
    var prevBtn = document.querySelector('.prev');
    var slideCount = slide.length;
    var slideWidth = 300;
    var slideMargin = 10;
    var nextBtn = document.querySelector('.next');

    slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

    function moveSlide(num) {
      slides.style.left = -num * (slideWidth + slideMargin) + 'px';
      currentIdx = num;
    }

    prevBtn.addEventListener('click', function() {
      if (currentIdx > 0) {
        moveSlide(currentIdx - 1);
      }
    });

    nextBtn.addEventListener('click', function() {
      if (currentIdx < slideCount - 1) {
        moveSlide(currentIdx + 1);
      }
    });
}
});


// 팝업

  document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slides li');
    const popup = document.getElementById('imagePopup');
    const popupImage = document.getElementById('popupImage');
    const closePopup = document.getElementById('closeBtn');
  
    slides.forEach((slide, index) => {
      slide.addEventListener('click', function () {
        const imageUrl = slide.querySelector('img').src;
        popupImage.src = imageUrl;
        popup.style.display = 'block';

      });
    });
  
    closePopup.addEventListener('click', function () {
      popup.style.display = 'none';
    });

  });
  
  
// 반응형 스크립트


// $(window).ready(function() {
//     var typingBool = false;
//     var typingIdx = 0;
//     var typingTxt = $(".typing-txt2").text(); // 타이핑될 텍스트를 가져온다
//     typingTxt = typingTxt.split(""); // 한글자씩 자른다.
//     if (typingBool == false) {
//       // 타이핑이 진행되지 않았다면
//       typingBool = true;
  
//       var tyInt = setInterval(typing, 100); // 반복동작
//     }
  
//     function typing() {
//       if (typingIdx < typingTxt.length) {
//         // 타이핑될 텍스트 길이만큼 반복
//         $(".typing2").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
//         typingIdx++;
//       } else {
//         clearInterval(tyInt); //끝나면 반복종료
//       }
//     }
//   });


// Intersection Observer를 사용하여 요소가 화면에 나타날 때 타이핑 스크립트 실행
document.addEventListener("DOMContentLoaded", function () {
    var aboutElement = document.querySelector("#m-about-txt");
  
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // 요소가 화면의 50% 이상 보일 때 콜백 실행
    };
  
    var aboutObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                // 요소가 화면에 나타나면 타이핑 스크립트 실행
                var typingBool = false;
                var typingIdx = 0;
                var typingTxt = document.querySelector(".typing-txt2").textContent;
                var typingContainer = document.querySelector(".typing2");
                typingTxt = typingTxt.split("");
  
                if (!typingBool) {
                    typingBool = true;
                    var tyInt = setInterval(typing, 100);
                }
  
                function typing() {
                    if (typingIdx < typingTxt.length) {
                        typingContainer.append(typingTxt[typingIdx]);
                        typingIdx++;
                    } else {
                        clearInterval(tyInt);
                    }
                }
  
                observer.unobserve(entry.target); // 콜백 실행 후 옵저버 중지
            }
        });
    }, options);
  
    aboutObserver.observe(aboutElement); // 옵저버 시작
});
