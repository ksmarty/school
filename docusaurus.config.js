const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: "Kyle Schwartz's Notes",
	tagline: "Kyle Schwartz's Notes",
	url: "https://notes.kyleschwartz.ca/",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "ksmarty", // Usually your GitHub org/user name.
	projectName: "school", // Usually your repo name.
	themeConfig: {
		navbar: {
			title: "Kyle Schwartz's Notes",
			logo: {
				alt: "My Site Logo",
				src: "img/logo.svg",
			},
			items: [
				// {
				// 	type: "doc",
				// 	docId: "intro",
				// 	position: "left",
				// 	label: "Tutorial",
				// },
				// { to: "/blog", label: "Blog", position: "left" },
				{
					href: "https://github.com/ksmarty/school",
					label: "GitHub",
					position: "right",
				},
			],
		},
		// footer: {
		// 	style: "dark",
		// 	links: [
		// 		{
		// 			title: "Docs",
		// 			items: [
		// 				{
		// 					label: "Tutorial",
		// 					to: "/docs/intro",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			title: "Community",
		// 			items: [
		// 				{
		// 					label: "Stack Overflow",
		// 					href: "https://stackoverflow.com/questions/tagged/docusaurus",
		// 				},
		// 				{
		// 					label: "Discord",
		// 					href: "https://discordapp.com/invite/docusaurus",
		// 				},
		// 				{
		// 					label: "Twitter",
		// 					href: "https://twitter.com/docusaurus",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			title: "More",
		// 			items: [
		// 				{
		// 					label: "Blog",
		// 					to: "/blog",
		// 				},
		// 				{
		// 					label: "GitHub",
		// 					href: "https://github.com/facebook/docusaurus",
		// 				},
		// 			],
		// 		},
		// 	],
		// 	copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
		// },
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme,
			additionalLanguages: ["kotlin"],
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					routeBasePath: "/",
					remarkPlugins: [math],
					rehypePlugins: [katex],
					// Please change this to your repo.
					// editUrl:
					// 	"https://github.com/facebook/docusaurus/edit/master/website/",
				},
				// blog: {
				// 	showReadingTime: true,
				// 	// Please change this to your repo.
				// 	editUrl:
				// 		"https://github.com/facebook/docusaurus/edit/master/website/blog/",
				// },
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
	stylesheets: [
		{
			href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
			integrity:
				"sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
			crossorigin: "anonymous",
		},
	],
	plugins: [
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			{
				hashed: true,
				docsRouteBasePath: "/",
			},
		],
		"@docusaurus/plugin-ideal-image",
	],
};
