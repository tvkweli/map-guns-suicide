// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['us-ma', 1.89],
    ['us-wa', 6.62],
    ['us-ca', 3.86],
    ['us-or', 9.32],
    ['us-wi', 7.49],
    ['us-me', 7.42],
    ['us-mi', 6.79],
    ['us-nv', 10.9],
    ['us-nm', 11.02],
    ['us-co', 10.73],
    ['us-wy', 14.95],
    ['us-ks', 8.78],
    ['us-ne', 6.07],
    ['us-ok', 12.92],
    ['us-mo', 10.26],
    ['us-il', 3.73],
    ['us-in', 8.52],
    ['us-vt', 9.58],
    ['us-ar', 10.38],
    ['us-tx', 7.28],
    ['us-ri', 2.83],
    ['us-al', 10.69],
    ['us-ms', 8.71],
    ['us-nc', 7.34],
    ['us-va', 7.44],
    ['us-ia', 7.22],
    ['us-md', 3.92],
    ['us-de', 5.87],
    ['us-pa', 7.05],
    ['us-nj', 1.8],
    ['us-ny', 2.3],
    ['us-id', 12.79],
    ['us-sd', 10.36],
    ['us-ct', 2.73],
    ['us-nh', 8.65],
    ['us-ky', 10.84],
    ['us-oh', 7.44],
    ['us-tn', 9.67],
    ['us-wv', 12.12],
    // ['us-dc', 39],
    ['us-la', 9.09],
    ['us-fl', 7.1],
    ['us-ga', 8.09],
    ['us-sc', 9.93],
    ['us-mn', 5.77],
    ['us-mt', 15.64],
    ['us-nd', 9.92],
    ['us-az', 10.15],
    ['us-ut', 10.95],
    ['us-hi', 2.43],
    ['us-ak', 14.44],
    ['undefined', 51]
];

var data2 = [
    ['us-ma', 22.6],
    ['us-wa', 27.7],
    ['us-ca', 20.1],
    ['us-or', 26.6],
    ['us-wi', 34.7],
    ['us-me', 22.6],
    ['us-mi', 28.8],
    ['us-nv', 37.5],
    ['us-nm', 49.9],
    ['us-co', 34.3],
    ['us-wy', 53.8],
    ['us-ks', 32.2],
    ['us-ne', 19.8],
    ['us-ok', 31.2],
    ['us-mo', 27.1],
    ['us-il', 26.2],
    ['us-in', 33.8],
    ['us-vt', 28.8],
    ['us-ar', 57.9],
    ['us-tx', 35.7],
    ['us-ri', 5.8],
    ['us-al', 48.9],
    ['us-ms', 42.8],
    ['us-nc', 28.7],
    ['us-va', 29.3],
    ['us-ia', 33.8],
    ['us-md', 20.7],
    ['us-de', 5.2],
    ['us-pa', 27.1],
    ['us-nj', 11.3],
    ['us-ny', 10.3],
    ['us-id', 56.9],
    ['us-sd', 35],
    ['us-ct', 16.6],
    ['us-nh', 14.4],
    ['us-ky', 42.4],
    ['us-oh', 19.6],
    ['us-tn', 39.4],
    ['us-wv', 54.2],
    // ['us-dc', 39],
    ['us-la', 44.5],
    ['us-fl', 32.5],
    ['us-ga', 31.6],
    ['us-sc', 44.4],
    ['us-mn', 36.7],
    ['us-mt', 52.3],
    ['us-nd', 47.9],
    ['us-az', 32.3],
    ['us-ut', 31.9],
    ['us-hi', 45.1],
    ['us-ak', 61.7],
    ['undefined', 51]
];

// Create the chart
Highcharts.mapChart('container', {
	chart: {
		map: 'countries/us/us-all'
	},

	title: {
		text: 'Suicide Rates'
	},

	subtitle: {
		text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/us/us-all.js">United States of America</a>'
	},

	mapNavigation: {
		enabled: true,
		buttonOptions: {
			verticalAlign: 'bottom'
		}
	},

	colorAxis: {
		min: 0,
		max: 15
	},

	series: [{
		data: data,
		name: 'Rate of suicides per 100,000',
		states: {
			hover: {
				color: '#BADA55'
			}
		},
		dataLabels: {
			enabled: true,
			format: '{point.name}'
		}
				}, {
		name: 'Separators',
		type: 'mapline',
		data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
		color: 'silver',
		showInLegend: false,
		enableMouseTracking: false
				}]
});

// Create the chart
Highcharts.mapChart('container2', {
	chart: {
		map: 'countries/us/us-all'
	},

	title: {
		text: 'Gun Ownership Rates'
	},

	subtitle: {
		text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/us/us-all.js">United States of America</a>'
	},

	mapNavigation: {
		enabled: true,
		buttonOptions: {
			verticalAlign: 'bottom'
		}
	},

	colorAxis: {
		min: 0,
		max: 60
	},

	series: [{
		data: data2,
		name: 'Rate of gun ownership',
		states: {
			hover: {
				color: '#BADA55'
			}
		},
		dataLabels: {
			enabled: true,
			format: '{point.name}'
		}
				}, {
		name: 'Separators',
		type: 'mapline',
		data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
		color: 'silver',
		showInLegend: false,
		enableMouseTracking: false
				}]
});