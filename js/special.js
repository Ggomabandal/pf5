$(document).ready(function(){
    // 섹션 스페셜 마우스 이벤트
    $("section#special div.wrap article div.hidden div.place a").not("section#special div.wrap article div.hidden div.place a:eq(0)").hide();
    let n;
    for(let n=0;n<4;n++){
        $("section#special div.wrap article ul li:eq("+n+") a").mouseenter(function(){
            $("section#special div.wrap article div.hidden div.place a:eq("+n+")").show();
            $("section#special div.wrap article div.hidden div.place a:eq("+n+")").siblings().hide();
        });
    }
});