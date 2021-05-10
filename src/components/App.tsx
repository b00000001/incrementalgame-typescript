import React, { useReducer } from "react";
import "../css/App.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import reducer, { DataLayer, initialState } from "./reducer";

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<DataLayer.Provider value={{ state, dispatch }}>
			<div className="grid__container">
				<div className="app__header">
					<Header />
				</div>
				<div className="app__body">
					<Body />
				</div>
				<div className="app__footer">
					<Footer />
				</div>
			</div>
		</DataLayer.Provider>
	);
}

export default App;
