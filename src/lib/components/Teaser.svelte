<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
    // console.log(blok)
</script>

{#key blok}

    <div use:storyblokEditable={blok} class="py-32 text-6xl text-[#50b0ae] font-bold text-center">
        {blok?.headline ?? 'Static Headline'}
    </div>
{/key}
