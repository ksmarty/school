import { VercelRequest, VercelResponse } from "@vercel/node";
import mrpdf from "mr-pdf";

export default async function (req: VercelRequest, res: VercelResponse) {
	const url = new URL(req.query?.url as string);

	const paths = url.pathname
		.split("/")
		.filter((e) => e.length > 0)
		.map((e) => decodeURI(e));
	const className = paths[0];
	const docName = paths[1];
	const date = new Date()
		.toLocaleString("en-CA", { timeZone: "America/Toronto" })
		.split(",", 1)[0];

	const file = await mrpdf({
		initialDocURLs: [url.toString()],
		contentSelector: "article",
		paginationSelector: "lmao-nope",
		excludeSelectors: [
			".margin-vert--xl a,.markdown > header:nth-child(1),.tocCollapsible_1PrD,div.pagination-nav__item",
		],
		coverTitle: docName,
		disableTOC: true,
		coverSub: `Kyle Schwartz<br/>216213621<br/>${className}<br/>${date}`,
	});

	res.send(file);
}
