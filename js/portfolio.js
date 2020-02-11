
//menu open //
$(function(){
    var duration=300;
    var $aside=$(".menu_open>aside");

    $aside.find("button").click(function(){
        $aside.toggleClass("open");
        if($aside.hasClass("open")){
            $aside.stop().animate({left:"-70px"},duration);
            $(".menu_open>aside button img").attr("src","img/btn_close.png");
        }else{
            $aside.stop().animate({left:"-300px"},duration);
            $(".menu_open>aside button img").attr("src","img/btn_open.png");
        }
    });

    var nav=$(".nav1>li");
    var cont=$("#contents>div");

    nav.click(function(){
        var target=$(this);        
        var i=target.index();         
        var section=cont.eq(i);        
        var offset=section.offset().top;        
        $("html, body").animate({
            scrollTop:offset
        },400);
    });


//section1 //
$("#carouselinner").css("width",465*$("#carouselinner ul.column").size()+"px");
var a=$("#carouselinner ul.column").size();
console.log(a);

$("#carouselinner ul.column:last").prependTo("#carouselinner");    
$("#carouselinner").css("margin-left","-450px");    
$("#carouselprev").click(function(){        
    $("#carouselprev, #carouselnext").hide();       
    $("#carouselinner").animate({
        marginLeft:parseInt($("#carouselinner").css("margin-left"))+450+"px"            
    },"slow",function(){            
        $("#carouselinner ul.column:last").prependTo("#carouselinner");
        $("#carouselinner").css("margin-left","-450px");            
        $("#carouselprev, #carouselnext").show();
    });
});
    
    $("#carouselnext").click(function(){        
    $("#carouselprev, #carouselnext").hide();        
    $("#carouselinner").animate({
        marginLeft:parseInt($("#carouselinner").css("margin-left"))-450+"px"            
    },"slow",function(){            
        $("#carouselinner ul.column:first").appendTo("#carouselinner");
        $("#carouselinner").css("margin-left","-450px");            
        $("#carouselprev, #carouselnext").show();
    });
});

$(".column a").click(function(){
    $("#s2 img").attr("src",$(this).attr("href"));
    $("#s2 p").text($(this).attr("alt"));
    return false;
});

$("#s2 p").hide();
$("#s2").mouseover(function(){
    $("#s2 p").stop().fadeIn("fast");
}).mouseout(function(){
    $("#s2 p").stop().fadeOut("fast");
});


// 버튼 up //
$(".up").click(function(){
    $("html").animate({scrollTop:0},500);
});


});


