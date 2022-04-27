import React, { useState } from "react";
import TIM from "tim-js-sdk";
import tim from "./tim";
import Login from "./Login";
import Chat from "./Chat";

const App = () => {
	const [test, setTest] = useState("test");
	const [user, setUser] = useState(null);

	const ready = () => {
		setTest("ready");
	};

	if (user) {
		tim.on(TIM.EVENT.SDK_READY, ready);
	}

	return (
		<div className="container">
			<Login setUser={setUser} />
			<Chat />
			<div>{!user ? "no-user" : user}</div>
			<div>{test}</div>
		</div>
	);
};

export default App;
