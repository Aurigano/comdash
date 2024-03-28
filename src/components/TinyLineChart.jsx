import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const TinyLineChart = ({ data, color = "cyan" }) => {
	const options = {
		chart: {
			type: "line",
			width: 200,
			height: 100,
			backgroundColor: "transparent",
		},
		title: {
			text: null,
		},
		xAxis: {
			categories: [
				"Q2 2022",
				"Q3 2022",
				"Q4 2022",
				"Q1 2023",
				"Q2 2023",
				"Q3 2023",
				"Q4 2023",
				"Q1 2024",
				"Q2 2024",
				"Q3 2024",
				"Q4 2024",
				"Q1 2025",
			],
			visible: false,
		},
		yAxis: {
			visible: false,
			title: {
				text: null,
			},
		},
		legend: {
			enabled: false,
		},
		series: [
			{
				data: data,
				color: color,
				marker: {
					enabled: false,
				},
			},
		],
	};

	return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default TinyLineChart;
