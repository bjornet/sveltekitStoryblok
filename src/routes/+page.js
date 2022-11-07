import { storyblokInit, apiPlugin, useStoryblokApi } from '@storyblok/svelte';
import Teaser from '$lib/components/Teaser.svelte';
import Page from '$lib/components/Page.svelte';

export async function load() {
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories/home', {
		version: 'draft'
	});

	return {
		story: data.story
	};
}

storyblokInit({
	accessToken: 'onOAZwD0ieQshvhmSJaVZQtt',
	use: [apiPlugin],
	components: {
        page: Page,
		teaser: Teaser
	}
});

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
