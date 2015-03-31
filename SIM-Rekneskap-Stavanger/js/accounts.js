/* Define template variable */
var templates = (function ($, host) {
  return {
      load: function (templateArray, target, event) {

          var defferArray = [];
          $.each(templateArray, function (idx, url) {
          	  var urlcode = url.substr(-7,2);
              var loader = $.get(url)
                  .success(function (data) {
                  $(target).append(data);
              })
              defferArray.push(loader);
          })

          $.when.apply(null, defferArray).done(function () {
              $(host).trigger(event);
          });
      }
  };
})(jQuery, document);

/* jQuery plugin for scrolling inside an element  */
jQuery.fn.scrollTo = function(elem, offset, speed) { 
    $(this).animate({
        scrollTop:  $(this).scrollTop() - $(this).offset().top + $(elem).offset().top - (offset == undefined ? 100 : offset)
    }, speed == undefined ? 1000 : speed); 
    return this; 
};




(function ($, root, undefined) {
	
	// when account html´s are loaded
	$(root).on("files-loaded", function () {
		$("#accountcontent .accountref").each(function(){
			$("#accountsmenu ul").append('<li><a href="#" class="accounttarget" data-id-ref="'+$(this).attr("id")+'">'+$(this).text()+'</a></li>');
		});

		$('.accounttarget').on('click', function(event) {
			event.preventDefault();
			if($(this).data("id-ref")){
				$('#accountsmenu').removeClass('open');
				$("#accountoverlay").scrollTo($("#"+$(this).data("id-ref")));
			}
		});
	});

	$(function () {

		'use strict';

		$.ajaxSetup({async:false});

		$('body').append('<div id="accountoverlay"><nav id="accountsmenu"><ul></ul></nav><a href="#" id="accountmenuopen"><i class="fa fa-bars"></i></a><a href="#" id="accountsclose"><i class="fa fa-close"></i></a><div id="accountcontent"></div></div>');

		/* Load the external file(s) */
		var templateArray = ["accounts/accounts.html"];
	  	templates.load(templateArray, "#accountcontent", "files-loaded");


		/* Fired when external documents are loaded */
		function notesloaded(){
			$('#menu a').bind('click',function(e) {
				e.preventDefault();
				$("nav#menu").trigger('close');
				if($(this).hasClass("notessearch")){
					var notesnumber = $(this).data("notelink");
					openNotes(notesnumber);
				} else {
					var slidenum = $(this).data("slide");
					var subnum = $(this).data("sub");
					Reveal.slide(slidenum, subnum);
				}
			});
		}

		function openNotes(){
			/* Disable Reveal mousewheel scroll */
			Reveal.configure({ mouseWheel: false });
			
			
	    	/*$('#accountoverlay').fadeIn( "fast", function() {
	    		
	    	});*/

			$('#accountoverlay').show().css("opacity", 0);

	    	$('#accountoverlay').animate({
		        scrollTop:  0,
		        opacity: 1,
		    }, 400, function(){
		    	
    		});
			

			/*$('#accountoverlay').animate({
	        	scrollTop: $("#"+noteslink+"note").position().top + toppadding - 300
	    	}, 1000);*/
		}

		function closeNotes(){
			/* Enable Reveal mousewheel scroll */
			Reveal.configure({ mouseWheel: true });
			
			$('#accountoverlay').animate({
		        scrollTop:  100,
		        opacity: 0,
		    }, 400, function(){
		    	$('#accountoverlay').hide();
    		});
		}

		$('#accountsclose').on('click', function(event) {
			event.preventDefault();
			closeNotes();
		});

		$('#accountmenuopen').on('click', function(event) {
			event.preventDefault();
			if($('#accountsmenu').hasClass('open')){
				$('#accountsmenu').removeClass('open');
			} else {
				$('#accountsmenu').addClass('open');
			}
			
		});

		$('#showaccounts').on('click', function(event) {
			event.preventDefault();
			openNotes();
		});

	});

})(jQuery, this);