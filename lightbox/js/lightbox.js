// Obviously there is no need to use Jquery in this little component
var Lightbox = (function(){
	return {
		data : null,
		getData:function(){
			
			var that = this;
			$.ajax({
					url: "js/data.json"
				})
			.done(function(data) {

					that.data = data.data ;
	            	that.startProgress();
	       		});

		},
		start:function(){
			this.open();
			this.getData();
		},
		open:function(){
			
			$("div#lightbox>div.container").addClass('modal-open');
			$("div#lightbox").addClass('before');
		},
		close:function(){
			$("div#lightbox>div.container").removeClass('modal-open');
			$("div#lightbox").removeClass('before');
			$('.progress-bar').css({left:this.data.lightbox.start});
			this.reset();
		},
		startProgress:function() {
			
		    var percent = this.data.lightbox.percent || 100; // if you've mentioned a percent in your data.json , we would consider updating our progress-bar with that
		    var finish  = this.data.lightbox.finish;// finish would be the maximum percent
		    var duration = this.data.lightbox.duration;
		    var sleep = duration / finish; // sleep duration for each interval
		    var i = 0 ;
		    var interval = setInterval(function(){
		        i++;
		        $(".progress").css("width", i + "%");
		        $(".percent").text("Progress "+i + "%");
		        console.log(i);
		        if(i>=percent){
		        	if(i==finish){
		        		$(".progress").css({'background-color':"#78B620"});
		        		$(".percent").html("This task is "+i + "% completed <img id='tick' src='images/tick.png  '>");
		        	}
		            clearInterval(interval);
		        }
		    }, sleep);
		},
		reset:function(){
			$(".progress").css({'background-color':"#6EABD6"});
		    $(".percent").text("");
			
		}

	}
})();


