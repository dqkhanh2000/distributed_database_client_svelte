import adapter from '@sveltejs/adapter-auto';
import dotenv from "dotenv";
dotenv.config();
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	},
	files: {
		assets: 'static'
	}

};

export default config;
