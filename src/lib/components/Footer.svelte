<script>
	import linkedinSquare from 'svelte-awesome/icons/linkedinSquare';
	import githubSquare from 'svelte-awesome/icons/githubSquare';
	import fa500px from 'svelte-awesome/icons/fa500px';
	import instagram from 'svelte-awesome/icons/instagram';

	import Icon from 'svelte-awesome/components/Icon.svelte';
</script>

<footer>
	<ul class="social-media-list">
		<li>
			<a href="https://www.linkedin.com/in/justin-jones-65270421/" aria-label="link to linkedin"
				><Icon data={linkedinSquare} /></a
			>
		</li>
		<li>
			<a href="https://github.com/NachoChef" aria-label="link to github"
				><Icon data={githubSquare} /></a
			>
		</li>
		<li>
			<a href="https://www.instagram.com/cerealprogrammer/" aria-label="link to instagram"
				><Icon data={instagram} /></a
			>
		</li>
		<li>
			<a href="https://500px.com/p/hock3ydud3?view=photos" aria-label="link to 500px"
				><Icon data={fa500px} /></a
			>
		</li>
	</ul>
	<p class="footer-txt">Built with Sveltekit and a dash of ♥</p>
	<p class="footer-txt">Copyright © 2023 Justin Jones</p>
</footer>

<style>
	.social-media-list {
		display: flex;
		justify-content: center;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.social-media-list li {
		display: inline-block;
		margin: 0 5px;
	}

	.social-media-list li a {
		color: #333;
		font-size: 20px;
		text-decoration: none;
		transition: color 0.2s ease-in-out;
	}

	.social-media-list li a:hover {
		color: #0077ff;
	}

	.footer-txt {
		color: lightcyan;
		opacity: 50%;
	}

	footer {
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		width: 200px;
		height: 50px;
		position: fixed;
		margin-left: -100px;
		left: 50%;
		bottom: 20px;
	}

	footer > p {
		margin: 0;
		font-size: smaller;
	}
</style>
