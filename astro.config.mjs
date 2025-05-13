// ...[imports unchanged]

export default defineConfig({
	site: "https://elisakad.github.io",
	base: "/edgework-site/", // <-- Updated from "/" to match GitHub repo name
	output: "static",
	trailingSlash: "always",

	integrations: [
		tailwind({
			nesting: true,
		}),
		swup({
			theme: false,
			animationClass: "transition-swup-",
			containers: ["main", "#toc"],
			smoothScrolling: true,
			cache: true,
			preload: true,
			accessibility: true,
			updateHead: true,
			updateBodyClass: false,
			globalInstance: true,
		}),
		icon({
			include: {
				"preprocess: vitePreprocess(),": ["*"],
				"fa6-brands": ["*"],
				"fa6-regular": ["*"],
				"fa6-solid": ["*"],
			},
		}),
		svelte(),
		sitemap(),
	],

	// ...[markdown & vite configs unchanged]
});
