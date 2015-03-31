// Include after reveal.js, as reveal api is needed

var colors = {
	green: "#007C66",
	greenRgb: "0,124,102",
	greenLight: "#73C697",
	greenLightRgb: "115,198,151",
	grey: "#666666",
	greyRgb: "102,102,102",
	greyLight: "#f0f0f0",
	greyLightRgb: "240,240,240",
	brown: "#B28978",
	brownRgb: "178,137,120",
	brownLight: "#C9BCA1",
	brownLightRgb: "201,188,161",
	blue: "#14B3F0",
	blueRgb: "20,179,240",
	bluelightRgb: "169,216,243",
	blueGreyRgb: "124,159,177",
	purple: "#635D7C",
	purpleRgb: "99,93,124",
	purpleLightRgb: "215,119,227",
	orange: "#CC6F13",
	orangeRgb: "204,111,19",
	magentaRgb: "228,74,138",
	yellowRgb: "241,167,26",
	yellowLightRgb: "216,187,25",
	redRgb: "205,26,29"
};

var pieData = [
	{
		value: 61,
		color: colors.grey,
		highlight: colors.greenLight,
		label: "Restavfall: 8 969 tonn"
	},
	{
		value: 23,
		color: colors.brown,
		highlight: colors.greenLight,
		label: "Bioavfall: 3 359 tonn"
	},
	{
		value: 16,
		color: colors.blue,
		highlight: colors.greenLight,
		label: "Papir: 2 295 tonn"
	}
];

var deponidata = {
    labels: ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"],
     datasets: [
        {
            label: "Verdi",
            fillColor: colors.green,
            strokeColor: "rgba("+colors.greyRgb+",0)",
            pointColor: colors.grey,
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: colors.grey,
            data: [27.157, 27.157, 28.362, 26.726, 30.146, 32.293, 36.454, 40.604, 41.028, 37.952, 13.248, 5.568, 5.185, 11.100, 8.075]
        }
    ]
};

var hushaldsamlabardata = {
    labels: ["2009", "2010", "2011", "2012", "2013", "2014"],
     datasets: [
        {
            label: "Samla husholdsavfall",
            fillColor: colors.green,
            strokeColor: "rgba("+colors.greyRgb+",0)",
            pointColor: colors.grey,
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: colors.grey,
            data: [23428, 24615, 25754, 23896, 25057, 24892]
        }
    ]
};

var avfallData = [
	{
		value: 1.7,
		color: colors.brown,
		highlight: colors.greenLight,
		label: "Hushaldsavfall deponi: 798 tonn"
	},
	{
		value: 52,
		color: colors.green,
		highlight: colors.greenLight,
		label: "Hushaldsavfall attvinning: 24 150 tonn"
	},
	{
		value: 15,
		color: colors.greenLight,
		highlight: colors.greenLight,
		label: "Næringsavfall deponi: 7 277 tonn"
	},
	{
		value: 21,
		color: colors.purple,
		highlight: colors.greenLight,
		label: "Næringsavfall attvinning: 9 659 tonn"
	},
	{
		value: 8.4,
		color: colors.blue,
		highlight: colors.greenLight,
		label: "Slam: 3 870 tonn"
	}

];

var husholdpieData = [
	{
		value: 11726,
		color: colors.grey,
		highlight: colors.greenLight,
		label: "Avfallsbrensel"
	},
	{
		value: 3359,
		color: colors.brown,
		highlight: colors.greenLight,
		label: "Våtorganisk"
	},
	{
		value: 775,
		color: colors.brownLight,
		highlight: colors.greenLight,
		label: "Heimekompostering"
	},
	{
		value: 2662,
		color: colors.blue,
		highlight: colors.greenLight,
		label: "Papir"
	},
	{
		value: 486,
		color: "rgb("+colors.bluelightRgb+")",
		highlight: colors.greenLight,
		label: "Glas"
	},
	{
		value: 1231,
		color: "rgb("+colors.blueGreyRgb+")",
		highlight: colors.greenLight,
		label: "Stål"
	},
	{
		value: 675,
		color: "rgb("+colors.magentaRgb+")",
		highlight: colors.greenLight,
		label: "EE-avfall"
	},
	{
		value: 660,
		color: colors.green,
		highlight: colors.greenLight,
		label: "Hageavfall"
	},
	{
		value: 158,
		color: "rgb("+colors.yellowLightRgb+")",
		highlight: colors.greenLight,
		label: "Gips"
	},
	{
		value: 2367,
		color: "rgb("+colors.purpleLightRgb+")",
		highlight: colors.greenLight,
		label: "Trevirke"
	},
	{
		value: 695,
		color: "rgb("+colors.redRgb+")",
		highlight: colors.greenLight,
		label: "Farleg avfall"
	},
	{
		value: 97,
		color: "rgb("+colors.yellowRgb+")",
		highlight: colors.greenLight,
		label: "Plast"
	}
];

