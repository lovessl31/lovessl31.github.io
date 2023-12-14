document.addEventListener("DOMContentLoaded", function () {
    // .menuBtn 요소를 가져오기
    var menuBtn = document.querySelector(".menuBtn");
    // #header 요소를 가져오기
    var header = document.querySelector("#header");
    // .nav 요소를 가져오기
    var nav = document.querySelector(".nav");

    // .menuBtn 클릭 시 이벤트 리스너 추가
    menuBtn.addEventListener("click", function () {
        menuBtn.classList.toggle("active");
        nav.classList.toggle("active");

        // 스크롤 위치가 0인 상태에서 .menuBtn을 클릭했을 때
        if (window.scrollY === 0) {
            header.classList.toggle("bgBlack");
        }
    });

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", function () {
        if (window.scrollY === 0) {
            header.classList.remove("bgBlack");
        } else {
            header.classList.add("bgBlack");
        }
    });

    // 초기 로드 상태에서는 스크롤 이벤트 리스너를 통해 클래스 토글
    window.addEventListener("load", function () {
        if (window.scrollY === 0) {
            header.classList.remove("bgBlack");
        } else {
            header.classList.add("bgBlack");
        }
    });
});

