setInterval(function() {
    var iframe = $('iframe', parent.document.body);
    iframe.height($(document.body).height());
},5);
var animating = false;

			$("img").hover(function () {
				if (!animating) {
				animating=true;
				$(this).animate({width: "50%"},500,"swing",function () {animating=false;});
			}
			},
			function () {
				if (!animating) {
				animating=true;
				$(this).animate({width: "100px"},500,"swing",function () {animating=false;});
			}
			});