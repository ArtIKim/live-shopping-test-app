import React from "react";
import tim from "./tim";
import { genTestUserSig } from "./SDK/GenerateTestUserSig";

const Login = ({ setUser }) => {
	const handleSubmit = (e) => {
		e.preventDefault();

		const userID = "user0";

		tim.login({ userID: userID, userSig: genTestUserSig(userID).userSig })
			.then((imResponse) => {
				console.log(imResponse.data);

				if (imResponse.data.repeatLogin === true) {
					// Indicates that the account has logged in and that the current login will be a repeated login. This feature is supported from v2.5.1.
					console.log(imResponse.data.errorInfo);
				}

				setUser(userID);
			})
			.catch((imError) => {
				console.warn("login error:", imError);
			});
	};

	return (
		<div className="login-wrapper">
			<form type="submit">
				<div>
					<select name="users" id="users">
						<option value="user0">user0</option>
						<option value="user1">user1</option>
						<option value="user2">user2</option>
						<option value="user3">user3</option>
					</select>
				</div>
				<div>
					<button onClick={(e) => handleSubmit(e)}>login</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
