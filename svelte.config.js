import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		alias: {
			$components: 'src/components',
			$stores: 'src/stores',
		},
		paths: {
			base: '/wimb'
		},
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		// adapter: adapter(),
		prerender: {
			default: true
		},
	},
};

export default config;
