import React from "react";

const SidebarButton = ({ name }) => {
	const handleClick = () => {
		console.log(name);
	};

	return <div className="side-bar-button" onClick={handleClick}></div>;
};

export default SidebarButton;
