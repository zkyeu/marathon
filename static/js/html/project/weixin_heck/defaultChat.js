define("defaultChat",["weixinUtil"],function(i,t,e){var n=i("weixinUtil");!function(){var i=.9*window.innerHeight;$(".big-bg").attr("style","height:"+i+"px")}(),"Chrome"!=n.checkBrowser()?($(".big-bg div input").attr({"class":"disBtn",disabled:"disabled"}),alert("\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u5fae\u4fe1\u804a\u5929\uff0c\u8bf7\u4f7f\u7528\u8c37\u6b4c\u6d4f\u89c8\u5668\u64cd\u4f5c\uff01")):$(".big-bg div input").addClass("ablBtn")});