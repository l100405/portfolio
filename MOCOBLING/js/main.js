
$(function(){

    //slideshow ----

    var $slides=$(".slideshow").find("img"), //모든 슬라이드 이미지 선택
        slideCount=$slides.length, //slides안에 있는 img들의 갯수확인:length
        currentIndex=0;
    /* 첫 번째 슬라이드에 페이드 인으로 표시 */
    $slides.eq(currentIndex).fadeIn(); 
    /* 다음 슬라이드 표시하는 함수 */
    function showNextSlide(){
        //다음 표시 할 슬라이드의 인텍스
        //만약, 마지막 슬라이드라면 처음으로 돌아가기
        var nextIndex=(currentIndex+1)%slideCount; // 0.1.2.3.0.1.2.3 반복만들기 , %:나머지값(1) , 
        //현재 슬라이드 페이드 아웃(숨김)
        $slides.eq(currentIndex).fadeOut();
        //다음 슬라이드 페이드 인 (표시)
        $slides.eq(nextIndex).fadeIn();
        //현재 슬라이드 인텍스를 업데이트
        currentIndex=nextIndex;
    }    
    /* 3초마다 showNextSlide() 함수를 호출 */
    setInterval(showNextSlide,2000); //2초마다 

    //slideshow  END


    


    //고정 header 처리

    var $window=$(window), // 브라우저 창 선택자를 변수에 저장
        $header=$(".page-header"), //header태그 선택자를 변수에 저장
        //header의 기본 상단 위치 값을 가져오기 (offset)
        headerOffsetTop=$header.offset().top; //상단위치값이 얼마인지 가져옴

    /* 브라우저 창에 스크롤 "이벤트"를 모니터링하여 창을 스크롤할때마다 작업을 수행 */
        $window.on("scroll",function(){
            //브라우저 창의 스크롤 값을 확인하고 header태그의 기본위치를 지나서 있으면 
            // header태그에 class명을 부여 or 그렇지 않으면 삭제 
            if($window.scrollTop()>headerOffsetTop) {
                $header.addClass("sticky");
            }else {
                $header.removeClass("sticky");
            }
        });    

    //고정 header 처리  END



    // banner 처리

    $(".next").click(function(){
        //이미지패널div태그의 "margin-left" 속성값을 가져오기
        var mar=$(".img_bnr").css("margin-left");
        if(mar=="-2880px"){
            $(".img_bnr").stop().animate({
                marginLeft: 0+"px"
            },"fast");
        }else{
            //이미지패널 -600px 이동하는 애니메이션
            $(".img_bnr").stop().animate({
                marginLeft: parseInt($(".img_bnr").css("margin-left"))-960+"px"
            },"fast");
        }
    });

    //이전버튼
    $(".prev").click(function(){
        var mar1=$(".img_bnr").css("margin-left");
        if(mar1=="0px"){
            $(".img_bnr").stop().animate({
                marginLeft: -2880+"px"
            },"fast");
        }else{
            $(".img_bnr").stop().animate({
                marginLeft: parseInt($(".img_bnr").css("margin-left"))+960+"px"
            },"fast");
        }
    });

    //자동반복처리
    var timer=setInterval(function(){
        $(".next").click();
    },2000);
    $(".prev img, .next img").click(function(){
        clearInterval(timer);
    });

    // banner END



    // Tab panel 처리

    var $tabList=$("#work").find(".tabs-nav"), //tab의 목록을 가져옴
        $tabAnchors=$tabList.find("a"), //a태그의 목록을 가져옴
        $tabPannels=$("#work").find(".tabs-panel"); //매칭시킬 컨텐츠tabs-panel
    /* tab이 클릭(이벤트) 되었을 때 패널을 표시 */
    $tabList.on("click","a",function(event){
        // a태그의 클릭(이벤트)에 대한 기본 동작을 취소
        event.preventDefault();
        // 클릭 된 tab을 변수에 저장
        var $this=$(this);
        // 모든 내용(패널)을 비표시로 하고 클릭 된 tab에 대응하는 패널을 표시
        $tabPannels.hide();
        // 표시
        $($this.attr("href")).show(); //속성을 가져오는 매서드(attr)        
    }); 
    
    /* 첫번 째 tab을 선택 상태로 지정 */
    $tabAnchors.eq(0).trigger("click"); //강제로 한 번 이벤트를 발생시켜주는 매서드   
    
    // Tab panel 처리  END

    



    //Top 버튼처리

    $(".back-to-top").click(function(){
        $("html").animate({scrollTop:0},500);
    });

    //Top 버튼처리  END

});