define("offlineTable",[],function(t,a,e){function n(t){var a=new Date;a.setDate(a.getDate()+t);var e=a.getFullYear(),n=a.getMonth()+1,s=a.getDate();return e+"-"+n+"-"+s}function s(){for(var t="",a=-6;0>=a;a++)t+=0==a?'<a href="javascript:;" class="cut-style">'+n(a)+"</a>":'<a href="javascript:;">'+n(a)+"</a>";$(".add-btn-float-left").html(t)}function r(){i.request("post","/AdminMonitor/adminMonitorStat",{beginTime:n(0)},function(t){console.log(t),o(t)})}function d(){var t=$(".add-btn-float-left a");t.on("click",function(){$(this).addClass("cut-style").siblings("a").removeClass("cut-style"),i.request("post","/AdminMonitor/adminMonitorStat",{beginTime:$(this).text()},function(t){o(t)})})}function o(t){var a="";if(0==t.data.length)$(".table-box h5").show(),$(".table-detail").hide();else{$(".table-box h5").hide(),$(".table-detail").show();for(var e=t.permanent,n=t.temporary,s=t.BJCC.temporary,r=t.BJCC.permanent,d=t.BJIS.temporary,o=t.BJIS.permanent,i=t.CT.temporary,l=t.CT.permanent,p="\u603b\u8ba1\uff1a\u4e34\u65f6\u6389\u7ebf:"+n+" \u6c38\u4e45\u6389\u7ebf:"+e+"</br>BJCC[\u4e34\u65f6]:"+s+"&nbsp;BJCC[\u6c38\u4e45]:"+r+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BJIS[\u4e34\u65f6]:"+d+" BJIS[\u6c38\u4e45]:"+o+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CT[\u4e34\u65f6]:"+i+" CT[\u6c38\u4e45]:"+l,b=0;b<t.data.length;b++){var u=t.data[b].user_name,c=t.data[b].admin_group,f=t.data[b].wechat_id,m=t.data[b].device_id,h=t.data[b].add_time,C="2"==t.data[b].status?"\u4e34\u65f6":"\u6c38\u4e45";a+="<tr><td>"+u,a+="</td><td>"+c,a+="</td><td>"+f,a+="</td><td>"+m,a+="</td><td>"+h,a+="</td><td>"+C,a+="</td></tr>"}$(".status-data").html(p),$(".sel-dom").html(a)}}var i={request:function(t,a,e,n,s){$.ajax({url:a,type:t,data:e,dataType:"JSON",success:function(t){n(t)},error:s})}};s(),r(),d()});