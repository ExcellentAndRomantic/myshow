/*入口函数*/
$(function(){
    //Bmob.initialize("d5e6671ae5ce13f4","24166")
    //Bmob.debug(true)
    //getNotice()
    //getViewCount()
    //let isPhotoShowing=false;
    //let span=$("#consoleSpan")
    //$('#modal1').modal('open');
    /*const query = Bmob.Query('view_count');
    query.get('9f33fc4b08').then(res => {
        console.log(res)
        alert("成功"+res.name)
      }).catch(err => {
          alert("错误"+err)
      })*/

      /*const query = Bmob.Query('view_count');
      query.find().then(res => {
        console.log(res)
    });*/

    /*滚动条事件*/
    $(document).scroll(function(){
        let nowPosition=$(this).scrollTop();
        /*console.log("now"+nowPosition)
        let column1Top=$("#photo-column-title").offset().top
        console.log(column1Top)*/
        //span.text(nowPosition)
        /*if (nowPosition>=300){
            if(!isPhotoShowing){
                isPhotoShowing=true
                alert("滚动到我的相册栏目了")
            }
            
        }*/
    });
    
    //获取通知
    function getNotice(){
        let query = Bmob.Query('web_notic');
        query.find().then(res => {
            $("#notice_title").text(res[0].title)
            $("#notice-content").text(res[0].content)
            if(res[0].is_show){
                $("#auto-btn").trigger("click");
            }
            
        });
    }
    /* 获取访问量*/
    function getViewCount() { 
        let userIp=JSON.stringify(returnCitySN)
        let query = Bmob.Query('view_count');
        query.set("name",userIp)
        query.save().then(res => {
            console.log("访问量+1")
        }).catch(err => {
            console.log(err)
        })
    }
})