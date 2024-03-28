import { useNavigate } from "react-router-dom";
import TinyLineChart from "./TinyLineChart";

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
				cursor: "pointer",
				border: "2px solid white",
				// borderImage: "linear-gradient(to bottom, #ff0000, #0000ff)",
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
					backgroundColor: "rgba(0, 0, 0, 0.5)",
				}}
			/>
			<div
				id="city-content"
				style={{
					position: "relative",
				}}
			>
				<h3>{city.name}</h3>
				<p style={{ textAlign: "left", fontSize: "12px" }}>FORECAST</p>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						fontWeight: 800,
					}}
				>
					<p>{city.sales}</p>
					<TinyLineChart data={city.salesData} />
				</div>
				<p style={{ textAlign: "left", fontSize: "12px" }}>REVENUE</p>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						fontWeight: 800,
					}}
				>
					<p>{city.revenue}</p>
					<TinyLineChart data={city.revData} color="yellow" />
				</div>
				{/* <p>Revenue: {city.revenue}</p>
				
				<TinyLineChart
					data={[5, 7, 3, 8, 2, 5, 10, 4, 3, 2, 6, 2]}
					color="yellow"
				/> */}
			</div>
		</div>
	);
};

export default CityCard;
