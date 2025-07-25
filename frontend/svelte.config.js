import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import adapterNetlify from '@sveltejs/adapter-netlify';
import adapterNode from '@sveltejs/adapter-node';
import adapterVercel from '@sveltejs/adapter-vercel';
import adapterCloudflare from '@sveltejs/adapter-cloudflare';

let adapter;

if (process.env.NETLIFY) {
	adapter = adapterNetlify;
} else if (process.env.VERCEL) {
	adapter = adapterVercel;
} else if (process.env.CLOUDFLARE) {
	adapter = adapterCloudflare;
} else {
	adapter = adapterNode;
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
