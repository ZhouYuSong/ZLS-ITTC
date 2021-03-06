/**
 * Created by Administrator on 2015/7/26.
 */
oCanvas.domReady(function () {

    var canvas = oCanvas.create({
        canvas: "#canvas_VL",
        background: "#ccc",//#eeeeef
        fps: 25
    });
    var bg = canvas.display.image({
        x: 0,
        y: 0,
        image: "image/vl_v3.png"
    });
//    canvas.addChild(bg);
    var speed_all=1.5,
        width_all=20,
        speed_SC=0.9,
        color_GD="#007fff",
        color_SC="#43d9f9";
    
    
    var SC00=createSC({
        parent:canvas,
        x:3,y:167,height:12,width:167,trail_flag:0,speed:speed_SC*0.07,color:color_SC
    });
    
    var SC001 = canvas.display.SC_show_down({
        x: 170,
        y: 168,
        Width: 11,
        Height: 82,
        height_now: 0,
        trail_flag: 0,
        t: 7540,
        speed:speed_SC*2,
        fill:color_SC,
        full:0,
        start:0
    });
    canvas.addChild(SC001);
    var SC01=createSC({
        parent:canvas,
        x:157,y:273,height:69,width:105,trail_flag:0,speed:speed_SC,color:color_SC
    });
    var SC02=createSC({
        parent:canvas,
        x:262,y:273,height:67,width:30,trail_flag:0,speed:speed_SC,color:color_SC
    });

    //var SC03=createSC({
    //    parent:canvas,
    //    x:359,y:207,height:61,width:39,trail_flag:0,speed:speed_SC,color:color_SC
    //});
    var SC04 = canvas.display.SC_show_down({
        x: 292,
        y: 274,
        Width: 33,
        Height: 62,
        height_now: 0,
        trail_flag: 0,
        t: 7540,
        speed:speed_SC,
        fill:color_SC,
        full:0,
        start:0
    });
    canvas.addChild(SC04);
    var SC03 = canvas.display.SC_show_down({
        x: 329,
        y: 341, 
        Width: 417,
        Height: 223,
        height_now: 0,
        trail_flag: 0,
        t: 7540,
        speed:speed_SC,
        fill:color_SC,
        full:0,
        start:0
    });
    canvas.addChild(SC03);
    var SC002=createSC({
        parent:canvas,
        x:744,y:523,height:8,width:278,trail_flag:0,speed:speed_SC*0.026,color:color_SC
    });
    var SC05=createSC({
        parent:canvas,
        x:1016,y:487,height:138,width:83,trail_flag:0,speed:speed_SC,color:color_SC
    });
    var SC06 = canvas.display.SC_show_down({
        x: 1103,
        y: 487, 
        Width: 110,
        Height: 142,
        height_now: 0,
        trail_flag: 0,
        t: 7540,
        speed:speed_SC,
        fill:color_SC,
        full:0,
        start:0
    });
    canvas.addChild(SC06);


    var fg = canvas.display.image({
        x: 0,
        y: 0,
        image: "image/vl_v3.png"
    });
    canvas.addChild(fg);
    var arrow_0=canvas.display.sprite({
        x: 179,
        y: 296,
        image: "image/water-arrow/right.png",
        generate:false,
        frames: [
            {x:60,y:0,w:60,h:40,d:400},
            {x:0,y:0,w:60,h:40,d:800}
        ]
    }).add();
    var arrow_1=canvas.display.sprite({
        x: 475-180,
        y: 450-243+67,
        image: "image/water-arrow/down.png",
        generate:false,
        frames: [
            {x:20,y:0,w:20,h:60,d:400},
            {x:0,y:0,w:20,h:60,d:800}

        ]
    }).add();

    var arrow_2=canvas.display.sprite({
        x: 475-164,
        y: 450-246+37+69,
        image: "image/water-arrow/right.png",
        generate:false,
        frames: [
            {x:60,y:0,w:60,h:40,d:400},
            {x:0,y:0,w:60,h:40,d:800}
        ]
    }).add();

    var arrow_3=canvas.display.sprite({
        x: 400,
        y: 450-153+67,
        image: "image/water-arrow/down.png",
        generate:false,
        frames: [
            {x:20,y:0,w:20,h:60,d:400},
            {x:0,y:0,w:20,h:60,d:800}

        ]
    }).add();
    var arrow_4=canvas.display.sprite({
        x: 485,
        y: 450-153+67,
        image: "image/water-arrow/down.png",
        generate:false,
        frames: [
            {x:20,y:0,w:20,h:60,d:400},
            {x:0,y:0,w:20,h:60,d:800}

        ]
    }).add();
    var arrow_5=canvas.display.sprite({
        x: 475+98,
        y: 450-153+67,
        image: "image/water-arrow/down.png",
        generate:false,
        frames: [
            {x:20,y:0,w:20,h:60,d:400},
            {x:0,y:0,w:20,h:60,d:800}

        ]
    }).add();
    var arrow_6=canvas.display.sprite({
        x: 475+180,
        y: 450-153+67,
        image: "image/water-arrow/down.png",
        generate:false,
        frames: [
            {x:20,y:0,w:20,h:60,d:400},
            {x:0,y:0,w:20,h:60,d:800}

        ]
    }).add();
    var GD00=createGD({
        parent:canvas,
        cells:[
            {x_cell: 3,y_cell: 172},
            {x_cell: 174,y_cell: 172},
            {x_cell: 174,y_cell: 248}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD01 = canvas.display.GD({
        x: 0,
        y: 0,
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 745, y_cell: 528},
            {x_cell: 1021, y_cell: 528}

        ],  //拐点数组
        cellIndex: 0,         //当前数组索引
        Speed: 2,           //水流速度
        GDwidth: 20,          //管道宽度
        LineHeight: 20,       //线条的长??
        x_now: 0,        //当前绘制点的位置x
        y_now: 0,        //当前绘制点的位置y
        firstX: 0,       //第一个水流效果线段的起始坐标X
        firstY: 0,       //第一个水流效果线段的其实坐标Y
        beginHeight: 0,       //第一段管道第??个水流效果线段的长度
        endHeight: 0,     //第一段管道最后一个水流效果线段的长度
        paused: 0,
        full:0,
        fill:color_GD
    });
    canvas.addChild(GD01);
    
    var GD02 = canvas.display.GD({
        x: 0,
        y: 0,
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 1184, y_cell: 584},
            {x_cell: 1208, y_cell: 584}

        ],  //拐点数组
        cellIndex: 0,         //当前数组索引
        Speed: 2,           //水流速度
        GDwidth: 20,          //管道宽度
        LineHeight: 20,       //线条的长??
        x_now: 0,        //当前绘制点的位置x
        y_now: 0,        //当前绘制点的位置y
        firstX: 0,       //第一个水流效果线段的起始坐标X
        firstY: 0,       //第一个水流效果线段的其实坐标Y
        beginHeight: 0,       //第一段管道第??个水流效果线段的长度
        endHeight: 0,     //第一段管道最后一个水流效果线段的长度
        paused: 0,
        full:0,
        fill:color_GD
    });
    canvas.addChild(GD02);


    var txt1=canvas.display.text({
        x:670,
        y:30,
        origin: { x:"center", y: "top" },
        font: "bold 36px 微软雅黑",
        fill:"#0e406b",
        text:"V型滤池工艺展示纵剖图"
    });
    canvas.addChild(txt1);
    var txt2=canvas.display.text({
        x:70,
        y:140,
        origin: { x:"center", y: "top" },
        font: "bold 25px 微软雅黑",
        fill:"#337ab7",
        text:"机加池来水"
    });
    canvas.addChild(txt2);
    var txt3=canvas.display.text({
        x:1250,
        y:551,
        origin: { x:"center", y: "top" },
        font: "bold 25px 微软雅黑",
        fill:"#337ab7",
        text:"V滤出水"
    });
    canvas.addChild(txt3);
    canvas.setLoop(function () {
        GD00.advance();
        GD01.advance();
        GD02.advance();
        SC00.advance();
        SC001.advance();
        SC01.advance();
        SC02.advance();
        SC03.advance();
        SC04.advance();
        SC002.advance();
        SC05.advance();
        SC06.advance();
        if(SC00.full==1){
        	SC001.start=1;
        }
        if(GD00.full==1){
            SC01.start=1;
            arrow_0.start();
        }
        if(SC01.full==1){
        	SC02.start = 1;
        }
        if(SC02.full==1){
            SC04.start = 1;
            arrow_1.start();
            arrow_2.start();
        }
        if(SC04.full==1){
            arrow_3.start();
            arrow_4.start();
            arrow_5.start();
            arrow_6.start();
            arrow_1.stopAnimation();
            arrow_2.stopAnimation();
            arrow_3.stopAnimation();
            arrow_4.stopAnimation();
            arrow_5.stopAnimation();
            arrow_6.stopAnimation();
        	SC03.start = 1;
        }
        if(SC03.full==1){
            arrow_0.frame=2;
            arrow_3.frame=2;
            arrow_4.frame=2;
            arrow_5.frame=2;
            arrow_6.frame=2;
            SC002.start = 1;
        	GD01.paused = 1;
        }
        if(GD01.full==1){
        	SC05.start = 1;
        }
        if(SC05.full==1){
        	SC06.start = 1;
        }
        if(SC06.height_now>=100){
        	GD02.paused = 1;
        }
        canvas.redraw();
    }).start();
    SC00.start=1;
    GD00.paused=1;
    canvas.timeline.start();
    $("#btn_start").click(function(){
        if(this.value==1){
        	SC00.start=1;
            GD00.paused=1;
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
        //GD00.init();
        //GD01.init();
        //SC01.init();
        //SC02.init();
        //SC03.init();
        //SC01.start=1;
    });
});
