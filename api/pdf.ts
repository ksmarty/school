import { VercelRequest, VercelResponse } from "@vercel/node";

export default function (req: VercelRequest, res: VercelResponse) {
	// const { name = "World" } = req.query;
	res.send(req.body);

	// https://cors-anywhere.herokuapp.com/https://cdn.discordapp.com/attachments/799412047501590528/876144049067806790/Getting_Started.pdf
}
