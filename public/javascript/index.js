//导航
function nav(ul, div) {
	var ul = document.getElementById(ul);
	var li = ul.getElementsByTagName('li');
	var move = document.getElementById(div);
	var a = li[0].getElementsByTagName('a')[0];
	for (var i = 0, len = li.length; i < len; i++) {
		li[i].index = i;
		li[i].onmouseover = function () {
			move.style.width = this.offsetWidth - 30 + "px";
			move.style.left = this.offsetLeft + "px";
			move.style.height = this.offsetHeight + 'px';
			move.style.backgroundColor = "#CF1423";
			a.style.color = '#fff';
			if (this.index == 0) {
				return;
			} else {
				a.style.color = "#000";
			}
		}
		li[i].onmouseout = function () {
			move.style.left = "0";
			move.style.width = "32px";
			a.style.color = '#fff';
		}
	}
}
nav('move_ul', 'move');
//轮播1
window.onload = function () {
		var container1 = document.getElementById('wrap_wrap');
		var list1 = document.getElementById('wrap');
		var buttons1 = document.getElementById('buttons').getElementsByTagName('span');
		var prev1 = document.getElementById('prev1');
		var next1 = document.getElementById('next1');
		var index1 = 1;
		var timer1;

		function animate1(offset1) {
			//获取的style.left
			var newLeft1 = parseInt(list1.style.left) + offset1;
			list1.style.left = newLeft1 + 'px';
			//无限滚动判断
			if (newLeft1 > -740) {
				list1.style.left = -2200 + 'px';
			}
			if (newLeft1 < -2200) {
				list1.style.left = -740 + 'px';
			}
		}

		function play1() {
			//重复执行的定时器
			timer1 = setInterval(function () {
				next1.onclick();
			}, 2000)
		}

		function stop1() {
			clearInterval(timer1);
		}

		function buttonsShow1() {
			//将之前的小圆点的样式清除
			for (var i = 0; i < buttons1.length; i++) {
				if (buttons1[i].className == "on") {
					buttons1[i].className = "";
				}
			}
			//数组从0开始，故index需要-1
			buttons1[index1 - 1].className = "on";
		}

		prev1.onclick = function () {
			index1 -= 1;
			if (index1 < 1) {
				index1 = 3
			}
			buttonsShow1();
			animate1(740);
		};

		next1.onclick = function () {
			index1 += 1;
			if (index1 > 3) {
				index1 = 1
			}
			animate1(-740);
			buttonsShow1();
		};

		for (var i = 0; i < buttons1.length; i++) {
			buttons1[i].onclick = function () {
				//当前图片点击当前的小圆点不执行
				if (this.className == "on") {
					return;
				}
				//这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上
				//去获取自定义index的属性
				var clickIndex1 = parseInt(this.getAttribute('index1'));
				var offset1 = 740 * (clickIndex1 - index1); //这个index是当前图片停留时的index
				animate1(offset1);
				index1 = clickIndex1; //存放鼠标点击后的位置，用于小圆点的正常显示
				buttonsShow1();
			}
		}
		container1.onmouseover = stop1;
		container1.onmouseout = play1;
		play1();

		//轮播二

		var container = document.getElementById('cont');
		var list = document.getElementById('lis');
		var buttons = document.getElementById('but').getElementsByTagName('span');
		var prev = document.getElementById('prev');
		var next = document.getElementById('next');
		var index = 1;
		var timer;

		function animate(offset) {
			//获取的style.left
			var newLeft = parseInt(list.style.left) + offset;
			list.style.left = newLeft + 'px';
			//无限滚动判断
			if (newLeft > -740) {
				list.style.left = -4440 + 'px';
			}
			if (newLeft < -4440) {
				list.style.left = -740 + 'px';
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

		function buttonsShow() {
			//将之前的小圆点的样式清除
			for (var i = 0; i < buttons.length; i++) {
				if (buttons[i].className == "on") {
					buttons[i].className = "";
				}
			}
			//数组从0开始，故index需要-1
			buttons[index - 1].className = "on";
		}

		prev.onclick = function () {
			index -= 1;
			if (index < 1) {
				index = 6
			}
			buttonsShow();
			animate(740);
		};

		next.onclick = function () {
			index += 1;
			if (index > 6) {
				index = 1
			}
			animate(-740);
			buttonsShow();
		};
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].onclick = function () {
				if (this.className == "on") {
					return;
				}
				//去获取自定义index的属性
				var clickIndex = parseInt(this.getAttribute('index'));
				var offset = 740 * (clickIndex - index); //这个index是当前图片停留时的index
				animate(offset);
				index = clickIndex;
				buttonsShow();
			}
		}
		container.onmouseover = stop;
		container.onmouseout = play;
		play();

	}
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