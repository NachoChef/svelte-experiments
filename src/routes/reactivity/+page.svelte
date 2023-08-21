<script lang="ts">
	import { mapStore } from '$lib/stores';
	import { get } from 'svelte/store';

	const wMap = mapStore<string[]>();

	function addItem() {
		if (!idx || !value) return;
		if (!get(wMap).has(idx)) wMap.add(idx, []);

		wMap.updateValue(idx, [value]);
	}

	let idx = '';
	let value = '';
</script>

<div class="description">
	<p>
		This is not all that different from my Sverdle (Svelte + Wordle) user display implementation.
		Using a regular map doesn't seem to trigger reactivity. You also need the (id) in the each loop.
	</p>
</div>

<form>
	<input type="text" name="idx" id="idx" bind:value={idx} />
	<input type="text" name="value" id="value" bind:value />
	<button type="button" on:click|preventDefault={addItem}>Add</button>
</form>

<div class="wrapper">
	{#each [...$wMap] as [k, v] (k)}
		<div class="row">
			<span class="item">{k}=&gt;{JSON.stringify(v)}</span>
		</div>
	{/each}
</div>

<style>
	.description {
		max-width: 80%;
		color: whitesmoke;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
	}

	.item {
		color: whitesmoke;
	}
</style>
