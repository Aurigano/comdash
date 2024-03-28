import { Box, Typography } from "@mui/material";
import Card from "./Card";
import dummyData from "../utils/dummyData";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

function Sidebar({ selectedCard, onSelectCard }) {
	const { id } = useParams();
	return (
		<div
			style={{
				minWidth: "100%",
				transition: "all 1s ease-in-out",
				height: "100%",
				backgroundColor: "#222222",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					padding: "12px",
					color: "white",
				}}
			>
				<Typography variant="h5" textAlign="left">
					Commodity Stack
				</Typography>
				<Typography variant="h5" fontSize="18px" textAlign="left">
					{id}
				</Typography>
			</Box>
			<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
				{dummyData.map((card) => {
					return (
						<Card
							key={card.id}
							data={card}
							selectedCard={selectedCard}
							onSelectCard={onSelectCard}
						/>
					);
				})}
			</Box>
		</div>
	);
}

export default Sidebar;

Sidebar.propTypes = {
	onSelectCard: PropTypes.func,
	selectedCard: PropTypes.string,
};
