$(document).ready(function(){
    // 헤더슬라이드
    $("header div.navwrap .nav ul.menu li a.a").mouseenter(function(){
        $("div.wgnb").stop().slideDown();
        return false;
    });
    $("#title,header .wrap").mouseenter(function(){
        $("div.wgnb").stop().slideUp();
    });
    // 섹션 차트 하이드 및 쇼
    $("section#chart div.wrap div.exchart").hide();
    $("section#chart div.wrap div.h2 h2 li:nth-child(1) a").click(function(){
        $("section#chart div.wrap div.chart").show();
        $("section#chart div.wrap div.exchart").hide();
        return false;
    });
    $("section#chart div.wrap div.h2 h2 li:nth-child(2) a").click(function(){
        $("section#chart div.wrap div.exchart").show();
        $("section#chart div.wrap div.chart").hide();
        return false;
    });
});