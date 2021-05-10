import React, { useContext } from "react";
import { DataLayer } from "./reducer";

const Body = () => {
	const context = useContext(DataLayer);
	return <div>{context.state.display}</div>;
};

export default Body;
