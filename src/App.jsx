import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
// import Items from "./pages/Items";
import Items from "./pages/ItemsWithDrawer";

function App() {
	return (
		<Routes>
			{/* <Route path="/" element={<Layout />} /> */}
			<Route path="/" element={<Home />} />
			<Route path="item/:id" element={<Items />} />
		</Routes>
	);
}

export default App;
