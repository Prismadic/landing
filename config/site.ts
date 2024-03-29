export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Prismadic.AI",
	description: "Building a world where intelligence means wealth for everyone.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Technology",
			href: "/technology",
		},
		{
			label: "Developers",
			href: "/developers",
		},
		{
			label: "Blog",
			href: "https://prismadic.substack.com",
		},
		{
			label: "About",
			href: "/about",
		}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Technology",
			href: "/technology#",
		},
		{
			label: "Developers",
			href: "/developers#",
		},
		{
			label: "Blog",
			href: "https://prismadic.substack.com",
		},
		{
			label: "About",
			href: "/about#",
		}
	],
	links: {
		github: "https://github.com/Prismadic",
		twitter: "https://twitter.com/Prismadic",
		docs: "https://prismadic.ai/developers",
		discord: "https://discord.com/servers/prismadic-1221911512239833098",
		// sponsor: "#",
		funnel: "https://digits.prismadic.ai"
	},
};
