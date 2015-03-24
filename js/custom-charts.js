// Include after reveal.js, as reveal api is needed
var pieData = [
	{
		value: 59,
		color:"#666666",
		highlight: "#26AD77",
		label: "Restavfall: 8 969 tonn"
	},
	{
		value: 22,
		color: "#B28978",
		highlight: "#26AD77",
		label: "Bioavfall: 3 359 tonn"
	},
	{
		value: 15,
		color: "#14B3F0",
		highlight: "#26AD77",
		label: "Papir: 2 295 tonn"
	},
	{
		value: 4,
		color: "#F0F0F0",
		highlight: "#26AD77",
		label: "Anna avfall"
	}

];

var deponidata = {
    labels: ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"],
     datasets: [
        {
            label: "Verdi",
            fillColor: "#007C66",
            strokeColor: "#666666",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [27.157, 27.157, 28.362, 26.726, 30.146, 32.293, 36.454, 40.604, 41.028, 37.952, 13.248, 5.568, 5.185, 11.100, 8.075]
        }
    ]
};

var avfallData = [
	{
		value: 1.7,
		color:"rgb(189,147,127)",
		highlight: "#26AD77",
		label: "Hushaldsavfall deponi: 798 tonn"
	},
	{
		value: 52,
		color: "rgb(29,125,102)",
		highlight: "#26AD77",
		label: "Hushaldsavfall attvinning: 24 150 tonn"
	},
	{
		value: 15,
		color: "rgb(115,198,151)",
		highlight: "#26AD77",
		label: "Næringsavfall deponi: 7 277 tonn"
	},
	{
		value: 21,
		color: "rgb(99,93,124)",
		highlight: "#26AD77",
		label: "Næringsavfall attvinning: 9 659 tonn"
	},
	{
		value: 8.4,
		color: "rgb(71,119,151)",
		highlight: "#26AD77",
		label: "Slam: 3 870 tonn"
	}

];

var husholdData = {
    labels: ["Avfallsbrensel", "Våtorganisk", "Heimekompostering", "Papir", "Glas", "Stål", "EE-avfall", "Hageavfall", "Gips", "Trevirke", "Farleg avfall", "Plast"],
     datasets: [
        {
            label: "Husavfall",
            fillColor: "#007C66",
            strokeColor: "#fff",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [11604, 3328, 792, 2667, 465, 1067, 660, 875, 128, 2890, 764, 75]
        }
    ]
};

Chart.defaults.global.responsive = false;
Chart.defaults.global.scaleFontFamily = "'Source Sans Pro', 'Helvetica', 'Arial', sans-serif";
Chart.defaults.global.tooltipFontFamily = "'Source Sans Pro', 'Helvetica', 'Arial', sans-serif";
Chart.defaults.global.tooltipTitleFontFamily = "'Source Sans Pro', 'Helvetica', 'Arial', sans-serif";

Reveal.addEventListener( 'slidechanged', function( event ) {
	var state = Reveal.getState();
	if(state.indexh == 7 && state.indexv == 1) {
		var cthenta = $("#chart-area").get(0).getContext("2d");
		var myPie = new Chart(cthenta).Doughnut(pieData, {
			tooltipTemplate: "<%if (label){%><%=label%> <%}%><%= value %>%"
			}
		);
	}
	if(state.indexh == 7 && state.indexv == 2) {
		var ctdeponi = $("#bar-chart").get(0).getContext("2d");
		var myBarChart = new Chart(ctdeponi).Bar(deponidata, {
			tooltipTemplate: "<%if (label){%><%=label%> <%}%>: <%= value %> tonn"
		});
	}
	if(state.indexh == 7 && state.indexv == 3) {
		var ctavfall = $("#pie-avfallsmengder").get(0).getContext("2d");
		var myPieavfall = new Chart(ctavfall).Pie(avfallData, {
			tooltipTemplate: "<%if (label){%><%=label%> <%}%><%= value %>%"
		});
	}
	if(state.indexh == 7 && state.indexv == 4) {
		var cthushold = $("#hushold-bar").get(0).getContext("2d");
		var myBarHushold = new Chart(cthushold).Bar(husholdData, {
			tooltipTemplate: "<%if (label){%><%=label%> <%}%>: <%= value %> tonn"
		});
	}
});
