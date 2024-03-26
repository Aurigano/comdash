import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Items from "./pages/Items";

function App() {
	return (
		<Routes>
			{/* <Route path="/" element={<Layout />} /> */}
			<Route path="/" element={<Home />} />
			<Route path="item" element={<Items />} />
		</Routes>
	);
}

// function Layout() {
// 	return (
// 		<div style={{ height: "50px", width: "100%" }}>
// 			{/* A "layout route" is a good place to put markup you want to
//           share across all the pages on your site, like navigation. */}
// 			<span style={{ color: "white" }}>Hello</span>
// 			{/* <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/nothing-here">Nothing Here</Link>
//           </li>
//         </ul>
//       </nav> */}

// 			<hr />

// 			{/* An <Outlet> renders whatever child route is currently active,
//           so you can think about this <Outlet> as a placeholder for
//           the child routes we defined above. */}
// 			<Outlet />
// 		</div>
// 	);
// }

export default App;
