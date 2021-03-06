oCanvas.domReady(function () {

    var width_all=30,
        speed_SC=0.9,
        color_GD="#007fff",
        color_SC="#43d9f9";
    var canvas = oCanvas.create({
        canvas: "#canvas_hx",
        background: "#ccc",
        fps: 25
    });
//绘制6个水池
    var SC01=createSC({
        parent:canvas,
        x:581,y:138,height:40,width:38,trail_flag:0,speed:speed_SC,color:color_SC
    });
    var SC02=createSC({
        parent:canvas,
        x:529,y:161,height:16,width:38,trail_flag:0,speed:speed_SC,color:color_SC
    });
    var SC021 = canvas.display.SC_show_down({
        x: 534,
        y: 161,
        Width: 13,
        Height: 460,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        speed:speed_SC*4.1,
        fill:color_SC,
        full:0,
        start:0
    });
    canvas.addChild(SC021);
    var SC03=createSC({
        parent:canvas,
        x:528,y:537,height:96,width:53,trail_flag:0,speed:speed_SC,color:color_SC
    });
    var SC031=createSC({
        parent:canvas,
        x:528,y:367,height:187,width:340,trail_flag:0,speed:speed_SC*0.55,color:color_SC
    });
    var SC04 = canvas.display.SC_show_down({
        x: 600,
        y: 537,
        Width: 265,
        Height: 94,
        height_now: 0,
        trail_flag: 0,
        t: 0,
        speed:speed_SC,
        fill:color_SC,
        full:0,
        start:0
    });
    canvas.addChild(SC04);
    var SC05=createSC({
        parent:canvas,
        x:462,y:405,height:275,width:403,trail_flag:1,speed:speed_SC,color:color_SC,
        trail: [
            {x_t: 0, y_t: 0},
            {x_t: 0, y_t: 281},
            {x_t: 410, y_t:281},
            {x_t: 410, y_t: 224},
            {x_t: 137, y_t: 224},
            {x_t: 137, y_t: 244},
            {x_t: 59, y_t: 240},
            {x_t: 59, y_t: 0}
        ]
    });
    var SC06=createSC({
        parent:canvas,
        x:328,y:375,height:113,width:205,trail_flag:0,speed:speed_SC,color:color_SC
    });
//添加背景图片
    var bg = canvas.display.image({
        x: 0,
        y: 0,
        image: "image/hx_v1.png"
    }).add();
//绘制两条管道
    var GD01=createGD({
        parent:canvas,
        cells:[
            {x_cell: 600,y_cell: 155},
            {x_cell: 600,y_cell: 102},
            {x_cell: 584,y_cell: 86},
            {x_cell: 566,y_cell: 86},
            {x_cell: 551,y_cell: 101},
            {x_cell: 551,y_cell: 155}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD011=createGD3({
        parent:canvas,
        cells:[
            {x_cell: 540,y_cell: 180},        
            {x_cell: 540,y_cell: 622}
        ],
        GDwidth:width_all,
        speed:3.5,
        color:color_GD
    });
    var GD02=createGD({
        parent:canvas,
        cells:[
            {x_cell: 416,y_cell: 448},
            {x_cell: 328, y_cell:448}
        ],
        GDwidth:width_all,
        color:color_GD
    });
//添加箭头
    var arrow_0 = canvas.display.sprite({
        x: 537,
        y: 271,
        image: "image/water-arrow/down.png",
        generate: false,
        frames: [
            {x: 60, y: 0, w: 60, h: 60, d: 400},
            {x: 0, y: 0, w: 60, h: 60, d: 800}
        ]
    }).scale(1,2).add();//.scale(1,2)
    var arrow_1 = canvas.display.sprite({
        x: 568,
        y: 504,
        image: "image/water-arrow/you.png",
        generate: false,
        frames: [
            {x: 60, y: 0, w: 60, h: 60, d: 400},
            {x: 0, y: 0, w: 60, h: 60, d: 800}
        ]
    }).add();

    var arrow_2 = canvas.display.sprite({
        x: 639,
        y: 549,
        image: "image/water-arrow/down.png",
        generate: false,
        frames: [
            {x: 60, y: 0, w: 60, h: 60, d: 400},
            {x: 0, y: 0, w: 60, h: 60, d: 800}
        ]
    }).add();
    var arrow_21=canvas.display.sprite({
        x: 699,
        y: 549,
        image: "image/water-arrow/down.png",
        generate: false,
        frames: [
            {x: 60, y: 0, w: 60, h: 60, d: 400},
            {x: 0, y: 0, w: 60, h: 60, d: 800}
        ]
    }).add();
    var arrow_22=canvas.display.sprite({
        x: 759,
        y: 549,
        image: "image/water-arrow/down.png",
        generate: false,
        frames: [
            {x: 60, y: 0, w: 60, h: 60, d: 400},
            {x: 0, y: 0, w: 60, h: 60, d: 800}
        ]
    }).add();
    var arrow_23=canvas.display.sprite({
        x: 819,
        y: 549,
        image: "image/water-arrow/down.png",
        generate: false,
        frames: [
            {x: 60, y: 0, w: 60, h: 60, d: 400},
            {x: 0, y: 0, w: 60, h: 60, d: 800}
        ]
    }).add();
    var arrow_3=canvas.display.sprite({
        x: 423,//439
        y: 370,//389
        image: "image/water-arrow/zuo.png",
        generate:false,
        frames: [
            {x:60,y:0,w:60,h:60,d:400},
            {x:0,y:0,w:60,h:60,d:800}

        ]
    }).add();//.scale(0.5)
    var arrow_4 = canvas.display.sprite({
        x: 605,
        y: 100,
        image: "image/water-arrow/up.png",
        generate: false,
        frames: [
            {x: 60, y: 0, w: 60, h: 60, d: 400},
            {x: 0, y: 0, w: 60, h: 60, d: 800}
        ]
    }).scale(0.5,1).add();//.scale(1,2)
//添加文字标注
    var txt1=canvas.display.text({
        x:696,
        y:15,
        origin: { x:"center", y: "top" },
        font: "bold 36px 微软雅黑",
        fill:"#0e406b",
        text:"虹吸滤池工艺展示纵剖图"
    }).add();
    var txt2=canvas.display.text({
        x:703,
        y:97,
        origin: { x:"center", y: "top" },
        font: "bold 25px 微软雅黑",
        fill:"#337ab7",
        text:"机加池来水"
    }).add();
    var txt3=canvas.display.text({
        x:326,
        y:398,
        origin: { x:"center", y: "top" },
        font: "bold 25px 微软雅黑",
        fill:"#337ab7",
        text:"虹吸滤池出水"
    }).add();
//设置循环
    canvas.setLoop(function () {
        GD01.advance();
        GD011.advance();
        GD02.advance();
        SC01.advance();
        SC02.advance();
        SC021.advance();
        SC03.advance();
        SC031.advance();
        SC04.advance();
        SC05.advance();
        SC06.advance();
        if(SC01.height_now>=SC01.Height*0.75){
            GD01.paused=1;
            arrow_4.start();
        }
        if(GD01.full==1){
            SC02.start=1;
            SC021.start=1;
            GD011.paused=1;
            arrow_0.start();
        }
        if(SC021.full==1){
            SC03.start=1;
            arrow_4.frame=2;
        }
        if(SC03.full==1){
            arrow_1.start();
            SC04.start=1;
            arrow_2.start();
            arrow_21.start();
            arrow_22.start();
            arrow_23.start();
        }
        if(SC04.full==1){
            SC05.start=1;
            SC031.start=1;
        }
        if(SC05.full==1){
            SC06.start=1;
            arrow_3.start();
            arrow_0.frame=2;
            arrow_1.frame=2;
            arrow_2.frame=2;
            arrow_21.frame=2;
            arrow_22.frame=2;
            arrow_23.frame=2;
        }
        if(SC06.height_now>=SC06.Height*0.3){
            GD02.paused=1;
        }
        canvas.redraw();
    }).start();
//添加按钮函数
    SC01.start=1;
    canvas.timeline.start();
    $("#btn_start").click(function(){
        if(this.value==1){
            SC01.start=1;
            canvas.redraw();
            this.innerHTML="&#xe61f;";
            this.value=0;
            canvas.timeline.start();
        }
        else{
            this.innerHTML='&#xe626;';
            this.value=1;
            canvas.timeline.stop();

        }
    });
    $("#btn_upS").click(function(){
        canvas.settings.fps+=5;
        var spanText=document.getElementById("speed");
        var speed=(canvas.settings.fps/25).toFixed(1);
        spanText.innerHTML=speed+"X";
        console.log(spanText.innerHTML);
    });
    $("#btn_downS").click(function(){
        canvas.settings.fps-=5;
        var spanText=document.getElementById("speed");
        var speed=(canvas.settings.fps/25).toFixed(1);
        spanText.innerHTML=speed+"X";
    });
    $("#btn_reset").click(function(){
        window.location.reload();
        //GD01.init();
        //SC01.init();
        //SC02.init();
        //SC03.init();
        //SC04.init();
        //SC05.init();
        //SC06.init();
        //GD02.init();
        //SC01.start=1;
    });

});
