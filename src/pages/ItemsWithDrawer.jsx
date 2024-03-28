import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import Navbar from "./Navbar";
import Chart from "../components/Chart";
import Sidebar from "../components/Sidebar";
import DataTable from "../components/DataTable";
import { Button } from "@mui/material";
import { cityData } from "../utils/cityData";

function Items() {
	const { id } = useParams();
	const theme = useTheme();
	const navigate = useNavigate();
	const [open, setOpen] = React.useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	// logic
	const [selectedCard, setSelectedCard] = useState("1");
	const onSelectCard = (id) => {
		setSelectedCard(id);
	};

	const currentCity = cityData.find((city) => city.name === id);

	return (
		<div style={{ width: "100%", height: "100%" }}>
			<Navbar />
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar position="fixed" open={open}>
					<Toolbar
						sx={{
							backgroundColor: "#111111",
							justifyContent: "space-between",
						}}
					>
						<Box sx={{ display: "flex" }}>
							<Tooltip title="Go Back">
								<IconButton
									color="inherit"
									aria-label="go last page"
									onClick={() => {
										console.log("goback");
										navigate(-1);
									}}
									edge="start"
									sx={{
										mr: 2,
										...(open && { display: "none" }),
									}}
								>
									<ArrowCircleLeftOutlinedIcon />
								</IconButton>
							</Tooltip>
							<Tooltip title="Open Drawer">
								<IconButton
									color="inherit"
									aria-label="open drawer"
									onClick={handleDrawerOpen}
									edge="start"
									sx={{
										mr: 2,
										...(open && { display: "none" }),
									}}
								>
									<ArrowForwardIosIcon />
								</IconButton>
							</Tooltip>
						</Box>
						{/* <Typography variant="h6" noWrap component="div">
							Persistent drawer
						</Typography> */}
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								marginRight: "12px",
							}}
						>
							<IconButton
								size="small"
								alignSelf="flex-start"
								sx={{ ml: 2 }}
								aria-controls={
									open ? "account-menu" : undefined
								}
								aria-haspopup="true"
								aria-expanded={open ? "true" : undefined}
							>
								<LanguageOutlinedIcon sx={{ color: "white" }} />
							</IconButton>
							<IconButton
								size="small"
								alignSelf="flex-start"
								sx={{ ml: 2 }}
								aria-controls={
									open ? "account-menu" : undefined
								}
								aria-haspopup="true"
								aria-expanded={open ? "true" : undefined}
							>
								<AccountCircleOutlinedIcon
									sx={{ color: "white" }}
								/>
							</IconButton>
							<Typography variant="span"> user</Typography>
						</Box>
					</Toolbar>
				</AppBar>
				<Drawer
					sx={{
						width: drawerWidth,
						flexShrink: 0,
						"& .MuiDrawer-paper": {
							backgroundColor: "#222222",
							width: drawerWidth,
							boxSizing: "border-box",
						},
					}}
					variant="persistent"
					anchor="left"
					open={open}
				>
					<DrawerHeader sx={{ justifyContent: "space-between" }}>
						<Tooltip title="Go Back">
							<IconButton
								aria-label="go last page"
								onClick={() => {
									navigate(-1);
								}}
							>
								<ArrowCircleLeftOutlinedIcon
									sx={{ color: "white" }}
								/>
							</IconButton>
						</Tooltip>
						<Tooltip title="Close Drawer">
							<IconButton onClick={handleDrawerClose}>
								{theme.direction === "ltr" ? (
									<ChevronLeftIcon sx={{ color: "white" }} />
								) : (
									<ChevronRightIcon />
								)}
							</IconButton>
						</Tooltip>
					</DrawerHeader>
					<Divider />
					<Sidebar
						selectedCard={selectedCard}
						onSelectCard={onSelectCard}
					/>
				</Drawer>
				<Main open={open} sx={{ overflow: "hidden" }}>
					<DrawerHeader
						sx={{ justifyContent: "flex-start", gap: "12px" }}
					>
						<Typography variant="h4"> {id} </Typography>
						<Typography variant="span">
							Item Cadet number:{selectedCard}{" "}
						</Typography>

						<Button
							variant="contained"
							sx={{ backgroundColor: "#295D8A" }}
						>
							F&apos;cast Stab - {selectedCard}
						</Button>
						<Button
							variant="contained"
							sx={{ backgroundColor: "#295D8A" }}
						>
							F&apos;cast Acc - {selectedCard}{" "}
						</Button>
						<Box
							sx={{
								display: "flex",
								gap: "16px",
								backgroundColor: "#295D8A",
								padding: "12px",
								borderRadius: "10px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
								}}
							>
								<p
									style={{
										textAlign: "left",
										fontSize: "12px",
									}}
								>
									FORECAST
								</p>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										fontWeight: 800,
									}}
								>
									<p>{currentCity.sales}</p>
								</div>
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
								}}
							>
								<p
									style={{
										textAlign: "left",
										fontSize: "12px",
									}}
								>
									REVENUE
								</p>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										fontWeight: 800,
									}}
								>
									<p>{currentCity.revenue}</p>
								</div>
							</Box>
						</Box>
					</DrawerHeader>
					<Chart id={id} selectedCard={selectedCard} />
					<DataTable id={id} selectedCard={selectedCard} />
				</Main>
			</Box>
		</div>
	);
}

const drawerWidth = 350;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

export default Items;
