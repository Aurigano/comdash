import { Box, Button, Checkbox } from "@mui/material";
import React from "react";

function Card({ data, onSelectCard, selectedCard }) {
	const isSelected = selectedCard === data.id;
	return (
		<Box
			id={`${data.id}-card`}
			sx={{
				display: "flex",
				alignItems: "center",
				gap: 1,
				padding: 2,
				backgroundColor: isSelected ? "#555555" : "#333333",
			}}
			onClick={() => {
				onSelectCard(data.id);
			}}
		>
			<Checkbox />
			{data.id}
			<Button variant="contained">F'cast Stab</Button>
			<Button variant="contained">F'cast Acc</Button>
		</Box>
	);
}

export default Card;
