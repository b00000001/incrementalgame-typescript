import React, { useContext } from "react";
import "../css/Header.css";
import { DataLayer } from "./reducer";

interface IDispatch {
	dispatch: string;
}

const Header: React.FC = () => {
	const { state, dispatch } = useContext(DataLayer);

	return (
		<header className="header__container">
			<div className="header__left">
				<h4>
					<ul onClick={() => dispatch({ type: "Homepage" })}>Home</ul>
					<ul onClick={() => dispatch({ type: "Planets" })}>Planets</ul>
				</h4>
			</div>
		</header>
	);
};

export default Header;
