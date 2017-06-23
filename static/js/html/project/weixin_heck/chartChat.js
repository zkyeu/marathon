define("chartChat",["echarts.min","layui"],function(t,e,n){function a(t,e,n,a){$.ajax({url:"/WechatStats/statistics",data:{userGroup:t,type:e,beginTime:n,endTime:a},async:!1,dataType:"json",type:"POST",success:function(t){return 0==t.length?($("#chartLable").hide(),$(".table-list h5").show(),$(".show-detail").hide(),!1):($(".table-list h5").hide(),$(".show-detail").show(),void o(t))}})}function o(t){for(var e={xData:[],yData:{receive_num:[],send_num:[],web_send_num:[],phone_send_num:[],sys_send_num:[],mid_send_num:[],hint_num:[]}},n="",a=0;a<t.length;a++){var o=t[a].label;e.xData.push(o);var i=void 0==t[a].receive_num?0:t[a].receive_num,l=void 0==t[a].send_num?0:t[a].send_num,r=void 0==t[a].web_send_num?0:t[a].web_send_num,s=void 0==t[a].phone_send_num?0:t[a].phone_send_num,m=void 0==t[a].sys_send_num?0:t[a].sys_send_num,d=void 0==t[a].mid_send_num?0:t[a].mid_send_num,u=void 0==t[a].hint_num?0:t[a].hint_num;n+="<tr>",n+="<td>"+o+"</td>",n+="<td>"+i+"</td>",n+="<td>"+l+"</td>",n+="<td>"+r+"</td>",n+="<td>"+d+"</td>",n+="<td>"+s+"</td>",n+="<td>"+m+"</td>",n+="<td>"+u+"</td>",n+="</tr>",e.yData.receive_num.push(i),e.yData.send_num.push(l),e.yData.web_send_num.push(r),e.yData.mid_send_num.push(d),e.yData.phone_send_num.push(s),e.yData.sys_send_num.push(m),e.yData.hint_num.push(u)}$("#tableList").html(n);var _={text:"\u6570\u636e\u62a5\u8868",subtext:"\u6570\u636e\u6765\u81ea\u9ed1\u9e1f\u56e2\u961f",xAxis:e.xData,legend:["\u6536\u5230\u6d88\u606f\u6570","\u53d1\u9001\u6d88\u606f\u6c47\u603b","\u901a\u8fc7\u7f51\u9875\u53d1\u9001\u6570","\u4e2d\u8f6c\u53d1\u9001\u6570","\u624b\u673a\u53d1\u9001\u6570","\u81ea\u52a8\u53d1\u9001\u6570","\u63d0\u793a\u6d88\u606f\u6570"],barData:{receive_num:e.yData.receive_num,send_num:e.yData.send_num,web_send_num:e.yData.web_send_num,mid_send_num:e.yData.mid_send_num,phone_send_num:e.yData.phone_send_num,sys_send_num:e.yData.sys_send_num,hint_num:e.yData.hint_num},normal:{colorList:["#ff6565","#ffc800","#37b0ff","#1ecfb0","#96d23a","#bebebe","#FF4DFF"],show:!0,position:"top"},grid:{left:"1%",right:"2%",bottom:"3%",containLabel:!0}},y=document.getElementById("chartLable"),h="100%-20";y.setAttribute("style","~cacl(width:"+h+"px);height:500px;margin-left:20px;overflow-x:auto;");var b=echarts.init(y),c={title:{text:_.text,subtext:_.subtext},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:function(){return _.legend}()},grid:{left:_.grid.left,right:_.grid.right,bottom:_.grid.bottom,containLabel:_.grid.containLabel},xAxis:{type:"category",data:function(){return _.xAxis}()},yAxis:{type:"value",boundaryGap:[0,.01]},series:[{name:_.legend[0],type:"bar",data:_.barData.receive_num,itemStyle:{normal:{barBorderRadius:[10,10,0,0],color:_.normal.colorList[0]}},label:{normal:{show:_.normal.show,position:_.normal.position,textStyle:{fontWeight:"bolder",fontSize:"14",fontFamily:"\u5fae\u8f6f\u96c5\u9ed1",fontStyle:"normal"}}}},{name:_.legend[1],type:"bar",data:_.barData.send_num,itemStyle:{normal:{barBorderRadius:[10,10,0,0],color:_.normal.colorList[1]}},label:{normal:{show:_.normal.show,position:_.normal.position,textStyle:{fontWeight:"bolder",fontSize:"14",fontFamily:"\u5fae\u8f6f\u96c5\u9ed1",fontStyle:"normal"}}}},{name:_.legend[2],type:"bar",data:_.barData.web_send_num,itemStyle:{normal:{barBorderRadius:[10,10,0,0],color:_.normal.colorList[2]}},label:{normal:{show:_.normal.show,position:_.normal.position,textStyle:{fontWeight:"bolder",fontSize:"14",fontFamily:"\u5fae\u8f6f\u96c5\u9ed1",fontStyle:"normal"}}}},{name:_.legend[3],type:"bar",data:_.barData.mid_send_num,itemStyle:{normal:{barBorderRadius:[10,10,0,0],color:_.normal.colorList[3]}},label:{normal:{show:_.normal.show,position:_.normal.position,textStyle:{fontWeight:"bolder",fontSize:"14",fontFamily:"\u5fae\u8f6f\u96c5\u9ed1",fontStyle:"normal"}}}},{name:_.legend[4],type:"bar",data:_.barData.phone_send_num,itemStyle:{normal:{barBorderRadius:[10,10,0,0],color:_.normal.colorList[4]}},label:{normal:{show:_.normal.show,position:_.normal.position,textStyle:{fontWeight:"bolder",fontSize:"14",fontFamily:"\u5fae\u8f6f\u96c5\u9ed1",fontStyle:"normal"}}}},{name:_.legend[5],type:"bar",data:_.barData.sys_send_num,itemStyle:{normal:{barBorderRadius:[10,10,0,0],color:_.normal.colorList[5]}},label:{normal:{show:_.normal.show,position:_.normal.position,textStyle:{fontWeight:"bolder",fontSize:"14",fontFamily:"\u5fae\u8f6f\u96c5\u9ed1",fontStyle:"normal"}}}},{name:_.legend[6],type:"bar",data:_.barData.hint_num,itemStyle:{normal:{barBorderRadius:[10,10,0,0],color:_.normal.colorList[6]}},label:{normal:{show:_.normal.show,position:_.normal.position,textStyle:{fontWeight:"bolder",fontSize:"14",fontFamily:"\u5fae\u8f6f\u96c5\u9ed1",fontStyle:"normal"}}}}]};b.setOption(c)}t("echarts.min"),t("layui"),$.getJSON("/WechatStats/userGroupList",function(t){var e="";for(val in t)e+='<option value="'+val+'">'+t[val]+"</option>";$("#typeList").append(e)});var i=$(".by-time span");i.on("click",function(){$(this).addClass("cut-sel").siblings().removeClass("cut-sel")}),$("#stime").val(),$("#etime").val(),a("1","1",$("#stime").val(),$("#etime").val()),$("#confirmBtn").on("click",function(){var t=$("#stime").val(),e=$("#etime").val(),n=$("#typeList").val(),o=$(".cut-sel").attr("data-time"),i=new Date(t),l=new Date(e);return i>l&&alert("\u622a\u6b62\u65f6\u95f4\u4e0d\u80fd\u65e9\u4e8e\u5f00\u59cb\u65f6\u95f4\uff01"),""==t||""==t?alert("\u8bf7\u9009\u62e9\u65f6\u95f4\uff01"):""==n?alert("\u8bf7\u9009\u62e9\u7c7b\u578b"):void a(n,o,t,e)})});