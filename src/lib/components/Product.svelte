<script>
  import { formatMoney } from '$lib'
  let { name, imgs, description, price, prodtId, addToCartFunc, previewFunc } = $props()

</script>


<div class="snap-start flex flex-1 flex-col gap-4 rounded-xl bg-background-dark shadow-lg">
  <!-- product img -->
  <div 
    class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-t-xl flex flex-col" 
    data-alt={name} 
    style='background-image: url("{imgs[0]}");'
  ></div>
  
  <!-- product details -->
  <div class="relative isolate flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div data-prodt-id="{prodtId}" onclick={previewFunc}>
      <p class="text-white text-lg font-bold leading-normal">{name}</p>
      <p class="text-gray-400 text-sm font-normal leading-normal font-body line-clamp-2 sm:line-clamp-2 lg:line-clamp-3">
        {description}
      </p>
      <p class="text-secondary text-lg font-bold mt-2">{formatMoney(price)}</p>
    </div>

    <button
      type="button" 
      class="
        flex gap-1.5 w-full min-w-21 max-w-120 cursor-pointer items-center justify-center overflow-hidden 
        rounded-lg h-10 px-4 bg-secondary/20 text-secondary text-sm font-bold leading-normal tracking-[0.015em] 
        relative z-2
      " 
      data-prodt-id="{prodtId}" 
      onclick={addToCartFunc}
    >
      <i class="lni lni-cart-1"></i> 
      <span class="truncate">Add to Cart</span>
    </button>
  </div>
</div>


<style>
  button:active {
    animation: clickBtnEffect 0.4s ease;
  }
</style>