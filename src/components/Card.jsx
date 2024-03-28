import { Box, Button, Checkbox, Typography } from "@mui/material";
import PropTypes from "prop-types";

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
				color: "white",
			}}
			onClick={() => {
				onSelectCard(data.id);
			}}
		>
			<Checkbox
				checked={isSelected}
				sx={{ color: "white", "&.Mui-checked": { color: "white" } }}
			/>
			<Typography variant="h6">{data.id}</Typography>
			<Button variant="contained" sx={{ backgroundColor: "#295D8A" }}>
				F&apos;cast Stab
			</Button>
			<Button variant="contained" sx={{ backgroundColor: "#295D8A" }}>
				F&apos;cast Acc
			</Button>
		</Box>
	);
}

export default Card;

Card.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.string.isRequired,
	}).isRequired,
	onSelectCard: PropTypes.func,
	selectedCard: PropTypes.string,
};
