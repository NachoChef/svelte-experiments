<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="content-wrapper">
	<slot />
</div>

<Footer />

<style>
	:global(html, body) {
		background-color: #111;
	}

	.content-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
