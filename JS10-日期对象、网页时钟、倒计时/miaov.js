// JavaScript Document

//模拟jquery
function $(v){
	if(typeof v === 'function'){
		window.onload = v;
	}else if( typeof v === 'string'){
		return document.getElementById(v);
	}else if(typeof v === 'object'){
		return v
	}
};

//获取行外样式
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];	
	}else {
		return getComputedStyle(obj,0)[attr];
	}
};

//清空所有li的样式
function clearCss(liArray){
	for (var i = 0; i < liArray.length; i++) {
		liArray[i].className = '';
	}
};

//doMove
function doMove (obj, attr, dir, target, endFn) {
	dir = parseInt(getStyle(obj,attr)) < target ? dir : -dir;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var speed = parseInt(getStyle(obj,attr)) + dir;
		if (speed > target && dir > 0 || speed < target && dir < 0 ) {
			speed = target;
		}
		obj.style[attr] =  speed + "px";
		if (speed == target) {
			clearInterval(obj.timer);
			// if (endFn) {
			// 	endFn();
			// }
			endFn && endFn(); //回调函数
		}
	}, 30);
};