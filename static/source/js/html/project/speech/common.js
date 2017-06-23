(function($,window,document,undefined){var $window=$(window);$.fn.lazyload=function(options){var elements=this;var $container;var settings={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:window,data_attribute:"original",skip_invisible:true,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};function update(){var counter=0;elements.each(function(){var $this=$(this);if(settings.skip_invisible&&!$this.is(":visible")){return}if($.abovethetop(this,settings)||$.leftofbegin(this,settings)){}else if(!$.belowthefold(this,settings)&&!$.rightoffold(this,settings)){$this.trigger("appear");counter=0}else{if(++counter>settings.failure_limit){return false}}})}if(options){if(undefined!==options.failurelimit){options.failure_limit=options.failurelimit;delete options.failurelimit}if(undefined!==options.effectspeed){options.effect_speed=options.effectspeed;delete options.effectspeed}$.extend(settings,options)}$container=(settings.container===undefined||settings.container===window)?$window:$(settings.container);if(0===settings.event.indexOf("scroll")){$container.bind(settings.event,function(){return update()})}this.each(function(){var self=this;var $self=$(self);self.loaded=false;if($self.attr("src")===undefined||$self.attr("src")===false){if($self.is("img")){$self.attr("src",settings.placeholder)}}$self.one("appear",function(){if(!this.loaded){if(settings.appear){var elements_left=elements.length;settings.appear.call(self,elements_left,settings)}$("<img />").bind("load",function(){var original=$self.attr("data-"+settings.data_attribute);$self.hide();if($self.is("img")){$self.attr("src",original)}else{$self.css("background-image","url('"+original+"')")}$self[settings.effect](settings.effect_speed);self.loaded=true;var temp=$.grep(elements,function(element){return!element.loaded});elements=$(temp);if(settings.load){var elements_left=elements.length;settings.load.call(self,elements_left,settings)}}).attr("src",$self.attr("data-"+settings.data_attribute))}});if(0!==settings.event.indexOf("scroll")){$self.bind(settings.event,function(){if(!self.loaded){$self.trigger("appear")}})}});$window.bind("resize",function(){update()});if((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)){$window.bind("pageshow",function(event){if(event.originalEvent&&event.originalEvent.persisted){elements.each(function(){$(this).trigger("appear")})}})}$(document).ready(function(){update()});return this};$.belowthefold=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=(window.innerHeight?window.innerHeight:$window.height())+$window.scrollTop()}else{fold=$(settings.container).offset().top+$(settings.container).height()}return fold<=$(element).offset().top-settings.threshold};$.rightoffold=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.width()+$window.scrollLeft()}else{fold=$(settings.container).offset().left+$(settings.container).width()}return fold<=$(element).offset().left-settings.threshold};$.abovethetop=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.scrollTop()}else{fold=$(settings.container).offset().top}return fold>=$(element).offset().top+settings.threshold+$(element).height()};$.leftofbegin=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.scrollLeft()}else{fold=$(settings.container).offset().left}return fold>=$(element).offset().left+settings.threshold+$(element).width()};$.inviewport=function(element,settings){return!$.rightoffold(element,settings)&&!$.leftofbegin(element,settings)&&!$.belowthefold(element,settings)&&!$.abovethetop(element,settings)};$.extend($.expr[":"],{"below-the-fold":function(a){return $.belowthefold(a,{threshold:0})},"above-the-top":function(a){return!$.belowthefold(a,{threshold:0})},"right-of-screen":function(a){return $.rightoffold(a,{threshold:0})},"left-of-screen":function(a){return!$.rightoffold(a,{threshold:0})},"in-viewport":function(a){return $.inviewport(a,{threshold:0})},"above-the-fold":function(a){return!$.belowthefold(a,{threshold:0})},"right-of-fold":function(a){return $.rightoffold(a,{threshold:0})},"left-of-fold":function(a){return!$.rightoffold(a,{threshold:0})}})})(jQuery,window,document);Placeholder={defaultSettings:{normal:'#000000',placeholder:'#C0C0C0',wait:false,classFocus:'',classBlur:'',range:document},init:function(a){if(a){for(var b in a){Placeholder.defaultSettings[b]=a[b]}}var c=Placeholder.defaultSettings.range.getElementsByTagName("input");var d=Placeholder.defaultSettings.range.getElementsByTagName("textarea");var e=Placeholder.utils.concat(c,d);for(var i=0;i<e.length;i++){var g=e[i].getAttribute("placeholder");if(g&&e[i].type=="text"||e[i].type=="password"||e[i].type=="textarea"){var h=e[i];h.onclick=function(){Placeholder.onSelected(this)};h.onfocus=function(){};h.onblur=function(){Placeholder.unSelected(this)};if(Placeholder.defaultSettings.wait){h.onkeypress=function(){Placeholder.onType(this)}}Placeholder.style.inactive(h);h.value=g;var j=Placeholder.defaultSettings.range.getElementsByTagName('form');for(var f=0;f<j.length;f++){if(j[f]){var k=j[f].children;if(Placeholder.utils.contains(k,h)){j[f].onsubmit=function(){Placeholder.submitted(this)}}}}}}},onSelected:function(a){if(Placeholder.defaultSettings.wait==true){if(a.value==a.getAttribute('placeholder')){Placeholder.utils.caret(a)}}else{if(a.value==a.getAttribute('placeholder')){a.value=''}Placeholder.style.normal(a)}},onType:function(a){var b=a.getAttribute('placeholder');a.value=a.value.replace(b,'');if(a.value.length<=0){Placeholder.style.inactive(a);a.value=b;Placeholder.utils.caret(a)}else{Placeholder.style.normal(a)}},unSelected:function(a){if(a.value.length<=0){Placeholder.style.inactive(a);a.value=a.getAttribute("placeholder")}},submitted:function(a){var b=a.children;for(var i=0;i<b.length;i++){if(b[i]){var c=b[i];if(c.tagName.toLowerCase()=="input"||c.tagName.toLowerCase()=="textarea"){if(c.value==c.getAttribute('placeholder')){c.value=""}}}}},style:{normal:function(a){if(Placeholder.defaultSettings.classFocus){a.className=Placeholder.defaultSettings.classFocus}else{a.style.color=Placeholder.defaultSettings.normal}},inactive:function(a){if(Placeholder.defaultSettings.classBlur){a.className=Placeholder.defaultSettings.classBlur}else{a.style.color=Placeholder.defaultSettings.placeholder}}},utils:{contains:function(a,b){for(var i=0;i<a.length;i++){if(a[i]){if(a[i]==b){return true}}}return false},concat:function(a,b){var c=[];for(var i=0;i<a.length;i++){if(a[i]){c.push(a[i])}}for(var i=0;i<b.length;i++){if(b[i]){c.push(b[i])}}return c},caret:function(a){if(a.setSelectionRange){a.focus();a.setSelectionRange(0,0)}else if(a.createTextRange){var b=a.createTextRange();b.collapse(true);b.moveEnd('character',0);b.moveStart('character',0);b.select()}}}};function checkRegisterFormNoNick(dom){if(typeof $=='undefined'){document.write('<script type="text/javascript" src="/js/jquery.js"><\/script>')}var scope=typeof dom=='undefined'?document:dom;var user_name=$(scope).find('input[name="user_name"]').val();if(user_name.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)==null){alert('请填写正确的邮箱地址');return false}var password=$(scope).find('input[name="password"]').val();if(password==""){alert('密码不能为空');return false}if(password.length<6||password.length>20){alert('密码长度应在6-20位之间');return false}var mobile=$(scope).find('input[name="mobile"]').val();if(mobile.match(/^1[0-9]{10}$/)==null){alert('请填写正确的手机号码');return false}return true}var DD_belatedPNG={ns:'DD_belatedPNG',imgSize:{},delay:10,nodesFixed:0,createVmlNameSpace:function(){if(document.namespaces&&!document.namespaces[this.ns]){document.namespaces.add(this.ns,'urn:schemas-microsoft-com:vml')}},createVmlStyleSheet:function(){var screenStyleSheet,printStyleSheet;screenStyleSheet=document.createElement('style');screenStyleSheet.setAttribute('media','screen');document.documentElement.firstChild.insertBefore(screenStyleSheet,document.documentElement.firstChild.firstChild);if(screenStyleSheet.styleSheet){screenStyleSheet=screenStyleSheet.styleSheet;screenStyleSheet.addRule(this.ns+'\\:*','{behavior:url(#default#VML)}');screenStyleSheet.addRule(this.ns+'\\:shape','position:absolute;');screenStyleSheet.addRule('img.'+this.ns+'_sizeFinder','behavior:none; border:none; position:absolute; z-index:-1; top:-10000px; visibility:hidden;');this.screenStyleSheet=screenStyleSheet;printStyleSheet=document.createElement('style');printStyleSheet.setAttribute('media','print');document.documentElement.firstChild.insertBefore(printStyleSheet,document.documentElement.firstChild.firstChild);printStyleSheet=printStyleSheet.styleSheet;printStyleSheet.addRule(this.ns+'\\:*','{display: none !important;}');printStyleSheet.addRule('img.'+this.ns+'_sizeFinder','{display: none !important;}')}},readPropertyChange:function(){var el,display,v;el=event.srcElement;if(!el.vmlInitiated){return}if(event.propertyName.search('background')!=-1||event.propertyName.search('border')!=-1){DD_belatedPNG.applyVML(el)}if(event.propertyName=='style.display'){display=(el.currentStyle.display=='none')?'none':'block';for(v in el.vml){if(el.vml.hasOwnProperty(v)){el.vml[v].shape.style.display=display}}}if(event.propertyName.search('filter')!=-1){DD_belatedPNG.vmlOpacity(el)}},vmlOpacity:function(el){if(el.currentStyle.filter.search('lpha')!=-1){var trans=el.currentStyle.filter;trans=parseInt(trans.substring(trans.lastIndexOf('=')+1,trans.lastIndexOf(')')),10)/100;el.vml.color.shape.style.filter=el.currentStyle.filter;el.vml.image.fill.opacity=trans}},handlePseudoHover:function(el){setTimeout(function(){DD_belatedPNG.applyVML(el)},1)},fix:function(selector){if(this.screenStyleSheet){var selectors,i;selectors=selector.split(',');for(i=0;i<selectors.length;i++){this.screenStyleSheet.addRule(selectors[i],'behavior:expression(DD_belatedPNG.fixPng(this))')}}},applyVML:function(el){el.runtimeStyle.cssText='';this.vmlFill(el);this.vmlOffsets(el);this.vmlOpacity(el);if(el.isImg){this.copyImageBorders(el)}},attachHandlers:function(el){var self,handlers,handler,moreForAs,a,h;self=this;handlers={resize:'vmlOffsets',move:'vmlOffsets'};if(el.nodeName=='A'){moreForAs={mouseleave:'handlePseudoHover',mouseenter:'handlePseudoHover',focus:'handlePseudoHover',blur:'handlePseudoHover'};for(a in moreForAs){if(moreForAs.hasOwnProperty(a)){handlers[a]=moreForAs[a]}}}for(h in handlers){if(handlers.hasOwnProperty(h)){handler=function(){self[handlers[h]](el)};el.attachEvent('on'+h,handler)}}el.attachEvent('onpropertychange',this.readPropertyChange)},giveLayout:function(el){el.style.zoom=1;if(el.currentStyle.position=='static'){el.style.position='relative'}},copyImageBorders:function(el){var styles,s;styles={'borderStyle':true,'borderWidth':true,'borderColor':true};for(s in styles){if(styles.hasOwnProperty(s)){el.vml.color.shape.style[s]=el.currentStyle[s]}}},vmlFill:function(el){if(!el.currentStyle){return}else{var elStyle,noImg,lib,v,img,imgLoaded;elStyle=el.currentStyle}for(v in el.vml){if(el.vml.hasOwnProperty(v)){el.vml[v].shape.style.zIndex=elStyle.zIndex}}el.runtimeStyle.backgroundColor='';el.runtimeStyle.backgroundImage='';noImg=true;if(elStyle.backgroundImage!='none'||el.isImg){if(!el.isImg){el.vmlBg=elStyle.backgroundImage;el.vmlBg=el.vmlBg.substr(5,el.vmlBg.lastIndexOf('")')-5)}else{el.vmlBg=el.src}lib=this;if(!lib.imgSize[el.vmlBg]){img=document.createElement('img');lib.imgSize[el.vmlBg]=img;img.className=lib.ns+'_sizeFinder';img.runtimeStyle.cssText='behavior:none; position:absolute; left:-10000px; top:-10000px; border:none; margin:0; padding:0;';imgLoaded=function(){this.width=this.offsetWidth;this.height=this.offsetHeight;lib.vmlOffsets(el)};img.attachEvent('onload',imgLoaded);img.src=el.vmlBg;img.removeAttribute('width');img.removeAttribute('height');document.body.insertBefore(img,document.body.firstChild)}el.vml.image.fill.src=el.vmlBg;noImg=false}el.vml.image.fill.on=!noImg;el.vml.image.fill.color='none';el.vml.color.shape.style.backgroundColor=elStyle.backgroundColor;el.runtimeStyle.backgroundImage='none';el.runtimeStyle.backgroundColor='transparent'},vmlOffsets:function(el){var thisStyle,size,fudge,makeVisible,bg,bgR,dC,altC,b,c,v;thisStyle=el.currentStyle;size={'W':el.clientWidth+1,'H':el.clientHeight+1,'w':this.imgSize[el.vmlBg].width,'h':this.imgSize[el.vmlBg].height,'L':el.offsetLeft,'T':el.offsetTop,'bLW':el.clientLeft,'bTW':el.clientTop};fudge=(size.L+size.bLW==1)?1:0;makeVisible=function(vml,l,t,w,h,o){vml.coordsize=w+','+h;vml.coordorigin=o+','+o;vml.path='m0,0l'+w+',0l'+w+','+h+'l0,'+h+' xe';vml.style.width=w+'px';vml.style.height=h+'px';vml.style.left=l+'px';vml.style.top=t+'px'};makeVisible(el.vml.color.shape,(size.L+(el.isImg?0:size.bLW)),(size.T+(el.isImg?0:size.bTW)),(size.W-1),(size.H-1),0);makeVisible(el.vml.image.shape,(size.L+size.bLW),(size.T+size.bTW),(size.W),(size.H),1);bg={'X':0,'Y':0};if(el.isImg){bg.X=parseInt(thisStyle.paddingLeft,10)+1;bg.Y=parseInt(thisStyle.paddingTop,10)+1}else{for(b in bg){if(bg.hasOwnProperty(b)){this.figurePercentage(bg,size,b,thisStyle['backgroundPosition'+b])}}}el.vml.image.fill.position=(bg.X/size.W)+','+(bg.Y/size.H);bgR=thisStyle.backgroundRepeat;dC={'T':1,'R':size.W+fudge,'B':size.H,'L':1+fudge};altC={'X':{'b1':'L','b2':'R','d':'W'},'Y':{'b1':'T','b2':'B','d':'H'}};if(bgR!='repeat'||el.isImg){c={'T':(bg.Y),'R':(bg.X+size.w),'B':(bg.Y+size.h),'L':(bg.X)};if(bgR.search('repeat-')!=-1){v=bgR.split('repeat-')[1].toUpperCase();c[altC[v].b1]=1;c[altC[v].b2]=size[altC[v].d]}if(c.B>size.H){c.B=size.H}el.vml.image.shape.style.clip='rect('+c.T+'px '+(c.R+fudge)+'px '+c.B+'px '+(c.L+fudge)+'px)'}else{el.vml.image.shape.style.clip='rect('+dC.T+'px '+dC.R+'px '+dC.B+'px '+dC.L+'px)'}},figurePercentage:function(bg,size,axis,position){var horizontal,fraction;fraction=true;horizontal=(axis=='X');switch(position){case'left':case'top':bg[axis]=0;break;case'center':bg[axis]=0.5;break;case'right':case'bottom':bg[axis]=1;break;default:if(position.search('%')!=-1){bg[axis]=parseInt(position,10)/100}else{fraction=false}}bg[axis]=Math.ceil(fraction?((size[horizontal?'W':'H']*bg[axis])-(size[horizontal?'w':'h']*bg[axis])):parseInt(position,10));if(bg[axis]%2===0){bg[axis]++}return bg[axis]},fixPng:function(el){el.style.behavior='none';var lib,els,nodeStr,v,e;if(el.nodeName=='BODY'||el.nodeName=='TD'||el.nodeName=='TR'){return}el.isImg=false;if(el.nodeName=='IMG'){if(el.src.toLowerCase().search(/\.png$/)!=-1){el.isImg=true;el.style.visibility='hidden'}else{return}}else if(el.currentStyle.backgroundImage.toLowerCase().search('.png')==-1){return}lib=DD_belatedPNG;el.vml={color:{},image:{}};els={shape:{},fill:{}};for(v in el.vml){if(el.vml.hasOwnProperty(v)){for(e in els){if(els.hasOwnProperty(e)){nodeStr=lib.ns+':'+e;el.vml[v][e]=document.createElement(nodeStr)}}el.vml[v].shape.stroked=false;el.vml[v].shape.appendChild(el.vml[v].fill);el.parentNode.insertBefore(el.vml[v].shape,el)}}el.vml.image.shape.fillcolor='none';el.vml.image.fill.type='tile';el.vml.color.fill.on=false;lib.attachHandlers(el);lib.giveLayout(el);lib.giveLayout(el.offsetParent);el.vmlInitiated=true;lib.applyVML(el)}};try{document.execCommand("BackgroundImageCache",false,true)}catch(r){}DD_belatedPNG.createVmlNameSpace();DD_belatedPNG.createVmlStyleSheet();