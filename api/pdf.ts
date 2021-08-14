import { VercelRequest, VercelResponse } from "@vercel/node";
import fs from "fs";

export default function (req: VercelRequest, res: VercelResponse) {
	const url = new URL(req.query?.url as string);
	const paths = url.pathname
		.split("/")
		.filter((e) => e.length > 0)
		.map((e) => decodeURI(e));
	const className = paths[0];
	const docName = paths[1];

	fs.writeFile("helloworld.txt", "Hello World!", function (err) {
		if (err) return console.log(err);
		console.log("Hello World > helloworld.txt");
	});

	res.send(__dirname);
}
