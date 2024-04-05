import "./App.css";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Admin from './components/Dashboards/Admin'

function App() {

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/admindashboard" element={<Admin />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
