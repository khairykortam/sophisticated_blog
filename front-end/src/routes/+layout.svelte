<script>
	import favicon from '$lib/assets/favicon.svg';
	import NavBar from './navbar.svelte';
	import Main from './main.svelte'
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<NavBar/>
<Main/>


{@render children()}
