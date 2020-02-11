
$(function(){  
    
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

    $("#carouselinner").css("width",620*$("#carouselinner ul.column").size()+"px");
    var a=$("#carouselinner ul.column").size();
    console.log(a); 
    
    $("#carouselinner ul.column:last").prependTo("#carouselinner");    
    $("#carouselinner").css("margin-left","-620px");    
    $("#carouselprev").click(function(){        
        $("#carouselprev, #carouselnext").hide();       
        $("#carouselinner").animate({
            marginLeft:parseInt($("#carouselinner").css("margin-left"))+620+"px"            
        },"slow",function(){            
            $("#carouselinner ul.column:last").prependTo("#carouselinner");
            $("#carouselinner").css("margin-left","-620px");            
            $("#carouselprev, #carouselnext").show();
        });
    });
       
        $("#carouselnext").click(function(){        
        $("#carouselprev, #carouselnext").hide();        
        $("#carouselinner").animate({
            marginLeft:parseInt($("#carouselinner").css("margin-left"))-620+"px"            
        },"slow",function(){            
            $("#carouselinner ul.column:first").appendTo("#carouselinner");
            $("#carouselinner").css("margin-left","-620px");            
            $("#carouselprev, #carouselnext").show();
        });
    });

    //
    $("dd:not(:first)").css("display","none");     
    $("dt:first").addClass("selected");    
    $("dl dt").click(function(){
        if($("+dd",this).css("display")=="none"){            
            $("dd").slideUp("slow");            
            $("+dd",this).slideDown("slow");            
            $("dt").removeClass("selected");           
            $(this).addClass("selected");        }
    }).mouseover(function(){        
        $(this).addClass("over");
    }).mouseout(function(){        
        $(this).removeClass("over");
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


});


