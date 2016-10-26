var mima = document.getElementById("epwd");
var qr = document.getElementById("qr");
var queren = document.getElementById("queren");
qr.onblur = function () {
	if (mima.value != qr.value) {
		queren.innerHTML = "两次输入的密码不一致！";
		queren.style.color = "red";
	}
}