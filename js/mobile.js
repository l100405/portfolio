$(function(){
   var a=$("#section1").width();
   console.log(a);

   if(a<=499){
    function showNextSlide(){
    var mar=$("div.s3").css("margin-left");
    console.log(mar);
    if(mar=="-900px"){
        $("div.s3").stop().animate({
            marginLeft: 0+"px"
        },"fast");
    }else{        
        $("div.s3").stop().animate({
            marginLeft: parseInt($("div.s3").css("margin-left"))-300+"px"
        },"slow");
    }

    }
    setInterval(showNextSlide,2000);
}
});