import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import CrudAdd from "./components/cruds/CrudAdd";
import CrudTable from "./components/cruds/CrudTable";
import CrudListView from "./components/cruds/CrudListView";
import CrudGridView from "./components/cruds/CrudGridView";
import CrudDetails from "./components/cruds/CrudDetails";
import CrudEdit from "./components/cruds/CrudEdit";
import CrudDelete from "./components/cruds/CrudDelete";
import Footer from "./components/common/Footer";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import PrivateRoutes from "./components/common/PrivateRoutes";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />

				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/api/" element={<Home />} />
					<Route exact path="/cruds/list-view" element={<CrudListView />} />
					<Route exact path="/cruds/:_id" element={<CrudDetails />} />
					<Route exact path="/cruds/:_id/edit" element={<CrudEdit />} />
					<Route exact path="/cruds/:_id/delete" element={<CrudDelete />} />
					<Route exact path="/pages/login" element={<Login />} />
					<Route exact path="/pages/signup" element={<Signup />} />

					<Route element={<PrivateRoutes/>}>
					<Route exact path="/cruds/new" element={<CrudAdd />} />
					<Route exact path="/cruds" element={<CrudTable />} />
					<Route exact path="/cruds/grid-view" element={<CrudGridView />} />
						
						</Route>
				</Routes>
				<Footer />
			</Router>

		</div>
	);
}

export default App;
