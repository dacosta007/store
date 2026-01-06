<script>
  import { formatMoney } from '$lib'
  let { products=[], addToCartFunc, previewProdtFunc } = $props();

</script>


<!-- Product snippet -->
{#snippet prodt(id, img, name, description, price)}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div 
    class="
      snap-start relative isolate flex h-full flex-1 flex-col gap-4 rounded-xl bg-background-dark shadow-lg 
      product cursor-pointer
    "
  >
    <!-- product img -->
    <div 
      onclick={previewProdtFunc} 
      data-product="{id}" 
      class="
        w-full bg-center bg-no-repeat aspect-square bg-cover rounded-t-xl flex flex-col
      " 
      data-alt={name} 
      style='background-image: url("{img}");'
    ></div>
    
    <!-- product details -->
    <div class="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
      <div onclick={previewProdtFunc} data-product="{id}">
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <p class="text-white text-lg font-bold leading-normal" onclick={previewProdtFunc} data-product="{id}">
          {name}
        </p>
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <p 
          onclick={previewProdtFunc} data-product="{id}"
          class="
            text-gray-400 text-sm font-normal leading-normal font-body line-clamp-2 sm:line-clamp-2 lg:line-clamp-2
          "
        >
          {description}
        </p>
        <p class="text-secondary text-lg font-bold mt-2">{formatMoney(price)}</p>
      </div>

      <button 
        type="button" 
        data-prodt-id="{id}" 
        onclick={addToCartFunc}
        class="
          flex gap-1.5 w-full min-w-21 max-w-120 cursor-pointer items-center justify-center overflow-hidden rounded-lg 
          h-10 px-4 bg-secondary/20 text-secondary text-sm font-bold leading-normal tracking-[0.015em] relative z-20
        "
      >
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
    {#each products as { id, name, imgs, description, price }}
      {@render prodt(id, imgs[0], name, description, price)}
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
  a[href]:active, 
  button:active {
    animation: clickBtnEffect 0.3s ease-in-out;
  }

  .product:active {
    animation: clickProdt 0.3s linear;
  }

  @keyframes clickProdt {
    from { scale: 0.97 } 
    to { scale: 1 }
  }
</style>