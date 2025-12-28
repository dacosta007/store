<script>
  let { products=[] } = $props();

  const tempProducts = [
    {
      imgs: ['https://lh3.googleusercontent.com/aida-public/AB6AXuAryhMKWr9XvvLtCdZ7ixA8VkplbS6J3rKMBlWQPSVw6k57fnyQPYF_ktzZcp5bPllrGQUPC340D5ybdIhEj7jPgl55-Prpn8zciQ7HWQs2volQJC2Tz1hgYrQIWuUlATNFDIy6I1el_N_pkFRJFmmD-_CQkT3TzNzl2uHmmi_g3NxaLsYEjbUIQltKF2IU6ZGKQkOgec_Ykai8A7hRk3Jv6g_-_KVzL6qCpp595_gdBRmxq45gdxUtcy_ZDFV4oZMVPDzJ2iWwTzUo'],
      name: 'Ocean Breeze',
      desc: 'A fresh and invigorating scent with notes of citrus and sea salt.',
      price: '$75.00'
    },
    {
      imgs: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDfF0iH3NEAo1d4at_-3JGcJHOlneE6SX-At9lEzJlNsLHIJXtEIAjXbIA-e3ZxcxjPuIF6QDclD8Rt18_gVvzJXwrpT_ys1wek8T1gnVx2y9vYbHSoUtHgu9h4EWsXP8kW10vOPAI4yyEPmRjBh8XJlIM9BfDFDrpF31SEuDCz0vBAgHqt9v6eaxuX6u53YTXXvwNZpsMEEshe8KrV1JfDoCqeB220TDVtDjDnzZPByWOaktNy9IUg1gkzoDu68sNOPxiHVbJSAbAd'],
      name: 'Golden Hour',
      desc: 'A warm and radiant fragrance with hints of vanilla and amber.',
      price: '$85.00'
    },
    {
      imgs: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBZjnrUO5PUyA-qse6guYqIV7iZ1imubCd__3A6mX-MkSPcmoDpfzD53p92nbt8moOy8ZABlXl0YkFl38fUsQ_McKtYAPWoP6TMay60zhkMuQ9wDvNiODJF7vELcsb2BOzOgM3MjyJ5pRlEHjWPala4fNPoBbg75j0IYXNsZYcmmisejy-e9_b8SoeGrxxE3wrw_b2qNiBjmqUMMVECexP-SnraQ_ba7RM7Byaoy2VNsmRRCljbKeirUB6D1rovlB_vOr-fEfcIyGlx'],
      name: 'Midnight Bloom',
      desc: 'A mysterious and alluring scent with floral and musky notes.',
      price: '$90.00'
    },
    {
      imgs: ['https://lh3.googleusercontent.com/aida-public/AB6AXuA24bR72L3ZESGmrwm6dPCCtyJ9F8JQ9AxXAivYpeIv11tt6bJneU8NhA8DPNZpaqM1ff2fq11yovCkcEmmyD4uoOJ_a0vbiQisQNgi_SrVqAIfJAYEu8m-IFohGOngW_2SQGVtRGxAMTvcOqFLyUtohLWt751j0lI4pr_gvVCOeRi0IVRLc1BdhV1J4MVAOAF0LyPp-vGvtasHYw0EnH6Ivd4JeLIpSYg2UTEbNO4d6QpvyB3vFIVm1lBSgnUc18yq2o39--OdYYmP'],
      name: 'Desert Rose',
      desc: 'A sweet and spicy fragrance with notes of rose and sandalwood.',
      price: '$80.00'
    }
  ];
</script>


<!-- Product snippet -->
{#snippet prodt(img, name, desc, price)}
  <div class="snap-start flex h-full flex-1 flex-col gap-4 rounded-xl bg-background-dark shadow-lg">
    <!-- product img -->
    <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-t-xl flex flex-col" data-alt={name} style='background-image: url("{img}");'></div>
    
    <!-- product details -->
    <div class="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
      <div>
        <p class="text-white text-lg font-bold leading-normal">{name}</p>
        <p class="text-gray-400 text-sm font-normal leading-normal font-body">{desc}</p>
        <p class="text-secondary text-lg font-bold mt-2">{price}</p>
      </div>

      <button class="flex gap-1.5 w-full min-w-21 max-w-120 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-secondary/20 text-secondary text-sm font-bold leading-normal tracking-[0.015em]">
        <i class="lni lni-cart-1"></i> 
        <span class="truncate">Add to Cart</span>
      </button>
    </div>
  </div>
{/snippet}


<div class="flex flex-col gap-4 font-display">
  <h2 class="text-gray-900 tracking-light text-[32px] font-bold leading-tight text-center px-4">
    Featured Fragrances
  </h2>
  
  <div 
    class="
      w-full 
      grid grid-flow-col 
      auto-cols-[85%] 
      gap-4
      md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:overflow-x-visible
      snap-x snap-mandatory scroll-pl-1 overscroll-x-contain
      overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden
    "
  >
    {#each (products.length > 0) ? products : tempProducts as product}
      {@render prodt(product.imgs[0], product.name, product.desc, product.price)}
    {/each}
    
  </div>

  <!-- C.T.A btn -->
  <div class="flex justify-center not-sm:justify-end">
    <a 
      href="/shop"
      class="
        flex min-w-21 max-w-120 cursor-pointer items-center justify-center overflow-hidden rounded-lg 
        h-12 px-5 bg-blue-500/25 text-blue-500 text-base font-bold leading-normal tracking-[0.015em]
        capitalize not-sm:min-w-[40%]
      "
    >
      <span class="truncate">view more</span> 
      <i 
        class="lni lni-chevron-down -rotate-90" 
        style="font-weight: bold; font-size: 24px;"
      ></i>
    </a> 
  </div>
</div>


<style>
  a[href]:active {
    animation: clickBtnEffect 0.3s ease-in-out;
  }
</style>