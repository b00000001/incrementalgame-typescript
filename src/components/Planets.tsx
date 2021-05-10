import React, { useState, useEffect } from "react";

const Planets = () => {
	const [api, changeapi] = useState([]);
	const [isloading, changeloading] = useState(true);
	const [playerplanet, changeplayerplanet] = useState({
		homeworld: {
			englishName: "",
			isPlanet: null,
			mass: { massValue: 0 },
		},
		planetgenerated: false,
	});

	useEffect(() => {
		fetch("http://localhost:3004/bodies")
			.then((res) => res.json())
			.then((data) => {
				changeapi(data);
				console.log(data);
				changeloading(false);
			});
	}, []);

	var handleClick = () => {
		console.log(api[0]);
	};
	var checkHomeworld = () => {
		console.log(playerplanet.homeworld);
	};

	var planetRoll = () => {
		changeplayerplanet({
			homeworld: api[199], //Math.floor(Math.random() * api.length)
			planetgenerated: true,
		});
	};

	if (isloading) {
		return <h1>Loading...</h1>;
	} else {
		return (
			<div>
				<h2>Planets</h2>
				<button onClick={handleClick}>Test API</button>
				<button onClick={checkHomeworld}>Check homeworld</button>
				<br />
				{playerplanet.planetgenerated ? (
					<>
						<h2>Home Location: {playerplanet.homeworld.englishName}</h2>
						{playerplanet.homeworld.isPlanet ? (
							<h3>Home location is a planet</h3>
						) : null}
						<h2>Planetary Mass: {playerplanet.homeworld.mass.massValue}</h2>
					</>
				) : (
					<>
						<button onClick={planetRoll}>Generate Home Location</button>
					</>
				)}
			</div>
		);
	}
};
export default Planets;
