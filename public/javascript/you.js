//导航
function nav(ul, div) {
	var ul = document.getElementById(ul);
	var li = ul.getElementsByTagName('li');
	var move = document.getElementById(div);
	var a = li[1].getElementsByTagName('a')[0];
	for (var i = 0, len = li.length; i < len; i++) {
		li[i].index = i;
		li[i].onmouseover = function () {
			move.style.width = this.offsetWidth + "px";
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
			move.style.width = "78px";
			a.style.color = '#fff';
		}
	}
}
nav('move_ul', 'move');
//轮播1
window.onload = function () {
		var container = document.getElementById('container');
		var list = document.getElementById('list');
		var buttons = document.getElementById('buttons').getElementsByTagName('span');
		var next = document.getElementById('next');
		var index = 1;
		var timer;

		function animate(offset) {
			//获取的style.left
			var newLeft = parseInt(list.style.left) + offset;
			list.style.left = newLeft + "px";
			//无限滚动判断
			if (newLeft > -730) {
				list.style.left = -2190 + 'px';
			}
			if (newLeft < -2190) {
				list.style.left = -730 + 'px';
			}
		}

		function play() {
			//重复执行的定时器
			timer = setInterval(function () {
				next.onclick();
			}, 2000)
		}

		function stop() {
			clearInterval(timer);
		}

		next.onclick = function () {
			index += 1;
			if (index > 3) {
				index = 1;
			}
			animate(-730);
			buttonsShow();
		}

		function buttonsShow() {
			//将之前的小圆点的样式清除
			for (var i = 0; i < buttons.length; i++) {
				if (buttons[i].className == "on") {
					buttons[i].className = "";
				}
			}
			//数组从0开始，故index需要-1
			buttons[index - 1].className = "on"
		}
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].onclick = function () {
				//当前图片点击当前的小圆点不执行
				if (this.className == "on") {
					return;
				}
				//这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上
				//去获取自定义index的属性
				var clickIndex = parseInt(this.getAttribute('index'));
				var offset = 730 * (clickIndex - index);
				animate(offset);
				index = clickIndex;
				buttonsShow()
			}
		}

		container.onmouseover = stop;
		container.onmouseout = play;

	}
	//机票搜索
function ticket(a, b) {
	var begin = document.getElementById(a);
	var city = document.getElementById(b);
	var sp = city.getElementsByTagName('span');
	begin.onclick = function () {
		city.style.display = "block";
	}
	for (var i = 0, p = sp.length; i < p; i++) {
		sp[i].onclick = function () {
			begin.value = this.innerHTML;
			city.style.display = "none";
		}
	}
}
ticket('begin', "begin_city");
ticket('over', 'over_city');
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