/**
 *
 * @authors vincent (zhuning@51talk.com)
 * @date    2015-07-21 12:10:30
 * @version 1.0.0
 */
define(function(require,exports,module){
/*邮箱验证*/
var reTel = /^1[0-9]{10}$/;
$("#sha-reg01").click(function(){
  var tel = $("#sha-tel01").val();
  var passwd = $("#sha-psd01").val();
  if (tel == "") {
    alert("请填写手机号码");
    return false;
  }
  if (!reTel.test(tel)) {
    alert("请填写正确格式手机号码");
    return false;
  }
  if (passwd == "") {
    alert("请填写密码");
    return false;
  }
  document.getElementById("RegForm01").submit();
});
$("#sha-reg02").click(function(){
  var tel = $("#sha-tel02").val();
  var passwd = $("#sha-psd02").val();
  if (tel == "") {
    alert("请填写手机号码");
    return false;
  }
  if (!reTel.test(tel)) {
    alert("请填写正确格式手机号码");
    return false;
  }
  if (passwd == "") {
    alert("请填写密码");
    return false;
  }
  document.getElementById("RegForm02").submit();
});
  
});

