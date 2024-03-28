import React, { useRef, useState } from "react";
import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { Icon } from "leaflet";
import Navbar from "./Navbar";
import CityCard from "../components/CityCard";
import { Box, Button } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

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

export const cityData = [
	{
		name: "Paris",
		sales: "12%",
		revenue: "20K",
		salesData: [1, 3, 2, 4, 6, 5, 8, 7, 9, 10, 12, 11],
		revData: [5, 7, 3, 8, 2, 5, 10, 4, 3, 2, 6, 2],
	},
	{
		name: "Mexico City",
		sales: "10%",
		revenue: "50M",
		salesData: [44, 87, 12, 65, 34, 99, 76, 23, 55, 2, 89, 43],
		revData: [17, 98, 5, 73, 40, 21, 84, 6, 31, 50, 61, 92],
	},
	{
		name: "Cape Town",
		sales: "19%",
		revenue: "70M",
		salesData: [78, 32, 84, 11, 66, 38, 29, 49, 57, 93, 76, 10],
		revData: [90, 16, 58, 20, 71, 54, 9, 83, 48, 36, 79, 4],
	},
	{
		name: "Melbourne",
		sales: "17%",
		revenue: "90T",
		salesData: [19, 97, 80, 28, 59, 62, 45, 30, 72, 25, 51, 70],
		revData: [39, 82, 69, 14, 26, 67, 41, 18, 1, 94, 53, 91],
	},
	{
		name: "Delhi",
		sales: "15%",
		revenue: "100M",
		salesData: [7, 46, 35, 75, 68, 86, 64, 37, 24, 15, 88, 56],
		revData: [96, 27, 52, 3, 60, 22, 85, 8, 77, 13, 42, 81],
	},
	{
		name: "Ottawa",
		sales: "14%",
		revenue: "120M",
		salesData: [63, 0, 95, 47, 33, 74, 50, 2, 59, 65, 25, 42],
		revData: [19, 77, 33, 94, 5, 68, 88, 57, 39, 13, 47, 20],
	},
];

export default function Home() {
	const [widgetPos, setWidgetPos] = useState("top");
	const [hovered, setHovered] = useState(false);
	const handlePosChange = (event) => {
		setWidgetPos(event.target.value);
	};
	const overlayRef = useRef(null);
	const cardsRef = useRef(null);
	const mapRef = useRef(null);

	const handleDocumentClick = (event) => {
		// Check if the click occurred within the overlay container
		if (overlayRef.current && overlayRef.current.contains(event.target)) {
			// Click occurred outside the overlay container, handle map interaction
			console.log("clicked within");
			return;
		}
		console.log("clicked outside");
	};

	React.useEffect(() => {
		document.addEventListener("click", handleDocumentClick);

		return () => {
			document.removeEventListener("click", handleDocumentClick);
		};
	}, []);

	React.useEffect(() => {
		console.log("hov", hovered);
		if (!hovered) {
			// overlayRef.current.style.pointerEvents = "none";
		}
	}, [hovered]);

	const isWidgetLeft = widgetPos === "left";
	const isWidgetRight = widgetPos === "right";
	//   const isWidgetTop = widgetPos === "top";
	const isWidgetBottom = widgetPos === "bottom";

	const handleMapClick = () => {
		// Handle map click logic
		console.log("Map clicked");
	};

	const handleOverlayHover = () => {
		console.log("wd");
		setHovered(true);
	};

	const handleOverlayLeave = () => {
		console.log("efef");
		setHovered(false);
	};

	return (
		<div
			id="container"
			style={{
				position: "relative",
				width: "100vw",
				height: "100vh",
				// overflow: "hidden",
			}}
		>
			<MapContainer
				interactive={true}
				center={[30.2566, 8.7522]}
				zoom={3.5}
				zoomControl={false}
				ref={mapRef}
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
							mouseover: (event) => {
								console.log("not");
								event.target.openPopup();
							},
							mouseout: (event) => {
								console.log("not");
								event.target.closePopup();
							},
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
			<div
				id="overlay"
				ref={overlayRef}
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: 1000,
					width: "100%",
					height: "fit-content",
					// pointerEvents: "none",
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
					<Box sx={{ display: "flex", gap: "16px" }}>
						<h2
							style={{
								alignSelf: "flex-start",
								marginBottom: "20px",
							}}
						>
							Hello User
						</h2>
						<Button
							variant="contained"
							startIcon={<InfoOutlinedIcon />}
							onClick={() => {
								// Your click handler logic here
							}}
							sx={{
								borderRadius: "50px",
								height: "32px",
								marginTop: "4px",
								backgroundColor: "#295D8A",
							}}
						>
							There are 2 action items
						</Button>
					</Box>
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
							{/* <div
								id="filler"
								style={{ width: "100%", height: "100%" }}
							/> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
