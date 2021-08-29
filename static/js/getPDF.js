import { saveAs } from "file-saver";
import React, { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

export const Download = () => {
	let [loading, setLoading] = useState(false);

	const getPDF = async () => {
		const loc = window.location;
		setLoading(true);
		// Create array of paths. [1] = folder name, [2] = file name.
		const paths = loc.pathname
			.split("/")
			.filter((e) => e.length > 0)
			.map((e) => decodeURI(e));
		// Use dynamic url to function on both localhost and production.
		const url = new URL(
			`${loc.protocol}//${loc.hostname}${
				loc.port ? `:${loc.port}` : ""
			}/api/pdf`
		);
		// Pass current URL to serverless function.
		url.search = new URLSearchParams({
			url: loc.href,
		}).toString();
		// Get data from serverless
		let response = await fetch(url);
		const data = await response.blob();
		saveAs(data, `${paths[0]} - ${paths[1]}.pdf`);
		setLoading(false);
	};

	return (
		<div
			class="pagination-nav__item"
			style={{ cursor: "pointer", "min-height": "54px" }}
		>
			<a class="pagination-nav__link" onClick={getPDF}>
				<div
					class="pagination-nav__label"
					style={{
						display: "flex",
						"align-items": "center",
						"justify-content": "center",
					}}
				>
					{!loading ? "Download PDF" : ""}
					<PropagateLoader color={"#25C2A0"} loading={loading} />
				</div>
			</a>
		</div>
	);
};
