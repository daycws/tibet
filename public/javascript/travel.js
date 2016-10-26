//导航
function nav(ul, div) {
	var ul = document.getElementById(ul);
	var li = ul.getElementsByTagName('li');
	var move = document.getElementById(div);
	var a = li[1].getElementsByTagName('a')[0];
	for (var i = 0, len = li.length; i < len; i++) {
		li[i].index = i;
		li[i].onmouseover = function () {
			move.style.width = this.offsetWidth - 32 + "px";
			move.style.left = this.offsetLeft + "px";
			move.style.height = this.offsetHeight + 'px';
			move.style.backgroundColor = "#CF1423";
			a.style.color = '#fff';
			if (this.index == 1) {
				return;
			} else {
				a.style.color = "#000";
			}
		}
		li[i].onmouseout = function () {
			move.style.left = "62px";
			move.style.width = "48px";
			a.style.color = '#fff';
		}
	}
}
nav('move_ul', 'move');
//返回顶部
window.onscroll = function () {
		var mytop = document.documentElement.scrollTop || document.body.scrollTop;
		var topdiv = document.getElementById("top_div");
		var saoma = document.getElementById("saoma");
		if (mytop >= 100) {
			topdiv.style.display = "inline";
			saoma.style.display = "inline";
		} else {
			topdiv.style.display = "none";
			saoma.style.display = "none";
		}

		times.onclick = function () {
			saoma.style.display = "none";
		}
	}
	//弹出登录框
var tan = document.getElementById("denglu");
var fugai = document.getElementById("deng");
var off = document.getElementById("close");
tan.onclick = function () {
	fugai.style.display = "block";
}
off.onclick = function () {
	fugai.style.display = "none";
}