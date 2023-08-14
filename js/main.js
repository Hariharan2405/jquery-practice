// $(document).ready(
    $(".change").text(
        "HTML text changed by jQuery"
    )
// )

$(".red").click(
    function(){
        $("#container").css("backgroundColor","red");
        $("body").css("backgroundColor","green");
    }
);
$(".green").click(
    function(){
        $("#container").css("backgroundColor","green");
        $("body").css("backgroundColor","yellow");
    }
);
$(".yellow").click(
    function(){
        $("#container").css("backgroundColor","yellow");
        $("body").css("backgroundColor","red");
    }
);
$(".hide").mouseover(
    function(){
        $("#container").hide();
    }
)
$(".hide").mouseout(
    function(){
        $("#container").show();
    }
)
$("#toggle button").click(
    function(){
        $("#toggle h1").toggleClass("tog1")
        $("#toggle h3").removeClass("tog1")
    }
)
$("#toggle button").dblclick(
    function(){
        $("#toggle h2").addClass("tog1")
        $(this).toggleClass("btn1")
    }
)
$("li").hover(
    function(){
        $(this).append("<b>   <=</b>")
    },
    function(){
        $(this).find("b").remove();
    }
)

$(".anime").animate(
    {
        height:"200px",
        width:"200px"
    }
)
// $(".anime").fadeOut(1000);
// $(".anime").fadeIn(500);
$(".anime").slideDown(5000);
