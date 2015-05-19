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

			$("html").on('click', function(event) {
			    if ($(event.target).closest('.footer-action').length === 0) {
			        $('.nav-footer').removeClass('show-me');
			    }
			});
		});



		var cid;
		var start;
		function countNum(selector, to, incr) {
			var el = $("." + selector);
			start = start + incr;
			if(start >= to) {
				clearInterval(cid);
				start = to;
			}
			el.html(start);
		}
		function setCounter(classname, from, to, incr, speed) {
			// console.log("yep, the function fired.");
			start = from;
			$("."+classname).html(start);
			cid = setInterval(function(){
				countNum(classname, to, incr);
			}, speed);
		}

		// CUSTOM CONTROLS
		$(".controls .navigate-left").append('<i class="fa fa-arrow-circle-o-left"></i>');
		$(".controls .navigate-right").append('<i class="fa fa-arrow-circle-o-right"></i>');
		$(".controls .navigate-up").append('<i class="fa fa-arrow-circle-o-up"></i>');
		$(".controls .navigate-down").append('<i class="fa fa-arrow-circle-o-down"></i>');


		Reveal.addEventListener( 'slidechanged', function( event ) {
			// Vis bakgrunnsvideo
			if(event.indexh == 6 && event.indexv == 0) {
				$('#beachvid').fadeIn(400);
				$("#beachvid").get(0).play();
			}
			else {
				$('#beachvid').fadeOut(400);
				$("#beachvid").get(0).pause();
			}

			// Teljing på om oss kundar
			if(event.indexh == 1 && event.indexv == 0) {
				setCounter("omosskundar", 0, 44265, 111, 1);
			}

			if(event.indexh == 5 && event.indexv == 1) {
				setCounter("counttonn", 0, 45753, 111, 1);
			}

			if(event.indexh == 5 && event.indexv == 6) {
				setCounter("avfallcount", 0, 98, 1, 10);
			}

			if(event.indexh == 7 && event.indexv == 1) {
				setCounter("miljocount", 0, 59030, 101, 1);
			}

			if(event.indexh == 7 && event.indexv == 2) {
				setCounter("countmeup", 0, 16, 1, 50);
			}

			// CHARTS
			if(event.indexh == 5 && event.indexv == 2) {
				var ctavfall = $("#pie-avfallsmengder").get(0).getContext("2d");
				var myPieavfall = new Chart(ctavfall).Pie(avfallData, {
					tooltipTemplate: "<%if (label){%><%=label%> <%}%><%= value %>%"
				});
			}
			if(event.indexh == 5 && event.indexv == 4) {
				var cthushaldsamla = $("#chart-hushaldsamla").get(0).getContext("2d");
				var myBarhushaldsamla = new Chart(cthushaldsamla).Bar(hushaldsamlabardata, {
					tooltipTemplate: "<%if (label){%><%=label%> <%}%>: <%= value %> tonn"
				});
			}
			if(event.indexh == 5 && event.indexv == 5) {
				var cthenta = $("#chart-area").get(0).getContext("2d");
				var myPie = new Chart(cthenta).Doughnut(pieData, {
					tooltipTemplate: "<%if (label){%><%=label%> <%}%><%= value %>%"
					}
				);
			}
			if(event.indexh == 5 && event.indexv == 7) {
				var cthushold = $("#hushold-bar").get(0).getContext("2d");
				var myBarHushold = new Chart(cthushold).Doughnut(husholdpieData, {
					tooltipTemplate: "<%if (label){%><%=label%> <%}%>: <%= value %> tonn"
				});
			}
			if(event.indexh == 5 && event.indexv == 9) {
				var ctdeponi = $("#bar-chart").get(0).getContext("2d");
				var myBarChart = new Chart(ctdeponi).Bar(deponidata, {
					tooltipTemplate: "<%if (label){%><%=label%> <%}%>: <%= value %> tonn"
				});
			}
			if(event.indexh == 7 && event.indexv == 3) {
				var ctvisits = $("#visits-sentral").get(0).getContext("2d");
				var myLineVisits = new Chart(ctvisits).Line(visitsData, {
					tooltipTemplate: "<%if (label){%><%=label%> <%}%>: <%= value %> besøkande",
					datasetStrokeWidth : 4
				});
			}
			if(event.indexh == 7 && event.indexv == 4) {
				var ctammount = $("#ammount-sentral").get(0).getContext("2d");
				var myLineAmmount = new Chart(ctammount).Line(ammountData, {
					tooltipTemplate: "<%if (label){%><%=label%> <%}%>: <%= value %> tonn",
					datasetStrokeWidth : 4
				});
			}
			if(event.indexh == 8 && event.indexv == 1) {
				var ctkompost = $("#chart-kompost").get(0).getContext("2d");
				var myBarkompost = new Chart(ctkompost).Bar(kompostData, {
					tooltipTemplate: "<%if (label){%><%=label%> <%}%>: <%= value %> tonn"
				});
			}
			if(event.indexh == 8 && event.indexv == 2) {
				var ctkompostselt = $("#selt-kompost").get(0).getContext("2d");
				var myBarkompostselt = new Chart(ctkompostselt).Bar(kompostseltData, {
					tooltipTemplate: "<%if (label){%><%=label%> <%}%>: <%= value %> tonn"
				});
			}
			if(event.indexh == 10 && event.indexv == 1) {
				var ctfeesub = $("#fee-subscription").get(0).getContext("2d");
				var myBarFeeSub = new Chart(ctfeesub).Bar(feesubData);
			}
			if(event.indexh == 10 && event.indexv == 2) {
				var ctgjennomsnitt = $("#gjennomsnitt-renovasjon").get(0).getContext("2d");
				var gjennomsnittren = new Chart(ctgjennomsnitt).Bar(gjennomsnittRenovasjonData);
			}
			if(event.indexh == 10 && event.indexv == 3) {
				var ctrenfritid = $("#renovasjon-fritid").get(0).getContext("2d");
				var renfritid = new Chart(ctrenfritid).Bar(renovasjonFritidData);
			}
			if(event.indexh == 10 && event.indexv == 4) {
				var ctslam = $("#slam-gebyr").get(0).getContext("2d");
				var slamgebyr = new Chart(ctslam).Bar(slamgebyrData);
			}
			if(event.indexh == 10 && event.indexv == 5) {
				var ctfeeused = $("#fee-used").get(0).getContext("2d");
				var myBarUsedFeeSub = new Chart(ctfeeused).Pie(feeusedData, {
					tooltipTemplate: "<%if (label){%><%=label%> <%}%>: <%= value %> kr"
				});
			}
		});
	});

})(jQuery, this);