import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Items from "./pages/ItemsWithDrawer";
import NoOverlayHome from "./pages/NoOverlayHome";

function App() {
	return (
		<Routes>
			{/* <Route path="/" element={<Layout />} /> */}
			<Route path="/" element={<NoOverlayHome />} />
			<Route path="/2" element={<Home />} />
			<Route path="item/:id" element={<Items />} />
		</Routes>
	);
}

export default App;
