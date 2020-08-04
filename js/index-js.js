
$(function(){
    //$(".my-card").fadeIn(3000);
    var music_list=$("#music-list")
    var circle_div=$("#circle-div")
    var music_icon=$("#music-icon")
    var music_item=$(".list-group-item")
    var animNum=$("#animNum")
    var initNum=4
    var photo_div=$("#photo-div")
    var photo_ul=$("#photo-ul")
    var auto_btn=$("#auto-btn")
    var closewindow=$("#closewindow")
    var player=document.getElementById("player")
    var isPlaying=false
    auto_btn.trigger("click")
    
    music_list.hide()
    // $("#on").click(function(){
    //     document.getElementById("player").play()
    // })
    circle_div.hover(function(){
        music_icon.removeClass("icon-show")
        music_icon.addClass("icon-hide")
        music_icon.removeClass("music-icon")
        music_list.show()
    },function(){
        music_icon.removeClass("icon-hide")
        music_icon.addClass("icon-show")
        music_icon.removeClass("icon-show")
        music_icon.addClass("music-icon")
        music_list.hide()
    })
    closewindow.click(function(){
        //document.getElementById("player").play()
    })
    $("#on").click(function(){
        if(isPlaying){
            player.pause()
            isPlaying=false
        }
        else{
            player.play()
            isPlaying=true
        }
            
    })
    music_item.click(function(){
       
    })
    var interval=setInterval(function(){
        initNum=initNum-1
        animNum.text(initNum)
        if(initNum==-1){
            animNum.hide()
            photo_div.removeClass("anim-photo-div")
            photo_div.addClass("photo-div-extend-anim")
            setTimeout(() => {
                photo_ul.show()
            }, 700);
            clearInterval(interval)
        }
    },1000)
})