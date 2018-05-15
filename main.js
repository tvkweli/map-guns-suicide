$(function () {
	$('#container').highcharts({
		chart: {
			type: 'scatter',
			zoomType: 'xy'
		},
		title: {
			text: 'Gun Ownership and Suicide Rate per name'
		},
		subtitle: {
			text: 'Source: <a href="https://today.yougov.com/">YouGov (2015)</a> and <a href="https://www.cdc.gov/nchs/pressroom/sosmap/suicide-mortality/suicide.htm">CDC (2016)</a>'
		},
		xAxis: {
			title: {
				enabled: true,
				text: 'Gun Ownership Rate'
			},
			startOnTick: true,
			endOnTick: true,
			showLastLabel: true
		},
		yAxis: {
			title: {
				text: 'Suicide Rate (age adjusted, per 100,000)'
			}
		},
		// legend: {
		// 	layout: 'vertical',
		// 	align: 'left',
		// 	verticalAlign: 'top',
		// 	x: 100,
		// 	y: 70,
		// 	floating: true,
		// 	backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
		// 	borderWidth: 1
		// },
		plotOptions: {
			scatter: {
				marker: {
					radius: 5,
					names: {
						hover: {
							enabled: true,
							lineColor: 'rgb(100,100,100)'
						}
					}
				},
				names: {
					hover: {
						marker: {
							enabled: false
						}
					}
				},
				tooltip: {
					headerFormat: '',
					pointFormat: '{point.name}<br />Gun ownership rate: {point.x}% <br />Suicide Rate: {point.y}'

				}
			}
		},
		series: [{
			// abbrev: { abbrev },
			color: 'rgba(223, 83, 83, .5)',
			name: "State",




			data: [
    //     [52.3, 15.64],
	  //    [53.8, 14.95],
		// 	[61.7, 14.44],
		// 	[31.2, 12.92],
		// 	[56.9, 12.79],
		// 	[54.2, 12.12],
		// 	[49.9, 11.02],
		// 	[31.9, 10.95],
    // [37.5, 10.9],
		// 	[42.4, 10.84],
		// 	[34.3, 10.73],
		// 	[48.9, 10.69],
		// 	[57.9, 10.38],
		// 	[35, 10.36],
		// 	[27.1, 10.26],
		// 	[32.3, 10.15],
    // [44.4, 9.93],
		// 	[47.9, 9.92],
		// 	[39.4, 9.67],
		// 	[28.8, 9.58],
		// 	[26.6, 9.32],
		// 	[44.5, 9.09],
		// 	[32.2, 8.78],
		// 	[42.8, 8.71],
    // [14.4, 8.65],
		// 	[33.8, 8.52],
		// 	[31.6, 8.09],
		// 	[34.7, 7.49],
		// 	[19.6, 7.44],
		// 	[22.6, 7.42],
		// 	[28.7, 7.34],
		// 	[35.7, 7.28],
    // [33.8, 7.22],
		// 	[32.5, 7.1],
		// 	[27.1, 7.05],
		// 	[28.8, 6.79],
		// 	[27.7, 6.62],
		// 	[19.8, 6.07],
		// 	[5.2, 5.87],
		// 	[36.7, 5.77],
    // [20.7, 3.92],
		// 	[20.1, 3.86],
		// 	[26.2, 3.73],
		// 	[5.8, 2.83],
		// 	[16.6, 2.73],
		// 	[45.1, 2.43],
		// 	[10.3, 2.3],
		// 	[22.6, 1.89],
    // [11.3, 1.8]

				{ x: 52.3, y: 15.64, z: 1, abbrev: 'MT', name: 'Montana' },
				{ x: 53.8, y: 14.95, z: 1, abbrev: 'WY', name: 'Wyoming' },
				{ x: 61.7, y: 14.44, z: 1, abbrev: 'AK', name: 'Alaska' },
				{ x: 33.5, y: 12.92, z: 1, abbrev: 'OK', name: 'Oklahoma' },
				{ x: 56.9, y: 12.79, z: 1, abbrev: 'ID', name: 'Idaho' },
				{ x: 54.2, y: 12.12, z: 1, abbrev: 'WV', name: 'West Virginia' },
				{ x: 49.9, y: 13.5, z: 7, abbrev: 'NM', name: 'New Mexico' },
				{ x: 31.9, y: 10.95, z: 3.5, abbrev: 'UT', name: 'Utah' },
				{ x: 37.5, y: 10.9, z: 3.5, abbrev: 'NV', name: 'Nevada' },
				{ x: 42.4, y: 10.84, z: 3.5, abbrev: 'KY', name: 'Kentucky' },
				{ x: 34.3, y: 10.73, z: 7, abbrev: 'CO', name: 'Colorado' },
				{ x: 48.9, y: 10.69, z: 3.5, abbrev: 'AL', name: 'Alabama' },
				{ x: 57.9, y: 10.38, z: 1, abbrev: 'AR', name: 'Arkansas' },
				{ x: 35, y: 10.36, z: 1, abbrev: 'SD', name: 'South Dakota' },
				{ x: 27.1, y: 10.26, z: 3.5, abbrev: 'MO', name: 'Missouri' },
				{ x: 32.3, y: 10.15, z: 1, abbrev: 'AZ', name: 'Arizona' },
				{ x: 44.4, y: 9.93, z: 1, abbrev: 'SC', name: 'South Carolina' },
				{ x: 47.9, y: 9.92, z: 1, abbrev: 'IT', name: 'North Dakota' },
				{ x: 39.4, y: 9.67, z: 7, abbrev: 'TN', name: 'Tennessee' },
				{ x: 28.8, y: 9.58, z: 7, abbrev: 'VT', name: 'Vermont' },
				{ x: 26.6, y: 9.32, z: 7, abbrev: 'OR', name: 'Oregon' },
				{ x: 44.5, y: 9.09, z: 1, abbrev: 'LA', name: 'Louisiana' },
				{ x: 32.2, y: 8.78, z: 7, abbrev: 'KS', name: 'Kansas' },
				{ x: 42.8, y: 8.71, z: 1, abbrev: 'MS', name: 'Mississippi' },
				{ x: 14.4, y: 8.65, z: 7, abbrev: 'NH', name: 'New Hampshire' },
				{ x: 33.8, y: 8.52, z: 1, abbrev: 'IN', name: 'Indiana' },
				{ x: 31.6, y: 8.09, z: 1, abbrev: 'GA', name: 'Georgia' },
				{ x: 44.7, y: 7.49, z: 1, abbrev: 'WI', name: 'Wisconsin' },
				{ x: 19.6, y: 7.44, z: 1, abbrev: 'OH', name: 'Ohio' },
				{ x: 29.3, y: 7.44, z: 7, abbrev: 'VA', name: 'Virginia' },
				{ x: 22.6, y: 7.42, z: 1, abbrev: 'ME', name: 'Maine' },
				{ x: 28.7, y: 7.34, z: 1, abbrev: 'NC', name: 'North Carolina' },
				{ x: 35.7, y: 7.28, z: 7, abbrev: 'TX', name: 'Texas' },
				{ x: 33.8, y: 7.22, z: 7, abbrev: 'IA', name: 'Iowa' },
				{ x: 32.5, y: 7.1, z: 1, abbrev: 'FL', name: 'Florida' },
				{ x: 27.1, y: 7.05, z: 1, abbrev: 'PA', name: 'Pennsylvania' },
				{ x: 27.7, y: 6.62, z: 3.5, abbrev: 'WA', name: 'Washington' },
				{ x: 19.1, y: 6.07, z: 1, abbrev: 'NE', name: 'Nebraska' },
				{ x: 5.2, y: 5.87, z: 1, abbrev: 'DE', name: 'Delaware' },
				{ x: 36.7, y: 5.77, z: 1, abbrev: 'MN', name: 'Minnesota' },
				{ x: 20.7, y: 3.92, z: 7, abbrev: 'MD', name: 'Maryland' },
				{ x: 20.1, y: 3.86, z: 7, abbrev: 'CA', name: 'California' },
				{ x: 26.2, y: 3.73, z: 1, abbrev: 'IL', name: 'Illinois' },
				{ x: 5.8, y: 2.83, z: 7, abbrev: 'RI', name: 'Rhode Island' },
				{ x: 16.6, y: 2.73, z: 1, abbrev: 'CT', name: 'Connecticut' },
				{ x: 45.1, y: 2.43, z: 1, abbrev: 'HI', name: 'Hawaii' },
				{ x: 10.3, y: 2.3, z: 7, abbrev: 'NY', name: 'New York' },
				{ x: 22.6, y: 1.89, z: 3.5, abbrev: 'MA', name: 'Massachusetts' },
				{ x: 13.5, y: 1.8, z: 1, abbrev: 'NJ', name: 'New Jersey' },


			]

}]
	});

});

$(function () {

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

	$('#container1').highcharts('Map', {


		chart: {
			map: 'countries/us/us-all'
		},

		title: {
			text: 'Suicide Rates'
		},



		mapNavigation: {
			enabled: false,
			buttonOptions: {
				verticalAlign: 'bottom'
			}
		},

		colorAxis: {
			min: 0,
			max: 15,
			maxColor: "#C80000"
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


	$('#container2').highcharts('Map', {
		chart: {
			map: 'countries/us/us-all'
		},

		title: {
			text: 'Gun Ownership Rates'
		},



		mapNavigation: {
			enabled: false,
			buttonOptions: {
				verticalAlign: 'bottom'
			}
		},

		colorAxis: {
			min: 0,
			max: 60,
			maxColor: "#C80000"
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
			// data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
			color: 'silver',
			showInLegend: false,
			enableMouseTracking: false
							}]
	});
});