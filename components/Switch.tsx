import React, { useState } from "react";

export default function Switch() {
	const [enabled, setEnabled] = useState(false);

	return (
		<div
			className={[
				"w-14 h-8 rounded-2xl py-4 px-1 flex items-center cursor-pointer",
				enabled ? "bg-blue-500" : "bg-slate-300 ",
			].join(" ")}
			onClick={() => {
				setEnabled(!enabled);
			}}
		>
			<div
				className={[
					"h-6 w-6 bg-white rounded-full transition-all",
					enabled ? "translate-x-6" : "translate-x-0",
				].join(" ")}
			></div>
		</div>
	);
}
