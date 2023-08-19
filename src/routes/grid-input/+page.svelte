<script lang="ts">
	import ArrayInput from './ArrayInput.svelte';
</script>

<div class="description">
	<p>
		This is not all that different from my Sverdle (Svelte + Wordle) input implementation. This
		component should be fairly flexible to use - you can bind variables for row/index or pass
		callbacks to change behaviors.
	</p>
</div>

<ArrayInput />

<style>
	.description {
		max-width: 80%;
		color: whitesmoke;
	}
</style>
