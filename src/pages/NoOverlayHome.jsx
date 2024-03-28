import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { Icon } from "leaflet";
import Navbar from "./Navbar";
import CityCard from "../components/CityCard";
import { Box, Button } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { cityData } from "../utils/cityData";

// create custom icon
const customIcon = new Icon({
	iconUrl: "/assets/maps-and-flags.png",
	iconSize: [38, 38], // size of the icon
});

// markers
const markers = [
	{
		geocode: [3.86, 38.3522],
		location: "Nairobi",
		continent: "Kenya",
		sales: "12%",
		revenue: "20M",
	},
	{
		geocode: [-2.85, -45.3522],
		location: "Maraba",
		continent: "Brazil",
		sales: "18%",
		revenue: "50M",
	},
	{
		geocode: [48.855, 2.34],
		location: "Madrid",
		continent: "Spain",
		sales: "10%",
		revenue: "30M",
	},
];

export default function NoOverlayHome() {
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
					// widgetPos={widgetPos}
					// handlePosChange={handlePosChange}
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
							height: "fit-content",
							display: "flex",
							// justifyContent: isWidgetLeft
							// 	? "flex-start"
							// 	: "flex-end",
							// alignItems: isWidgetBottom
							// 	? "flex-end"
							// 	: "flex-start",
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
									flexDirection: "row",
									// isWidgetLeft || isWidgetRight
									// 	? "column"
									// : "row",
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
