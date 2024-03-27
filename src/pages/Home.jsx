import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { Icon } from "leaflet";
import Navbar from "./Navbar";

// create custom icon
const customIcon = new Icon({
	iconUrl: "/assets/maps-and-flags.png",
	iconSize: [38, 38], // size of the icon
});

// markers
const markers = [
	{
		geocode: [3.86, 38.3522],
		popUp: "Hello, I am pop up 1",
		location: "Loc1",
		continent: "Con1",
		sales: "1200000",
		revenue: "20K",
	},
	{
		geocode: [-2.85, -45.3522],
		popUp: "Hello, I am pop up 2",
		location: "Loc1",
		continent: "Con1",
		sales: "1200000",
		revenue: "20K",
	},
	{
		geocode: [48.855, 2.34],
		popUp: "Hello, I am pop up 3",
		location: "Loc1",
		continent: "Con1",
		sales: "1200000",
		revenue: "20K",
	},
];

const cityData = [
	{ name: "Paris", sales: 1200000, revenue: "20K" },
	{ name: "Mexico", sales: 1000000, revenue: "50K" },
	{ name: "Cape Town", sales: 1900000, revenue: "70K" },
	{ name: "Melbourne", sales: 1700000, revenue: "90K" },
	{ name: "Delhi", sales: 1500000, revenue: "100K" },
	{ name: "Ottawa", sales: 14100000, revenue: "120K" },
];

export default function Home() {
	const [widgetPos, setWidgetPos] = React.useState("top");
	const handlePosChange = (event) => {
		setWidgetPos(event.target.value);
	};

	const isWidgetLeft = widgetPos === "left";
	const isWidgetRight = widgetPos === "right";
	//   const isWidgetTop = widgetPos === "top";
	const isWidgetBottom = widgetPos === "bottom";

	return (
		<div
			id="container"
			style={{ position: "relative", width: "100vw", height: "100vh" }}
		>
			<div
				id="overlay"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: 1000,
					width: "100%",
					height: "fit-content",
				}}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<Navbar
					showPositionWidget={true}
					widgetPos={widgetPos}
					handlePosChange={handlePosChange}
				/>
				<div
					id="content"
					style={{
						display: "flex",
						flexDirection: "column",
						padding: "30px",
						color: "white",
					}}
				>
					<h2 style={{ alignSelf: "flex-start" }}>Hello User</h2>
					<div
						id="widgets-container"
						style={{
							width: "100%",
							height: "86vh",
							display: "flex",
							justifyContent: isWidgetLeft
								? "flex-start"
								: "flex-end",
							alignItems: isWidgetBottom
								? "flex-end"
								: "flex-start",
						}}
					>
						<div
							id="wrapper"
							style={{
								height: "fit-content",
								width: "fit-content",
								maxWidth: "100%",
							}}
						>
							<div
								id="city-widgets"
								style={{
									display: "flex",
									flexDirection:
										isWidgetLeft || isWidgetRight
											? "column"
											: "row",
									justifyContent: "space-between",
									gap: "10px",
									overflowX: "auto",
								}}
							>
								{cityData.map((city) => (
									<CityCard key={city.name} city={city} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<MapContainer
				center={[30.2566, 8.7522]}
				zoom={3.5}
				zoomControl={false}
			>
				{/* OPEN STREEN MAPS TILES */}

				<TileLayer
					attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
					url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=fb54ae75-4cd3-4614-bc57-6725ee42ef8f"
					//   url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png"
				/>

				{/* Mapping through the markers */}
				{markers.map((marker) => (
					<Marker
						key={marker.geocode}
						position={marker.geocode}
						icon={customIcon}
						eventHandlers={{
							mouseover: (event) => event.target.openPopup(),
							mouseout: (event) => event.target.closePopup(),
						}}
					>
						<Popup>
							<div>
								<h4 style={{ margin: 0 }}>
									<b>{marker.location}</b>
								</h4>
								<br />
								<span>{marker.continent}</span>
								<br />
								<span>
									Sales:<b>{marker.sales}</b>
								</span>
								<br />
								<span>
									Revenue:<b>{marker.revenue}</b>
								</span>
							</div>
						</Popup>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
}

const CityCard = ({ city }) => {
	const navigate = useNavigate();
	return (
		<div
			onClick={() => {
				navigate(`/item/${city.name}`);
			}}
			style={{
				minWidth: "300px",
				maxWidth: "300px",
				backgroundColor: "#ffffff30",
				padding: "10px",
				borderRadius: "5px",
				position: "relative",
			}}
		>
			<div
				id="background-blur"
				style={{
					position: "absolute",
					filter: "blur(1px)",
					width: "100%",
					height: "100%",
					top: 0,
					left: 0,
					backdropFilter: "blur(0px)",
					backgroundColor: "rgba(255, 255, 255, 0)",
				}}
			/>
			<div id="city-content" style={{ position: "relative" }}>
				<h3>{city.name}</h3>
				<p>Sales: {city.sales}</p>
				<p>Revenue: {city.revenue}</p>
			</div>
		</div>
	);
};
