(function ($, root, undefined) {

	$(function () {

		'use strict';

		// replace svg with png on old ie
		if($("html").hasClass("oldie")) {
			$('img[src*="svg"]').attr('src', function() {
				return $(this).attr('src').replace('.svg', '.png');
			});
		}

		// Open or close footer menu
		$('.footer-action').on('click', function(event) {
			event.preventDefault();
			$('.nav-footer').toggleClass('show-me');

			$("html").click(function(event) {
			    if ($(event.target).closest('.nav-footer, .footer-action').length === 0) {
			        $('.nav-footer').removeClass('show-me');
			    }
			});
		});

		Reveal.addEventListener( 'slidechanged', function( event ) {

			if(event.indexh == 4 && event.indexv == 0) {
				$('body').append('<video id="beachvid" autoplay loop poster="img/backgrounds/video/sponavik.jpg"><source src="img/backgrounds/video/sponavik.mp4" type="video/mp4"><source src="img/backgrounds/video/sponavik.webm" type="vid/webm"><p>Nettlesaren din støttar ikkje html5 video, ver venleg å oppdater.</p></video>')
				$('#beachvid').fadeIn(400);
			}
			else {
				$('#beachvid').fadeOut(400);
				$('#beachvid').remove();
			}

			if(event.indexh == 7 && event.indexv == 1) {
				var cthenta = $("#chart-area").get(0).getContext("2d");
				var myPie = new Chart(cthenta).Doughnut(pieData, {
					tooltipTemplate: "<%if (label){%><%=label%> <%}%><%= value %>%"
					}
				);
			}
			if(event.indexh == 7 && event.indexv == 2) {
				var ctdeponi = $("#bar-chart").get(0).getContext("2d");
				var myBarChart = new Chart(ctdeponi).Bar(deponidata, {
					tooltipTemplate: "<%if (label){%><%=label%> <%}%>: <%= value %> tonn"
				});
			}
			if(event.indexh == 7 && event.indexv == 3) {
				var ctavfall = $("#pie-avfallsmengder").get(0).getContext("2d");
				var myPieavfall = new Chart(ctavfall).Pie(avfallData, {
					tooltipTemplate: "<%if (label){%><%=label%> <%}%><%= value %>%"
				});
			}
			if(event.indexh == 7 && event.indexv == 4) {
				var cthushold = $("#hushold-bar").get(0).getContext("2d");
				var myBarHushold = new Chart(cthushold).Doughnut(husholdpieData, {
					tooltipTemplate: "<%if (label){%><%=label%> <%}%>: <%= value %> tonn"
				});
			}
			if(event.indexh == 8 && event.indexv == 2) {
				var ctvisits = $("#visits-sentral").get(0).getContext("2d");
				var myLineVisits = new Chart(ctvisits).Line(visitsData, {
					tooltipTemplate: "<%if (label){%><%=label%> <%}%>: <%= value %> besøkande",
					datasetStrokeWidth : 4
				});
			}
			if(event.indexh == 8 && event.indexv == 3) {
				var ctammount = $("#ammount-sentral").get(0).getContext("2d");
				var myLineAmmount = new Chart(ctammount).Line(ammountData, {
					tooltipTemplate: "<%if (label){%><%=label%> <%}%>: <%= value %> tonn",
					datasetStrokeWidth : 4
				});
			}
			if(event.indexh == 9 && event.indexv == 7) {
				var ctfeesub = $("#fee-subscription").get(0).getContext("2d");
				var myBarFeeSub = new Chart(ctfeesub).Bar(feesubData);
			}
			if(event.indexh == 9 && event.indexv == 8) {
				var ctfeeused = $("#fee-used").get(0).getContext("2d");
				var myBarFeeSub = new Chart(ctfeeused).Pie(feeusedData, {
					tooltipTemplate: "<%if (label){%><%=label%> <%}%>: <%= value %> kr"
				});
			}
		});
	});

})(jQuery, this);