var visitsData = {
	labels: ["2009", "2010", "2011", "2012", "2013", "2014"],
	datasets: [
		{
			label: "Besøk på miljøsentralane",
			fillColor: "rgba("+ colors.greenRgb +",0)",
			strokeColor: "rgba("+ colors.greenRgb +",1)",
			pointColor: "rgba("+ colors.greyRgb +",1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba("+ colors.greyRgb +",1)",
			data: [33581, 33780, 34609, 42028, 50790, 59030]
		}
	]
};

var ammountData = {
	labels: ["2009", "2010", "2011", "2012", "2013", "2014"],
	datasets: [
		{
			label: "Mengder levert på miljøsentralane",
			fillColor: "rgba("+ colors.greenRgb +",0)",
			strokeColor: "rgba("+ colors.greenRgb +",1)",
			pointColor: "rgba("+ colors.greenRgb +",1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba("+ colors.greenRgb +",1)",
			data: [9481, 9284, 10818, 9167, 10852, 11521]
		},
		{
			label: "Mengder levert totalt",
			fillColor: "rgba("+ colors.orangeRgb +",0)",
			strokeColor: "rgba("+ colors.orangeRgb +",1)",
			pointColor: "rgba("+ colors.orangeRgb +",1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba("+ colors.orangeRgb +",1)",
			data: [23428, 24615, 25754, 23896, 25057, 25057]
		}
	]
};

var gjennomsnittRenovasjonData = {
	labels: ["Austevoll", "Bømlo", "Fitjar", "Kvinnherad", "Stord", "Sveio", "Tysnes"],
	datasets: [
		{
			label: "Gjennomsnitt renovasjonsabonnement",
			fillColor: "rgba("+ colors.greenRgb +",1)",
            strokeColor: "#fff",
            pointColor: "rgba("+ colors.greenRgb +",1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba("+ colors.greenRgb +",1)",
			data: [2251, 2163, 2030, 2140, 2337, 2327, 2406]
		}
	]
};

var renovasjonFritidData = {
	labels: ["Austevoll", "Bømlo", "Fitjar", "Kvinnherad", "Stord", "Sveio", "Tysnes"],
	datasets: [
		{
			label: "Gebyr til SIM fritid",
			fillColor: "rgba("+ colors.greenRgb +",1)",
            strokeColor: "#fff",
            pointColor: "rgba("+ colors.greenRgb +",1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba("+ colors.greenRgb +",1)",
			data: [1095, 1095, 1095, 1095, 1095, 1095, 1095]
		},
		{
			label: "Kommnal eigenkost fritid",
			fillColor: "rgba("+ colors.orangeRgb +",1)",
            strokeColor: "#fff",
            pointColor: "rgba("+ colors.orangeRgb +",1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba("+ colors.orangeRgb +",1)",
			data: [194, 43, 93, 55, 0, 135, 358]
		},
		{
			label: "Totalt fritid",
			fillColor: "rgba("+ colors.blueRgb +",1)",
            strokeColor: "#fff",
            pointColor: "rgba("+ colors.blueRgb +",1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba("+ colors.blueRgb +",1)",
			data: [1289, 1138, 1188, 1150, 1095, 1230, 1453]
		}
	]
};

