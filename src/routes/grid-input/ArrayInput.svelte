<script lang="ts">
	//5x5 array
	const testArr: string[][] = Array.from({ length: 5 }, () => Array(5).fill(''));
	let rowNum = 0;

	let currentIdx = 0;
	const wordLength = 5;

	type EditFn = (row: number, col: number, val: string) => void;

	function edit(row: number, col: number, val: string) {
		testArr[row][col] = val[0] || '';
	}

	const keydown = (e: { key: string; keyCode: number }) => {
		handleKeydown(e, edit);
	};

	function handleKeydown(e: { key: string; keyCode: number }, edit: EditFn): void {
		// handle backspace
		if (e.key === 'Backspace' && currentIdx > 0) {
			currentIdx -= 1;
			edit(rowNum, currentIdx, '');
			return;
		}

		// let arrows move the cursor up/down
		if (e.key === 'ArrowUp') {
			change(-1);
			return;
		}

		if (e.key === 'ArrowDown') {
			change(1);
			return;
		}

		// don't type more than word length (essentially invisible typing)
		if (currentIdx == wordLength) {
			return;
		}

		// alpha chars
		if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)) {
			// iArr[currentIdx] = e.key;
			edit(rowNum, currentIdx, e.key);
			currentIdx += 1;
			return;
		}
	}

	// handle changing rows
	function change(i: number) {
		console.log('row changed');

		rowNum = (rowNum + i) % wordLength;

		if (rowNum < 0) {
			rowNum = wordLength - 1;
		}

		// set index to first empty cell, if none are empty then set it to end
		currentIdx = testArr[rowNum].findIndex((x) => x === '');
		if (currentIdx < 0) {
			currentIdx = testArr[rowNum].length;
		}
	}

	function onGridClick(x: number, y: number) {
		rowNum = x;
		currentIdx = y;
	}
</script>

<!-- bind input listening without a discrete input element -->
<svelte:window on:keydown={keydown} />

<div class="wrapper">
	<div class="grid">
		{#each testArr as row, i}
			<div class="row">
				{#each row as col, j}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
						class="cell"
						class:active={i == rowNum}
						class:entry-cell={i == rowNum && j == currentIdx}
						class:entry-overflow={i == rowNum && j == wordLength - 1 && currentIdx >= wordLength}
						on:click={() => onGridClick(i, j)}
					>
						{col}
					</div>
				{/each}
			</div>
		{/each}
	</div>
	<!-- <input type="text" on:keydown={(e) => handleKeydown(e, edit)} bind:value maxlength={wordLength} /> -->

	<button type="button" on:click={() => change(1)}>+</button>
	<button type="button" on:click={() => change(-1)}>-</button>

	<br />

	<div class="detail">Current row index: {rowNum}</div>
	<div class="detail">Current array index: {currentIdx}</div>
</div>

<style>
	button {
		color: black;
		border: 1px solid grey;
		width: 20px;
		height: 20px;
	}
	.row {
		display: flex;
	}
	.cell {
		border: 1px solid grey;
		width: 50px;
		height: 50px;
		color: lightblue;
		background-color: #333;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.active {
		border: 1px solid green;
	}

	.entry-cell {
		border-left: 2px solid yellow;
	}

	.entry-overflow {
		border-right: 2px solid yellow;
	}

	.detail {
		color: whitesmoke;
	}
</style>
