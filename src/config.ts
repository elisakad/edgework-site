import type {
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Edgework",
	subtitle: "Living and Learning at the Edge of AI and Policy",
	author: "Elisa Kadackal",
	lang: "en", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		{
			src: "/favicon/lightbulb-favicon.png",
			theme: "light",
			sizes: "32x32",
		},
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.About,
		LinkPreset.Archive,
		//{ label: "🧠 About This Project", href: "/posts/draft" }, // Link to your draft page

		//{
		//	name: "Edgework",
		//	url: "/edgework",
		//},
		{
			name: "GitHub",
			url: "https://github.com/elisakad/edgework-site", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},

		{
			name: "Substack",
			url: "https://substack.com/@elisa878199",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	//avatar: "assets/images/profile-pic.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	avatar: "assets/images/ElisaCartoonHeadshot.jpg",
	name: "Elisa Kadackal",
	bio: "Researching at the edge of Responsible AI, tech policy, and ethics.",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com",
		},
		{
			name: "Substack",
			icon: "fa6-solid:link",
			url: "https://your-substack-name.substack.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/elisakad/edgework-site",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