var slamgebyrData = {
	labels: ["Austevoll", "Bømlo", "Fitjar", "Kvinnherad", "Stord", "Sveio", "Tysnes"],
	datasets: [
		{
			label: "SIM Slamtømmegebyr",
			fillColor: "rgba("+ colors.greenRgb +",1)",
            strokeColor: "#fff",
            pointColor: "rgba("+ colors.greenRgb +",1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba("+ colors.greenRgb +",1)",
			data: [712, 712, 712, 712, 712, 712, 712]
		},
		{
			label: "Kommune Slamtømmegebyr",
			fillColor: "rgba("+ colors.orangeRgb +",1)",
            strokeColor: "#fff",
            pointColor: "rgba("+ colors.orangeRgb +",1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba("+ colors.orangeRgb +",1)",
			data: [100, -86, -1, -86, 213, 261, 236]
		},
		{
			label: "Totalt Slamtømmegebyr",
			fillColor: "rgba("+ colors.blueRgb +",1)",
            strokeColor: "#fff",
            pointColor: "rgba("+ colors.blueRgb +",1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba("+ colors.blueRgb +",1)",
			data: [813, 625, 713, 625, 925, 973, 948]
		}
	]
};

var feesubData = {
	labels: ["Austevoll", "Bømlo", "Fitjar", "Kvinnherad", "Stord", "Sveio", "Tysnes"],
	datasets: [
		{
			label: "SIM",
			fillColor: "rgba("+ colors.greenRgb +",1)",
            strokeColor: "#fff",
            pointColor: "rgba("+ colors.greenRgb +",1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba("+ colors.greenRgb +",1)",
			data: [714, 714, 714, 714, 714, 714, 714]
		},
		{
			label: "Kommunalt",
			fillColor: "rgba("+ colors.orangeRgb +",1)",
            strokeColor: "#fff",
            pointColor: "rgba("+ colors.orangeRgb +",1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba("+ colors.orangeRgb +",1)",
			data: [61, -14, 74, 11, 89, 226, 466]
		},
		{
			label: "Totalt",
			fillColor: "rgba("+ colors.blueRgb +",1)",
            strokeColor: "#fff",
            pointColor: "rgba("+ colors.blueRgb +",1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba("+ colors.blueRgb +",1)",
			data: [775, 700, 788, 725, 803, 940, 1180]
		}
	]
};

var feeusedData = [
	{
		value: 	756,
		color: colors.green,
		highlight: colors.greenLight,
		label: "Innsamling"
	},
	{
		value: 298,
		color: colors.orange,
		highlight: colors.greenLight,
		label: "Eigenkostnad"
	},
	{
		value: 	455,
		color: colors.greenLight,
		highlight: colors.greenLight,
		label: "Miljøsentralar"
	},
	{
		value: 223,
		color: colors.blue,
		highlight: colors.greenLight,
		label: "Sluttbehandling brensel"
	},
	{
		value: 82,
		color: colors.brownLight,
		highlight: colors.greenLight,
		label: "Eigenkostnad kommunar"
	}
	,
	{
		value: 428,
		color: colors.brown,
		highlight: colors.greenLight,
		label: "Meirverdiavgift"
	}

];

var kompostData = {
	labels: ["2009", "2010", "2011", "2012", "2013", "2014"],
	datasets: [
		{
			label: "Mengder til kompostering",
			fillColor: "rgba("+ colors.brownRgb +",1)",
            strokeColor: "#fff",
            pointColor: "rgba("+ colors.brownRgb +",1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba("+ colors.brownRgb +",1)",
			data: [10244, 8782, 8810, 8952, 9953, 6641]
		}
	]
};

var kompostseltData = {
	labels: ["2009", "2010", "2011", "2012", "2013", "2014"],
	datasets: [
		{
			label: "Mengder til kompostering",
			fillColor: "rgba("+ colors.brownRgb +",1)",
            strokeColor: "#fff",
            pointColor: "rgba("+ colors.brownRgb +",1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba("+ colors.brownRgb +",1)",
			data: [3389, 3673, 2323, 3291, 2789, 2623]
		}
	]
};

Chart.defaults.global.responsive = false;
Chart.defaults.global.scaleFontFamily = "'Source Sans Pro', 'Helvetica', 'Arial', sans-serif";
Chart.defaults.global.tooltipFontFamily = "'Source Sans Pro', 'Helvetica', 'Arial', sans-serif";
Chart.defaults.global.tooltipTitleFontFamily = "'Source Sans Pro', 'Helvetica', 'Arial', sans-serif";
Chart.defaults.global.tooltipFontSize = 16;
Chart.defaults.global.tooltipTitleFontSize = 18;
Chart.defaults.global.tooltipYPadding = 10;
Chart.defaults.global.tooltipXPadding = 10;
