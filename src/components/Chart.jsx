import React, { useState, useEffect, useRef } from "react";
import StyledSwitch from "./Switch";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box } from "@mui/material";
import dummyData from "../utils/dummyData";

function Chart({ id, selectedCard }) {
	const [chartWidth, setChartWidth] = useState(null);
	const [selectedData, setSelectedData] = useState([]);
	const chartRef = useRef(null);

	useEffect(() => {
		setSelectedData(dummyData.find((obj) => obj.id === selectedCard));
	}, [selectedCard]);

	// for responsive charts
	useEffect(() => {
		setSelectedData(dummyData.find((obj) => obj.id === selectedCard));

		const resizeObserver = new ResizeObserver((entries) => {
			for (let entry of entries) {
				if (entry.target === chartRef.current) {
					setChartWidth(entry.contentRect.width);
					break;
				}
			}
		});

		// Observe changes in the chart container's size
		if (chartRef.current) {
			resizeObserver.observe(chartRef.current);
		}

		// Cleanup observer on component unmount
		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	const [seriesVisibility, setSeriesVisibility] = React.useState({
		series1: true,
		series2: true,
		series3: true,
	});

	const [lineColors, setLineColors] = React.useState({
		series1: "blue",
		series2: "green",
		series3: "orange",
	});

	const options = {
		chart: {
			type: "line",
			backgroundColor: "#00020A",
			width: chartWidth,
			marginTop: 50,
		},
		title: {
			text: "",
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
			gridLineWidth: 1,
			gridLineColor: "gray",
			gridLineDashStyle: "Solid",
			labels: {
				style: {
					color: "#EFF0F2",
				},
			},
			plotLines: [
				{
					color: "white",
					width: 2,
					zIndex: 5,
					value: 6,
					label: {
						text: `<div style="display: flex; gap: 20px;"><span style="color: white; font-weight: bold;">HISTORICAL</span><span style="color: cyan; font-weight: bold; margin-left: 10px; padding-left: 20px;">FORECAST</span></div>`,
						align: "center",
						rotation: 0,
						x: 0,
						y: -10,
						style: {
							color: "white",
							fontWeight: "bold",
						},
					},
					dashStyle: "dot",
				},
			],
		},
		yAxis: {
			gridLineWidth: 0,
			title: {
				text: "CONSUMPTION (FT, THOUSAND)",
				style: {
					color: "#EFF0F2",
				},
			},
			labels: {
				style: {
					color: "#EFF0F2",
				},
			},
		},
		series: [
			{
				name: "Series 1",
				dashStyle: "line",
				data: selectedData.series1,
				visible: seriesVisibility.series1,
				color: lineColors.series1,
				zoneAxis: "x",
				zones: [
					{
						value: 6,
					},
					{
						dashStyle: "dot",
					},
				],
			},
			{
				name: "Series 2",
				dashStyle: "line",
				data: selectedData.series2,
				visible: seriesVisibility.series2,
				color: lineColors.series2,
				zoneAxis: "x",
				zones: [
					{
						value: 6,
					},
					{
						dashStyle: "dot",
					},
				],
			},
			{
				name: "Series 3",
				dashStyle: "line",
				data: selectedData.series3,
				visible: seriesVisibility.series3,
				color: lineColors.series3,
				zoneAxis: "x",
				zones: [
					{
						value: 6,
					},
					{
						dashStyle: "dot",
					},
				],
			},
		],
	};

	const handleSeriesVisibilityChange = (seriesName, checked) => {
		setSeriesVisibility((prevVisibility) => ({
			...prevVisibility,
			[seriesName]: checked,
		}));
	};

	return (
		<div id="chart-container" style={{ width: "100%" }}>
			{selectedCard}
			Items - {id}
			<Box sx={{ display: "flex", gap: 2 }}>
				<FormControlLabel
					control={
						<StyledSwitch
							defaultChecked
							color={lineColors.series1}
							checked={seriesVisibility.series1}
							onChange={(event) =>
								handleSeriesVisibilityChange(
									"series1",
									event.target.checked
								)
							}
						/>
					}
					label="Series 1"
				/>
				<FormControlLabel
					control={
						<StyledSwitch
							defaultChecked
							color={lineColors.series2}
							checked={seriesVisibility.series2}
							onChange={(event) =>
								handleSeriesVisibilityChange(
									"series2",
									event.target.checked
								)
							}
						/>
					}
					label="Series 2"
				/>
				<FormControlLabel
					control={
						<StyledSwitch
							defaultChecked
							color={lineColors.series3}
							checked={seriesVisibility.series3}
							onChange={(event) =>
								handleSeriesVisibilityChange(
									"series3",
									event.target.checked
								)
							}
						/>
					}
					label="Series 3"
				/>
			</Box>
			<br />
			<div
				ref={chartRef}
				id="chart-container-wrapper"
				style={{
					width: "100%",
					height: "400px",
					"> div": {
						display: "flex",
						justifyContent: "center",
					},
				}}
			>
				<HighchartsReact
					highcharts={Highcharts}
					options={options}
					containerProps={{
						className: "custom-highcharts-container",
					}}
				/>
			</div>
		</div>
	);
}

export default Chart;
