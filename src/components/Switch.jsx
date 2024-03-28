import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const StyledSwitch = styled(Switch)(({ color, theme }) => {
	return {
		padding: 8,
		"& .MuiSwitch-track": {
			borderRadius: 22 / 2,
			backgroundColor: color || theme.palette.primary.main,
			"&::before, &::after": {
				content: '""',
				position: "absolute",
				top: "50%",
				transform: "translateY(-50%)",
				width: 16,
				height: 16,
				backgroundColor: color || theme.palette.primary.main,
			},
			"&::before": {
				left: 12,
			},
			"&::after": {
				right: 12,
			},
		},
		"& .MuiSwitch-thumb": {
			boxShadow: "none",
			width: 16,
			height: 16,
			margin: 2,
			backgroundColor: color || theme.palette.primary.main,
		},
	};
});

export default StyledSwitch;
