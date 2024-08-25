var audioObj;
var isMuted = false;
var volume=1;
var isHashInit=true;
var win,doc,iframe;
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var adoEF;
var cd_no=1;
var chasi;
var chasiList;
var chasiIndex=0;
var previewMode = false;

window.scale=1;

$(document).ready(function(){
	isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

	document.body.oncontextmenu = function() { return false; }
	if(isChrome)
		adoExt = 'ogg';

	calcScale();
});

window.onload = function() {
	//initPage();
	calcScale();
};

window.addEventListener('resize', calcScale, true);

function calcScale() {
	var bw = 1920;
	var bh = 1080;
	var sw = $(window).width()/bw;
	var sh = $(window).height()/bh;
	// sw = sw>bw || sw>1?1:sw;
	// sh = sh>bh || sh>1?1:sh;
	window.scale = sw>sh?sh:sw;

	var tx = ($(window).width() - $('#container').width()*window.scale)/2/window.scale;
	var ty = ($(window).height() - $('#container').height()*window.scale)/2/window.scale;

	$('#container').css({
		'scale':window.scale,
		x:tx, y:ty,
		transformOrigin:'0% 0%'
	});
}