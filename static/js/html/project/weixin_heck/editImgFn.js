define("editImgFn",["whiteBoard_1.0","editImgSeal","editImgCut"],function(t,o,i){t("whiteBoard_1.0"),t("editImgSeal");var e=t("editImgCut"),n=window,a=n.WBSdk,s=new function(){var t=this;t.init=function(o){var i={source:"",timeDelay:300,tools:["pencil","highPencil","rect","rubberOld","rubberNew","draft","seal","zoom","text","back","clear","rotate","cut","save"],toolsConfig:{whiteBoard:{pencil:"\u6279\u6539",highPencil:"\u8367\u5149\u7b14",rect:"\u77e9\u5f62",rubberOld:"\u65e7\u6a61\u76ae",rubberNew:"\u6a61\u76ae",draft:"\u62d6\u52a8",text:"\u8bc4\u8bed",back:"\u64a4\u9500",clear:"\u6e05\u9664"},editImg:{seal:"\u56fe\u7ae0",rotate:"\u65cb\u8f6c",save:"\u53d1\u8868",zoom:"\u7f29\u653e",cut:"\u88c1\u526a"}},quickDownCb:function(o,i){if(o.ctrlKey){var e=$(".go-seal").eq(1==o.which?0:1),n=e.find("img");e.addClass("cur").siblings().removeClass("cur"),$.extend(confInfo.seal,n.data(),{source:n.attr("src")}),confInfo.seal.originWidth=n.data().width,confInfo.seal.originHeight=n.data().height,t.updateSealScale(t.imgSource.scale),a.changeSealSource(function(){i._curDrawType=i.curDrawType,a.draw("seal")})}},quickUpCb:function(t,o){o._curDrawType&&(o.draw(o._curDrawType),o._curDrawType="")}};t.configs=$.extend({},i,o),t.creatDom(),t.initDom(function(){a.initBoard({quickDownCb:t.configs.quickDownCb,quickUpCb:t.configs.quickUpCb})})},t.imgSource={width:0,height:0,curWidth:0,curHeight:0,_width:0,_height:0,rotate:0,src:"",scale:1,resizeLock:!1,isRotate:function(){return this.rotate/90%2==1},updateCur:function(t){if(t.curWidth&&t.curHeight){this.curWidth=t.curWidth,this.curHeight=t.curHeight;var o=this.isRotate();this.scale=(o?this.curHeight:this.curWidth)/this.width}if(t.isRotate){var i=this._width,e=this._height;this._width=e,this._height=i}}},t.dom={domData:{container:'<div id="editImgContainer"></div>',paintConLR:'<span class="paintConPage paintConPageLeft" id="paintConPageLeft"></span>                              <span class="paintConPage paintConPageRight" id="paintConPageRight"></span>',isEdit:'<div class="wx_pop hw_edit">                            <dl class="wx_pop_in wx_pop_alert">                                <dt>\u8be5\u5b66\u751f\u4f5c\u4e1a\u5df2\u88ab\u6279\u6539\uff0c\u662f\u5426\u91cd\u65b0\u6279\u6539\uff1f</dt>                                <dd>                                    <span class="wx_pop_sure" rel="fnHide">\u786e\u5b9a</span>                                </dd>                            </dl>                          </div>',paintConPar:'<div id="paintConPar"></div>',paintConInfo:'<span id="paintConInfo"></span>',paintCon:'<div id="paintCon">								<canvas id="canvasRes"></canvas>		        				<canvas id="canvasBak" oncontextmenu="return false"></canvas>		        				<canvas id="canvasImg"></canvas>		        			</div>',paintConTool:'<ul id="paintConTool"></ul>',paintCut:'<div id="paintCut">                                <div class="paintCutContainer"></div>                                <div class="paintCutBtns">                                    <span class="cut-sure" data-type="sure">\u786e\u8ba4</span>                                    <span class="cut-cancel" data-type="cancel">\u53d6\u6d88</span>                                </div>                            </div>',canvasBakImg:'<div id="canvasBakImg"></div>',paintConClose:'<span id="paintConClose"></span>',paintLoading:'<div class="paintLoading"></div>'}},t.domTools={seal:'<div class="tools-seal-in tools-in">						<div class="tools-seal-inner">						</div>					</div>',zoom:'<div class="tools-zoom-in tools-in">						<div class="tools-zoom-inner">							<span class="zoom-left">0%</span>							<div class="zoom-tool">								<span class="zoom-drag"></span>							</div>							<span class="zoom-right">100%</span>						</div>					</div>'},t.updateSource=function(t){$.extend(!0,confInfo,t)},t.initDom=function(o){var i=t.configs.source;t.dom.paintConInfo.html(t.configs.nickName+"\u7684\u4f5c\u4e1a"),t.configs.isEdit&&t.dom.isEdit.show(),t.getImgInfo(i,function(i,e){t.imgSource.src=e,t.imgSource.width=i.width,t.imgSource.height=i.height,t.imgSource._width=i.width,t.imgSource._height=i.height,t.updateSource({background:{source:t.configs.source}}),t.loading.close(),t.setPaintConPar(o)},function(){alert("\u52a0\u8f7d\u5931\u8d25\u8bf7\u91cd\u8bd5\uff01"),t.loading.close()})},t.loading={open:function(){t.dom.paintLoading.show()},close:function(){t.dom.paintLoading.hide()}},t.setPaintConPar=function(o,i){var e,n,a=i||.9,s=(t.imgSource.isRotate(),t.imgSource._width),c=t.imgSource._height,r=t.dom.paintConPar,d=t.dom.paintCon,l=t.dom.canvasBakImg,u=r.width()*a,h=r.height()*a,f=s/c,g=u/h;u>s&&h>c?(e=s,n=c):f>g?(e=u,n=u/f):(n=h,e=h*f);var m={width:e,height:n};t.imgSource.updateCur({curWidth:m.width,curHeight:m.height}),t.updateSealScale(t.imgSource.scale),d.css(m),t.imgSource.isRotate()&&(m.width=n,m.height=e),l.animate(m,o)},t.setRotate=function(o){var i=t.imgSource.rotate+o;t.dom.canvasBakImg.css({transform:"translate(-50%, -50%) rotateZ("+i+"deg)"}),t.imgSource.rotate=i,t.dom.paintCon.css({transform:"translate(-50%, -50%) rotateZ(0deg)",width:t.imgSource.curHeight,height:t.imgSource.curWidth}),t.imgSource.updateCur({isRotate:!0}),t.resetSize()},t.creatDom=function(){if(t.dom.container)return void t.dom.container.show();for(var o in t.dom.domData){var i=t.dom.domData[o];t.dom[o]=$(i)}t.dom.paintConPar.append(t.dom.canvasBakImg),t.dom.paintConPar.append(t.dom.paintCon),t.dom.container.append(t.dom.isEdit),t.dom.container.append(t.dom.paintConInfo),t.dom.container.append(t.dom.paintLoading),t.dom.container.append(t.dom.paintConLR),t.dom.container.append(t.dom.paintCut),t.dom.container.append(t.dom.paintConClose),t.dom.container.append(t.dom.paintConPar),$.each(t.configs.tools,function(o,i){$.each(t.configs.toolsConfig,function(o,e){i in e&&t.appendTools(i,o,e[i])})}),t.dom.container.append(t.dom.paintConTool),t.dom.container.appendTo("body").show(),t.bindEvent()},t.appendTools=function(o,i,e){var n=$("<li atype="+i+" ctype="+o+" class=tools-"+o+">"+e.split("").join(" ")+"</li>");if("save"!=o&&n.addClass("tools-tools"),o in t.domTools&&(t.domTools["$"+o]=$(t.domTools[o]),n.append(t.domTools["$"+o])),"seal"==o){var a=t.domTools.$seal.find(".tools-seal-inner");$.each(sealConfig,function(t,o){a.append("<p class=go-seal><img src="+o.source+" data-type=type"+t+" data-width="+o.width+" data-height="+o.height+" /></p>")})}t.dom.paintConTool.append(n)},t.resetSize=function(){clearTimeout(t.mt),t.mt=setTimeout(function(){t.setPaintConPar(a.canvasResize)},t.configs.timeDelay)},t.bindEvent=function(){$(n).on("resize",function(){t.imgSource.resizeLock||t.resetSize()}),t.dom.isEdit.on("click","[rel=fnHide]",function(){t.dom.isEdit.hide()}),t.dom.paintConClose.on("click",t.close),t.tools=t.dom.paintConTool.find(".tools-tools"),t.firstTool=t.tools.eq(0),t.firstTool.addClass("tools-select"),t.dom.paintConTool.on("click","li",function(o){var i=$(this),e=i.attr("atype"),n=i.attr("ctype");switch(!i.hasClass("tools-tools")||i.hasClass("tools-rotate")||i.hasClass("tools-cut")||i.addClass("tools-select").siblings().removeClass("tools-select"),e){case"whiteBoard":a.draw(n);break;case"editImg":t.eventHandler[n]&&t.eventHandler[n](i,o)}}),$.inArray("zoom",t.configs.tools)>-1&&t.initZoom(),$.inArray("seal",t.configs.tools)>-1&&t.initSeal(),t.lrInit()},t.lrInit=function(){var o=t.dom.paintConLR,i=o.filter("#paintConPageLeft"),e=o.filter("#paintConPageRight");i.on("click",function(){t.switchFn("l")}),e.on("click",function(){t.switchFn("r")})},t.switchFn=function(o){var i,e=$(".home-work-list-in>ul>li .todo"),n=e.length;switch(e.each(function(t,o){var e=$(o);return e.hasClass("cur-edit")?(i=t+1,!1):void 0}),t.close(),o){case"l":1==i?i=n:i--;break;case"r":i==n?i=1:i++}e.eq(i-1).click()},t.initZoom=function(){var o,i=t.tools.filter(".tools-zoom"),e=i.find(".tools-zoom-inner"),n=e.find(".zoom-tool"),a=n.find(".zoom-drag"),s=!1,c=function(t){if(0>t)return 0;var o=n.width()-a.width();return t>o?o:t};i.on("mouseleave",function(){s=!1}),n.on("click",function(t){var o=$(this),i=t.pageX-o.offset().left;a.css({left:c(i)})}),e.on({mousedown:function(t){var i=$(t.target);i.hasClass("zoom-drag")&&(o=t.pageX-a.offset().left,s=!0)},mousemove:function(t){if(s){var i=t.pageX-n.offset().left-o;a.css({left:c(i)})}},mouseup:function(){s=!1}})},t.initSeal=function(){var o=t.tools.filter(".tools-seal");o.on("click",".go-seal",function(){var o=$(this);o.addClass("cur").siblings().removeClass("cur");var i=o.find("img");$.extend(confInfo.seal,i.data(),{source:i.attr("src")}),confInfo.seal.originWidth=i.data().width,confInfo.seal.originHeight=i.data().height,t.updateSealScale(t.imgSource.scale),a.changeSealSource(function(){a.draw("seal")})}),t.sealTool=o},t.updateSealScale=function(t){},t.eventHandler={save:function(){var o=t.imgSource;t.loading.open(),WBSdk.buildCurrentImg(o._width,o._height,o.rotate%360,function(o,i){t.loading.close(),t.configs.save(o,i)})},rotate:function(o,i){t.setRotate(90)},cut:function(){t.cut.init()}},t.cut={isInit:!1,id:"resizeWrap",init:function(){var o=this;this.bindEvent(),e.init({id:o.id,container:t.dom.paintCut.children(".paintCutContainer")[0],limit:$(window).width(),beforeInit:function(o){var i=$(o),e=t.dom.paintCon,n=e.offset().left-4,a=e.offset().top-4,s=e.width(),c=e.height();i.css({left:n,top:a,width:s,height:c}),t.imgSource.resizeLock=!0}}),t.dom.paintCut.show()},bindEvent:function(){var o=this;if(!o.isInit){var i=t.dom.paintCut.find(".paintCutBtns");i.on("click","span",function(){var t=$(this),i=t.attr("data-type");o[i]&&o[i]()}),o.isInit=!0}},sure:function(){t.loading.open();var o,i,e,n,a,s=this,c=$("#"+this.id),r=t.dom.paintCon,d=c.width(),l=c.height(),u=parseInt(c.css("borderWidth"));!function(){var h=t.imgSource,f=h.rotate%360,g=document.createElement("canvas"),m=g.getContext("2d");switch(String(f)){case"0":o=d,i=l,e=c.offset().left+u-r.offset().left,n=c.offset().top+u-r.offset().top;break;case"90":o=l,i=d,e=c.offset().top-r.offset().top+u,n=r.offset().left+r.width()-c.offset().left-c.outerWidth()+u;break;case"180":o=d,i=l,e=r.offset().left+r.width()-c.offset().left-c.outerWidth()+u,n=r.offset().top+r.height()-c.offset().top-c.outerHeight()+u;break;case"270":o=l,i=d,e=r.offset().top+r.height()-c.offset().top-c.outerHeight()+u,n=c.offset().left-r.offset().left+u}var p=Math.floor(o/h.scale),v=Math.floor(i/h.scale),C=e/h.scale,w=n/h.scale;0>C&&(C=0),0>w&&(w=0),p>h.width&&(p=h.width),v>h.height&&(v=h.height),g.width=p,g.height=v;var S=new Image;S.onload=function(){m.drawImage(S,-C,-w),a=g.toDataURL("img/png");var o={width:d,height:l},i=editImgFn.imgSource.isRotate(),e=i?{width:l,height:d}:o;r.css(o),t.dom.canvasBakImg.css(e),t.dom.canvasBakImg.css("background-image","url("+a+")"),t.updateSource({background:{source:a}}),$.extend(t.imgSource,{src:a,width:p,height:v,_width:i?v:p,_height:i?p:v}),s.cancel(),t.loading.close()},S.src=t.imgSource.src}()},cancel:function(){t.dom.paintCut.hide(),t.imgSource.resizeLock=!1,t.resetSize()}},t.close=function(){t.dom.container.hide(),t.clear(),t.resetTool()},t.resetTool=function(){a.draw(t.firstTool.attr("ctype")),t.firstTool.addClass("tools-select").siblings().removeClass("tools-select")},t.clear=function(){a.draw("clear"),a.mouseup(),t.dom.isEdit.hide(),t.sealTool.find(".go-seal").removeClass("cur"),t.dom.canvasBakImg.css({background:"none",transform:"translate(-50%, -50%)"}),t.cut.cancel(),t.imgSource.rotate=0,t.imgSource.src="",t.imgSource.width="",t.imgSource.height="",$("#inputBak, #input").remove(),t.firstTool.trigger("click"),t.loading.open()},t.getImgInfo=function(t,o,i){var e=new Image;e.crossOrigin="",e.onload=function(){var t=document.createElement("canvas"),i=t.getContext("2d");t.width=e.width,t.height=e.height,i.drawImage(e,0,0);var n=t.toDataURL("img/png");o&&o(e,n)},e.onerror=function(){i&&i()},e.src=t}};i.exports=s});