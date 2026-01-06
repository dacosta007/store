<script>
	import './layout.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href='/favicon.png' />
	<title>Welcome to Royal Scents Online Store</title>
	<meta name="description" content="Royal Scents online store, where premium, and affordable quality fragrances, perfumes is sold">
	<meta name="keywords" content="Royal Scents, RoyalScents, Royal scents fragrance, Royal scents perfumes, perfumes, fragrances, quality perfumes & fragrances">
	<!-- lineicons -->
	<link rel="stylesheet" href="/css/lineicons.css">
</svelte:head>


<article class="bg-[#e6ecf1] font-body">
	<!-- navigation bar -->
	<Navbar />
	<div class="layout-container flex h-full grow flex-col">
		<div class="px-4 md:px-10 lg:px-20 xl:px-40 sm:pt-10 not-sm:pt-16">
			<!-- page content -->
			{@render children()}
		</div>
		
		<!-- footer -->
		<Footer />
	</div>
</article>
