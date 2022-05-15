import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base: '/storage/files/opheliagame'
		},
		adapter: adapter(),
		prerender: {
			default: true
		}
	}
};

export default config;
