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

var visitsData = {
	labels: ["2009", "2010", "2011", "2012", "2013", "2014"],
	datasets: [
		{
			label: "Besøk på miljøsentralane",
			fillColor: "rgba(0,124,102,0)",
			strokeColor: "rgba(0,124,102,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [33581, 33780, 34609, 42028, 50790, 59030]
		}
	]
};

var ammountData = {
	labels: ["2009", "2010", "2011", "2012", "2013", "2014"],
	datasets: [
		{
			label: "Mengder levert på miljøsentralane",
			fillColor: "rgba(0,124,102,0)",
			strokeColor: "rgba(0,124,102,1)",
			pointColor: "rgba(0,124,102,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(0,124,102,1)",
			data: [9481, 9284, 10818, 9167, 10852, 11521]
		},
		{
			label: "Mengder levert totalt",
			fillColor: "rgba(204,111,19,0)",
			strokeColor: "rgba(204,111,19,1)",
			pointColor: "rgba(204,111,19,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(204,111,19,1)",
			data: [23428, 24615, 25754, 23896, 25057, 25057]
		}
	]
};

var feesubData = {
	labels: ["Austevoll", "Bømlo", "Fitjar", "Kvinnherad", "Stord", "Sveio", "Tysnes"],
	datasets: [
		{
			label: "renovasjonsabonnement",
			fillColor: "rgba(0,124,102,1)",
            strokeColor: "#fff",
            pointColor: "rgba(0,124,102,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(0,124,102,1)",
			data: [2251, 2163, 2030, 2140, 2337, 2327, 2406]
		},
		{
			label: "Abonnementsgebyr SIM",
			fillColor: "rgba(71,119,151,1)",
            strokeColor: "#fff",
            pointColor: "rgba(71,119,151,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(71,119,151,1)",
			data: [714, 714, 714, 714, 714, 714, 714]
		},
		{
			label: "Kommunalt abonnementsgebyr",
			fillColor: "rgba(204,111,19,1)",
            strokeColor: "#fff",
            pointColor: "rgba(204,111,19,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(204,111,19,1)",
			data: [775, 700, 788, 725, 803, 940, 1180]
		}
	]
};

var feeusedData = [
	{
		value: 	756,
		color:"rgb(0,124,102)",
		highlight: "#26AD77",
		label: "Innsamling"
	},
	{
		value: 298,
		color: "rgb(204,111,19)",
		highlight: "#26AD77",
		label: "Eigenkostnad"
	},
	{
		value: 	455,
		color: "rgb(115,198,151)",
		highlight: "#26AD77",
		label: "Miljøsentralar"
	},
	{
		value: 223,
		color: "rgb(71,119,151)",
		highlight: "#26AD77",
		label: "Sluttbehandling brensel"
	},
	{
		value: 82,
		color: "rgb(201,188,161)",
		highlight: "#26AD77",
		label: "Eigenkostnad kommunar"
	}
	,
	{
		value: 428,
		color: "rgb(189,147,127)",
		highlight: "#26AD77",
		label: "Meirverdiavgift"
	}

];

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
	if(state.indexh == 8 && state.indexv == 2) {
		var ctvisits = $("#visits-sentral").get(0).getContext("2d");
		var myLineVisits = new Chart(ctvisits).Line(visitsData, {
			tooltipTemplate: "<%if (label){%><%=label%> <%}%>: <%= value %> besøkande",
			datasetStrokeWidth : 4
		});
	}
	if(state.indexh == 8 && state.indexv == 3) {
		var ctammount = $("#ammount-sentral").get(0).getContext("2d");
		var myLineAmmount = new Chart(ctammount).Line(ammountData, {
			tooltipTemplate: "<%if (label){%><%=label%> <%}%>: <%= value %> tonn",
			datasetStrokeWidth : 4
		});
	}
	if(state.indexh == 9 && state.indexv == 7) {
		var ctfeesub = $("#fee-subscription").get(0).getContext("2d");
		var myBarFeeSub = new Chart(ctfeesub).Bar(feesubData);
	}
	if(state.indexh == 9 && state.indexv == 8) {
		var ctfeeused = $("#fee-used").get(0).getContext("2d");
		var myBarFeeSub = new Chart(ctfeeused).Pie(feeusedData, {
			tooltipTemplate: "<%if (label){%><%=label%> <%}%>: <%= value %> kr"
		});
	}
});
