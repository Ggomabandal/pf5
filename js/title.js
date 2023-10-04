$(document).ready(function(){
    //섹션 타이틀 재생 및 사운드 숨기기
    $("#title .wrap div.playsound form.stopb button.stop").click(function(){
        $("#title .wrap div.playsound form.stopb button.stop").css("border","3px solid #979797");
        $("#title .wrap div.playsound form.soundb button.sound").css("border","1px solid #979797");
        return false;
    });
    $("#title .wrap div.playsound form.soundb button.sound").click(function(){
        $("#title .wrap div.playsound form.soundb button.sound").css("border","3px solid #979797");
        $("#title .wrap div.playsound form.stopb button.stop").css("border","1px solid #979797");
        return false;
    });
    // 비디오 제어
    const video = document.querySelector('#thenun')
    $("#title .wrap div.playsound form.stopb button.stop").click(function(){
        if (video.paused) {
            video.play();
            $("#title .wrap div.playsound form.stopb button.stop").removeClass("play");
        } else {
            video.pause();
            $("#title .wrap div.playsound form.stopb button.stop").addClass("play");
        }
        return false;
    });
    $("#title .wrap div.playsound form.soundb button.sound").click(function(){
        if (video.muted) {
            video.muted = false;
            $("#title .wrap div.playsound form.soundb button.sound").addClass("soundon");
        } else {
            video.muted = true;
            $("#title .wrap div.playsound form.soundb button.sound").removeClass("soundon");
        }
        return false;
    });
});