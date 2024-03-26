import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { Icon } from "leaflet";

// create custom icon
const customIcon = new Icon({
	iconUrl: "src/assets/maps-and-flags.png",
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

export default function Home() {
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
					color: "red",
					width: "100%",
					height: "fit-content",
				}}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div
					style={{
						height: "50px",
						width: "100%",
						backgroundColor: "black",
					}}
				/>
				ABC
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
