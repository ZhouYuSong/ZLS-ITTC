oCanvas.domReady(function () {

    var canvas = oCanvas.create({
        canvas: "#canvas_fix",
        background: "#eeeeed",
        fps: 35
    });
    var bg = canvas.display.image({
        x:130,
        y: -13,
        image: "image/fix.png"
    });
    canvas.addChild(bg);

    //管道的公用变量，包括颜色速度的设置
    var speed_all=1.5,
        width_all=20,
        color_GD="#007fff",
        color_GD_new="blue",
        lineHeight_all=10;

    var GD01=createGD({
        parent:canvas,
        cells:[
            {x_cell: 707 ,y_cell: 96},
            {x_cell: 707 ,y_cell: 150}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD0101=createGD({
        parent:canvas,
        cells:[
            {x_cell: 707 ,y_cell: 160},
            {x_cell: 707 ,y_cell: 223},
            {x_cell: 765 ,y_cell: 258},
            {x_cell: 989 ,y_cell: 258},
            {x_cell: 989, y_cell: 349}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD02=createGD({
        parent:canvas,
        cells:[
            {x_cell: 748 ,y_cell: 98},
            {x_cell: 748 ,y_cell: 222},
            {x_cell: 775 ,y_cell: 240},
            {x_cell: 1020 ,y_cell: 240},
            {x_cell: 1020, y_cell: 256}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD03=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1020 ,y_cell: 256},
            {x_cell: 1020, y_cell: 348}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD04=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1026,y_cell: 256},
            {x_cell: 1188 ,y_cell: 256},
            {x_cell: 1188, y_cell: 374}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD05=createGD({
        parent:canvas,
        cells:[
            {x_cell: 989 ,y_cell: 365},
            {x_cell: 989 ,y_cell: 411},
            {x_cell: 955, y_cell: 411}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD06=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1019 ,y_cell: 360},
            {x_cell: 1019, y_cell: 411},
            {x_cell: 1058, y_cell: 411}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD07=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1188,y_cell: 412},
            {x_cell: 1188,y_cell: 567}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD08=createGD({
        parent:canvas,
        cells:[
            {x_cell: 896 ,y_cell: 445},
            {x_cell: 896 ,y_cell: 482},
            {x_cell: 792 ,y_cell: 482},
            {x_cell: 792 ,y_cell: 539},
            {x_cell: 819, y_cell: 539}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD09=createGD({
        parent:canvas,
        cells:[
            {x_cell: 896 ,y_cell: 445},
            {x_cell: 896 ,y_cell: 482},
            {x_cell: 792 ,y_cell: 482},
            {x_cell: 792 ,y_cell: 562},
            {x_cell: 819, y_cell: 562}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD10=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1108 ,y_cell: 445},
            {x_cell: 1108 ,y_cell: 482},
            {x_cell: 990 ,y_cell: 482}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD1001=createGD({
        parent:canvas,
        cells:[
            {x_cell: 990 ,y_cell: 482},
            {x_cell: 990 ,y_cell: 542},
            {x_cell: 970, y_cell: 542}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD1002=createGD({
        parent:canvas,
        cells:[
            {x_cell: 990 ,y_cell: 482},
            {x_cell: 900 ,y_cell: 482}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD11=createGD({
        parent:canvas,
        cells:[
            {x_cell: 990 ,y_cell: 482},
            {x_cell: 990 ,y_cell: 562},
            {x_cell: 970, y_cell: 562}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD12=createGD({
        parent:canvas,
        cells:[
            {x_cell: 1124 ,y_cell: 650},
            {x_cell: 962, y_cell: 650},
            {x_cell: 962, y_cell: 667}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD13=createGD({
        parent:canvas,
        cells:[
            {x_cell: 848 ,y_cell: 570},
            {x_cell: 848 ,y_cell: 605},
            {x_cell: 660 ,y_cell: 605},
            {x_cell:660, y_cell: 641}
        ],
        GDwidth:width_all,
        color:color_GD
    });

    //var GD14=createGD({
    //    parent:canvas,
    //    cells:[
    //        {x_cell: 879 ,y_cell: 570},
    //        {x_cell: 879 ,y_cell: 605},
    //        {x_cell: 844 ,y_cell: 605}
    //    ],
    //    GDwidth:width_all,
    //    color:color_GD
    //});
    var GD141=createGD({
        parent:canvas,
        cells:[
            {x_cell: 879 ,y_cell: 570},
            {x_cell: 879 ,y_cell: 635},
            {x_cell: 714 ,y_cell: 635}
        ],
        GDwidth:width_all,
        color:color_GD
    });

    var GD15=createGD({
        parent:canvas,
        cells:[
            {x_cell: 807 ,y_cell: 708},
            {x_cell: 715 ,y_cell: 708},
            {x_cell: 715 ,y_cell: 630},
            {x_cell: 636 ,y_cell: 630},
            {x_cell: 636, y_cell: 646}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD1501=createGD({
        parent:canvas,
        cells:[
            {x_cell: 807 ,y_cell: 708},
            {x_cell: 715 ,y_cell: 708},
            {x_cell: 715 ,y_cell: 735},
            {x_cell: 673, y_cell: 735}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD16=createGD({
        parent:canvas,
        cells:[
            {x_cell: 615 ,y_cell: 673},
            {x_cell: 582, y_cell: 673}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD17=createGD({
        parent:canvas,
        cells:[
            {x_cell: 675 ,y_cell: 697},
            {x_cell: 675 ,y_cell: 734},
            {x_cell: 436 ,y_cell: 734},
            {x_cell: 436, y_cell: 691}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD18=createGD({
        parent:canvas,
        cells:[
            {x_cell: 415 ,y_cell: 657},
            {x_cell: 415, y_cell: 568}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD19=createGD({
        parent:canvas,
        cells:[
            {x_cell: 539 ,y_cell: 654},
            {x_cell: 539 ,y_cell: 603},
            {x_cell: 415 ,y_cell: 603},
            {x_cell: 415, y_cell: 563}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD20=createGD({
        parent:canvas,
        cells:[
            {x_cell: 403 ,y_cell: 482},
            {x_cell: 372 ,y_cell: 482}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD21=createGD({
        parent:canvas,
        cells:[
            {x_cell: 309 ,y_cell: 431},
            {x_cell: 309, y_cell: 401},
            {x_cell: 405, y_cell: 401},
            {x_cell: 405, y_cell: 376}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD22=createGD({
        parent:canvas,
        cells:[
            {x_cell: 707 ,y_cell: 96},
            {x_cell: 707 ,y_cell: 223},
            {x_cell: 765 ,y_cell: 258},
            {x_cell: 989 ,y_cell: 258},
            {x_cell: 989, y_cell: 297},
            {x_cell: 1018, y_cell: 297},
            {x_cell: 1018, y_cell: 349}
        ],
        GDwidth:width_all,
        color:"rgba(1,0,0,0)"
    });

    var GD23=createGD({
        parent:canvas,
        cells:[
            {x_cell: 421 ,y_cell: 433},
            {x_cell: 421, y_cell: 401},
            {x_cell: 465, y_cell: 401},
            {x_cell: 465, y_cell: 435}
        ],
        GDwidth:width_all,
        color:color_GD
    });
    var GD24=createGD({
        parent:canvas,
        cells:[
            {x_cell: 527 ,y_cell: 439},
            {x_cell: 527 ,y_cell: 401},
            {x_cell: 592 ,y_cell: 401},
            {x_cell: 592, y_cell: 375}
        ],
        GDwidth:width_all,
        color:color_GD
    });

    var img1=canvas.display.image({
        x:692,
        y:58,
        image:"image/main/qs.png"
    });
    canvas.addChild(img1);
    img1.bind("click",function(){
        window.location.href="QS.jsp";
    });
    img1.bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        //$("#name_QS").css("display","inline");
        this.shadow="0 0 10px #eee";
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        this.shadow="0 0 0px #eee";
        //$("#name_QS").css("display","none");
    }).bind("flash",function(){
        this.unbind("flash");
        window.setTimeout(function(){
            GD01.paused=1;
            GD22.paused=1;
            GD02.paused=1;
        },100);

    });
    var img11=canvas.display.image({
        x:678,
        y:141,
        image:"image/main/qs2.png"
    });
    canvas.addChild(img11);
    img11.bind("click",function(){
        window.location.href="QS.jsp";
    });
    img11.bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_QS2").css("display","inline");
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        this.shadow="0 0 0px #eee";
        //$("#name_QS2").css("display","none");
    }).bind("flash",function(){
        this.unbind("flash");
    });
    var img2=canvas.display.image({
        x:839,
        y:342,
        image:"image/main/5.png"
    });
    canvas.addChild(img2);
    img2.bind("click",function(){
        window.location.href="JJC.jsp";
    }).bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_JJC1").css("display","inline");
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        this.shadow="0 0 0 #eee";
        //$("#name_JJC1").css("display","none");
    }).bind("flash",function(){

        this.unbind("flash");
        window.setTimeout(function(){
            GD08.paused=1;
            GD09.paused=1;
        },100);
    });

    var img21=img2.clone({
        x:1049,
        y:340
    });
    canvas.addChild(img21);
    img21.bind("click",function(){
        window.location.href="JJC.jsp";
    }).bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_JJC2").css("display","inline");
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        this.shadow="0 0 0px #eee";
        //$("#name_JJC2").css("display","none");
    }).bind("flash",function(){

        this.unbind("flash");
        window.setTimeout(function(){
            GD10.paused=1;
        },100);

    });
    var img22=img2.clone({
        x:1127,
        y:573
    });
    canvas.addChild(img22);
    img22.bind("click",function(){
        window.location.href="JJC.jsp";
    }).bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_JJC3").css("display","inline");
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        this.shadow="0 0 0px #eee";
        //$("#name_JJC3").css("display","none");
    }).bind("flash",function(){

        this.unbind("flash");
        window.setTimeout(function(){
            GD12.paused=1;
        },100);

    });
    //V?????????
    var img3=canvas.display.image({
        x:847,
        y:665,
        image:"image/main/6.png"
    });
    canvas.addChild(img3);
    img3.bind("click",function(){
        window.location.href="VL.jsp";
    }).bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_VL").css("display","inline");
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
        this.shadow="0 0 0px #eee";
        //$("#name_VL").css("display","none");

    }).bind("flash",function(){

        this.unbind("flash");
        window.setTimeout(function(){
            GD15.paused=1;
            GD1501.paused=1;
            canvas.children[19].fill="rgba(1,1,1,0)";
        },100);

    });

    //?????????
    var img4=canvas.display.image({
        x:967,
        y:352,
        image:"image/main/hhj.png"
    });
    canvas.addChild(img4);
    img4.bind("click",function(){
        window.location.href="hhj.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_HHJ").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_HHJ").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){

        img4.unbind("flash");

        window.setTimeout(function(){GD05.paused=1;
            GD06.paused=1;
            GD07.paused=1;},100);


    });
    var img41=canvas.display.image({
        x:1179,
        y:381,
        image:"image/main/hhj2.png"
    });
    canvas.addChild(img41);
    img41.bind("click",function(){
        window.location.href="hhj.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_HHJ2").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_HHJ2").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){

        img41.unbind("flash");

    });
    //???????
    var img5=canvas.display.image({
        x:810,
        y:529,
        image:"image/main/hx.png"
    });
    canvas.addChild(img5);
    img5.bind("click",function(){
        window.location.href="hx.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_HX").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_HX").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){

        this.unbind("flash");
        window.setTimeout(function(){
            GD13.paused=1;
            //GD14.paused=1;
            GD141.paused=1;
        },100);

    });

    var img6=canvas.display.image({
        x:284,
        y:435,
        image:"image/main/qsc1.png"
    });
    canvas.addChild(img6);
    img6.bind("click",function(){
        window.location.href="qsc.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_QSC1").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_QSC1").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){

        this.unbind("flash");
        window.setTimeout(function(){
            GD21.paused=1;
            GD23.paused=1;
        },100);

    });
    var img61=canvas.display.image({
        x:287,
        y:253,
        image:"image/main/qsc2.png"
    });
    canvas.addChild(img61);
    img61.bind("click",function(){
        window.location.href="qsc.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_QSC2").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_QSC2").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){

        this.unbind("flash");
    });
    var img62=canvas.display.image({
        x:462,
        y:251,
        image:"image/main/qsc2.png"
    });
    canvas.addChild(img62);
    img62.bind("click",function(){
        window.location.href="qsc.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_QSC3").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_QSC3").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){

        this.unbind("flash");
    });
    var img63=canvas.display.image({
        x:432,
        y:434,
        image:"image/main/qsc3.png"
    });
    canvas.addChild(img63);
    img63.bind("click",function(){
        window.location.href="qsc.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_QSC4").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_QSC4").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){

        this.unbind("flash");
        window.setTimeout(function(){
            GD24.paused=1;
        },100);


    });

    var img7=canvas.display.image({
        x:870,
        y:-7,
        image:"image/main/1.png"
    });
    canvas.addChild(img7);
    img7.bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_YC").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_YC").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    });

    var img8=canvas.display.image({
        x:379,
        y:652,
        image:"image/main/tc.png"
    });
    canvas.addChild(img8);
    img8.bind("click",function(){
        window.location.href="hxt.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_TC").css("display","inline");
    }).bind("mouseleave",function(){
        this.shadow="0 0 0px #eee";
        //$("#name_TC").css("display","none");
        canvas.mouse.cursor("default");
    }).bind("flash",function(){

        this.unbind("flash");
        window.setTimeout(function(){
            GD18.paused=1;
            GD19.paused=1;
        },100);

    });
    var img81=canvas.display.image({
        x:488,
        y:652,
        image:"image/main/tc.png"
    });
    canvas.addChild(img81);
    img81.bind("click",function(){
        window.location.href="hxt.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_TC1").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_TC1").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){

        this.unbind("flash");

    });
    var img9=canvas.display.image({
        x:613,
        y:645,
        image:"image/main/cy.png"
    });
    canvas.addChild(img9);
    img9.bind("click",function(){
        window.location.href="cy.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_CY").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_CY").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    }).bind("flash",function(){

        this.unbind("flash");
        window.setTimeout(function(){
            GD16.paused=1;
            GD17.paused=1;
        },100);

    });
    var img10=canvas.display.image({
        x:623,
        y:465,
        image:"image/main/cyc.png"
    });
    canvas.addChild(img10);
    img10.bind("click",function(){
        window.location.href="cy.jsp";
    }).bind("mouseenter",function(){
        canvas.mouse.cursor("pointer");
        this.shadow="0 0 10px #eee";
        //$("#name_CYC").css("display","inline");
    }).bind("mouseleave",function(){
        //$("#name_CYC").css("display","none");
        this.shadow="0 0 0px #eee";
        canvas.mouse.cursor("default");
    });


    GD15.bind("start",function(){
        canvas.timeline.stop();
        window.setTimeout(restart,1000);
        this.paused=1;
    });
    canvas.addChild(GD15);
    GD01.paused=1;
    GD22.paused=1;
    GD02.paused=1;


    canvas.setLoop(function () {
        GD01.advance();
        GD0101.advance();
        GD02.advance();
        GD03.advance();
        GD04.advance();
        GD05.advance();
        GD06.advance();
        GD07.advance();
        GD08.advance();
        GD09.advance();
        GD10.advance();
        GD1001.advance();
        GD1002.advance();
        GD11.advance();
        GD12.advance();
        GD13.advance();
        //GD14.advance();
        GD141.advance();
        GD15.advance();
        GD1501.advance();
        GD16.advance();
        GD17.advance();
        GD18.advance();
        GD19.advance();
        GD20.advance();
        GD21.advance();
        GD22.advance();
        GD23.advance();
        GD24.advance();

        if(GD01.full==1){
            GD0101.paused=1;
        }
        if(GD02.full==1){
            GD03.paused=1;
            GD04.paused=1;
        }
        if(GD04.full==1){
            img4.trigger("flash");
            img41.trigger("flash");
        }
        if(GD07.full==1){
            img2.trigger("flash");
            img21.trigger("flash");
            img22.trigger("flash");
        }
        if(GD09.full==1)
        {
            img5.trigger("flash");
            img3.trigger("flash");
        }
        if(GD10.full==1){
            GD1001.paused=1;
            GD1002.paused=1;
            GD11.paused=1;
        }
        if(GD15.full==1){
            img9.trigger("flash");
        }
        if(GD17.full==1){
            img8.trigger("flash");
            img81.trigger("flash");
        }
        if(GD19.full==1){
            img6.trigger("flash");

        }
        if(GD21.full==1){
            img61.trigger("flash");
        }
        if(GD23.full==1){
            img63.trigger("flash");
        }
        if(GD24.full==1){
            img62.trigger("flash");
        }
        canvas.redraw();
    });
    GD01.paused=1;
    GD02.paused=1;
    GD22.paused=1;
    canvas.timeline.start();


    function restart(){
        canvas.timeline.start();
    }
    //function reset(){
    //    canvas.timeline.stop();
    //    canvas.children[1].fill=color_GD;
    //    canvas.children[2].fill=color_GD;
    //    canvas.children[3].fill=color_GD;
    //    canvas.children[5].fill=color_GD;
    //    canvas.children[6].fill=color_GD;
    //    canvas.children[8].fill=color_GD;
    //    canvas.children[9].fill=color_GD;
    //    canvas.children[10].fill=color_GD;
    //    canvas.children[11].fill=color_GD;
    //    canvas.children[13].fill=color_GD;
    //    canvas.children[14].fill=color_GD;
    //    canvas.children[17].fill=color_GD;
    //    canvas.children[18].fill=color_GD;
    //    canvas.children[4].fill=color_GD;
    //    canvas.children[7].fill=color_GD;
    //    canvas.children[12].fill=color_GD;
    //    canvas.children[15].fill=color_GD;
    //    canvas.children[16].fill=color_GD;
    //    canvas.children[19].fill=color_GD;
    //    canvas.children[22].fill="rgba(1,1,1,0)";
    //    GD01.init();
    //    GD02.init();
    //    GD03.init();
    //    GD04.init();
    //    GD05.init();
    //    GD06.init();
    //    GD07.init();
    //    GD08.init();
    //    GD09.init();
    //    GD10.init();
    //    GD11.init();
    //    GD12.init();
    //    GD13.init();
    //    GD14.init();
    //    GD15.init();
    //    GD16.init();
    //    GD17.init();
    //    GD18.init();
    //    GD19.init();
    //    GD20.init();
    //    GD21.init();
    //    GD22.init();
    //    GD23.init();
    //    GD24.init();
    //    img1.bind("flash",function(){
    //        GD01.paused=1;
    //        GD22.paused=1;
    //        GD02.paused=1;
    //    });
    //    img11.bind("mouseenter", function () {
    //        canvas.mouse.cursor("pointer");
    //        this.shadow="0 0 10px #eee";
    //        //$("#name_QS2").css("display","inline");
    //    }).bind("mouseleave", function () {
    //        canvas.mouse.cursor("default");
    //        this.shadow="0 0 0px #eee";
    //        //$("#name_QS2").css("display","none");
    //    }).bind("flash",function(){
    //    });
    //    img2.bind("flash",function(){
    //        GD08.paused=1;
    //        GD09.paused=1;
    //    });
    //
    //
    //    img21.bind("flash",function(){
    //        GD10.paused=1;
    //        GD11.paused=1;
    //    });
    //
    //    img22.bind("flash",function(){
    //        GD12.paused=1;
    //    });
    //
    //    img3.bind("flash",function(){
    //        GD15.paused=1;
    //    });
    //
    //    img4.bind("flash",function(){
    //        GD05.paused=1;
    //        GD06.paused=1;
    //        GD07.paused=1;
    //    });
    //
    //    img5.bind("flash",function(){
    //        GD13.paused=1;
    //        GD14.paused=1;
    //    });
    //
    //    img6.bind("flash",function(){
    //        GD21.paused=1;
    //        GD23.paused=1;
    //    });
    //
    //    img61.bind("flash",function(){
    //    });
    //
    //    img62.bind("flash",function(){
    //    });
    //
    //    img63.bind("flash",function(){
    //        GD24.paused=1;
    //    });
    //
    //    img8.bind("flash",function(){
    //        GD18.paused=1;
    //        GD19.paused=1;
    //    });
    //
    //    img9.bind("flash",function(){
    //        GD16.paused=1;
    //        GD17.paused=1;
    //    });
    //    GD01.paused=1;
    //    GD22.paused=1;
    //    GD02.paused=1;
    //    canvas.settings.fps=40;
    //    var spanText=document.getElementById("speed");
    //    var speed=(canvas.settings.fps/40).toFixed(1);
    //    spanText.innerHTML=speed+"X";
    //    var btn_start=$("#btn_start");
    //    btn_start.innerHTML="&#xe61f;";
    //    btn_start.value=0;
    //
    //    canvas.redraw();
    //    canvas.timeline.start();
    //}
    //function line_new(){
    //    canvas.timeline.stop();
    //    console.log("new");
    //    reset();
    //
    //    canvas.children[1].fill="rgba(1,0,0,0)";
    //    canvas.children[3].fill="rgba(1,0,0,0)";
    //    canvas.children[5].fill="rgba(1,0,0,0)";
    //    canvas.children[6].fill="rgba(1,0,0,0)";
    //    canvas.children[8].fill="rgba(1,0,0,0)";
    //    canvas.children[9].fill="rgba(1,0,0,0)";
    //    canvas.children[10].fill="rgba(1,0,0,0)";
    //    canvas.children[11].fill="rgba(1,0,0,0)";
    //    canvas.children[13].fill="rgba(1,0,0,0)";
    //    canvas.children[14].fill="rgba(1,0,0,0)";
    //    canvas.children[17].fill="rgba(1,0,0,0)";
    //    canvas.children[18].fill="rgba(1,0,0,0)";
    //
    //}
    //function line_old(){
    //    canvas.timeline.stop();
    //    console.log("old");
    //    reset();
    //    canvas.children[2].fill="rgba(1,0,0,0)";
    //    canvas.children[3].fill="rgba(1,0,0,0)";
    //    canvas.children[4].fill="rgba(1,0,0,0)";
    //    canvas.children[7].fill="rgba(1,0,0,0)";
    //    canvas.children[12].fill="rgba(1,0,0,0)";
    //    canvas.children[15].fill="rgba(1,0,0,0)";
    //    canvas.children[16].fill="rgba(1,0,0,0)";
    //    canvas.children[19].fill="rgba(1,0,0,0)";
    //    canvas.children[22].fill=color_GD;
    //}
    //function line_none(){
    //    canvas.timeline.stop();
    //    GD03.color="rgba(0,0,0,0)";
    //    reset();
    //}
    function init(){
        GD01.init();
        GD02.init();
        GD03.init();
        GD04.init();
        GD05.init();
        GD06.init();
        GD07.init();
        GD08.init();
        GD09.init();
        GD10.init();
        GD11.init();
        GD12.init();
        GD13.init();
        //GD14.init();
        GD15.init();
        GD16.init();
        GD17.init();
        GD18.init();
        GD19.init();
        GD20.init();
        GD21.init();
        GD22.init();
        GD23.init();
        GD24.init();
        img1.bind("flash",function(){
            $("#name_QS").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_QS").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_QS").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_QS").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_QS").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");
        });

        img2.bind("flash",function(){
            $("#name_JJC1").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_JJC1").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_JJC1").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_JJC1").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_JJC1").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");
            GD08.paused=1;
            GD09.paused=1;
        });


        img21.bind("flash",function(){
            $("#name_JJC2").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_JJC2").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_JJC2").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_JJC2").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_JJC2").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");

            GD10.paused=1;
            GD11.paused=1;
        });

        img22.bind("flash",function(){
            $("#name_JJC3").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_JJC3").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_JJC3").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_JJC3").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_JJC3").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");

            GD12.paused=1;
        });

        img3.bind("flash",function(){
            $("#name_VL").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_VL").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_VL").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_Vl").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_Vl").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");

            GD15.paused=1;
        });

        img4.bind("flash",function(){
            $("#name_HHJ").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_HHJ").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_HHJ").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_HHJ").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_HHJ").animate({
                height:'200px',opacity:'1'},'fast');
            img4.unbind("flash");

            GD05.paused=1;
            GD06.paused=1;
            GD07.paused=1;
        });

        img5.bind("flash",function(){
            $("#name_HX").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_HX").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_HX").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_HX").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_HX").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");

            GD13.paused=1;
            GD14.paused=1;
        });

        img6.bind("flash",function(){
            $("#name_QSC1").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_QSC1").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_QSC1").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_QSC1").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_QSC1").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");
        });

        img61.bind("flash",function(){
            $("#name_QSC2").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_QSC2").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_QSC2").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_QSC2").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_QSC2").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");
        });

        img62.bind("flash",function(){
            $("#name_QSC3").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_QSC3").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_QSC3").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_QSC3").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_QSC3").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");
        });

        img63.bind("flash",function(){
            $("#name_QSC4").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_QSC4").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_QSC4").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_QSC4").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_QSC4").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");
        });

        img8.bind("flash",function(){
            $("#name_TC").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_TC").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_TC").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_TC").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_TC").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");

            GD18.paused=1;
            GD19.paused=1;
        });

        img9.bind("flash",function(){
            $("#name_CY").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_CY").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_CY").animate({
                height:'200px',opacity:'1'},'fast');
            $("#name_CY").animate({
                height:'200px',opacity:'0'},'fast');
            $("#name_CY").animate({
                height:'200px',opacity:'1'},'fast');
            this.unbind("flash");

            GD16.paused=1;
            GD17.paused=1;
        });
        canvas.settings.fps=40;
        GD01.paused=1;
    }

    function clearAll(){

        canvas.children[2].fill=color_GD;
        canvas.children[14].fill=color_GD;
        canvas.children[12].fill=color_GD;
        canvas.children[17].fill=color_GD;
        canvas.children[18].fill=color_GD;
        canvas.children[19].fill="rgba(1,1,1,0)";
        canvas.redraw();

        clearOpenDgree("FM05");
        clearOpenDgree("FM06");
        clearOpenDgree("FM07");
        clearOpenDgree("FM09");
        clearOpenDgree("FM010");
        clearOpenDgree("FM065");
        clearOpenDgree("FM062");
        clearOpenDgree("FM063");
        clearOpenDgree("FM064");
        clearOpenDgree("FM066");
        clearOpenDgree("FM069");
        clearOpenDgree("FM015");
        clearOpenDgree("FM045");
        clearOpenDgree("FM014");
        clearOpenDgree("FM016");
        clearOpenDgree("FM068");
        clearOpenDgree("FM067");
        clearOpenDgree("FM017");
        clearOpenDgree("FM018");
        clearOpenDgree("FM019");
        clearOpenDgree("FM067");
        clearOpenDgree("FM052");
        clearOpenDgree("FM020");
        clearOpenDgree("FM056");
        clearOpenDgree("FM057");
        clearOpenDgree("FM058");
        clearOpenDgree("FM053");
        clearOpenDgree("FM054");
        clearOpenDgree("FM021");
        clearOpenDgree("FM022");
        clearOpenDgree("FM024");

        clearOpenDgree("FM059");
        clearOpenDgree("FM046");
        clearOpenDgree("FM044");
        clearOpenDgree("FM055");
        clearOpenDgree("FM026");
        clearOpenDgree("FM051");
        clearOpenDgree("FM055");
        clearOpenDgree("FM047");
        clearOpenDgree("FM048");
        clearOpenDgree("FM049");

        document.getElementById("nextPage").style.display="none";
        document.getElementById("lastPage").style.display="none";


        document.getElementById("fix_line1").innerHTML="";
        document.getElementById("fix_line2").innerHTML="";
        document.getElementById("fix_line3").innerHTML="";
        document.getElementById("fix_line4").innerHTML="";
        document.getElementById("fix_line5").innerHTML="";
        document.getElementById("fix_line6").innerHTML="";
        document.getElementById("fix_line7").innerHTML="";
        document.getElementById("fix_line8").innerHTML="";
        document.getElementById("fix_line9").innerHTML="";
        document.getElementById("fix_line10").innerHTML="";
        changeHide();

        document.getElementById("fix_head").innerHTML="请点击需要维修的阀门";

    }
    function  fix_fm062(){
        clearAll();
        document.getElementById("fix_head").innerHTML="62#阀门维修配合方案";
        document.getElementById("FM062").src="image/y1.png";
        setOpenDgree("FM09");
        setOpenDgree("FM064");

        document.getElementById("fix_line1").innerHTML="打开阀门10#";
        document.getElementById("fix_line2").innerHTML="打开阀门07#";
        document.getElementById("fix_line3").innerHTML="打开阀门65#";
        document.getElementById("fix_line4").innerHTML="打开阀门63#";
        document.getElementById("fix_line5").innerHTML="关闭阀门09#";
        document.getElementById("fix_line6").innerHTML="关闭阀门64#";
        document.getElementById("fix_line7").innerHTML="堵塞62#阀门下侧管道";

        setShow();

    }
    function  fix_fm019(){
        clearAll();
        document.getElementById("fix_head").innerHTML="19#阀门维修配合方案";
        document.getElementById("FM019").src="image/y1.png";
        setOpenDgree("FM016");
        setOpenDgree("FM018");
        setOpenDgree("FM020");
        setOpenDgree("FM021");
//        setOpenDgree("FM023");
        setOpenDgree("FM054");

        document.getElementById("fix_line1").innerHTML="关闭阀门16#";
        document.getElementById("fix_line2").innerHTML="关闭阀门18#";
        document.getElementById("fix_line3").innerHTML="关闭阀门20#";
        document.getElementById("fix_line4").innerHTML="关闭阀门21#";
        document.getElementById("fix_line5").innerHTML="关闭阀门23#";
        document.getElementById("fix_line6").innerHTML="关闭阀门54#";
        document.getElementById("fix_line7").innerHTML="对19#进行施工";

        setShow();

    }

    $("#FM062").click(function(){
        if(confirm("是否将“62#阀门”设置为维修状态？")){
            fix_fm062();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
            document.getElementById("export").href="download/fix-fm062.docx";
            window.setTimeout(function(){
               decay(2,1);
            },100);
            setShow();
        }
    });
    function decay(a,b){
        if(b>0){
            canvas.children[a].fill="rgba(26,215,255,b)";
            switch(b){
                case 1.0:
                    canvas.children[a].fill="rgba(26,215,255,1)";
                    break;
                case 0.9:
                    canvas.children[a].fill="rgba(26,215,255,0.99)";
                    break;
                case 0.8:
                    canvas.children[a].fill="rgba(26,215,255,0.98)";
                    break;
                case 0.7:
                    canvas.children[a].fill="rgba(26,215,255,0.97)";
                    break;
                case 0.6:
                    canvas.children[a].fill="rgba(26,215,255,0.96)";
                    break;
                case 0.5:
                    canvas.children[a].fill="rgba(26,215,255,0.95)";
                    break;
                case 0.4:
                    canvas.children[a].fill="rgba(26,215,255,0.93)";
                    break;
                case 0.3:
                    canvas.children[a].fill="rgba(26,215,255,0.92)";
                    break;
                case 0.2:
                    canvas.children[a].fill="rgba(26,215,255,0.9)";
                    break;
                case 0.1:
                    canvas.children[a].fill="rgba(26,215,255,0.7)";
                    break;
                default :
                    canvas.children[a].fill="rgba(26,215,255,0)";
            }
            window.setTimeout(function(){
                decay(a,b-0.1);
            },100);
        }
    }

    $("#FM019").click(function(){
        if(confirm("是否将“19#阀门”设置为维修状态？")){
            fix_fm019();
            document.getElementById("nextPage").onclick="";
            document.getElementById("lastPage").onclick="";
            document.getElementById("export").href="download/fix-fm019.docx";
            window.setTimeout(function(){
                canvas.children[19].fill=color_GD;
                decay(12,1);
                decay(14,1);
                decay(17,1);
                decay(18,1);
            },100);
            setShow();
        }
    });

    $("#fix_head").bind("mouseenter", function () {
        canvas.mouse.cursor("pointer");
//        this.shadow="0 0 10px #eee";
//        canvas.redraw();
    }).bind("mouseleave", function () {
        canvas.mouse.cursor("default");
//        this.shadow="0 0 0px #eee";
//        canvas.redraw();
    });
    $("#reset").bind("click", function () {
        clearAll();
    });

//    $("#name_QS").click(function(){
//        if(confirm("是否将“取水泵房”设置为维修状态？")){
//            fix_qs_right();
//            document.getElementById("nextPage").onclick=function(){
//                fix_qs_left();
//            };
//            document.getElementById("lastPage").onclick=function(){
//                fix_qs_right();
//            };
//            document.getElementById("export").href="download/fix-qs.doc";
//            setShow();
//        }
//    });
//    $("#name_JJC1").click(function(){
//        if(confirm("是否将“#1机加池”设置为维修状态？")){
//            fix_jjc1();
//            document.getElementById("nextPage").onclick="";
//            document.getElementById("lastPage").onclick="";
//            document.getElementById("export").href="download/fix-jjc1.docx";
//            setShow();
//        }
//    });
//    $("#name_JJC2").click(function(){
//        if(confirm("是否将“#2机加池”设置为维修状态？")){
//            fix_jjc2();
//            document.getElementById("nextPage").onclick="";
//            document.getElementById("lastPage").onclick="";
//            document.getElementById("export").href="download/fix-jjc2.docx";
//            setShow();
//        }
//    });
//    $("#name_JJC3").click(function(){
//        if(confirm("是否将“#3机加池”设置为维修状态？3")){
//            fix_jjc3();
//            document.getElementById("nextPage").onclick="";
//            document.getElementById("lastPage").onclick="";
//            document.getElementById("export").href="download/fix-jjc3.docx";
//            setShow();
//        }
//    });
//    $("#name_VL").click(function(){
//        if(confirm("是否将“V型滤池设置为维修状态？”")){
//            fix_vl();
//            document.getElementById("nextPage").onclick="";
//            document.getElementById("lastPage").onclick="";
//            document.getElementById("export").href="download/fix-vl.docx";
//            setShow();
//        }
//    });
//    $("#name_TC").click(function(){
//        if(confirm("是否将“现有活性炭池”设置为维修状态？")){
//            fix_tc_old();
//            document.getElementById("nextPage").onclick="";
//            document.getElementById("lastPage").onclick="";
//            document.getElementById("export").href="download/fix-tc-old.doc";
//        }
//    });
//    $("#name_TC1").click(function(){
//        if(confirm("是否将“新建活性炭池”设置为维修状态？")){
//            fix_tc_new();
//            document.getElementById("nextPage").onclick="";
//            document.getElementById("lastPage").onclick="";
//            document.getElementById("export").href="download/fix-tc-new.doc";
//        }
//    });
//    $("#name_CY").click(function(){
//        if(confirm("是否将“臭氧接触池”设置为维修状态？")){
//            fix_cy_right();
//            document.getElementById("nextPage").onclick=function(){
//                fix_cy_left();
//            };
//            document.getElementById("lastPage").onclick=function(){
//                fix_cy_right();
//            };
//            document.getElementById("export").href="download/fix-cy.doc";
//            setShow();
//        }
//    });
//    $("#name_HHJ1").click(function(){
//        if(confirm("是否将“旧混合井”设置为维修状态？")){
//            fix_hh_right();
//            document.getElementById("nextPage").onclick=function(){
//                fix_hh_left();
//            };
//            document.getElementById("lastPage").onclick=function(){
//                fix_hh_right();
//            };
//            document.getElementById("export").href="download/fix-hh-old.doc";
//            setShow();
//        }
//    });
//    $("#name_HHJ2").click(function(){
//        if(confirm("是否将“新混合井”设置为维修状态？")){
//            fix_hh_new();
//            document.getElementById("nextPage").onclick="";
//            document.getElementById("lastPage").onclick="";
//            document.getElementById("export").href="download/fix-hh-new.docx";
//        }
//    });
//    $("#name_HX").click(function(){
//        if(confirm("是否将“虹吸滤池”设置为维修状态？")){
//
//            fix_hx_right();
//            document.getElementById("nextPage").onclick=function(){
//                fix_hx_left();
//            };
//            document.getElementById("lastPage").onclick=function(){
//                fix_hx_right();
//            };
//            document.getElementById("export").href="download/fix-hx.doc";
//            setShow();
//
//        }
//    });
//
//    $("#name_QSC1").click(function(){
//        if(confirm("是否将“#1清水池”设置为维修状态？")){
//            fix_qsc3();
//            document.getElementById("nextPage").onclick=function(){
//            };
//            document.getElementById("lastPage").onclick=function(){
//            };
//            document.getElementById("export").href="download/fix-qsc3.docx";
//            setShow();
//        }
//    });
//    $("#name_QSC2").click(function(){
//        if(confirm("是否将“#2清水池”设置为维修状态？")){
//            fix_qsc1();
//            document.getElementById("nextPage").onclick=function(){
//            };
//            document.getElementById("lastPage").onclick=function(){
//            };
//            document.getElementById("export").href="download/fix-qsc1.doc";
//            setShow();
//
//        }
//    });
//    $("#name_QSC3").click(function(){
//        if(confirm("是否将“#3清水池”设置为维修状态？")){
//            fix_qsc2();
//            document.getElementById("nextPage").onclick=function(){
//            };
//            document.getElementById("lastPage").onclick=function(){
//            };
//            document.getElementById("export").href="download/fix-qsc2.doc";
//            setShow();
//        }
//    });
//    $("#name_QSC4").click(function(){
//        if(confirm("是否将“#4清水池”设置为维修状态？")){
//            fix_qsc4();
//            document.getElementById("nextPage").onclick=function(){
//            };
//            document.getElementById("lastPage").onclick=function(){
//            };
//            document.getElementById("export").href="download/fix-qsc4.docx";
//            setShow();
//        }
//    });

});
