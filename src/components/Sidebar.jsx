import { CheckBox } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import Card from "./Card";
import React, { useState } from "react";
import dummyData from "../utils/dummyData";

function Sidebar({ selectedCard, onSelectCard }) {
	return (
		<div
			style={{
				minWidth: "100%",
				transition: "all 1s ease-in-out",
				height: "100%",
				backgroundColor: "#222222",
			}}
		>
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
