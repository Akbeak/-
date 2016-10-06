setInterval(function() {
    var iframe = $('iframe', parent.document.body);
    iframe.height($(document.body).height());
},2);

			$("img").hover(function () {
				if (!this.animatingBig) {
				this.animatingBig=true;
				$(this).animate({width: "50%"},500,"swing",function () {this.animatingBig=false;});
			}
			},
			function () {
				if (!this.animatingSmall) {
				this.animatingSmall=true;
				$(this).animate({width: "10%"},500,"swing",function () {this.animatingSmall=false;});
			}
			});