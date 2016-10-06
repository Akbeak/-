setInterval(function() {
    var iframe = $('iframe', parent.document.body);
    iframe.height($(document.body).height());
},2);

			$("img").click(function () {
				if (!this.big) {
				if (!this.animatingBig) {
				this.animatingBig=true;
				$(this).animate({width: "50%"},500,"swing",function () {this.animatingBig=false; this.big = true;});
			}}else{
				if (!this.animatingSmall) {
				this.animatingSmall=true;
				$(this).animate({width: "10%"},500,"swing",function () {this.animatingSmall=false; this.big = false;});
			}
			}
		
	});