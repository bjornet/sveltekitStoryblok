<script>
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';

	/**
	 * @type {StoryblokComponent}
	 */
	export let data;

	onMount(() => {
		console.log(data);
		useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
	});
</script>

<svelte:head>
	<title>Start</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>static h1</h1>

	<h2>
		static h2 on <strong>src/routes/+page.svelte</strong>
	</h2>

	{#if data.story}
		<StoryblokComponent blok={data.story.content} />
	{/if}
</section>
