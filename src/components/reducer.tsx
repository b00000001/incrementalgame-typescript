import React, { useContext } from "react";
import HomePage from "./HomePage";
import Planets from "./Planets";

// interface MyContextType {
// 	display: JSX.Element;
// }

export const DataLayer = React.createContext<{
	state: any;
	dispatch: any;
}>({ state: { display: <HomePage /> }, dispatch: () => null });

type Reducer<State, Action> = (state: State, action: Action) => State;

type Actions = { type: "Homepage" } | { type: "Planets" };
type State = {
	display: JSX.Element;
};

export const initialState: State = {
	display: <HomePage />,
};

var reducer = (state: State, action: Actions) => {
	switch (action.type) {
		case "Homepage":
			console.log(action.type);
			return {
				display: <HomePage />,
			};
		case "Planets":
			console.log(action.type);
			return {
				display: <Planets />,
			};
		default:
			return state;
	}
};

export default reducer;
