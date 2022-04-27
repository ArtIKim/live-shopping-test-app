import React from "react";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
	const buttons = [
		{ name: "conversation-list", id: 1 },
		{ name: "group-list", id: 2 },
		{ name: "friend-list", id: 3 },
		{ name: "black-list", id: 4 },
		{ name: "group-live", id: 5 },
	];

	return (
		<div className="side-bar-wrapper">
			<div className="side-bar-left">
				{buttons.map((item) => {
					const { name, id } = item;

					return <SidebarButton key={id} name={name} />;
				})}
			</div>
			<div className="side-bar-right">right</div>
		</div>
	);
};

export default Sidebar;
